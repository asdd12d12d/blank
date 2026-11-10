// SCENE 4 — «Старый колодец и цена улучшения» (41.13 – 53.74)
// shots: 0 UI: well row flares with the biggest stars → dive | 1 wide memory: old well, two women | 2 medium: cranking together |
//        3 CU: aching back | 4 insert: finger presses "improve well" | 5 medium: the medallion demands |
//        6 UI: chips 30/8/20 fly from the bars into the well | 7 layout: shorter bars, fade to black
const ST=[0,1.3,2.3,3.95,5.95,7.5,8.75,10.95];
const S=shot(t,ST);
const RX=208,RY=128,RK=.84,RW=250,QX=250,QY=470,QK=.84,QW=210;
const CT=[9.0,9.7,10.4],COST=[30,8,20],V0={wood:140,iron:23,stone:60,grain:410,food:380,happy:41};
const WLX=462,WLY=232; // world spot of the well target icon for the cost chips
const tPress=6.75;
const WX=300,WS=.9,GY=716;

// ---------- helpers
function qVals(){const v=Object.assign({},V0);['wood','iron','stone'].forEach((k,i)=>{v[k]=V0[k]-COST[i]*eout((t-CT[i]+.1)/.3)});return v}
function qBtn(x,y,w,h,hv,pr){ // "improve" button: gold up-chevron over a well icon
  g.save();g.shadowColor='#FFCF9A';g.shadowBlur=10+20*pr;g.beginPath();g.roundRect(x,y,w,h,10);g.fillStyle=rgba('#FFCF9A',.15+.25*hv+.4*pr);g.fill();g.strokeStyle=rgba('#FFCF9A',.6+.4*hv);g.lineWidth=2;g.stroke();g.restore();
  icon('well',x+w*.36,y+h*.58,1.1,1);
  g.save();g.strokeStyle='#FFE6C4';g.lineWidth=3.5;g.lineCap='round';g.lineJoin='round';g.beginPath();const cx=x+w*.76,cy=y+h*.5-2*Math.sin(t*5)*hv;g.moveTo(cx-7,cy+5);g.lineTo(cx,cy-4);g.lineTo(cx+7,cy+5);g.stroke();g.restore();
}
function qPanels(o){
  const pa=op(o,'pa',1),qa=op(o,'qa',1),hi=op(o,'hi',0),btn=op(o,'btn',0),pr=op(o,'pr',0);
  if(pa>0){g.save();g.translate(RX,RY);g.scale(RK,RK);resPanel(0,0,RW,{a:pa,v:qVals(),rows:[1,1,1,1,1,1]});
    // red ghost of what was taken, fading
    for(let i=0;i<3;i++){const R_=RES[i],k=sm(CT[i]-.05,CT[i]+.1,t)*(1-sm(CT[i]+.6,CT[i]+2.2,t));if(k<=0)continue;const bw=RW-110,x0=60+bw*(V0[R_[0]]-COST[i])/R_[2],x1=60+bw*V0[R_[0]]/R_[2],yy=74+i*50+12;
      g.save();g.globalAlpha=k*pa;g.setLineDash([4,3]);g.strokeStyle='#E0505A';g.lineWidth=2;g.beginPath();g.roundRect(x0,yy,x1-x0,16,6);g.stroke();g.setLineDash([]);g.fillStyle=rgba('#E0505A',.2);g.fill();g.restore()}
    g.restore()}
  if(qa>0){g.save();g.translate(QX,QY);g.scale(QK,QK);
    problemsPanel(0,0,QW,{a:qa,rows:[1,1,1],hi});
    // the biggest stars of the well row pop out
    if(hi>0)for(let k=0;k<5;k++){const pop=sm(.25+k*.08,.55+k*.08,t)*(1-sm(1.0,1.2,t)*.4),x=QW-22-k*19,y=64;g.save();g.shadowColor='#FFCF9A';g.shadowBlur=14;star5(x,y-pop*8,7+pop*7+Math.sin(t*6+k)*1.2);g.fillStyle=rgba('#FFE6C4',.9*pop*hi);g.fill();g.restore()}
    if(btn>0){g.save();g.globalAlpha*=btn;qBtn(QW+6,44,54,42,1,pr);g.restore()}
    g.restore()}
}
function hutHero(o2){
  const o={x:150,y:1000,s:1.35,yaw:.5,hipY:-200,fr:[20,0],fl:[-10,0],t,ls:1,rimC:'#9AB0D0',rimA:.55,medal:'none',hl:[70,-224]};
  const dem=sm(7.6,7.75,t),hd=sm(7.7,7.95,t),back=sm(11.0,11.8,t);
  o.hr=[lerp(40,48,dem)*(1-back)+36*back,lerp(-230,-248,dem*(1-sm(8.4,8.8,t)))*(1-back)-226*back];
  let look=[.75,.25];if(t>7.55)look=[lerp(.75,.35,dem),lerp(.25,.75,dem)];if(t>8.6)look=[.7,-.2];if(t>10.95)look=[.7,lerp(-.25,-.05,back)];
  o.em={look,brow:.7*dem*(1-sm(8.6,9.2,t))+.1*back,browIn:.25*sm(8.8,9.6,t)+.15*back,open:.3*dem*(1-sm(8.4,8.8,t))+.05,eyeOpen:1+.3*dem*(1-sm(8.6,9.2,t))-.12*back,smile:-.1*back,
    blink:(t>7.62&&t<7.74)||(t>11.9&&t<12.05)?1:0};
  o.tilt=.14*hd*(1-sm(8.5,8.9,t))+.04*back;o.lean=.06-.1*back;o.hipX=-4*back;
  const gl=.35+.8*dem*(1-sm(8.6,9.0,t))*(.7+.3*Math.sin(t*14))+.2*Math.sin(t*3);
  o.itemR=(gg,ex,ey,an)=>{g.strokeStyle=tc(HERO.cord);g.lineWidth=1.6;g.beginPath();g.moveTo(4,-292);g.quadraticCurveTo((ex+4)/2,(ey-292)/2+16,ex+4,ey-10);g.stroke();medallion(ex+4,ey-2,9,an,0,gl)};
  if(o2)Object.assign(o,o2);
  return o;
}
function hutLights(){const pc=toScreen(313,285,1);lampLight(pc[0],pc[1],300*CAM.z,'#9AB0D0',.2)}
// ---- memory: old well and two women, one at each crank handle
function crank(){return -t*1.5-.45*Math.sin(t*3)}
function handle(c){return [WX+84*WS+Math.cos(c)*24*WS,GY-125*WS+Math.sin(c)*24*WS]}
function handleL(c){return [WX-84*WS-Math.cos(c)*24*WS,GY-125*WS+Math.sin(c)*24*WS]}
const relB=sm(4.0,4.25,t); // woman B lets go of the crank
function womanA(){
  const c=crank(),h=handle(c),x=404,s=.72,push=Math.sin(c);
  return {x,y:GY,s,yaw:-.95,t,ls:1,rimC:PAL.rim,rimA:.6,lean:.3+.14*push,hipX:7*push,fr:[-26,0],fl:[24,0],
    hr:[(h[0]-x)/s-3,(h[1]-GY)/s+3],hl:[(h[0]-x)/s+4,(h[1]-GY)/s-3],turn:-.45*sm(4.9,5.2,t),tilt:.08+.05*push,
    em:{look:[lerp(-.3,-.8,sm(4.85,5,t)),.15],browIn:.5+.2*sm(4.9,5.2,t),eyeOpen:.72,open:.14+.08*Math.abs(push),smile:-.3}};
}
function womanB(){
  const c=crank(),h=handleL(c),x=194,s=.72,push=Math.sin(c);
  const st=sm(4.1,4.5,t),hb=sm(4.3,4.7,t);
  const o={x,y:GY,s,yaw:lerp(.95,.55,st),t,ls:-1,rimC:PAL.rim,rimA:.6,lean:lerp(.32-.14*push,-.14,st),hipX:lerp(-7*push,6,st),fr:[24,0],fl:[-24,0],
    tilt:lerp(.08-.05*push,-.14,st),turn:.1*st,
    em:{look:[lerp(.3,-.3,st),lerp(.2,-.2,st)],browIn:lerp(.55,.95,st),brow:-.1,eyeOpen:lerp(.7,.28,hb),open:lerp(.14+.08*Math.abs(push),.3,hb),smile:lerp(-.3,-.7,hb),blink:t>4.02&&t<4.14?1:0}};
  const hr0=[(h[0]-x)/s-3,(h[1]-GY)/s-3],hl0=[(h[0]-x)/s+3,(h[1]-GY)/s+3];
  // the near (right) hand goes to the small of her back, palm flat
  o.hr=[lerp(lerp(hr0[0],10,relB),-25,hb),lerp(lerp(hr0[1],-90,relB),-124,hb)];
  o.hl=[lerp(hl0[0],8,relB),lerp(hl0[1],-82,relB)];
  if(hb>.2)o.itemR=(gg,ex,ey,an)=>{const sk=tc(SKIN[0]);g.save();g.translate(ex,ey);g.rotate(.15);segs([[0,2,1,19,6,sk],[-5,1,-5,17,5.5,sk],[5,1,7,16,5.5,sk],[9,-2,13,6,5,sk]]);ell(0,2,8.5,8);fo(sk);g.strokeStyle=rgba(SKIN[1],.7);g.lineWidth=1;g.beginPath();g.moveTo(-4,9);g.lineTo(-4,14);g.moveTo(1,10);g.lineTo(1,16);g.stroke();g.restore()};
  return o;
}
function memoryWell(bucketUp){
  const c=crank();
  // rope and the heavy bucket inside the shaft
  const by=lerp(704,622,bucketUp),wl=[WX,GY-125*WS];
  g.strokeStyle=tc('#8A7A6A');g.lineWidth=2;g.beginPath();g.moveTo(wl[0]+4,wl[1]+6);g.lineTo(WX+4,by-26);g.stroke();
  bucket(WX+4,by,1.7,Math.sin(t*2.3)*.05,1);
  if(bucketUp>.95)for(let i=0;i<4;i++){const u=((t*1.3+i/4)%1);ell(WX-14+i*9,by+16+u*30,1.8,3);g.fillStyle=rgba('#9AB0D0',.8*(1-u));g.fill()}
  well(WX,GY,WS,0,c);
  // second crank handle on the left end of the axle
  const wy=GY-125*WS,hL=handleL(c),lgd=tc('#3E2E3A');segs([[WX-66*WS,wy,WX-84*WS,wy,5*WS,lgd],[WX-84*WS,wy,hL[0],hL[1],7*WS,lgd]]);
}
function memoryGrade(){ // warm, slightly faded "illustration" look with a glowing edge
  g.save();g.globalCompositeOperation='multiply';wash('#F09A6C',.16);g.restore();
  wash('#FFB36B',.07,'screen');
  g.save();g.globalCompositeOperation='screen';const gr=g.createRadialGradient(270,440,260,270,480,620);gr.addColorStop(0,'rgba(255,230,196,0)');gr.addColorStop(1,'rgba(255,230,196,.42)');g.fillStyle=gr;g.fillRect(0,0,540,960);g.restore();
}
function memoryWorld(bMain,bF,bM,drawB,bucketUp){
  villageWorld({tod:'day',bF,bM,bMain,bFg:3,main:()=>{
    memoryWell(bucketUp);
    if(drawB)person(woman(12,['#A0606A','#703E4A','#C08088']),womanB());
    person(woman(11,['#7A5A8A','#4E3A60','#9A7AAA']),womanA());
    grassRow(772,2,50,-600,1400,26,tc('#3E3A58'))}});
}

// ---------------- shot 0: UI — the well row flares with the biggest stars, then we dive into it
if(S.i===0){
  const lt=S.lt,dv=ein(cl((lt-1.0)/.3,0,1));
  const z=lerp(2.35,2.6,sm(0,1,lt))*(1+dv*6),ic=[QX+44*QK,QY+64*QK];
  setCam(lerp(330,ic[0],sm(.6,1.3,lt)),lerp(540,ic[1],sm(.6,1.3,lt)),z,0);
  hutInterior({night:1,candle:1,bBack:6,main:()=>person(HERO,hutHero())});
  wash('#1F2236',.2);
  layer(1,()=>qPanels({hi:sm(.1,.4,lt)}));
  hutLights();
  wash('#FFE6C4',sm(1.05,1.3,lt)*.95);
}
// ---------------- shot 1: wide memory — the old crooked well, two women at the crank
if(S.i===1){
  const lt=S.lt,u=S.u;setCam(lerp(296,304,u),lerp(588,582,u),lerp(1.3,1.18,eout(lt/.5))+u*.04,0);
  memoryWorld(0,0,0,1,0);
  leaves(7,3,0,200,540,600,'#C9926F');
  memoryGrade();
  wash('#FFE6C4',.95*(1-sm(0,.35,lt)));
}
// ---------------- shot 2: medium — both pull, the bucket crawls up
if(S.i===2){
  const u=S.u;setCam(lerp(296,304,u),lerp(612,606,u),1.68+u*.12,-.01);
  memoryWorld(0,2,2,1,sm(2.6,3.9,t));
  motes(14,5,0,200,540,500,'#FFE6C4',.4,1.8);
  memoryGrade();
}
// ---------------- shot 3: close-up — she straightens and holds her aching back
if(S.i===3){
  const lt=S.lt,u=S.u,dv=ein(cl((lt-1.78)/.22,0,1));
  setCam(lerp(214,206,u),lerp(586,592,u),(3.6+u*.3)*(1+dv*1.5),.01);
  memoryWorld(3.5,8,6,0,1);
  layer(1,()=>{const o=womanB();person(woman(12,['#A0606A','#703E4A','#C08088']),o);
    // throbbing ache marks at the small of the back
    const k=sm(4.55,4.8,t)*(1-sm(5.75,5.95,t));if(k>0){const bx=o.x+(o.hipX-24)*o.s,by=GY-128*o.s,pu=.5+.5*Math.sin(t*10);
      for(let i=0;i<3;i++){const a=Math.PI+(i-1)*.55,r=10+pu*3;g.strokeStyle=rgba('#E0505A',.75*k);g.lineWidth=1.6;g.lineCap='round';g.beginPath();g.moveTo(bx+Math.cos(a)*r,by+Math.sin(a)*r);g.lineTo(bx+Math.cos(a)*(r+6),by+Math.sin(a)*(r+6));g.stroke()}}});
  motes(14,6,0,150,540,560,'#FFE6C4',.45,2.2);
  memoryGrade();
  wash('#FFFFFF',dv*.85);
}
// ---------------- shot 4: insert — the right index finger presses "improve well"; the medallion swings below
if(S.i===4){
  const lt=S.lt,u=S.u;setCam(386,lerp(540,532,u),lerp(2.6,2.2,eout(lt/.4))+u*.08,0);
  CAM.sy=kick(t,tPress,2.5,.25);
  hutInterior({night:1,candle:1,bBack:6,main:()=>person(HERO,hutHero())});
  wash('#1F2236',.2);
  const pr=Math.max(0,1-Math.abs(t-tPress-.05)/.3);
  layer(1,()=>{
    qPanels({hi:.6,btn:sm(6.0,6.25,t),pr});
    // hand path: approach, tiny pull-back (anticipation), press, hold, release
    const bx=QX+(QW+6+27)*QK,byy=QY+(44+21)*QK,ap=ease((t-6.05)/.5),pb=sm(6.55,6.65,t)*(1-sm(6.65,tPress,t)),rl=sm(7.15,7.45,t);
    const ang=.5,s=.8,tip=[bx,byy],off=lerp(70,0,ap)+6*pb+30*rl;
    const fx=tip[0]-Math.sin(ang)*(22*s)-Math.sin(ang)*off,fy=tip[1]+Math.cos(ang)*(22*s)+Math.cos(ang)*off;
    g.save();g.translate(fx,fy);g.rotate(ang);g.scale(s,s);const LW0=LW;LW=LW/s;segs([[0,250,0,40,30,tc(HERO.top[1])]]);segLight(0,250,0,40,30,'#E7C6AD',.35,1);LW=LW0;g.restore();
    finger(fx,fy,s,ang,pr);
    // medallion hangs from the fist on its cord
    const fist=[fx-Math.sin(ang)*(-10*s),fy+Math.cos(ang)*(10*s)],sw=Math.sin(t*3.1)*.28+.15*Math.sin(t*1.3),L=26;
    const mx=fist[0]+Math.sin(sw)*L,my=fist[1]+Math.cos(sw)*L;g.strokeStyle=tc(HERO.cord);g.lineWidth=1.2;g.beginPath();g.moveTo(fist[0],fist[1]);g.lineTo(mx,my-4);g.stroke();
    medallion(mx,my,6,sw,0,.5+.5*pr);
    if(pr>0){for(let r=0;r<3;r++){const q=cl((t-tPress-r*.08)/.45,0,1);if(q>0&&q<1){g.strokeStyle=rgba('#FFCF9A',1-q);g.lineWidth=1.5;ell(tip[0],tip[1],4+q*34,4+q*34);g.stroke()}}}
  });
  hutLights();
  wash('#FFFFFF',.85*(1-sm(0,.3,lt)));
}
// ---------------- shot 5: medium — the medallion flares and demands its price
if(S.i===5){
  const u=S.u;setCam(lerp(204,212,u),lerp(600,590,u),2.0+u*.12,.01);
  CAM.sx=kick(t,7.65,3,.3);
  hutInterior({night:1,candle:1,bBack:2.5,main:()=>person(HERO,hutHero())});
  layer(1,()=>{qPanels({hi:.3});
    // three resource icons rise from the medallion: what it wants
    const mx=150+48*1.35+5,my=1000-248*1.35;
    for(let i=0;i<3;i++){const q=sm(7.7+i*.12,8.1+i*.12,t),a=-Math.PI/2+(i-1)*.75,r=lerp(8,46,eout(q)),x=mx+Math.cos(a)*r,y=my+Math.sin(a)*r-10*q;if(q<=0)continue;
      g.save();g.globalAlpha=q;g.shadowColor='#E0505A';g.shadowBlur=12;ell(x,y,13,13);g.fillStyle=rgba('#241F4A',.7);g.fill();g.strokeStyle=rgba('#E0505A',.8+.2*Math.sin(t*9));g.lineWidth=1.5;g.stroke();g.restore();
      icon(RES[i][0],x,y,.8,q)}
    const k=sm(7.6,7.75,t)*(1-sm(8.5,8.8,t));if(k>0){g.save();g.globalCompositeOperation='screen';for(let i=0;i<8;i++){const a=i/8*Math.PI*2+t*.8;g.strokeStyle=rgba('#FFE6C4',.35*k);g.lineWidth=2;g.beginPath();g.moveTo(mx+Math.cos(a)*14,my+Math.sin(a)*14);g.lineTo(mx+Math.cos(a)*(40+10*Math.sin(t*9+i)),my+Math.sin(a)*(40+10*Math.sin(t*9+i)));g.stroke()}g.restore()}
  });
  hutLights();
  const mc=toScreen(150+48*1.35+5,1000-248*1.35,1);lampLight(mc[0],mc[1],220,'#FFCF9A',.3*sm(7.6,7.75,t)*(1-sm(8.5,8.9,t)));
}
// ---------------- shot 6: UI — chips break off the wood, iron and stone bars and fly into the well
if(S.i===6){
  const u=S.u;setCam(lerp(350,354,u),lerp(244,236,u),1.8+u*.1,0);
  CAM.sy=kick(t,CT[0]+.45,2,.2)+kick(t,CT[1]+.45,2,.2)+kick(t,CT[2]+.45,2,.2);
  hutInterior({night:1,candle:1,bBack:6,main:()=>person(HERO,hutHero())});
  wash('#1F2236',.25);
  layer(1,()=>{
    qPanels({qa:0});
    // target: the well icon in a glass ring with three slots that fill as the price is paid
    let hit=0;for(let i=0;i<3;i++)hit+=Math.max(0,1-Math.abs(t-CT[i]-.45)/.25);
    panel(WLX-34,WLY-40,68,96,1,'#FFCF9A',.5+hit);
    icon('well',WLX,WLY-6,2.3*(1+.15*hit),1);
    for(let i=0;i<3;i++){const f=sm(CT[i]+.38,CT[i]+.5,t);ell(WLX-18+i*18,WLY+34,6,6);g.fillStyle=rgba('#1F2236',.6);g.fill();g.strokeStyle=rgba(RES[i][1],.9);g.lineWidth=1.2;g.stroke();if(f>0){ell(WLX-18+i*18,WLY+34,5*f,5*f);g.fillStyle=RES[i][1];g.fill()}}
    // flying chips: sized exactly like the part of the bar they leave
    for(let i=0;i<3;i++){const q=cl((t-CT[i]+.08)/.55,0,1);if(q<=0||q>=1)continue;const R_=RES[i],bw=RW-110,v1=V0[R_[0]]-COST[i],w=bw*COST[i]/R_[2]*RK;
      const x0=RX+(60+bw*v1/R_[2])*RK,y0=RY+(74+i*50+12)*RK,cx=lerp(x0,WLX-w/2,.5),cy=Math.min(y0,WLY)-70,e=ein(q)*.6+q*.4;
      const x=lerp(lerp(x0,cx,e),lerp(cx,WLX-w/2,e),e),y=lerp(lerp(y0,cy,e),lerp(cy,WLY-8,e),e),sc=lerp(1,.45,e);
      g.save();g.translate(x+w/2,y+7);g.rotate(e*2.4*(i%2?-1:1));g.scale(sc,sc);g.shadowColor=R_[1];g.shadowBlur=12;g.beginPath();g.roundRect(-w/2,-7,w,14,6);g.fillStyle=mixc(R_[1],'#FFFFFF',.25);g.fill();g.strokeStyle='#FFE6C4';g.lineWidth=1;g.stroke();g.restore();
      for(let k=1;k<5;k++){const qq=Math.max(0,e-k*.05);const xx=lerp(lerp(x0,cx,qq),lerp(cx,WLX-w/2,qq),qq)+w/2,yy=lerp(lerp(y0,cy,qq),lerp(cy,WLY-8,qq),qq)+7;ell(xx,yy,2.5,2.5);g.fillStyle=rgba(R_[1],.5-k*.1);g.fill()}}
    for(let i=0;i<3;i++){const k=Math.max(0,1-Math.abs(t-CT[i]-.45)/.2);if(k>0)spark(WLX,WLY-6,22*k+3,k)}
  });
  hutLights();
  motes(16,23,0,100,540,640,'#E1C8B8',.4,1.6);
}
// ---------------- shot 7: layout — the bars are shorter; he sits back; fade to black
if(S.i===7){
  const u=S.u;setCam(lerp(300,294,u),lerp(500,506,u),1.24+u*.08,0);
  hutInterior({night:1,candle:1,bBack:1.5,main:()=>person(HERO,hutHero())});
  layer(1,()=>qPanels({qa:1,hi:.25*(1-u)}));
  hutLights();
  const qc=toScreen(QX+88,QY+84,1);lampLight(qc[0],qc[1],220,'#E0505A',.08+.05*Math.sin(t*9));
}
// ---------------- finishing
vignette(.6);
grain(.05);
wash('#000000',cutDip(t,[0,2.3,7.5,8.75,10.95]));
wash('#000000',sm(12.2,12.58,t));
