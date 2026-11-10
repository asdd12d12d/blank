// SCENE 12 — «Внушаемость: 0. Лимит влияния: 83» (146.72 – 161.64), finale
// shots: 0 list: elder 12, carpenter 9 | 1 neighbour 87 (red) | 2 two-shot: list scrolls to hero's blinking row
//        3 hero's row: suggestibility 0 | 4 ghost of the previous manager dissolves, warn | 5 fear, hand to medallion, warn pulses
//        6 tilt down: limit button lights up | 7 close-up: 83 of 100, hero looks into the camera, fade to black
const ST=[0,2.85,4.15,6.65,8.3,10.0,11.85,12.75];
const S=shot(t,ST),lt=S.lt,D=env.duration;
const HX=150,GYH=1000,HS=1.35;
const MW=256,UX=214,UY=418,US=.67,TOP=4,RH=58,HH=70,LISTH=RH*5;
function uiT(fn,dx){g.save();g.translate(UX+(dx||0),UY);g.scale(US,US);fn();g.restore()}
function uW(x,y){return [UX+x*US,UY+y*US]}
// spoken numbers (scene-local seconds)
const T12=1.3,T9=2.2,T87=3.62,TZ=7.7,TG=8.45,TR=10.05,TB=12.0,T83=13.15,T100=14.05,TEYE=13.9;
// ---------- helpers
function headW(o){const k=128,ln=o.lean||0;return [HX+HS*k*Math.sin(ln),GYH+HS*(o.hipY-k*Math.cos(ln))]}
function suggIcon(cx,cy,s,gl){g.save();g.translate(cx,cy);g.scale(s,s);g.shadowColor='#E0505A';g.shadowBlur=22*gl;
  g.strokeStyle=rgba(mixc('#E0505A','#FFCF9A',gl*.5),.55+.45*gl);g.lineWidth=2;g.lineCap='round';
  g.beginPath();g.arc(6,-1,8,-2.3,2.1);g.lineTo(2,9);g.stroke();
  for(let k=0;k<3;k++){g.beginPath();g.arc(-4,-1,6+k*5,2.5,3.8);g.globalAlpha=.4+.6*cl(gl*3-k,0,1)*.8+.2;g.stroke()}
  g.restore()}
// exact-width fill (the library bar clamps tiny values to a full circle, which would make 9 and 12 look equal)
function fillW(x,y,w,h,col,gl){if(w<.5)return;g.save();g.beginPath();g.roundRect(x,y,w,h,Math.min(h/2,w/2));const gr=g.createLinearGradient(x,y,x,y+h);gr.addColorStop(0,mixc(col,'#FFFFFF',.35));gr.addColorStop(1,col);g.fillStyle=gr;g.shadowColor=col;g.shadowBlur=10*gl;g.fill();g.restore()}
function rowCol(v){return v>=80?'#E0505A':mixc('#FFCF9A','#E0505A',cl((v-25)/60,0,1)*.75)}
// red limit bar with 10 ticks and a gold cap marker at 100; over>0 spills past the cap
function limBar(x,y,w,h,v,gl,capF,over){
  bar(x,y,w,h,v,'#E0505A',1,gl);ticks(x,y,w,h,10,1);
  if(over>0){g.save();g.shadowColor='#E0505A';g.shadowBlur=14;g.fillStyle='#FF6A70';g.beginPath();g.moveTo(x+w-4,y);for(let k=0;k<=4;k++)g.lineTo(x+w+over*(10+(k%2)*8)*(1-k/5),y+h*k/4);g.lineTo(x+w-4,y+h);g.closePath();g.fill();g.restore()}
  g.save();g.shadowColor='#FFCF9A';g.shadowBlur=6+18*capF;g.fillStyle=mixc('#E1A060','#FFF0C8',capF);g.fillRect(x+w-1.5,y-6-capF*3,3,h+12+capF*6);g.restore()}
// the "influence limit" button
function limitBtn(x,y,w,la,v,gl,capF){if(la<=0)return;g.save();g.globalAlpha*=la;
  g.save();g.shadowColor='#E0505A';g.shadowBlur=26*gl;g.beginPath();g.roundRect(x,y,w,58,16);g.fillStyle=rgba(mixc('#2A1A2E','#4A1E30',gl),.9);g.fill();g.strokeStyle=rgba('#E0505A',.35+.65*gl);g.lineWidth=2.5;g.stroke();g.restore();
  // medallion-crown glyph: the manager's mark
  medallion(x+28,y+29,13,0,0,.35*gl);
  limBar(x+54,y+20,w-84,18,v,.3+.7*gl,capF,0);g.restore()}
// ghost silhouette of the previous manager, made of glass cells that blow away as dust
function ghost(cx,cy,s,a,dis){if(a<=0)return;g.save();g.translate(cx,cy);g.scale(s,s);
  const inside=(x,y)=>(x*x+(y+62)*(y+62)<34*34)||(Math.abs(x)<14&&y>-34&&y<-14)||(y>-18&&y<64&&(x*x)/(78*78)+((y-64)*(y-64))/(78*78)<1);
  const solid=a*(1-sm(0,.35,dis));
  if(solid>0){g.save();g.globalAlpha*=solid;const gr=g.createLinearGradient(0,-100,0,70);gr.addColorStop(0,rgba('#E6E0F2',.85));gr.addColorStop(.6,rgba('#A898C0',.6));gr.addColorStop(1,rgba('#6C5A80',.15));g.fillStyle=gr;
    g.shadowColor='#E1C8B8';g.shadowBlur=24;
    g.beginPath();g.arc(0,-62,34,0,Math.PI*2);g.fill();g.beginPath();g.rect(-14,-34,28,22);g.fill();g.beginPath();g.ellipse(0,64,78,80,0,Math.PI,Math.PI*2);g.fill();g.shadowBlur=0;
    g.strokeStyle=rgba('#FFF0E0',.8);g.lineWidth=2;g.beginPath();g.arc(0,-62,34,0,Math.PI*2);g.stroke();g.beginPath();g.ellipse(0,64,78,80,0,Math.PI,Math.PI*2);g.stroke();
    // hollow eyes
    g.fillStyle=rgba('#3A2A4E',.7);ell(-11,-64,5,3);g.fill();ell(11,-64,5,3);g.fill();
    for(let y=-96;y<64;y+=6){g.fillStyle=rgba('#FFFFFF',.05+.05*Math.sin(y*.7+t*20));g.fillRect(-80,y,160,2)}g.restore()}
  if(dis>0){for(let y=-96;y<64;y+=7)for(let x=-77;x<78;x+=7){if(!inside(x,y))continue;const h=hash(x*3.7+y*1.3),st=(1-(y+100)/170)*.35+h*.35,q=cl((dis-st)/.6,0,1);if(q<=0||q>=1)continue;
    const dx=x+q*q*(60+h*90),dy=y-q*(40+h*70)+Math.sin(q*6+h*9)*6;g.fillStyle=rgba(h>.5?'#E1C8B8':'#9A8AB0',a*(1-q)*.9);g.fillRect(dx,dy,4.5*(1-q*.5),4.5*(1-q*.5))}}
  g.restore()}
const VIL=[ELDER,CARP,NEIGH,SMITH,woman(11,['#7A5A8A','#4E3A60','#9A7AAA']),woman(12,['#A0606A','#703E4A','#C08088']),BOY,GRANNY,worker(1),worker(2),worker(3),worker(4),worker(5),worker(6)];
const VAL=[12,9,87,34,51,63,70,46,58,66,61,55,72,49];
const HROW=VIL.length,GROW=HROW+1,SCR_H=(GROW-4)*RH;
function listScroll(tt){return SCR_H*ease((tt-4.2)/.95)}
// fill progress for every row
function fillOf(i,tt){if(i===0)return eout((tt-T12+.08)/.35);if(i===1)return eout((tt-T9+.08)/.3);if(i===2)return ease((tt-T87+.05)/.45);
  return eout((tt-4.35-(i-3)*.05)/.35)}
const blinkA=t>4.25?.5+.5*Math.sin((t-4.25)*9):0;
// hidden menu: top fixed, limit area extends below on "Ниже горела кнопка"
function hMenu(x,w,o){
  const ext=op(o,'ext',0),full=HH+LISTH+16+82*eout(ext),y=TOP,h=full,pu=.6+.4*Math.sin(t*4);
  panel(x,y,w,h,1,'#D8404E',.85*pu);
  g.save();g.beginPath();g.roundRect(x,y,w,h,14);g.clip();
  eyeClosed(x+34,y+32,14*(1+.08*Math.sin(t*3)));
  g.fillStyle=rgba('#E0505A',.9);g.beginPath();g.roundRect(x+62,y+22,w*.36,8,4);g.fill();g.fillStyle=rgba('#E0505A',.45);g.beginPath();g.roundRect(x+62,y+38,w*.22,5,2.5);g.fill();
  const bx=x+w*.55,bw=w*.4-14;suggIcon(bx+bw/2,y+32,1.1,.35);
  g.strokeStyle=rgba('#D8404E',.5);g.lineWidth=1;g.beginPath();g.moveTo(x+14,y+HH-8);g.lineTo(x+w-14,y+HH-8);g.stroke();
  g.save();g.beginPath();g.rect(x+6,y+HH,w-12,LISTH);g.clip();
  const sc=listScroll(t);
  for(let i=0;i<=GROW;i++){const yy=y+HH+i*RH-sc;if(yy<y+HH-RH||yy>y+HH+LISTH)continue;const cy=yy+RH/2;
    if(i===HROW){ // hero's own row: blinking frame, HERO portrait + medallion, empty bar
      g.save();g.shadowColor='#E0505A';g.shadowBlur=18*blinkA;g.beginPath();g.roundRect(x+10,yy+3,w-20,RH-6,10);g.fillStyle=rgba('#E0505A',.1+.2*blinkA);g.fill();g.strokeStyle=rgba('#E0505A',.35+.65*blinkA);g.lineWidth=2;g.stroke();g.restore();
      g.save();ell(x+38,cy,20,20);g.fillStyle=rgba('#241F4A',.85);g.fill();g.clip();portrait(HERO,x+38,cy-1,12,.25,{browIn:.5});g.restore();
      ell(x+38,cy,20,20);g.strokeStyle=rgba('#E0505A',.9);g.lineWidth=1.5;g.stroke();
      medallion(x+72,cy,9,0,0,.3+.5*blinkA);scribble(x+88,cy+4,w*.17,91,'#E1C8B8',.75);
      const zf=Math.max(0,1-Math.abs(t-TZ)/.35);
      bar(bx,cy-7,bw,14,0,'#E0505A',1,.5);ticks(bx,cy-7,bw,14,10,1);
      g.save();g.shadowColor='#FFCF9A';g.shadowBlur=14*zf;g.beginPath();g.roundRect(bx,cy-7,bw,14,7);g.strokeStyle=rgba('#FFCF9A',.3+.7*zf);g.lineWidth=1.5;g.stroke();g.restore();
      // a scan runs along the empty bar on «ноль» and finds nothing; zero marker pulses
      if(t>TZ-.2&&t<TZ+.5){const q=cl((t-TZ+.2)/.6,0,1);g.fillStyle=rgba('#FFF0C8',.6*(1-q));g.fillRect(bx+bw*q-2,cy-9,4,18)}
      ell(bx+3,cy,2.5+1.5*zf,2.5+1.5*zf);g.fillStyle=rgba('#FFCF9A',.5+.5*Math.abs(Math.sin(t*5)));g.fill();
      continue}
    if(i===GROW){ // previous manager: hollow portrait, warn, bar spilling past the cap
      const ga=sm(TG,TG+.3,t);if(ga<=0)continue;g.save();g.globalAlpha*=ga;
      ell(x+38,cy,20,20);g.fillStyle=rgba('#241F4A',.85);g.fill();g.setLineDash([4,4]);g.strokeStyle=rgba('#9A9AAB',.8);g.lineWidth=1.5;g.stroke();g.setLineDash([]);
      icon('person',x+38,cy+2,1.4,.35*(1-sm(9.1,9.9,t))+.08);
      scribble(x+68,cy+4,w*.2,77,'#9A9AAB',.45);
      const ov=sm(TR+.1,TR+.7,t);limBar(bx,cy-7,bw,14,ov,.8,ov*Math.max(0,Math.sin(t*7)),sm(TR+.6,TR+1,t));
      const wa=sm(9.3,9.5,t),wp=1+.25*Math.max(0,Math.sin((t-TR)*8))*sm(TR,TR+.2,t)*(1-sm(11.6,11.9,t));
      if(wa>0){g.save();if(t>TR){g.shadowColor='#E0505A';g.shadowBlur=20*(wp-1)*4}icon('warn',bx-18,cy,1.1*wp,wa);g.restore()}
      g.restore();continue}
    const v=VAL[i],f=fillOf(i,t),col=i<2?'#FFCF9A':rowCol(v);
    g.save();ell(x+38,cy,20,20);g.fillStyle=rgba('#241F4A',.85);g.fill();g.clip();portrait(VIL[i],x+38,cy-1,12,.25);g.restore();
    ell(x+38,cy,20,20);g.strokeStyle=rgba('#E1C8B8',.85);g.lineWidth=1.5;g.stroke();
    scribble(x+68,cy+4,w*(.16+hash(i+3)*.08),i*7+11,'#E1C8B8',.7);
    const fl=i>2?0:f>0&&f<1?1:Math.max(0,1-(t-[T12,T9,T87][i]-.4)/.5);
    bar(bx,cy-7,bw,14,0,col,1,.4);fillW(bx,cy-7,bw*v/100*f,14,col,.4+.6*fl);ticks(bx,cy-7,bw,14,10,1);
    if(i===2&&f>0){g.save();g.shadowColor='#E0505A';g.shadowBlur=16*(.5+.5*Math.sin(t*6));g.beginPath();g.roundRect(bx,cy-7,bw,14,7);g.strokeStyle=rgba('#E0505A',.7);g.lineWidth=1.5;g.stroke();g.restore()}
  }
  g.restore();
  if(ext>0){const ly=y+HH+LISTH+14;limitBtn(x+14,ly,w-28,sm(.3,1,ext),limV(),btnGlow(),capF())}
  g.restore();
}
function limV(){return .83*ease((t-T83)/.5)}
function btnGlow(){const on=sm(TB,TB+.25,t);return on*(.65+.35*Math.sin(t*6))}
function capF(){return Math.max(0,1-Math.abs(t-T100)/.3)}
// ---------- hero acting
function heroPose(){
  const o={x:HX,y:GYH,s:HS,yaw:.5,hipY:-200,fr:[20,0],fl:[-10,0],medal:'hidden',t,ls:1,breath:1+.6*sm(8.5,10,t)};
  const recog=sm(4.55,4.75,t),ghostF=sm(8.6,8.85,t),eye=sm(TEYE,TEYE+.3,t),head=sm(TEYE+.1,TEYE+.6,t);
  o.lean=.18-.08*sm(4.7,5.1,t)+.04*sm(6.7,7.5,t)-.12*sm(8.7,9.2,t)+.02*sm(12.2,13,t);
  o.tilt=.2-.05*recog-.06*ghostF-.17*head;
  o.turn=-.38*head;
  let lx=.6,ly=.25+.12*Math.sin(t*1.7);
  if(t>2.9)ly=.4;if(t>4.2)ly=lerp(.4,.7,sm(4.2,4.6,t));if(t>8.4)ly=lerp(ly,.5,sm(8.4,8.7,t));if(t>11.9)ly=lerp(ly,.75,sm(11.9,12.3,t));
  lx=lerp(lx,0,eye);ly=lerp(ly,-.05,eye);
  const wid=Math.max(0,1-Math.abs(t-T87-.15)/.4)*.15,zw=Math.max(0,1-Math.abs(t-TZ-.1)/.5)*.15;
  const fear=sm(8.6,9.0,t);
  o.em={look:[lx,ly],eyeOpen:1+wid+.3*recog*(1-fear)+zw+.35*fear-.15*eye,brow:.2+.6*recog*(1-fear)+.75*fear-.25*eye,browIn:.45+.25*fear+.1*eye,
    open:.15*recog*(1-sm(5.6,6.2,t))+.28*fear*(1-sm(12.5,13.4,t))+.08,smile:-.3-.2*fear,
    blink:(t>4.02&&t<4.14)||(t>TZ+.4&&t<TZ+.52)||(t>9.95&&t<10.07)||(t>12.55&&t<12.67)?1:0};
  // right hand: small dip (anticipation) then rises to press the hidden medallion under the shirt
  const up=ease((t-10.4)/.5),dip=sm(10.2,10.4,t)*(1-up);
  if(t>10.2){const ln=o.lean,c=rot(4,-63,ln);const press=Math.max(0,Math.sin((t-10.9)*5.5))*1.5*sm(10.9,11.1,t);
    o.hr=[lerp(26,c[0]+2+press,up),lerp(-212+8*dip,o.hipY+c[1]+press*.5,up)];
    if(up>.8)o.itemR=(gg,x,y,an)=>palm(x,y,an,up)}
  return o;
}
function palm(x,y,an,k){g.save();g.translate(x,y);g.rotate(an+.9);for(let i=0;i<4;i++){g.beginPath();g.roundRect(-3+i*0,-3,15-Math.abs(i-1.5)*2,5,2.5);g.save();g.rotate(-.5+i*.28);g.beginPath();g.roundRect(2,-2.5,14-Math.abs(i-1.5)*2.5,5,2.5);fo(tc(SKIN[0]),.7);g.restore()}ell(0,0,8.5,7,0);fo(tc(SKIN[0]),.8);g.restore()}
const HP=heroPose(),HW=headW(HP);
function heroO(){return Object.assign({},HP,{rimC:'#E0505A',rimA:.85})}
function world(bb){hutInterior({night:1,red:.68+.1*Math.sin(t*4)*sm(TB,TB+.3,t),candle:.36-.04*sm(8,12,t),bBack:bb,main:()=>person(HERO,heroO())});
  g.save();g.globalCompositeOperation='multiply';wash('#3A1A30',.24);g.restore()}
function glassSheen(x,y,w,h,a){g.save();g.beginPath();g.roundRect(x,y,w,h,14);g.clip();const sx=x-120+((t*.12)%1)*(w+240);g.globalCompositeOperation='screen';const gr=g.createLinearGradient(sx-60,y,sx+60,y+80);gr.addColorStop(0,rgba('#E1C8B8',0));gr.addColorStop(.5,rgba('#E1C8B8',a));gr.addColorStop(1,rgba('#E1C8B8',0));g.fillStyle=gr;g.fillRect(x,y,w,h);g.restore()}
function fgMotes(n,col,a){layer(1.5,()=>{for(let i=0;i<n;i++){const x=hash(i*3.1)*700-80+Math.sin(t*.5+i)*20,y=(hash(i*7.3)*1100+t*(8+hash(i)*14))%1100-70;ell(x,y,2+hash(i+2)*3,2+hash(i+2)*3);g.fillStyle=rgba(col,a*(.4+.6*hash(i+5)));g.fill()}},3)}
function lit(lx,ly,r,c,a){const w=uW(lx,ly),s=toScreen(w[0],w[1],1);lampLight(s[0],s[1],r,c,a)}
const EXT=sm(11.9,12.25,t);
function ui(){hMenu(0,MW,{ext:EXT});
  // the ghost appears in the glass over the list and dissolves
  const ga=sm(TG,TG+.35,t)*(1-sm(10.1,10.3,t));if(ga>0)ghost(128,226,1.05,ga,cl((t-9.1)/.9,0,1));
  glassSheen(0,TOP,MW,HH+LISTH+16+82*EXT,.1)}
function rowW(i,col){const sc=listScroll(t);return uW(col,TOP+HH+i*RH-sc+RH/2)}
const MED=[250,566,1.75];
// ---------- shots
if(S.i===0){ // infographic: elder 12, carpenter 9
  const r0=rowW(0,128),r1=rowW(1,128),u=sm(1.6,2.1,t);
  setCam(lerp(r0[0],r1[0],u)+4,lerp(r0[1],r1[1],u)+18,2.75+lt*.06,.012);
  CAM.sy=kick(t,T12+.15,2,.22)+kick(t,T9+.15,2,.22);
  world(6);layer(1,()=>uiT(ui));
  lit(180,140,260,'#FFCF9A',.06+.08*Math.max(0,1-Math.abs(t-T12-.2)/.4)+.08*Math.max(0,1-Math.abs(t-T9-.2)/.4));
  fgMotes(10,'#FFB0A0',.22);
}
if(S.i===1){ // infographic: neighbour 87, long red bar
  const r=rowW(2,125);setCam(r[0]+6-lt*5,r[1]+4,3.3+lt*.1,-.015);
  CAM.sx=kick(t,T87+.42,3,.28);
  world(8);layer(1,()=>uiT(ui));
  lit(190,TOP+HH+2*RH+29,240,'#E0505A',.1+.2*sm(T87,T87+.45,t));
  fgMotes(10,'#FFB0A0',.25);
}
if(S.i===2){ // medium two-shot: list rolls down to the hero's own row, it blinks
  setCam(MED[0]-2+lt*4,MED[1]+2,MED[2]+.02+lt*.03,-.008);
  world(2.5);layer(1,()=>uiT(ui));
  lit(128,TOP+HH+4*RH,300,'#E0505A',.08+.1*blinkA);
}
if(S.i===3){ // infographic: hero's row — suggestibility 0
  const r=rowW(HROW,128);setCam(r[0]+2+lt*4,r[1]-30+lt*4,3.0+lt*.1,.01);
  CAM.sy=kick(t,TZ,2.5,.25);
  world(7);layer(1,()=>uiT(ui));
  lit(128,TOP+HH+3*RH+29,260,'#E0505A',.08+.12*blinkA);
  fgMotes(10,'#FFB0A0',.22);
}
if(S.i===4){ // infographic: previous manager — ghost in the glass turns to dust, warn
  setCam(296+lt*3,560-lt*6,2.55+lt*.06,0);
  world(5);layer(1,()=>uiT(ui));
  lit(128,226,300,'#C8C0DA',.1*sm(TG,TG+.4,t)*(1-sm(9.1,9.9,t)));
  fgMotes(12,'#E1C8B8',.25);
}
if(S.i===5){ // medium close: fear, right hand to the medallion; warn pulses at the ghost row
  setCam(HW[0]+66+lt*4,HW[1]+40,2.4+lt*.08,-.01);
  CAM.sy=kick(t,TR,2,.25);
  world(5);layer(1,()=>uiT(ui));
  const w=rowW(GROW,125),s=toScreen(w[0],w[1],1);lampLight(s[0],s[1],200,'#E0505A',.12+.15*Math.max(0,Math.sin((t-TR)*8))*(1-sm(11.6,11.9,t)));
  lampLight(470,430,380,'#E0505A',.1);
  fgMotes(8,'#FFB0A0',.25);
}
if(S.i===6){ // infographic: camera tilts down — the limit button lights up
  const u=ease((t-11.85)/.6),a=uW(128,TOP+HH+LISTH-30),b=uW(128,TOP+HH+LISTH+43);
  setCam(lerp(a[0],b[0],u),lerp(a[1],b[1],u),3.1+lt*.1,0);
  CAM.sy=kick(t,TB+.05,3,.25);
  world(7);layer(1,()=>uiT(ui));
  const s=toScreen(b[0],b[1],1);lampLight(s[0],s[1],260,'#E0505A',.2*btnGlow());
  fgMotes(10,'#FFB0A0',.22);
}
if(S.i===7){ // close-up: fear, hand pressing the medallion; 83 of 100; eyes rise into the camera
  setCam(HW[0]+22,HW[1]+72,3.55+lt*.14,.006-lt*.004);
  CAM.sy=kick(t,T83+.5,2,.25);
  world(9);
  layer(1,()=>{g.globalAlpha=.5;uiT(ui,60)},8);
  lampLight(470,380,420,'#E0505A',.1+.06*btnGlow());
  lampLight(330,640,240,'#E0505A',.06+.12*btnGlow());
  // the button floats in the foreground glass (screen space, slight parallax), above the subtitle zone
  g.save();g.translate(196-lt*6,604+Math.sin(t*1.3)*2);limitBtn(0,0,310,1,limV(),btnGlow(),capF());g.restore();
  fgMotes(8,'#FFB0A0',.25);
}
// ---------- finishing
g.save();g.globalCompositeOperation='multiply';wash('#241F4A',.12);g.restore();
vignette(.62+.15*sm(13.5,14.9,t));grain(.05);
wash("#000000",cutDip(t,ST));
wash("#000000",.85*(1-sm(0,.065,t))); // half of the cut dip from scene 11
wash('#000000',sm(D-.3,D,t));
