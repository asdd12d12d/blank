// SCENE 7 — Проверка мелочью: скамейка (0 – 12.17)
// shots: hero thinks by his wall · build menu, finger picks the bench · glass outline of the bench by the wall ·
//        cost insert: 4 wood chips + 1 iron chip · time-lapse: neighbour brings planks · hammer drives nails · evening, unfinished bench
const ST=[0,2.65,4.0,5.05,7.7,10.05,11.15];
const S=shot(t,ST);
const GY=716,HS=.62,BX=290,BLX=108,BLH=40,WL0=-380,WL1=430,WH=250;
// ---------- helpers (local)
function wd(tt,t0,v,D){const l=Math.max(0,tt-t0)*v;return l<D-40?l:D-40+40*(1-Math.exp(-(l-(D-40))/40))}
function gaitFeet(C,d,st,s,face){const L=(C.l1+C.l2)*.09,a=gait(d/s,0,0,face,1,st/s,L,0),b=gait(d/s,0,0,face,1,st/s,L,.5);return [[a.fx,a.fy],[b.fx,b.fy]]}
function standFeet(C,face,yaw){const rx=-Math.cos(yaw)*C.hw*.36;return [[rx*1.1+face*6,0],[-rx*1.1-face*5,0]]}
function walker(C,x0,face,t0,v,D,y,s){
  const d=wd(t,t0,v,D),st=(C.l1+C.l2)*.76*s,yaw=.95*face,o={x:x0+face*d,y,s,yaw,t,lean:.04*face};
  const ts=t0+(D+60)/v,b=sm(ts,ts+.4,t);
  if(b<=0&&t>=t0)o.walk={d,st};
  else{const f=gaitFeet(C,d,st,s,face),q=standFeet(C,face,yaw),bb=t<t0?1:b;
    o.fr=[lerp(f[0][0],q[0][0],bb),lerp(f[0][1],q[0][1],bb)-Math.sin(sm(0,.5,bb)*Math.PI)*5];
    o.fl=[lerp(f[1][0],q[1][0],bb),lerp(f[1][1],q[1][1],bb)-Math.sin(sm(.5,1,bb)*Math.PI)*5];o.lean=.04*face*(1-bb)}
  return o;
}
// time-lapse clock: the day jumps forward twice; k = 0 day .. 1 evening
const K=lerp(0,.45,sm(7.7,8.3,t))+.35*sm(10.05,10.55,t)+.2*sm(11.15,11.6,t);
const LT=t+38*sm(7.7,8.3,t)+30*sm(10.05,10.55,t)+20*sm(11.15,11.6,t);
const SUN=[lerp(440,170,K),lerp(270,575,K*K*.6+K*.4)];
TOD.lapse={sky:[mixc('#4B3463','#241F4A',K),mixc('#9A6A8E','#6C4377',K),mixc('#F2B895','#F09A6C',K)],sun:SUN,tint:'#F09A6C',ta:lerp(.04,.15,K),lit:K*K*.85};
function lapseClouds(){for(let i=0;i<6;i++){const w=110+hash(i+3)*120,x=((hash(i*3+1)*900+LT*9*(.6+hash(i)*.6))%900)-180,y=250+hash(i*7)*120;g.fillStyle=rgba(mixc('#F2B895','#F09A6C',K),.25);ell(x,y,w*.5,14);g.fill();ell(x+w*.2,y-9,w*.3,10);g.fill()}}
function boards(x,y,ang,len,n,col){g.save();g.translate(x,y);g.rotate(ang);for(let i=0;i<n;i++){g.beginPath();g.roundRect(-len/2+i*5-5,-i*7-6,len,7,2);fo(tc(i%2?mixc(col,'#A07A60',.3):col),.8);g.strokeStyle=rgba('#FFF4EA',.35);g.lineWidth=1.5;g.beginPath();g.moveTo(-len/2+i*5,-i*7-4);g.lineTo(len/2+i*5-12,-i*7-4);g.stroke()}g.restore()}
function hen(x,y,s,seed){const pk=Math.max(0,Math.sin(t*3.1+seed*2))**6,dir=Math.sin(t*.35+seed)>0?1:-1,hx_=x+Math.sin(t*.35+seed)*14;g.save();g.translate(hx_,y);g.scale(s*dir,s);
  ell(0,-14,14,10,-.2);fo(tc(seed%2?'#D8C8C0':'#A0705A'),.8);poly([[-12,-18],[-22,-28],[-18,-12]],1);fo(tc(seed%2?'#C0B0AC':'#7A5048'),.8);
  const hy=lerp(-26,-6,pk),hxx=lerp(12,18,pk);segs([[8,-18,hxx,hy,5,tc(seed%2?'#D8C8C0':'#A0705A')]],1);ell(hxx,hy,5,5);fo(tc(seed%2?'#D8C8C0':'#A0705A'),.7);poly([[hxx+4,hy-1],[hxx+9,hy+1],[hxx+4,hy+2]],1);g.fillStyle=tc('#E0B060');g.fill();ell(hxx,hy-5,2.5,2.5);g.fillStyle=tc('#C04050');g.fill();
  g.strokeStyle=tc('#C89040');g.lineWidth=1.6;g.beginPath();g.moveTo(-2,-5);g.lineTo(-3,0);g.moveTo(3,-5);g.lineTo(4,0);g.stroke();g.restore()}
function burdock(x,y,s,seed){g.save();g.translate(x,y);g.scale(s,s);for(let i=0;i<5;i++){const a=-1.9+i*.45+Math.sin(t*1.1+i+seed)*.05;g.save();g.rotate(a+Math.PI/2);g.beginPath();g.moveTo(0,0);g.quadraticCurveTo(-26,-60,0,-110);g.quadraticCurveTo(26,-60,0,0);g.fillStyle=i%2?'#2A2238':'#241E34';g.fill();g.strokeStyle='#3A3050';g.lineWidth=2;g.beginPath();g.moveTo(0,0);g.lineTo(0,-100);g.stroke();g.restore()}g.restore()}
// hero's izba side wall on the action plane (same logs and carved okno as scene 5), eave shadow follows the sun
function wall(x0,x1,gy,h){
  const top=gy-h;
  g.beginPath();g.rect(x0,top,x1-x0,h);g.fillStyle=tc('#5A3E48');g.fill();
  for(let y=top;y<gy;y+=24){const lg=g.createLinearGradient(0,y,0,y+24);lg.addColorStop(0,tc('#7A5A5C'));lg.addColorStop(.45,tc('#6B4A4E'));lg.addColorStop(1,tc('#3E2C3A'));g.fillStyle=lg;g.fillRect(x0,y+1,x1-x0,22);g.fillStyle=rgba('#1F2236',.55);g.fillRect(x0,y,x1-x0,2);
    ell(x1+6,y+12,11,11);fo(tc('#8A6A64'),.7);g.strokeStyle=rgba('#5A3E48',.8);g.lineWidth=1.2;g.beginPath();g.arc(x1+6,y+12,5,0,6.3);g.stroke()}
  brush(x0,top,x1-x0,h,'#8A6A64',27,50,.22);
  // eave
  g.beginPath();g.moveTo(x0-40,top-30);g.lineTo(x1+40,top-30);g.lineTo(x1+40,top+4);for(let x=x1+40;x>x0-40;x-=16)g.quadraticCurveTo(x-8,top+16,x-16,top+4);g.closePath();fo(tc('#3E3048'));
  // roof slope receding to the ridge, own chimney with smoke
  g.beginPath();g.moveTo(x0-40,top-28);g.lineTo(x1+40,top-28);g.lineTo(x1+6,top-90);g.lineTo(x0-6,top-90);g.closePath();fo(tc('#3E3048'));
  g.strokeStyle=tc('#5E4A62');g.lineWidth=2;for(let i=1;i<4;i++){const y=top-28-i*16;g.beginPath();g.moveTo(x0-40+i*7,y);g.lineTo(x1+40-i*7,y);g.stroke()}
  g.beginPath();g.rect(x0+330,top-122,22,50);fo(tc("#4A3A48"));smoke(x0+341,top-124,5,.55);
  // okno with open shutters
  const wx=BX,wy=top+60;g.beginPath();g.rect(wx-40,wy,80,80);g.fillStyle=mixc(tc('#2A2440'),'#FFB36B',K*K*.8);g.fill();ol();
  if(K>.5)glow(wx,wy+40,90,'#FFB36B',.35*(K-.5)*2);
  g.strokeStyle=tc('#B9A6A2');g.lineWidth=4;g.beginPath();g.moveTo(wx,wy);g.lineTo(wx,wy+80);g.moveTo(wx-40,wy+36);g.lineTo(wx+40,wy+36);g.stroke();
  for(const sd of[-1,1]){g.beginPath();g.rect(wx+sd*40+(sd<0?-34:0),wy-2,34,84);fo(tc('#6B5A70'),.8);g.strokeStyle=tc('#B9A6A2');g.lineWidth=2;g.beginPath();g.moveTo(wx+sd*57,wy+8);g.lineTo(wx+sd*57,wy+74);g.stroke()}
  g.beginPath();g.moveTo(wx-58,wy-4);g.lineTo(wx,wy-34);g.lineTo(wx+58,wy-4);g.lineTo(wx+50,wy+4);g.lineTo(wx-50,wy+4);g.closePath();fo(tc('#B9A6A2'),.9);
  g.beginPath();g.rect(wx-52,wy+80,104,10);fo(tc('#B9A6A2'),.9);for(let i=0;i<5;i++){ell(wx-40+i*20,wy+96,4,5);fo(tc('#B9A6A2'),.6)}
  // geranium pot on the sill
  g.beginPath();g.moveTo(wx+12,wy+80);g.lineTo(wx+16,wy+64);g.lineTo(wx+34,wy+64);g.lineTo(wx+38,wy+80);g.closePath();fo(tc('#8A5A50'),.7);for(let i=0;i<4;i++){ell(wx+20+i*5,wy+58-(i%2)*6+Math.sin(t*1.5+i)*1,5,4);g.fillStyle=tc(i%2?'#C04050':'#4F5470');g.fill()}
  // sun light on the logs and the eave shadow (time-lapse)
  g.save();g.beginPath();g.rect(x0,top,x1-x0,h);g.clip();
  const sx=lerp(x1+200,x0+300,K),lgr=g.createLinearGradient(sx-500,0,sx+200,0);lgr.addColorStop(0,rgba('#FFB36B',0));lgr.addColorStop(.8,rgba(mixc('#FFE6C4','#FFB36B',K),.2));lgr.addColorStop(1,rgba('#FFB36B',0));g.fillStyle=lgr;g.fillRect(x0,top,x1-x0,h);
  const eh=lerp(70,18,K),sl=lerp(-.25,.55,K);g.fillStyle=rgba('#1F2236',.32);g.beginPath();g.moveTo(x0,top);g.lineTo(x1,top);g.lineTo(x1,top+eh-sl*40);g.lineTo(x0,top+eh+sl*40);g.closePath();g.fill();
  g.restore();
  // ground shadow strip at the wall foot
  g.fillStyle=rgba('#1F2236',lerp(.35,.2,K));g.beginPath();g.moveTo(x0,gy);g.lineTo(x1,gy);g.lineTo(x1+lerp(10,90,K),gy+lerp(10,22,K));g.lineTo(x0+lerp(10,90,K),gy+lerp(10,22,K));g.closePath();g.fill();
}
// chopping block with an axe leaning on it
function block(x,gy){ell(x,gy+2,34,8);g.fillStyle=rgba(PAL.out,.35);g.fill();g.beginPath();g.moveTo(x-28,gy-BLH);g.lineTo(x-30,gy);g.quadraticCurveTo(x,gy+8,x+30,gy);g.lineTo(x+28,gy-BLH);g.closePath();fo(tc('#6B4A4E'));
  g.strokeStyle=rgba('#3E2C3A',.7);g.lineWidth=1.5;for(let i=0;i<4;i++){g.beginPath();g.moveTo(x-22+i*14,gy-BLH+6);g.lineTo(x-24+i*15,gy-2);g.stroke()}
  ell(x,gy-BLH,28,8);fo(tc('#C8A07A'));g.strokeStyle=rgba('#8A6A58',.8);g.lineWidth=1;for(let r=2;r<8;r+=2){ell(x,gy-BLH,r*3.4,r);g.stroke()}
  g.save();g.translate(x+36,gy);g.rotate(.32);segs([[0,0,0,-60,4,tc('#A0704A')]]);g.beginPath();g.moveTo(-2,-56);g.lineTo(-16,-66);g.quadraticCurveTo(-20,-56,-16,-44);g.lineTo(-2,-50);g.closePath();fo(tc('#8C8FA3'),.8);g.restore()}
// the bench under the okno: 0 none, 1 planks stacked, 2 legs + nailed seat (unfinished)
function benchSite(stage){
  if(stage>=1){boards(BX+44,GY-6,0,150,stage>=2?2:4,'#C8A07A')}
  if(stage>=2){for(const sd of[-1,1]){g.beginPath();g.roundRect(BX+sd*58-12,GY-46,24,38,4);fo(tc('#A07A60'),.9);ell(BX+sd*58,GY-46,12,4);fo(tc('#C8A07A'),.7)}
    g.beginPath();g.roundRect(BX-86,GY-56,172,11,3);fo(tc('#C8A07A'),.9);g.strokeStyle=rgba('#FFF4EA',.4);g.lineWidth=1.5;g.beginPath();g.moveTo(BX-80,GY-53);g.lineTo(BX+70,GY-53);g.stroke();
    for(const sd of[-1,1]){ell(BX+sd*58,GY-50,2.2,2.2);g.fillStyle=tc('#D8DAE6');g.fill()}
    // back plank leaning on the wall, not yet fixed
    g.save();g.translate(BX+70,GY-10);g.rotate(-.12);g.beginPath();g.roundRect(-6,-120,12,120,3);fo(tc('#C8A07A'),.8);g.restore()}
}
// glass outline of the planned bench
function ghostBench(a){if(a<=0)return;g.save();g.globalAlpha=a;g.shadowColor='#E1C8B8';g.shadowBlur=14;g.strokeStyle=rgba('#E1C8B8',.9);g.lineWidth=2.2;g.setLineDash([7,5]);g.lineDashOffset=-t*20;
  g.beginPath();g.rect(BX-88,GY-58,176,12);g.moveTo(BX-70,GY-46);g.lineTo(BX-70,GY-8);g.moveTo(BX+70,GY-46);g.lineTo(BX+70,GY-8);g.rect(BX-88,GY-150,176,14);g.moveTo(BX-80,GY-136);g.lineTo(BX-80,GY-58);g.moveTo(BX+80,GY-136);g.lineTo(BX+80,GY-58);g.stroke();
  g.setLineDash([]);g.fillStyle=rgba('#E1C8B8',.08);g.fillRect(BX-88,GY-150,176,142);g.restore()}
// ---------- characters
const NB=worker(1);
function heroO(){
  // 0..4.9 standing, thinking; 7.7.. sitting on the chopping block
  if(t<7.7){const th=sm(.15,.55,t),med=sm(4.0,4.4,t);
    const o={x:142,y:726,s:HS,yaw:.62,t,medal:med>0?'hidden':'hidden',fr:[26,0],fl:[-18,0],ls:1,rimC:PAL.rim,rimA:.5,lean:.03};
    o.hr=[lerp(14,10,th)+med*22,lerp(-60,-247,th)+med*55];o.hl=[lerp(-10,22,th)*(1-med),lerp(-150,-176,th)];
    if(med>0)o.itemR=(gg,ex,ey,an)=>medallion(ex+4,ey-4,9,an,0,.4+.4*med);
    o.em={look:[.75,.35-.2*med],browIn:.35*th*(1-med),brow:.1+.4*med,smile:lerp(-.1,.15,sm(2.2,2.6,t)),open:0};
    o.tilt=.12*th*(1-med)+.04*Math.sin(t*1.2);o.turn=-.05*Math.sin(t*.8);return o}
  const look=nbO(),lx=cl((look.x-200)/220,-1,1);
  const o={x:BLX,y:GY+8,s:HS,yaw:.7,t,medal:'hidden',hipY:-(BLH/HS)-10,fr:[52,0],fl:[30,0],lean:.12,ls:1,rimC:PAL.rim,rimA:.7,
    hr:[48,-100],hl:[40,-96],em:{look:[lx,.15],brow:.15,smile:.05},turn:lerp(-.1,.25,(lx+1)/2),tilt:.06};
  return o;
}
function nbO(){
  // time-lapse: he walks briskly
  const o=walker(NB,600,-1,7.75,140,215,724,HS),dn=ease((t-9.2)/.55),up=sm(9.78,10.05,t);
  const crouch=dn*(1-up*.8);o.hipY=lerp(-142.8,-102,crouch);o.lean=lerp(o.lean,-.45,crouch);
  const sh=[-4,-252],lo=[-58,-78];
  if(dn<1){const hp=[lerp(sh[0],lo[0],dn),lerp(sh[1],lo[1],dn)];o.hr=hp;o.hl=dn>.4?[lerp(30,-40,dn),lerp(-150,-90,dn)]:null;
    o.itemR=(gg,ex,ey)=>boards(ex-12*dn,ey-6*(1-dn),lerp(.08,0,dn),240,4,'#C8A07A')}
  else{o.hr=[lerp(-40,-10,up),lerp(-90,-150,up)];o.hl=[lerp(-30,10,up),lerp(-96,-150,up)]}
  o.em={look:[-.6,.4*crouch],smile:.1};o.tilt=.2*crouch;return o;
}
function yard(bF,bM,bFg,stage,people,ghost){
  villageWorld({tod:'lapse',bF,bM,fg:0,
    far:()=>{lapseClouds()},
    main:()=>{
      wall(WL0,WL1,GY-8,WH);
      // long shadows swing with the time-lapse sun
      const L=(x,w)=>{const dir=x<SUN[0]?-1:1,len=lerp(20,150,K);ell(x+dir*len*.5,GY+6,w*.5+len*.5,5+K*2);g.fillStyle=rgba(PAL.out,.22+.1*K);g.fill()};
      L(BLX,60);if(people){L(heroO().x,50);if(t>=7.7&&t<10.05)L(nbO().x,50)}if(stage>=2)L(BX,170);
      benchSite(stage);ghostBench(ghost||0);
      hen(560,720,.62,1);
      block(BLX,GY+6);
      if(people){const L=[];if(t>=7.7&&t<10.05)L.push({C:NB,o:nbO()});L.push({C:HERO,o:heroO()});L.sort((a,b)=>a.o.y-b.o.y);for(const a of L)person(a.C,a.o)}
      grassRow(770,4,40,-600,1400,30,tc('#3E3A58'));
    }});
  layer(1.7,()=>{grassRow(980,7,40,-600,1400,90,'#241F36');g.fillStyle='#1E1830';g.fillRect(-800,975,2600,400)},bFg);
}
// ---------------- shot 0: medium — the hero thinks, eyes on the empty place under his okno
if(S.i===0){
  const u=S.u;setCam(222+u*10,556-u*6,1.62+u*.1,-.01+u*.01);
  yard(3,2,4,0,1);
  layer(1.4,()=>{burdock(-20,830,1.2,3)},4);
  motes(18,5,180,150,360,520,'#FFE6C4',.45,1.8);
}
// ---------------- shot 1: insert — build menu, the right index finger picks the bench
if(S.i===1){
  const lt=S.lt;setCam(300,560,2.4,0);
  villageWorld({tod:'lapse',bF:10,bM:9,bMain:8,fg:0,main:()=>{wall(WL0,WL1,GY-8,WH);block(BLX,GY+6);person(HERO,heroO())}});
  wash('#241F4A',.3);
  const z=1+lt*.05,ap=sm(2.65,2.9,t),press=sm(3.35,3.45,t)*(1-sm(3.7,4,t)),pick=sm(3.45,3.6,t);
  g.save();g.translate(270,470);g.scale(z,z);g.rotate(.02-lt*.01);g.translate(-270,-470);
  panel(50,330,440,250,ap,'#E1C8B8',.6);
  g.save();g.globalAlpha*=ap;medallion(84,366,16,0,0,.6);g.fillStyle=rgba('#E1C8B8',.8);g.beginPath();g.roundRect(112,358,150,7,3.5);g.fill();
  const kinds=['well','bench','roof','road'];
  for(let i=0;i<4;i++){const x=70+i*102,y=400,sel=i===1,hv=sel?Math.max(pick,sm(3.0,3.35,t)*.4):0,dim=i===0?.45:1;
    g.save();if(hv>0){g.shadowColor='#FFCF9A';g.shadowBlur=26*hv}g.beginPath();g.roundRect(x,y,92,150,12);g.fillStyle=rgba(sel?mixc('#241F4A','#FFCF9A',.18*hv):'#241F4A',.6);g.fill();g.strokeStyle=rgba(sel&&hv>0?'#FFCF9A':'#E1C8B8',sel?.5+.5*hv:.35);g.lineWidth=2;g.stroke();g.restore();
    icon(kinds[i],x+46,y+58,2.3*(sel?1+.15*pick:1),dim);
    // size pips: the bench is the smallest job (one pip)
    const np=[4,1,3,3][i];for(let k=0;k<np;k++){ell(x+46-(np-1)*7+k*14,y+122,4.5,4.5);g.fillStyle=rgba(sel?'#FFCF9A':'#E1C8B8',sel?.9:.5);g.fill()}
    if(i===0){g.strokeStyle=rgba('#FFCF9A',.7);g.lineWidth=3;g.beginPath();g.moveTo(x+64,y+18);g.lineTo(x+72,y+28);g.lineTo(x+86,y+10);g.stroke()}}
  g.restore();
  // finger approaches from below-right, anticipation dip, taps the bench tile
  const ap2=ease((t-2.8)/.5),tap=Math.sin(cl((t-3.3)/.25,0,1)*Math.PI);
  const fx=lerp(470,226,ap2)+4*Math.sin(t*2),fy=lerp(900,500,ap2)+lerp(0,-8,sm(3.15,3.3,t))+tap*14;
  finger(fx,fy,1.35,-.12,press);
  if(press>0){g.strokeStyle=rgba('#FFCF9A',press);g.lineWidth=2;for(let r=0;r<2;r++){ell(222,476,30+r*16+(t-3.4)*60,10+r*5+(t-3.4)*20);g.stroke()}}
  g.restore();
  motes(14,6,0,200,540,600,'#FFE6C4',.4,2);
}
// ---------------- shot 2: medium-wide — a glass outline of the bench appears under the okno
if(S.i===2){
  const u=S.u;setCam(222+u*12,556-u*6,1.4+u*.07,.008);
  yard(2,1.5,3,0,1,sm(4.15,4.6,t)*(.85+.15*Math.sin(t*6)));
  motes(16,8,0,150,540,560,'#FFE6C4',.45,1.8);
}
// ---------------- shot 3: insert — cost: four wood chips, one iron chip
if(S.i===3){
  const lt=S.lt;setCam(300,560,2.4,0);
  villageWorld({tod:'lapse',bF:10,bM:9,bMain:9,fg:0,main:()=>{wall(WL0,WL1,GY-8,WH);ghostBench(.6);block(BLX,GY+6);person(HERO,heroO())}});
  wash('#241F4A',.35);
  // camera: whole panel → push to the wood bar end → slide to the iron bar end
  const pu=ease((lt-.5)/.9),sl=ease((t-6.75)/.35);
  const PX=40,PY=330,PW=460,bw=PW-120,woodE=PX+70+bw*110/200,ironE=PX+70+bw*15/50,ry0=PY+74,ry1=PY+124;
  const z=lerp(1.05,1.9,pu)+lt*.02,cx=lerp(270,lerp(woodE+70,ironE+90,sl),pu),cy=lerp(430,lerp(ry0+20,ry1,sl),pu);
  g.save();g.translate(270,470+kick(t,6.4,2,.2)+kick(t,7.2,3,.25));g.scale(z,z);g.translate(-cx,-cy);
  panel(PX,PY,PW,190,sm(5.05,5.3,t),'#E1C8B8',.6);
  g.save();g.globalAlpha*=sm(5.05,5.3,t);
  icon('bench',PX+40,PY+34,1.6,1);g.fillStyle=rgba('#E1C8B8',.7);g.beginPath();g.roundRect(PX+70,PY+30,120,6,3);g.fill();
  const wc=[6.3,6.38,6.46,6.54],nW=wc.filter(c=>t>=c).length,nI=t>=7.2?1:0;
  icon('wood',PX+36,ry0+12,1.25,1);bar(PX+70,ry0,bw,24,(110-nW)/200,'#A0704A',1,.4);ticks(PX+70,ry0,bw,24,20,1);
  icon('iron',PX+36,ry1+12,1.25,1);bar(PX+70,ry1,bw,24,(15-nI)/50,'#8C8FA3',1,.4);ticks(PX+70,ry1,bw,24,10,1);
  // the bench cost slot on the right: fills with what was taken
  const slot=[PX+PW-36,PY+98],got=nW+nI;g.save();g.shadowColor='#FFCF9A';g.shadowBlur=12*sm(6.3,6.6,t);g.beginPath();g.roundRect(slot[0]-22,slot[1]-26,44,52,8);g.fillStyle=rgba('#241F4A',.6);g.fill();g.strokeStyle=rgba('#FFCF9A',.4+.1*got);g.lineWidth=1.5;g.stroke();g.restore();
  icon('bench',slot[0],slot[1]-8,1,1);for(let k=0;k<got;k++){ell(slot[0]-12+k*6,slot[1]+14,2.2,2.2);g.fillStyle=k<nW?'#D8A878':'#C8CBE0';g.fill()}
  // flying chips (tiny on purpose)
  function chip(t0,sx,sy,col,w){const u=(t-t0)/.55;if(u<0||u>1)return;const px=lerp(sx,slot[0]-10,ein(u)),py=lerp(sy,slot[1]+12,u)-Math.sin(u*Math.PI)*28;g.save();g.translate(px,py);g.rotate(u*7);g.fillStyle=col;g.fillRect(-w/2,-4,w,8);g.restore();if(u<.25)spark(sx,sy,6*(1-u*4),1-u*4)}
  wc.forEach(c=>chip(c,woodE-bw/400,ry0+12,'#D8A878',bw/200));chip(7.2,ironE-bw/100,ry1+12,'#C8CBE0',bw/50);
  g.restore();g.restore();
  motes(12,4,0,200,540,600,'#FFE6C4',.4,2);
}
// ---------------- shot 4: time-lapse — sun jumps, the neighbour brings sanded planks on his right shoulder
if(S.i===4){
  const u=S.u;setCam(268-u*14,550-u*8,1.32+u*.08,-.006);
  yard(2,1.5,3,t>=9.75?1:0,1);
  leaves(8,4,0,200,540,600,'#C9926F');
}
// ---------------- shot 5: insert — a hammer drives new nails, chips fly
if(S.i===5){
  const lt=S.lt;setCam(300,560,2,0);
  villageWorld({tod:'lapse',bF:10,bM:9,bMain:10,fg:0,main:()=>{wall(WL0,WL1,GY-8,WH);benchSite(1);block(BLX,GY+6);person(HERO,heroO())}});
  wash('#241F4A',.2);
  const hits=[10.3,10.62,10.94],z=1+lt*.05;
  g.save();g.translate(270+kick(t,10.3,3,.2)+kick(t,10.62,3,.2),480+kick(t,10.94,3,.2));g.scale(z*1.45,z*1.45);g.rotate(-.04);g.translate(-232,-548);
  // plank seat, big
  g.beginPath();g.roundRect(-40,500,640,110,10);const pg=g.createLinearGradient(0,500,0,610);pg.addColorStop(0,tc('#E0BC94'));pg.addColorStop(1,tc('#A07A60'));g.fillStyle=pg;g.fill();ol();
  g.strokeStyle=rgba('#8A6A58',.55);g.lineWidth=2;for(let i=0;i<6;i++){g.beginPath();g.moveTo(-40,516+i*16);for(let x=-40;x<600;x+=40)g.quadraticCurveTo(x+20,516+i*16+Math.sin(x*.05+i)*5,x+40,516+i*16);g.stroke()}
  g.beginPath();g.roundRect(-40,610,640,40,6);fo(tc('#7A5848'));
  // nails: one per hit goes in; earlier nails already flush
  const nx=[110,210,310];
  for(let k=0;k<3;k++){const h=hits[k],dn=t<h-.02?0:1,hh=lerp(46,3,dn)*(t<h-.6&&k>0?1:1),x=nx[k];if(t<h-.6&&k>0)continue;
    g.beginPath();g.rect(x-3,548-hh,6,hh);fo(tc('#8C8FA3'),.6);ell(x,548-hh,10,4);fo(tc('#D8DAE6'),.8);if(dn)spark(x,546,10*Math.max(0,1-(t-h)/.25),Math.max(0,1-(t-h)/.25))}
  // wood chips fly on every hit
  for(const h of hits){const u=t-h;if(u<0||u>.6)continue;for(let i=0;i<9;i++){const a=-Math.PI/2+(hash(i+h)-.5)*2.4,v=180+hash(i*3+h)*220,px=nx[hits.indexOf(h)]+Math.cos(a)*v*u,py=548+Math.sin(a)*v*u+500*u*u;
    g.save();g.translate(px,py);g.rotate(u*12+i);g.fillStyle=rgba(i%2?'#E0BC94':'#C8A07A',1-u/.6);g.fillRect(-5,-2,10,4);g.restore()}}
  // the hammer and the hand of "someone": raise (anticipation), strike
  let cur=0;for(let k=0;k<3;k++)if(t>=hits[k]-.32)cur=k;
  // positive angle lifts the head; strike lands the head's face on the nail (head centre 160 left of the fist)
  const ph=Math.max(0,(t-(hits[cur]-.32))/.32),ang=ph<.7?lerp(.1,1.15,ease(ph/.7)):ph<1?lerp(1.15,0,ein((ph-.7)/.3)):lerp(0,.12,sm(hits[cur],hits[cur]+.15,t));
  const px_=cur>0?lerp(nx[cur-1],nx[cur],ease(ph/.55))+160:nx[0]+160,piv=[px_,517];
  segs([[piv[0],piv[1],piv[0]+260,piv[1]+190,46,tc('#8C7F92')]]);
  g.save();g.translate(piv[0],piv[1]);g.rotate(ang);
  segs([[0,0,-150,0,14,tc('#A0704A')]]);g.beginPath();g.roundRect(-176,-28,32,56,5);fo(tc('#8C8FA3'));g.fillStyle=rgba('#E1E4F0',.5);g.fillRect(-172,-24,6,48);
  ell(6,4,30,24,.5);fo(tc(SKIN[0]));for(let i=0;i<4;i++){ell(-12+i*9,-14+i*3,8,10,.3);fo(tc(SKIN[0]),.7)}ell(-14,8,9,6,-.4);fo(tc(SKIN[0]),.7);
  g.restore();g.restore();
  motes(16,9,0,150,540,600,'#FFE6C4',.55,2);
}
// ---------------- shot 6: evening — the unfinished bench, the hero on his block
if(S.i===6){
  const u=S.u;setCam(244-u*10,552-u*6,1.36+u*.06,.006);
  yard(2,1.5,3,2,1);
  leaves(6,2,0,200,540,600,'#C9926F');
  motes(14,3,0,200,540,500,'#FFE6C4',.45,1.8);
}
// ---------------- finishing: light-only transitions between time-lapse beats (no darkening)
g.save();g.globalCompositeOperation='screen';const bs=toScreen(SUN[0],SUN[1],.06);beam(bs[0],bs[1],270,820,30,200,'#FFB36B',.05+.06*K);g.restore();
if(S.i!==1&&S.i!==3&&S.i!==5)lampLight(bs[0],bs[1]+200,760,mixc('#FFE6C4','#FFB36B',K),.1*(1-K)+.03);
if(K>.3){g.save();g.globalCompositeOperation='multiply';wash('#6C4377',.14*K);g.restore()}
vignette(.42+.1*K);
grain(.05);
wash('#000000',cutDip(t,[0,2.65,4.0,5.05]));
for(const c of[7.7,10.05,11.15]){const f=Math.max(0,1-Math.abs(t-c)/.14);if(f>0){g.save();g.globalCompositeOperation='screen';wash('#FFCF9A',.45*f);g.restore()}}
wash('#000000',(1-sm(0,.07,t))*.85);
