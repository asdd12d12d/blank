// SCENE 3 — «Главное окно в избе» (28.13 – 41.13)
// shots: 0 wide exterior: lit izba at night | 1 insert: the bolt slides | 2 medium: medallion out, okno unrolls |
//        3 over-shoulder: wood, iron | 4 UI: stone, grain, food | 5 CU through the glass: happiness 41/100 | 6 layout: problems blink
const ST=[0,1.5,2.85,4.55,7.3,9.95,11.3];
const S=shot(t,ST);
const WT=[5.7,6.7,7.55,8.5,9.5,10.3]; // spoken numbers: wood, iron, stone, grain, food, happiness
const VAL={wood:140,iron:23,stone:60,grain:410,food:380};
const RX=208,RY=128,RK=.84,RW=250,QX=250,QY=470,QK=.84,QW=210;
const tTouch=3.95,tOpen=4.0;

// ---------- helpers
function qFireflies(n,seed,x0,y0,w,h,a){for(let i=0;i<n;i++){const ph=hash(seed+i),x=x0+hash(seed+i*3)*w+Math.sin(t*(.5+ph)+i)*30,y=y0+hash(seed+i*5)*h+Math.cos(t*(.7+ph*.5)+i*2)*18,f=Math.max(0,Math.sin(t*(1.5+ph*2)+i*3));if(f<.05)continue;glow(x,y,10,'#FFE6A0',.5*f*a);ell(x,y,1.6,1.6);g.fillStyle=rgba('#FFF4D0',f*a);g.fill()}}
function qRows(){return WT.map((w,i)=>sm(w-.32,w-.1,t))}
function qVals(){const v={};['wood','iron','stone','grain','food'].forEach((k,i)=>{v[k]=VAL[k]*eout((t-WT[i]+.2)/.45)});v.happy=41*sm(WT[5],11.2,t);return v}
function hutHero(o2){
  const o={x:150,y:1000,s:1.35,yaw:.5,hipY:-200,fr:[20,0],fl:[-10,0],t,ls:1,rimC:'#9AB0D0',rimA:.55*sm(tOpen,4.6,t)};
  const pull=sm(2.95,3.3,t),out=sm(3.32,3.72,t),low=sm(4.4,5.2,t);
  o.medal=t<3.32?'hidden':'none';
  o.hr=[lerp(lerp(lerp(34,8,pull),44,out),40,low),lerp(lerp(lerp(-226,-288,pull),-262,out),-230,low)];
  o.hl=[70,-224];
  // reaction: eyes → head → body when the okno opens
  const wow=sm(tOpen+.02,tOpen+.15,t),hd=sm(tOpen+.1,tOpen+.35,t);
  let look=[.25,.5];if(t<2.95)look=[.6,.2];if(t>tOpen)look=[lerp(.3,.65,wow),lerp(.5,-.5,wow)];
  if(t>5.3)look=[.65,lerp(-.55,.05,sm(5.4,10.4,t))];
  if(t>11.3)look=[.85,lerp(.05,.35,sm(11.35,11.6,t))];
  const worry=sm(11.45,11.8,t);
  o.em={look,brow:.6*wow*(1-sm(5,6,t))+.15*sm(6,7,t)-.1*worry,browIn:.2*pull*(1-wow)+.25*sm(9.6,10.4,t)+.3*worry,open:.35*wow*(1-sm(4.6,5.2,t))+.08*worry,eyeOpen:1+.25*wow*(1-sm(5,5.8,t))+.1*worry,smile:.1*sm(5.8,6.5,t)*(1-sm(9.8,10.4,t)),blink:t>tOpen+.25&&t<tOpen+.37?1:0};
  o.tilt=.12*pull*(1-out)-.12*hd+.06*sm(5.6,10.4,t)+.04*worry;o.turn=.08*hd;o.lean=.04+.04*sm(5,6,t)+.06*worry;
  const gl=.3+.7*Math.max(0,1-Math.abs(t-tTouch)/.25)+.2*Math.sin(t*3)*sm(4.5,5,t);
  if(t>=3.32)o.itemR=(gg,ex,ey,an)=>{ // medallion on its cord, pulled out from the collar
    g.strokeStyle=tc(HERO.cord);g.lineWidth=1.6;g.beginPath();g.moveTo(4,-292);g.quadraticCurveTo((ex+4)/2,(ey-292)/2+16,ex+4,ey-10);g.stroke();
    medallion(ex+4,ey-2,9,an,0,gl)};
  if(o2)Object.assign(o,o2);
  return o;
}
// the main okno (resource table) and problems list, drawn in world space over the table
function qPanels(pa,unroll,probA){
  const op_=eout((t-tOpen)/.55),cx=lerp(209,RX+RW*RK/2,op_),cy=lerp(660,RY+187*RK,op_),sc=lerp(.06,1,op_);
  if(pa>0){g.save();g.translate(cx,cy);g.scale(sc,sc);g.translate(-RW*RK/2,-187*RK);g.scale(RK,RK);
    g.save();g.beginPath();g.rect(-30,-30,RW+60,(374+60)*unroll);g.clip();
    const h=resPanel(0,0,RW,{a:pa,v:qVals(),rows:qRows()});
    // a gold spark at the end of each bar exactly on its spoken number
    for(let i=0;i<5;i++){const k=Math.max(0,1-Math.abs(t-WT[i]-.15)/.25);if(k>0){const R_=RES[i],xx=60+(RW-110)*VAL[R_[0]]/R_[2],yy=74+i*50+20;spark(xx,yy,14*k+2,k)}}
    {const k=Math.max(0,1-Math.abs(t-11.2)/.3);if(k>0)spark(60+(RW-110)*.41,74+5*50+20,16*k+2,k)}
    g.restore();
    if(unroll<1){g.fillStyle=rgba('#FFE6C4',.9*pa);g.fillRect(-6,(374)*unroll-2,RW+12,4);glow(RW/2,374*unroll,120,'#E1C8B8',.5*pa)}
    g.restore()}
  if(probA>0){g.save();g.translate(QX,QY);g.scale(QK,QK);const bl=.5+.5*Math.sin(t*9);
    problemsPanel(0,0,QW,{a:probA*(.8+.2*bl),rows:[sm(11.35,11.55,t),sm(11.5,11.7,t),sm(11.65,11.85,t)],hi:0});
    g.save();g.globalAlpha=probA*.6*bl;g.shadowColor='#E0505A';g.shadowBlur=30;g.beginPath();g.roundRect(0,0,QW,44+3*52,14);g.strokeStyle='#E0505A';g.lineWidth=3;g.stroke();g.restore();
    g.restore()}
}
function panelA(){return t<tOpen?0:sm(tOpen,tOpen+.15,t)}

// ---------------- shot 0: wide exterior — the hero's izba glows in the night, a shadow passes the okno
if(S.i===0){
  const u=S.u;setCam(272,598-u*14,1.18+u*.08,0);
  villageWorld({tod:'night',bF:1,bM:1.2,main:()=>{
    const X=270,GY_=716,W_=300,H_=190;
    birch(70,GY_,330,13);
    izba(X,GY_,W_,H_,5,1,1);
    // shadow of the hero crossing the lit okno
    const wx=X,wy=GY_-H_*.55,ww=W_*.22,wh=H_*.32,sx=lerp(wx-ww*.9,wx+ww*.9,sm(.45,1.35,t));
    g.save();g.beginPath();g.rect(wx-ww/2,wy-wh/2,ww,wh);g.clip();g.fillStyle=rgba('#4A2E3A',.75);ell(sx,wy-4,9,10);g.fill();g.beginPath();g.moveTo(sx-24,wy+wh/2);g.quadraticCurveTo(sx-20,wy+8,sx,wy+6);g.quadraticCurveTo(sx+20,wy+8,sx+24,wy+wh/2);g.fill();g.restore();
    g.beginPath();g.moveTo(wx,wy-wh/2);g.lineTo(wx,wy+wh/2);g.moveTo(wx-ww/2,wy);g.lineTo(wx+ww/2,wy);g.strokeStyle=tc('#B9A6A2');g.lineWidth=2.5;g.stroke();
    // plank door at the left with warm light leaking at its edge
    const dx=X-112;g.beginPath();g.rect(dx-26,GY_-118,52,118);fo(tc('#4A3442'));g.strokeStyle=tc('#3A2836');g.lineWidth=2;for(let k=-1;k<=1;k++){g.beginPath();g.moveTo(dx+k*13,GY_-116);g.lineTo(dx+k*13,GY_);g.stroke()}
    const lk=1-sm(1.1,1.45,t)*.7;g.fillStyle=rgba('#FFB36B',.85*lk);g.fillRect(dx+25,GY_-116,2.5,116);glow(dx+27,GY_-60,40,'#FFB36B',.3*lk);
    g.beginPath();g.rect(dx-32,GY_-124,64,8);fo(tc('#5A3E48'));
    ell(dx,GY_+4,40,6);g.fillStyle=rgba('#FFB36B',.15*lk);g.fill();
    fenceW(380,700,GY_,30,7);
    grassRow(772,2,50,-600,1400,26,tc('#3E3A58'))}});
  // the okno spills warm light; fireflies over the grass
  const w=toScreen(270,611,1);lampLight(w[0],w[1],170*CAM.z,'#FFB36B',.28+.04*Math.sin(t*11)+.03*nz(t*5));
  layer(1,()=>qFireflies(12,4,-40,560,620,200,1));
  layer(1.4,()=>{g.save();g.translate(520,-20);g.rotate(Math.sin(t*.8)*.03);for(let i=0;i<5;i++){g.strokeStyle='#1A1424';g.lineWidth=2;g.beginPath();g.moveTo(-i*30,0);g.quadraticCurveTo(-i*30-10,120,-i*34+Math.sin(t*1.2+i)*6,240+i*20);g.stroke();for(let k=0;k<8;k++){ell(-i*32-6+Math.sin(t*1.2+i)*k,40+k*26+i*4,7,4,.6);g.fillStyle='#1A1424';g.fill()}}g.restore()},5);
}
// ---------------- shot 1: insert — inside, the hand slides the bolt home
if(S.i===1){
  const lt=S.lt,u=S.u;setCam(270,470,1.02+u*.07,-.02+u*.02);
  const bs=lerp(lerp(0,-12,sm(.2,.32,lt)),118,ease((lt-.36)/.36)),slam=.72+ST[1];
  CAM.sx=kick(t,slam,3.5,.28);
  TINT='#241F4A';TA=.18;
  layer(.85,()=>{
    // door planks lit by the candle
    for(let i=0;i<5;i++){const x=-60+i*108;const pg=g.createLinearGradient(x,0,x+104,0);pg.addColorStop(0,tc('#5A3E48'));pg.addColorStop(.5,tc('#7A5654'));pg.addColorStop(1,tc('#4A3442'));g.fillStyle=pg;g.fillRect(x,-100,104,1200);g.fillStyle=rgba('#1F2236',.7);g.fillRect(x+104,-100,4,1200);brush(x,-60,104,1000,'#9A7468',61+i,26,.3)}
    for(let i=0;i<5;i++)for(const y of[150,790]){ell(-8+i*108,y,5,5);fo(tc('#3A3048'),.6)}
    // iron straps
    for(const y of[150,790]){g.beginPath();g.rect(-80,y-14,520,28);fo(tc('#3E3A4E'));g.strokeStyle=rgba('#8C8FA3',.5);g.lineWidth=2;g.beginPath();g.moveTo(-80,y-10);g.lineTo(440,y-10);g.stroke()}
    // jamb (log wall) at the right; a cold moonlit crack between door and jamb
    g.beginPath();g.rect(446,-100,200,1200);fo(tc('#4A3442'));for(let y=-80;y<1100;y+=60){g.strokeStyle=rgba('#1F2236',.6);g.lineWidth=3;g.beginPath();g.moveTo(446,y);g.lineTo(640,y+6);g.stroke()}
    const ck=1-sm(.45,.75,lt)*.6;g.fillStyle=rgba('#9AB0D0',.9*ck);g.fillRect(440,-100,5,1200);g.save();g.globalCompositeOperation='screen';glow(442,470,80,'#9AB0D0',.25*ck);g.restore();
  },1.2);
  layer(1,()=>{
    const by=470;
    // staples on the door and the receiving staple on the jamb
    const staple=(x)=>{g.beginPath();g.moveTo(x-22,by-26);g.lineTo(x-22,by+26);g.lineTo(x+22,by+26);g.lineTo(x+22,by-26);g.lineWidth=10+2*LW;g.strokeStyle=PAL.out;g.stroke();g.lineWidth=10;g.strokeStyle=tc('#6E6A86');g.stroke();ell(x-22,by-30,6,6);fo(tc('#8C8FA3'));ell(x+22,by-30,6,6);fo(tc('#8C8FA3'))};
    // shadow of bolt and hand on the planks
    g.fillStyle=rgba('#1F2236',.35);g.beginPath();g.roundRect(30+bs-14,by+8,400,40,18);g.fill();ell(150+bs-20,by+120,90,70);g.fill();
    // the bolt (wooden bar) with its knob
    g.beginPath();g.roundRect(30+bs,by-17,400,34,10);const bg=g.createLinearGradient(0,by-17,0,by+17);bg.addColorStop(0,tc('#B08A6A'));bg.addColorStop(1,tc('#6B4A3E'));g.fillStyle=bg;g.fill();ol();
    brush(40+bs,by-14,380,28,'#D0A888',71,16,.4);
    staple(110);staple(300);staple(486);
    const kx=170+bs;segs([[kx,by,kx-6,by+60,20,tc('#8A6A58')]]);
    // the hero's right hand grips the knob
    g.save();g.translate(kx-8,by+70);g.rotate(-.25);g.scale(1.2,1.2);const sk=tc(SKIN[0]);
    segs([[-250,240,-30,50,66,tc(HERO.top[1])],[-60,78,-16,40,72,tc(HERO.top[0])]]);segLight(-250,240,-30,50,66,'#E7C6AD',.3,1);g.strokeStyle=rgba(HERO.top[1],.8);g.lineWidth=3;g.beginPath();g.moveTo(-150,150);g.quadraticCurveTo(-120,120,-128,96);g.moveTo(-110,190);g.quadraticCurveTo(-90,160,-80,150);g.stroke();
    ell(0,0,44,36,-.3);fo(sk);for(let i=0;i<4;i++)segs([[18,-22+i*16,36,-16+i*16,15,sk]]);segs([[-24,-18,10,-40,17,sk]]);
    g.strokeStyle=rgba(SKIN[1],.6);g.lineWidth=2;g.beginPath();g.moveTo(-20,10);g.quadraticCurveTo(0,20,22,8);g.stroke();g.restore();
    if(t>slam){const q=cl((t-slam)/.5,0,1);for(let i=0;i<8;i++){ell(450+hash(i)*30+q*30*hash(i+2),by-20+hash(i+5)*40-q*20,4*(1-q)+1,4*(1-q)+1);g.fillStyle=rgba('#E7C6AD',.6*(1-q));g.fill()}}
  });
  layer(1.5,()=>{g.save();g.translate(30,-30);g.rotate(Math.sin(t*.9)*.05);g.strokeStyle='#2A1E2E';g.lineWidth=4;g.beginPath();g.moveTo(0,0);g.lineTo(0,90);g.stroke();for(let k=0;k<7;k++){ell((k-3)*9,120+k%3*18,9,40,(k-3)*.12);g.fillStyle='#2A2036';g.fill()}g.restore()},7);
  g.save();g.globalCompositeOperation='multiply';wash('#241F4A',.3);g.restore();
  lampLight(60,760,560,'#FFB36B',.4*(1+.06*Math.sin(t*13)+.05*nz(t*6)));
  motes(20,11,0,150,540,700,'#FFE6C4',.4,1.8);
}
// ---------------- shot 2: medium — medallion pulled out, touched; the okno unrolls over the table
if(S.i===2){
  const u=S.u,cm=ease((t-tOpen)/.6);setCam(lerp(lerp(196,204,u),262,cm),lerp(604,430,cm),lerp(2.0+u*.1,1.22,cm),.01);
  CAM.sy=kick(t,tOpen,3,.3);
  hutInterior({night:1,candle:1,bBack:2,main:()=>person(HERO,hutHero())});
  layer(1,()=>{qPanels(panelA(),sm(4.1,4.55,t),0);const k=Math.max(0,1-Math.abs(t-tTouch)/.3);if(k>0){const hx_=150+44*1.35,hy_=1000-262*1.35;for(let r=0;r<2;r++){g.strokeStyle=rgba('#FFE6C4',k*(1-r*.4));g.lineWidth=2;ell(hx_+6,hy_,(1-k)*60+10+r*14,(1-k)*60+10+r*14);g.stroke()}}});
  const pc=toScreen(313,285,1);lampLight(pc[0],pc[1],320*CAM.z,'#9AB0D0',.22*panelA());
}
// ---------------- shot 3: over the shoulder — wood and iron rows grow on their numbers
if(S.i===3){
  const u=S.u;setCam(318-u*4,300-u*6,1.6+u*.1,-.01);
  hutInterior({night:1,candle:1,bBack:3,main:()=>{}});
  layer(1,()=>qPanels(1,1,0));
  const pc=toScreen(313,285,1);lampLight(pc[0],pc[1],300*CAM.z,'#9AB0D0',.2);
  // the hero in the foreground, in profile, lit by the glass
  TA=.3;
  layer(1.12,()=>person(HERO,hutHero({x:214,y:1000,s:2.05,yaw:1.05,hr:[60,-200],hl:[70,-205],rimC:'#E1C8B8',rimA:.9,ls:1,turn:-.05,tilt:-.08})));
  g.save();g.globalCompositeOperation='multiply';const sh=g.createLinearGradient(0,0,200,0);sh.addColorStop(0,'rgba(36,31,74,.55)');sh.addColorStop(1,'rgba(36,31,74,0)');g.fillStyle=sh;g.fillRect(0,0,540,960);g.restore();
}
// ---------------- shot 4: UI — stone, grain, food fill in, camera slides down the table
if(S.i===4){
  const u=S.u;setCam(318,lerp(318,372,ease(u)),2.25+u*.12,.01);
  hutInterior({night:1,candle:1,bBack:6,main:()=>person(HERO,hutHero())});
  wash('#1F2236',.25);
  layer(1,()=>qPanels(1,1,0));
  wash('#9AB0D0',.05,'screen');
  motes(16,17,0,100,540,640,'#E1C8B8',.4,1.6);
}
// ---------------- shot 5: close-up through the glass — the gold happiness scale fills to 41 of 100
if(S.i===5){
  const u=S.u;setCam(160,lerp(584,578,u),4.2+u*.25,0);
  hutInterior({night:1,candle:1,bBack:5,main:()=>person(HERO,hutHero({yaw:-.28,turn:0,tilt:.06,em:{look:[.05,.55],brow:.1,browIn:lerp(0,.3,sm(10.6,11.2,t)),smile:.08,eyeOpen:1},rimC:'#FFCF9A',rimA:.35,ls:1}))});
  lampLight(330,660,420,'#9AB0D0',.3);
  // the near edge of the glass with the happiness row (seen from behind the panel)
  const hv=41*sm(WT[5],11.2,t)/100,x0=40,y0=598,w0=460;
  panel(x0,y0,w0,92,1,'#FFCF9A',.5+.5*Math.max(0,1-Math.abs(t-11.2)/.3));
  g.save();icon('happy',x0+40,y0+46,1.6,1);const sw=(w0-110)/10;
  for(let k=0;k<10;k++){const f=cl(hv*10-k,0,1),xx=x0+80+k*sw;g.beginPath();g.roundRect(xx,y0+28,sw-6,36,6);g.fillStyle=rgba('#1F2236',.6);g.fill();g.strokeStyle=rgba('#FFCF9A',.45);g.lineWidth=1.5;g.stroke();
    if(f>0){g.save();g.shadowColor='#FFCF9A';g.shadowBlur=14;g.beginPath();g.roundRect(xx,y0+28,Math.max(3,(sw-6)*f),36,6);g.fillStyle='#FFCF9A';g.fill();g.restore()}
    if(f>0&&f<1)spark(xx+(sw-6)*f,y0+46,12,.9)}
  g.restore();
  wash('#9AB0D0',.04,'screen');
  motes(16,19,0,120,540,560,'#FFE6C4',.45,2.2);
}
// ---------------- shot 6: layout — hero at the table, main okno, the problems list blinks red
if(S.i===6){
  const u=S.u;setCam(lerp(300,296,u),lerp(496,500,u),1.22+u*.08,0);
  const probA=sm(11.32,11.5,t);
  hutInterior({night:1,candle:1,bBack:1.5,main:()=>person(HERO,hutHero())});
  layer(1,()=>qPanels(1,1,probA));
  const pc=toScreen(313,285,1);lampLight(pc[0],pc[1],300*CAM.z,'#9AB0D0',.2);
  const qc=toScreen(QX+88,QY+84,1),bl=.5+.5*Math.sin(t*9);lampLight(qc[0],qc[1],260,'#E0505A',.22*probA*bl);
}
// ---------------- finishing
vignette(.6);
grain(.05);
wash("#000000",cutDip(t,ST));
wash('#000000',1-sm(0,.45,t));
