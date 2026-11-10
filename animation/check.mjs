// Static check (only g,t,p,env + allowed builtins) and runtime sweep over the whole scene.
import fs from 'fs';
import {Linter} from 'eslint';
import {createCanvas} from '@napi-rs/canvas';
const plan=JSON.parse(fs.readFileSync('src/plan.json','utf8'));
const only=process.argv[2]?process.argv[2].split(',').map(Number):null;
const linter=new Linter({configType:'flat'});
const globals={Math:'readonly',Number:'readonly',Array:'readonly',Object:'readonly',JSON:'readonly',parseFloat:'readonly'};
let bad=0;
plan.scenes.forEach((sc,i)=>{
  const n=i+1;if(only&&!only.includes(n))return;
  const f=`dist/s${String(n).padStart(2,'0')}.js`;if(!fs.existsSync(f)){console.log('S'+n,'missing');return}
  const code=fs.readFileSync(f,'utf8');
  const tl=performance.now();const msgs=linter.verify('('+code+')',{languageOptions:{ecmaVersion:2022,sourceType:'script',globals},rules:{'no-undef':'error','no-redeclare':'error','no-dupe-keys':'error','no-unreachable':'error','no-const-assign':'error'}});
  for(const m of msgs){console.log('S'+n,'LINT',m.line,m.message);bad++}if(process.env.DBG)console.log('lint ms',(performance.now()-tl).toFixed(0));
  const fn=new Function('return ('+code+')')();
  const cv=createCanvas(540,960),raw=cv.getContext('2d');
  const nan=[];let depth=0,unb=0;
  const g=new Proxy(raw,{get(o,k){const v=o[k];if(typeof v==='function')return(...a)=>{if(k==="save")depth++;if(k==="restore")depth--;for(const x of a)if(typeof x==='number'&&!isFinite(x)){nan.push(k);break}return v.apply(o,a)};return v},set(o,k,v){if(typeof v==='number'&&!isFinite(v))nan.push('set '+String(k));o[k]=v;return true}});
  const dur=sc.end-sc.start;let tmax=0,tot=0,cnt=0;
  const step=Math.min(0.05,dur/200);
  for(let k=0;k*step<=dur+1e-9;k++){
    const tt=Math.min(dur,k*step);
    raw.setTransform(1,0,0,1,0,0);raw.clearRect(0,0,540,960);raw.globalAlpha=1;raw.globalCompositeOperation='source-over';raw.filter='none';
    const t0=performance.now();
    if(process.env.DBG2)console.log("frame",tt);try{raw.save();fn(g,tt,tt/dur,{time:sc.start+tt,duration:dur});raw.restore()}catch(e){console.log('S'+n,'EXC t='+tt.toFixed(2),e.message);bad++;break}
    if(depth!==0){unb++;depth=0}const d=performance.now()-t0;tmax=Math.max(tmax,d);tot+=d;cnt++;if(process.env.DBG&&d>+process.env.DBG)console.log("slow",tt.toFixed(2),d.toFixed(0));
  }
  if(unb){console.log("S"+n,"UNBALANCED save/restore frames",unb);bad++}
  if(nan.length){console.log('S'+n,'NONFINITE',[...new Set(nan)].join(','),nan.length);bad++}
  console.log('S'+n,`frames=${cnt} avg=${(tot/cnt).toFixed(1)}ms max=${tmax.toFixed(1)}ms bytes=${code.length}`);
});
console.log(bad?'FAIL '+bad:'ALL OK');
process.exit(bad?1:0);
