// node timeit.mjs <scene> t1,t2,...  — per-frame render time
import fs from 'fs';import {createCanvas} from '@napi-rs/canvas';
const plan=JSON.parse(fs.readFileSync('src/plan.json','utf8'));
const n=+process.argv[2],sc=plan.scenes[n-1],dur=sc.end-sc.start;
const code=fs.readFileSync(`dist/s${String(n).padStart(2,'0')}.js`,'utf8');const fn=new Function('return ('+code+')')();
const cv=createCanvas(540,960),raw=cv.getContext('2d');const g=process.env.PX?new Proxy(raw,{get(o,k){const v=o[k];if(typeof v==='function')return(...a)=>v.apply(o,a);return v},set(o,k,v){o[k]=v;return true}}):raw;
for(const tt of process.argv[3].split(',').map(Number)){g.setTransform(1,0,0,1,0,0);g.filter='none';const t0=performance.now();g.save();fn(g,tt,tt/dur,{time:sc.start+tt,duration:dur});g.restore();console.log(tt,(performance.now()-t0).toFixed(0)+'ms')}
