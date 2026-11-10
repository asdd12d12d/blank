// SCENE 2 — «Строки, лужа и тайна» (14.2 – 28.13)
// shots: 0 CU lines→emblem | 1 UI 86 pips | 2 two-shot, medallion frame lights | 3 insert puddle splash, panel shatters |
//        4 medium pick-up, panel re-forms | 5 wide look-around | 6 medium-close hides medallion | 7 CU determined squint
const ST=[0,1.3,3.25,4.75,6.4,8.3,10.55,12.3];
const S=shot(t,ST);
TINT='#6C4377';TA=.12;
const GY=716,HX=270,HS=.62,MX=300,MY=724;
const PCX=366,PCY=512,PK=.5; // world position / scale of the floating glass panel
const tDrop=4.78,tSplash=5.0,tShat=5.97,tGrab=7.35;

// ---------- helpers
function qPip(x,y,r,col,a){g.fillStyle=rgba(col,a);ell(x,y-r*.62,r*.4,r*.4);g.fill();g.beginPath();g.moveTo(x-r*.72,y+r*.72);g.quadraticCurveTo(x-r*.68,y-r*.05,x,y-r*.05);g.quadraticCurveTo(x+r*.68,y-r*.05,x+r*.72,y+r*.72);g.closePath();g.fill()}
// village emblem: ring, two roofs and a birch; pr 0..1 draws it stroke by stroke
function qEmblem(x,y,r,pr,a){
  if(pr<=0||a<=0)return;g.save();g.globalAlpha*=a;g.lineCap='round';g.lineJoin='round';
  g.shadowColor='#FFCF9A';g.shadowBlur=8;
  g.strokeStyle=rgba('#FFCF9A',.95);g.lineWidth=r*.09;g.beginPath();g.arc(x,y,r,-Math.PI/2,-Math.PI/2+Math.PI*2*sm(0,.45,pr));g.stroke();
  const q=sm(.3,.75,pr);
  if(q>0){g.strokeStyle=rgba('#E1C8B8',.95*q);g.lineWidth=r*.07;
    for(const h_ of[[-.42,.42],[.38,.36]]){const hx_=x+r*h_[0],w_=r*h_[1];g.beginPath();g.moveTo(hx_-w_*.75,y+r*.28);g.lineTo(hx_,y-r*.08);g.lineTo(hx_+w_*.75,y+r*.28);g.moveTo(hx_-w_*.55,y+r*.24);g.lineTo(hx_-w_*.55,y+r*.58);g.lineTo(hx_+w_*.55,y+r*.58);g.lineTo(hx_+w_*.55,y+r*.24);g.stroke()}
    g.beginPath();g.moveTo(x-r*.8,y+r*.6);g.quadraticCurveTo(x,y+r*.7,x+r*.8,y+r*.6);g.stroke()}
  const b=sm(.55,1,pr);
  if(b>0){g.strokeStyle=rgba('#FFE6C4',b);g.lineWidth=r*.08;g.beginPath();g.moveTo(x+r*.02,y+r*.6);g.lineTo(x-r*.02,y+r*(.6-1.25*b));g.stroke();
    for(let i=0;i<7;i++){const yy=y-r*(.6-i*.14),sd=i%2?1:-1;if(yy>y+r*(.6-1.25*b)+2){g.fillStyle=rgba(i%3?'#FFCF9A':'#E1C8B8',.9*b);ell(x+sd*r*(.16+.05*Math.sin(t*2+i)),yy+r*.06,r*.09,r*.06,sd*.6);g.fill()}}}
  g.restore();
}
// glass shards of the 300×280 panel; u 0 = whole .. 1 = scattered and fallen
function qShards(u,a){
  if(a<=0)return;
  const V=(i,j)=>[i*75+(i>0&&i<4?(hash(i*7+j*3)-.5)*44:0),j*93.3+(j>0&&j<3?(hash(i*5+j*11)-.5)*44:0)];
  for(let i=0;i<4;i++)for(let j=0;j<3;j++)for(let h_=0;h_<2;h_++){
    const p0=V(i,j),p1=V(i+1,j),p2=V(i+1,j+1),p3=V(i,j+1),tri=h_?[p0,p1,p2]:[p0,p2,p3];
    const cx=(tri[0][0]+tri[1][0]+tri[2][0])/3,cy=(tri[0][1]+tri[1][1]+tri[2][1])/3,sd=i*6+j*2+h_;
    const dx=(cx-150)*(.6+hash(sd))*u+(hash(sd+3)-.5)*90*u,dy=(cy-140)*.5*u-60*u+520*u*u,ro=(hash(sd+5)-.5)*5*u;
    g.save();g.translate(cx+dx,cy+dy);g.rotate(ro);g.beginPath();g.moveTo(tri[0][0]-cx,tri[0][1]-cy);g.lineTo(tri[1][0]-cx,tri[1][1]-cy);g.lineTo(tri[2][0]-cx,tri[2][1]-cy);g.closePath();
    g.fillStyle=rgba('#E1C8B8',.16*a);g.fill();g.strokeStyle=rgba('#FFE6C4',.85*a);g.lineWidth=1.6;g.stroke();
    g.beginPath();g.moveTo(tri[0][0]-cx,tri[0][1]-cy);g.lineTo((tri[1][0]-cx)*.5,(tri[1][1]-cy)*.5);g.strokeStyle=rgba('#FFFFFF',.35*a);g.lineWidth=1;g.stroke();g.restore()}
}
// panel state as a function of time
function pState(){
  const o={a:1,em:sm(.1,1.25,t),pips:Math.floor(cl((t-1.45)/.85,0,1)*86+.001),flash:Math.max(0,1-Math.abs(t-2.32)/.3),ring:sm(3.45,4.35,t),ringF:Math.max(0,1-Math.abs(t-4.4)/.35),rev:1,shat:0,sa:0};
  if(t>tSplash&&t<tShat){const k=sm(tSplash,tShat,t);o.a=1-k*.55*(hash(Math.floor(t*22))>.45?1:.25)-.35*k}
  if(t>=tShat&&t<7.45){o.shat=cl((t-tShat)/.75,0,1);o.sa=1-sm(.55,1,o.shat);o.a=1-sm(tShat,tShat+.12,t)}
  if(t>=7.45){const u=1-eout((t-7.45)/.6);o.shat=u;o.sa=u>0?1:0;o.a=sm(7.8,8.15,t);o.rev=sm(7.8,8.3,t);o.flash=Math.max(0,1-Math.abs(t-8.1)/.25)*.6}
  if(t>8.3)o.a*=lerp(1,.62,sm(8.3,8.7,t));
  if(t>10.7)o.a*=1-sm(10.9,11.35,t);
  return o;
}
// the floating panel, local 300×280 units, centred at (cx,cy) with scale k
function qVPanel(k,cx,cy,o){
  g.save();g.translate(cx,cy);g.scale(k,k);g.translate(-150,-140);
  if(o.shat>0)qShards(o.shat,o.sa);
  const a=o.a;
  if(a>.01){
    panel(0,0,300,280,a,o.ringF>.05?'#FFCF9A':'#E1C8B8',.5+.5*o.flash+.4*o.ringF);
    g.save();g.globalAlpha*=a;g.beginPath();g.roundRect(0,0,300,280*o.rev,14);g.clip();
    qEmblem(44,42,26,o.em,1);
    g.fillStyle=rgba('#FFCF9A',.85*sm(.4,.9,o.em));g.beginPath();g.roundRect(86,28,150*sm(.35,1,o.em),8,4);g.fill();
    g.fillStyle=rgba('#E1C8B8',.45*sm(.6,1,o.em));g.beginPath();g.roundRect(86,44,90*sm(.5,1,o.em),5,2.5);g.fill();
    g.strokeStyle=rgba('#E1C8B8',.3);g.lineWidth=1;g.beginPath();g.moveTo(16,78);g.lineTo(284,78);g.stroke();
    // population: 86 person pips in rows of ten
    icon('person',26,98,1,.9);
    for(let i=0;i<o.pips;i++){const c=i%10,r=Math.floor(i/10),x=56+c*23,y=96+r*14;const pop=cl((t-1.45-i/86*.85)/.12,0,1),s_=r>=0?(o.pips<86?lerp(1.6,1,pop):1):1;
      qPip(x,y,5.6*s_*(1+.25*o.flash),mixc('#E1C8B8','#FFCF9A',.55+.45*o.flash),.95)}
    if(o.pips>0&&o.pips<86){const i=o.pips-1;spark(56+(i%10)*23,96+Math.floor(i/10)*14,9,.7)}
    // medallion slot: frame ring lights up around the medallion
    const ry=236;g.beginPath();g.roundRect(14,ry-22,272,44,12);g.fillStyle=rgba('#1F2236',.45);g.fill();g.strokeStyle=rgba('#E1C8B8',.35);g.lineWidth=1;g.stroke();
    medallion(42,ry,14,0,0,.3*o.ring+.6*o.ringF);
    if(o.ring>0){g.save();g.shadowColor='#FFCF9A';g.shadowBlur=12;g.strokeStyle=rgba('#FFCF9A',.95);g.lineWidth=3;g.beginPath();g.arc(42,ry,19,-Math.PI/2,-Math.PI/2+Math.PI*2*o.ring);g.stroke();
      g.beginPath();g.roundRect(14,ry-22,272*o.ring,44,12);g.strokeStyle=rgba('#FFCF9A',.7*o.ring);g.lineWidth=2;g.stroke();g.restore();
      bar(72,ry-6,196,12,o.ring,'#FFCF9A',1,.6+o.ringF)}
    g.restore();
    // glass sheen sweeping over
    g.save();g.beginPath();g.roundRect(0,0,300,280,14);g.clip();const sx=((t*.35)%1.6)*500-200;g.fillStyle=rgba('#FFFFFF',.06*a);g.beginPath();g.moveTo(sx,0);g.lineTo(sx+40,0);g.lineTo(sx-30,280);g.lineTo(sx-70,280);g.closePath();g.fill();g.restore();
  }
  g.restore();
}
function qPalm(ex,ey,an){ // flat right palm pressed to the chest
  g.save();g.translate(ex,ey);g.rotate(-.35);const sk=tc(SKIN[0]);
  segs([[2,-2,15,-6,5,sk],[3,1,17,0,5,sk],[3,4,16,6,5,sk],[2,6,13,11,4.5,sk],[-2,-3,4,-11,5,sk]]);
  ell(3,1,8,7.5);fo(sk);g.strokeStyle=rgba(SKIN[1],.6);g.lineWidth=1;g.beginPath();g.moveTo(9,-3);g.lineTo(14,-4);g.moveTo(10,2);g.lineTo(15,2);g.stroke();g.restore();
}
// ---------- hero
const cr=ease((t-6.5)/.55)*(1-ease((t-7.7)/.6));
function heroO(){
  const o={x:HX,y:GY,s:HS,t,ls:1,rimC:PAL.rim,rimA:.75,fr:[22,0],fl:[-28,0],medal:t>11.3?'hidden':'none'};
  let yaw=lerp(.35,.6,sm(.2,1.0,t));
  yaw=lerp(yaw,-.6,sm(8.75,9.2,t));yaw=lerp(yaw,1.0,sm(9.75,10.2,t));yaw=lerp(yaw,.5,sm(10.45,10.95,t));
  yaw=lerp(yaw,.85,cr);o.yaw=yaw;
  o.hipY=lerp(-142.8,-84,cr);o.lean=lerp(.03,.42,cr)-.04*sm(tSplash,tSplash+.25,t)*(1-sm(5.8,6.3,t));o.hipX=lerp(0,-6,cr);
  // eyes → head → body
  const lx=-.9*sm(8.45,8.6,t)*(1-sm(9.4,9.5,t))+.9*sm(9.45,9.6,t)*(1-sm(10.3,10.5,t));
  o.turn=-.55*sm(8.55,8.85,t)*(1-sm(9.55,9.85,t))+.3*sm(9.55,9.85,t)*(1-sm(10.35,10.65,t));
  const shock=sm(tSplash+.02,tSplash+.15,t)*(1-sm(6.3,6.8,t));
  let look=[lerp(.45,.7,sm(.1,.9,t))*(1-sm(4.5,4.8,t)),lerp(-.1,-.35,sm(.2,1,t))];
  if(t>4.75){look=[.3,.9]}
  if(t>6.6){look=[.5,.8]}
  if(t>8.1){look=[lx,0]}
  if(t>10.5){look=[.2,lerp(.2,.05,sm(11.5,12,t))]}
  const det=sm(11.5,12.1,t),w0=1-sm(.15,.75,t); // w0: amazed face carried over from scene 1
  if(t<1)look=[lerp(look[0],.1,w0),lerp(look[1],-.2,w0)];
  o.em={look,brow:Math.max(w0,lerp(.55*sm(.2,1,t)*(1-sm(4.4,4.7,t)),1,shock))-.25*sm(8.4,8.6,t)*(1-det)-.2*det,
    browIn:.5*sm(6,6.3,t)*(1-sm(7.5,8,t))+.35*sm(8.4,8.6,t)*(1-det)-.35*det,
    smile:.3*sm(.3,1.2,t)*(1-sm(4.3,4.6,t))+.12*det,open:lerp(.25*(1-sm(3.8,4.3,t)),.6,shock)+.15*(t>6&&t<6.4?1:0)+.3*w0,
    eyeOpen:lerp(lerp(1.1,1.3,w0),1.35,shock)*(1-det)+.68*det,blink:(t>tSplash+.02&&t<tSplash+.12)||(t>tShat&&t<tShat+.1)||(t>11.85&&t<11.97)?1:0};
  o.tilt=lerp(-.05,.05,sm(.3,1,t))+.3*sm(tSplash+.06,tSplash+.25,t)*(1-sm(6.3,6.8,t))-.1*cr+.08*sm(11.5,12,t);
  // right hand: holds medallion at chest, trembles, drops it, picks it up, hides it, palm on chest
  let hr=[lerp(10,22,sm(.3,1.2,t)),lerp(-198,-210,sm(.3,1.2,t))];
  const tr=sm(4.35,4.6,t)*(t<tDrop?1:0);hr[0]+=Math.sin(t*71)*3*tr;hr[1]+=Math.cos(t*53)*2.5*tr;
  if(t>=tDrop){const j=ease((t-tDrop)/.15),d=ease((t-5.3)/.5);hr=[lerp(lerp(22,36,j),18,d),lerp(lerp(-210,-188,j),-150,d)]}
  if(t>=6.8){const tgt=[(MX-HX)/HS-4,(MY-GY)/HS-6],re=sm(6.8,tGrab,t),li=sm(7.55,8.15,t);hr=[lerp(lerp(18,tgt[0],re),22,li),lerp(lerp(-150,tgt[1],re),-210,li)]}
  if(t>=10.65){const u=sm(10.7,11.25,t),v=sm(11.35,11.8,t);hr=[lerp(lerp(22,8,u),3,v),lerp(lerp(-210,-232,u),-206,v)]}
  o.hr=hr;
  const held=t<tDrop||(t>=tGrab&&t<11.3);
  if(held){const dirt=t<tDrop?0:lerp(.4,.12,sm(7.6,9,t)),gl=t<tDrop?.55+.25*Math.sin(t*4)+.4*Math.max(0,1-Math.abs(t-4.4)/.35):(.25+.3*sm(7.45,8.1,t))*(1-sm(8.5,9,t)*.6),
    rr=9*(1-sm(11.0,11.3,t)*.5);
    o.itemR=(gg,ex,ey,an)=>{g.save();g.globalAlpha*=1-sm(11.05,11.3,t);medallion(ex+4,ey-2,rr,an,dirt,gl*(1-sm(10.7,11,t)));g.restore()}}
  else if(t>11.3)o.itemR=(gg,ex,ey,an)=>qPalm(ex,ey,an);
  // left hand: on the knee in the crouch, rises in fright
  if(cr>.05)o.hl=[lerp(10,30,cr),lerp(-90,-62,cr)];
  else if(t>tSplash&&t<6.4)o.hl=[lerp(-14,-6,sm(5.8,6.3,t)),lerp(-110,-140,sm(5.8,6.3,t))-26*sm(tSplash+.1,tSplash+.3,t)*(1-sm(5.8,6.3,t))];
  o.cloth=Math.sin(t*1.3)*.3;
  return o;
}
function puddle(){ // small puddle in the rut where the medallion was found
  ell(MX+4,MY,34,6.5);const pg=g.createLinearGradient(MX-30,0,MX+38,0);pg.addColorStop(0,'#6C4377');pg.addColorStop(.6,'#F09A6C');pg.addColorStop(1,'#FFCF9A');g.fillStyle=pg;g.fill();ol(.6);
  ripples(MX+2,MY,26,0,'#FFE6C4',.35);if(t>tSplash)ripples(MX,MY,40,tSplash,'#FFE6C4',.8*(1-sm(6.5,8,t)));
  if(t<tGrab&&t>tSplash){g.save();g.translate(MX,MY+.5);g.scale(1,.45);medallion(0,0,9,.4,.45,0);g.restore();ell(MX,MY+1.5,10,2.4);g.fillStyle=rgba('#F09A6C',.45);g.fill()}
}
function world(bF,bM,bFg,bMain,panelOn){
  villageWorld({tod:'dawn',bF,bM,bFg,bMain,main:()=>{
    puddle();
    const o=heroO();bucket(o.x-26*HS,GY-1,1.05,0,0);person(HERO,o);
    if(panelOn){const ps=pState();g.save();g.translate(0,Math.sin(t*1.4)*2);qVPanel(PK,PCX,PCY,ps);g.restore()}
    grassRow(772,2,50,-600,1400,26,tc('#3E3A58'))}});
  // the glass casts a faint cool light on the hero
  if(panelOn){const ps=pState(),c=toScreen(PCX,PCY,1);lampLight(c[0],c[1],180*CAM.z,'#E1C8B8',.16*ps.a)}
}

// ---------------- shot 0: close-up — the glowing lines fold into the village emblem
if(S.i===0){
  const lt=S.lt;setCam(lerp(268,286,ease(lt/1.3)),lerp(553,548,ease(lt/1.3)),lerp(6.95,6.1,eout(lt/1.3)),0);
  villageWorld({tod:'dawn',bF:9,bM:7,bFg:0,fg:0,main:()=>{const o=heroO();o.tilt=lerp(-.04,.02,sm(0,1,lt));person(HERO,o)}});
  const E=[418,236],cv=ease(cl((lt-.05)/.75,0,1));
  for(let i=0;i<5;i++){const y0=150+i*50+Math.sin(t*1.3+i)*3,w0=340-i*30,x0=270+(i%2?14:-10);
    const xc=lerp(x0,E[0],cv),yc=lerp(y0,E[1],cv),w=lerp(w0,10,cv),a=1-sm(.7,1,cv);if(a<=0)continue;
    g.save();g.globalAlpha=.85*a;g.shadowColor=rgba('#E1C8B8',.9);g.shadowBlur=18;g.beginPath();g.roundRect(xc-w/2,yc-12*(1-cv*.6),w,24*(1-cv*.6),12);g.fillStyle=rgba('#241F4A',.35);g.fill();g.strokeStyle=rgba('#E1C8B8',.9);g.lineWidth=1.5;g.stroke();g.shadowBlur=0;
    for(let k=0;k<6;k++){const dx=xc-w/2+18+k*(w-36)/6,dw=((w-36)/6)*(.4+hash(i*7+k)*.5);if(w<60)break;g.fillStyle=rgba('#FFE6C4',.6+.3*Math.sin(t*6+k+i));g.fillRect(dx,yc-2,dw,4)}g.restore()}
  const ep=sm(.55,1.3,lt);
  if(ep>0){g.save();g.globalAlpha=sm(.5,.7,lt);ell(E[0],E[1],86,86);g.fillStyle=rgba('#241F4A',.35);g.fill();g.restore();qEmblem(E[0],E[1],70,ep,1);spark(E[0],E[1]-70,16*Math.max(0,1-Math.abs(lt-.75)/.25)+2,.8)}
  wash('#E1C8B8',.1,'screen');
  motes(16,5,0,100,540,600,'#FFE6C4',.4,2.2);
}
// ---------------- shot 1: UI — population: 86 pips fill the glass
if(S.i===1){
  const u=S.u;setCam(330,545,2.3+u*.12,-.01);
  world(10,9,6,5,0);
  wash('#1F2236',.25);
  const k=1.33+u*.07;g.save();g.translate(0,Math.sin(t*1.4)*2);qVPanel(k,312,348,pState());g.restore();
  wash('#E1C8B8',.05+.08*pState().flash,'screen');
  motes(20,7,0,80,540,640,'#FFE6C4',.45,2);
}
// ---------------- shot 2: two-shot — hero and the panel, the medallion slot lights up; hand starts to tremble
if(S.i===2){
  const u=S.u;setCam(336+u*6,546-u*4,2.45+u*.15,-.01);
  CAM.sx=kick(t,4.4,2.5,.3);
  world(4,3,4,0,1);
  leaves(5,8,0,100,540,700,'#C9926F');
}
// ---------------- shot 3: insert — the medallion falls into the puddle; the reflected glass flickers and shatters
if(S.i===3){
  const lt=S.lt,u=S.u;setCam(270,520,1+u*.08,.02-u*.02);
  CAM.sy=kick(t,tSplash,4,.3)+kick(t,tShat,2.5,.25);
  layer(0,()=>{const gr=g.createLinearGradient(0,0,0,960);gr.addColorStop(0,'#6C4377');gr.addColorStop(.2,'#F09A6C');gr.addColorStop(.28,mixc(PAL.ground,PAL.far,.4));gr.addColorStop(1,'#1E1830');g.fillStyle=gr;g.fillRect(-100,-100,740,1160)});
  layer(.3,()=>{hills(235,26,mixc(PAL.far,PAL.sky2,.4),6,-200,800);izba(110,250,120,60,9,.8,1);izba(430,246,110,58,8,.6,1);sun(330,200,14)},7);
  layer(.75,()=>{g.fillStyle=tc('#3A2C44');g.beginPath();g.moveTo(-300,280);g.lineTo(840,280);g.lineTo(1100,1300);g.lineTo(-560,1300);g.closePath();g.fill();
    brush(-100,280,740,620,'#5A4458',4,80,.4);
    for(const k of[-1,1]){g.strokeStyle=rgba('#1F2236',.7);g.lineWidth=18;g.beginPath();g.moveTo(270+k*60,280);g.quadraticCurveTo(270+k*120,600,270+k*330,1100);g.stroke()}},2.5);
  layer(1,()=>{
    // the puddle mirrors the dawn sky — and the glass panel above it
    const PX=280,PY=610;
    ell(PX,PY,205,66,-.05);const pg=g.createLinearGradient(80,560,480,660);pg.addColorStop(0,'#6C4377');pg.addColorStop(.55,'#F09A6C');pg.addColorStop(1,'#FFCF9A');g.fillStyle=pg;g.fill();ol(.8);
    g.save();ell(PX,PY,205,66,-.05);g.clip();clouds(570,4,11,'#FFE6C4',.25,10);
    const ps=pState();g.translate(PX+30,PY-6);g.scale(1,-.4);g.globalAlpha=.75;qVPanel(.9,0,0,ps);g.restore();
    g.save();ell(PX,PY,205,66,-.05);g.clip();ripples(PX-80,PY+8,90,0,'#FFE6C4',.5);
    if(t>tSplash){ripples(PX+10,PY,260,tSplash,'#FFE6C4',.9);ripples(PX+10,PY,160,tSplash+.3,'#FFE6C4',.7)}
    if(t>tShat)for(let i=0;i<9;i++){const tt=tShat+.12+i*.06;if(t>tt)ripples(PX-150+hash(i)*300,PY-30+hash(i+4)*60,50,tt,'#FFE6C4',.6)}
    g.restore();
    // hero's boot and the bucket at the edge of the frame
    g.save();g.translate(70,470);g.rotate(-.1);
    segs([[4,-520,0,-170,96,tc(HERO.pants)]]);segLight(4,-520,0,-170,96,'#FFCF9A',.18,1);
    g.beginPath();g.moveTo(-40,-190);g.lineTo(-38,-40);g.quadraticCurveTo(-52,20,-30,26);g.lineTo(96,26);g.quadraticCurveTo(112,-6,40,-44);g.lineTo(40,-190);g.closePath();fo(tc(HERO.boots));
    g.strokeStyle=rgba('#FFCF9A',.3);g.lineWidth=5;g.beginPath();g.moveTo(34,-180);g.lineTo(34,-50);g.quadraticCurveTo(80,-20,98,14);g.stroke();
    g.strokeStyle=rgba('#1F2236',.6);g.lineWidth=3;g.beginPath();g.moveTo(-38,-160);g.quadraticCurveTo(0,-150,40,-162);g.moveTo(-30,20);g.lineTo(90,20);g.stroke();
    ell(30,30,90,12);g.fillStyle=rgba('#4A3848',.6);g.fill();g.restore();
    bucket(470,470,4.2,.05,0);
    // the hand trembles at the top of the frame and lets go
    {const op_=sm(tDrop-.02,tDrop+.08,t),jx=Math.sin(t*71)*4*(1-op_),hy=lerp(70,-260,sm(tDrop+.12,5.45,t));g.save();g.translate(250+jx,hy-30);g.rotate(.15);g.scale(1.6,1.6);const sk=tc(SKIN[0]);
      segs([[-20,-200,0,-40,70,tc(HERO.top[0])]]);ell(0,0,46,40);fo(sk);
      for(let i=0;i<4;i++){const a=lerp(1.9,1.2,op_)-i*.22,l=lerp(34,58,op_);segs([[-30+i*20,14,-30+i*20+Math.cos(a)*l*.3,14+Math.sin(a)*l,17,sk]])}
      segs([[34,-6,lerp(40,66,op_),lerp(28,10,op_),18,sk]]);g.restore()}
    // falling medallion, tumbling
    if(t<tSplash){const q=cl((t-tDrop)/(tSplash-tDrop),0,1),y=lerp(110,PY,q*q),x=lerp(250,PX+10,q),ro=t*14;
      g.save();g.translate(x,y);g.scale(1,Math.max(.15,Math.abs(Math.cos(ro))));medallion(0,0,46,ro*.3,0,.6);g.restore();
      g.strokeStyle=rgba('#FFE6C4',.4);g.lineWidth=3;g.beginPath();g.moveTo(x-4,y-70);g.lineTo(x-14,y-170);g.stroke()}
    else{g.save();g.translate(PX+10,PY+4);g.scale(1,.42);medallion(0,0,50,.4,lerp(.1,.45,sm(tSplash,5.6,t)),.25*(1-sm(5.2,tShat,t)));g.restore();
      g.save();ell(PX+10,PY+20,70,16);g.fillStyle=rgba('#F09A6C',.4);g.fill();g.restore();
      // splash crown and droplets
      const su=(t-tSplash)/.55;if(su<1){for(let i=0;i<16;i++){const a=Math.PI+i/15*Math.PI,v=180+hash(i)*120,x=PX+10+Math.cos(a)*v*su*.9,y=PY-Math.sin(-a)*0+(-Math.abs(Math.sin(a))*v*su*1.2+su*su*420);
        ell(x,y,7*(1-su*.5),9*(1-su*.5));g.fillStyle=rgba('#FFE6C4',.9*(1-su));g.fill()}
        g.beginPath();g.ellipse(PX+10,PY,90*eout(su*1.4),28*eout(su*1.4),0,Math.PI,0);g.strokeStyle=rgba('#FFE6C4',.8*(1-su));g.lineWidth=6;g.stroke()}}
    // glass shards rain down after the panel breaks
    if(t>tShat){for(let i=0;i<14;i++){const tt=t-tShat-hash(i+20)*.2;if(tt<0)continue;const y=-40+tt*tt*1400+hash(i)*120,x=60+hash(i+9)*420+Math.sin(tt*3+i)*14,a=1-sm(PY-60,PY+20,y);if(a<=0)continue;
      g.save();g.translate(x,y);g.rotate(tt*6*(hash(i+3)-.5)+i);g.beginPath();g.moveTo(0,-16);g.lineTo(11,10);g.lineTo(-8,12);g.closePath();g.fillStyle=rgba('#E1C8B8',.25*a);g.fill();g.strokeStyle=rgba('#FFE6C4',.9*a);g.lineWidth=1.5;g.stroke();g.restore()}}
  });
  layer(1.6,()=>{grassRow(980,5,26,-100,700,280,'#241F36')},6);
  g.save();g.globalCompositeOperation='screen';beam(560,120,250,620,30,140,'#FFB36B',.2);g.restore();
  motes(22,3,0,200,540,500,'#FFE6C4',.5,1.8);
}
// ---------------- shot 4: medium — crouch, pick it up, the panel assembles again
if(S.i===4){
  const u=S.u;setCam(lerp(300,312,u),lerp(600,612,cr)-sm(7.6,8.2,t)*24,1.72+u*.1,-.015);
  CAM.sy=kick(t,tGrab,2.5,.25);
  world(2,1.5,3,0,1);
  leaves(5,9,0,100,540,700,'#C9926F');
}
// ---------------- shot 5: wide — he looks left and right: the road is empty
if(S.i===5){
  const u=S.u;setCam(lerp(250,290,ease(u)),560-u*8,1.0+u*.06,lerp(-.01,.01,u));
  world(0,0,2.5,0,1);
  leaves(9,4,0,200,540,600,'#C9926F');
}
// ---------------- shot 6: medium-close — hides the medallion under the shirt, palm on the chest
if(S.i===6){
  const u=S.u;setCam(282-u*6,540+u*4,3.1+u*.25,.01);
  CAM.sy=kick(t,11.8,2,.25);
  world(8,6,6,0,1);
  motes(14,6,0,100,540,600,'#FFE6C4',.4,2);
}
// ---------------- shot 7: close-up — determined squint, fade to black
if(S.i===7){
  const u=S.u;setCam(271,lerp(556,551,u),6.0+u*.5,0);
  villageWorld({tod:'dawn',bF:10,bM:8,bFg:0,fg:0,main:()=>{person(HERO,heroO())}});
  motes(14,8,0,80,540,600,'#FFE6C4',.4,2.4);
}
// ---------------- finishing
g.save();g.globalCompositeOperation='multiply';wash('#6C4377',.12+.1*sm(12,13.9,t));g.restore();
vignette(.55+.15*sm(12,13.9,t));
grain(.05);
wash('#000000',cutDip(t,ST));
wash('#000000',sm(13.45,13.9,t));
