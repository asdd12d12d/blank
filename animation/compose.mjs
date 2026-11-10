// node compose.mjs out.png a.png b.png ...  — tiles images horizontally
import fs from 'fs';import {createCanvas,loadImage} from '@napi-rs/canvas';
const [out,...ins]=process.argv.slice(2);
const imgs=await Promise.all(ins.map(f=>loadImage(fs.readFileSync(f))));
const W=imgs.reduce((s,i)=>s+i.width+6,0),H=Math.max(...imgs.map(i=>i.height));
const c=createCanvas(W,H),g=c.getContext('2d');g.fillStyle='#fff';g.fillRect(0,0,W,H);
let x=0;for(const i of imgs){g.drawImage(i,x,0);x+=i.width+6}
fs.writeFileSync(out,c.toBuffer('image/png'));console.log(out,W,H);
