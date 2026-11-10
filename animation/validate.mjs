// Validates dist/package.md exactly as the app would import it.
import fs from 'fs';
import {Linter} from 'eslint';
import {createCanvas} from '@napi-rs/canvas';
const md=fs.readFileSync('dist/package.md','utf8');
const header=fs.readFileSync('../.hoplite/attachments/art_upload_ffa404c14c164f48b43f6e4400f72fbd/animation-task-1-part1.md','utf8').split('\n')[0];
const errs=[];const E=m=>errs.push(m);
const lines=md.split('\n');
if(lines[0]!==header)E('first line differs from task header');
if(lines[1]!=='# STORY-PIPELINE-ANIMATION v1')E('second line must be "# STORY-PIPELINE-ANIMATION v1"');
const secs=[...md.matchAll(/^## (.+)$/gm)].map(m=>({name:m[1],idx:m.index}));
if(!secs.length||secs[0].name!=='PLAN')E('first section must be PLAN');
const body=(i)=>md.slice(secs[i].idx,i+1<secs.length?secs[i+1].idx:md.length);
const blocks=(s)=>[...s.matchAll(/```(\w+)\n([\s\S]*?)\n```/g)];
const pb=blocks(body(0));if(pb.length!==1||pb[0][1]!=='json')E('PLAN must contain exactly one json block');
const plan=JSON.parse(pb[0][2]);
if(typeof plan.styleBible!=='string')E('styleBible not a string');if(!plan.concept)E('no concept');
const S=plan.scenes;if(S.length<11||S.length>12)E('scene count '+S.length);
if(S[0].start!==0)E('first start');if(Math.abs(S[S.length-1].end-161.643174)>1e-6)E('last end');
S.forEach((s,i)=>{const d=s.end-s.start;if(d<=0||d>15)E(`scene ${i+1} duration ${d}`);if(i&&s.start!==S[i-1].end)E(`scene ${i+1} gap/overlap`);
  for(const k of['title','direction','beats','alternatives','continuity'])if(!s[k])E(`scene ${i+1} missing ${k}`);
  if(s.beats.length<3||s.beats.length>5)E(`scene ${i+1} beats count ${s.beats.length}`);
  s.beats.forEach(b=>{if(Object.keys(b).join(',')!=='time,action')E(`scene ${i+1} beat keys ${Object.keys(b)}`);if(b.time<0||b.time>d)E(`scene ${i+1} beat time ${b.time}`)})});
const sceneSecs=secs.slice(1);
if(sceneSecs.length!==S.length)E(`SCENE sections ${sceneSecs.length} != plan scenes ${S.length}`);
const linter=new Linter({configType:'flat'});
const globals={Math:'readonly',Number:'readonly',Array:'readonly',Object:'readonly',JSON:'readonly',parseFloat:'readonly'};
const banned=/\b(Path2D|Image|DOMMatrix|OffscreenCanvas|window|document|requestAnimationFrame|performance|Math\.random|eval|setTimeout|fetch)\b/;
sceneSecs.forEach((sec,j)=>{
  const i=secs.indexOf(sec);if(sec.name!==`SCENE ${j+1}`)E(`section ${sec.name} expected SCENE ${j+1}`);
  const b=blocks(body(i));if(b.length!==1||b[0][1]!=='javascript'){E(`${sec.name} must have one javascript block`);return}
  const code=b[0][2];
  if(!/^function\(g,t,p,env\)\{/.test(code))E(`${sec.name} does not start with function(g,t,p,env){`);
  if(banned.test(code))E(`${sec.name} contains banned name ${code.match(banned)[0]}`);
  if(/\.\.\.(?![\w(\[])/.test(code.replace(/\.\.\.\w/g,'')))E(`${sec.name} contains an ellipsis`);
  const msgs=linter.verify('('+code+')',{languageOptions:{ecmaVersion:2022,sourceType:'script',globals},rules:{'no-undef':'error','no-redeclare':'error'}});
  msgs.forEach(m=>E(`${sec.name} lint: ${m.message}`));
  const fn=new Function('return ('+code+')')();const sc=S[j],dur=sc.end-sc.start;
  const cv=createCanvas(540,960),g=cv.getContext('2d');
  for(const tt of [0,dur*.25,dur*.5,dur*.75,dur]){g.setTransform(1,0,0,1,0,0);g.clearRect(0,0,540,960);try{g.save();fn(g,tt,tt/dur,{time:sc.start+tt,duration:dur});g.restore()}catch(e){E(`${sec.name} throws at t=${tt.toFixed(2)}: ${e.message}`)}}
});
console.log(errs.length?errs.join('\n'):'PACKAGE OK: '+S.length+' scenes, '+md.length+' bytes');
process.exit(errs.length?1:0);
