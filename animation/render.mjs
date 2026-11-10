// node render.mjs <scene> [count | t1,t2,...] [cols] [scale] [outfile]
import fs from 'fs';
import {createCanvas} from '@napi-rs/canvas';
const plan=JSON.parse(fs.readFileSync('src/plan.json','utf8'));
const n=+process.argv[2],sc=plan.scenes[n-1],dur=sc.end-sc.start;
const arg=process.argv[3]||'12';
const times=(arg.includes(',')||arg.includes('.'))?arg.split(',').map(Number):Array.from({length:+arg},(_,i)=>(i+.5)*dur/+arg);
const cols=+(process.argv[4]||4),scale=+(process.argv[5]||0.5);
const code=fs.readFileSync(`dist/s${String(n).padStart(2,'0')}.js`,'utf8');
const fn=new Function('return ('+code+')')();
const rows=Math.ceil(times.length/cols),tw=540*scale,th=960*scale;
const sheet=createCanvas(cols*tw,rows*th),sg=sheet.getContext('2d');
const cv=createCanvas(540,960),g=cv.getContext('2d');
times.forEach((tt,i)=>{
  g.setTransform(1,0,0,1,0,0);g.filter='none';g.globalAlpha=1;g.globalCompositeOperation='source-over';g.fillStyle='#000';g.fillRect(0,0,540,960);
  g.save();fn(g,tt,tt/dur,{time:sc.start+tt,duration:dur});g.restore();
  const x=(i%cols)*tw,y=Math.floor(i/cols)*th;
  sg.drawImage(cv,x,y,tw,th);
  sg.strokeStyle='rgba(255,255,0,.35)';sg.strokeRect(x,y+730*scale,tw,200*scale);
  sg.fillStyle='#ff0';sg.font='bold 14px sans-serif';sg.fillText(tt.toFixed(2),x+4,y+16);
});
const out=process.argv[6]||`out/s${n}.png`;
fs.writeFileSync(out,sheet.toBuffer('image/png'));console.log(out);
