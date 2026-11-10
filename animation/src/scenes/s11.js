// SCENE 11 — «Серая строка и скрытое меню» (132.3 – 146.72)
// shots: 0 medium scroll | 1 panel bottom: grey line | 2 face squint | 3 finger touch → flash, menu opens, pull back
//        4 menu header | 5 villagers list scrolls, empty bars appear | 6 face in red light | 7 two-shot, column header glows
const ST=[0,1.4,2.45,3.2,6.2,8.35,11.6,13.3];
const S=shot(t,ST),lt=S.lt;
const HX=150,GYH=1000,HS=1.35;
// UI is drawn in panel-local units (MX..MW, MY..MH) and placed beside the hero at (UX,UY) scaled by US
const MX=0,MY=0,MW=256,MH=380,MB=380,UX=214,UY=418,US=.67;
function uiT(fn,dx){g.save();g.translate(UX+(dx||0),UY);g.scale(US,US);fn();g.restore()}
function uW(x,y){return [UX+x*US,UY+y*US]}
const TF=3.62,FL=4.26; // finger touch, red flash
const RH=58,HH=70;
// ---------- helpers
function headW(o){const k=128,ln=o.lean||0;return [HX+HS*k*Math.sin(ln),GYH+HS*(o.hipY-k*Math.cos(ln))]}
function scrollMain(tt){const u=sm(0,1.85,tt);let s=150+180*u;if(tt>1.85)s+=7*Math.sin((tt-1.85)*13)*Math.exp(-(tt-1.85)*5);return s}
function pointer(gg,x,y,an,k){g.save();g.translate(x,y);g.rotate(an-.55);ell(2,0,9,7.5,0);fo(tc(SKIN[0]),.8);g.beginPath();g.roundRect(4,-3.4,15*k,6.8,3.4);fo(tc(SKIN[0]),.8);ell(4+15*k-2.5,0,2,2.2);g.fillStyle=rgba('#F2B895',.8);g.fill();g.restore()}
// main (resource) list that scrolls; returns world pos of the grey line
const MLR=[['wood',118/200,'#A0704A'],['iron',14/50,'#8C8FA3'],['stone',.4,'#7D7890'],['grain',.82,'#E0B060'],['food',.76,'#C88A50'],['happy',.47,'#FFCF9A'],['axe',15,'#8C8FA3'],['well',1,'#A07A60'],['bench',1,'#A07A60'],['roof',.35,'#7A5A68'],['road',.25,'#6A5468'],['person',86,'#B9A6A2']];
function mList(x,y,w,h,sc,a,lineA,lineR){
  if(a<=0)return;
  panel(x,y,w,h,a,'#E1C8B8',.6);
  g.save();g.globalAlpha*=a;g.beginPath();g.roundRect(x,y,w,h,14);g.clip();
  medallion(x+34,y+36,15,0,0,.25);
  g.fillStyle=rgba('#E1C8B8',.85);g.beginPath();g.roundRect(x+62,y+26,w*.42,7,3.5);g.fill();
  g.fillStyle=rgba('#E1C8B8',.4);g.beginPath();g.roundRect(x+62,y+40,w*.26,5,2.5);g.fill();
  g.strokeStyle=rgba('#E1C8B8',.3);g.lineWidth=1;g.beginPath();g.moveTo(x+16,y+64);g.lineTo(x+w-16,y+64);g.stroke();
  g.beginPath();g.rect(x+6,y+68,w-12,h-76);g.clip();
  const bw=w-110;
  MLR.forEach((R,i)=>{const yy=y+74+i*50-sc;if(yy<y+20||yy>y+h)return;
    icon(R[0],x+34,yy+20,1.25,1);
    if(R[0]==='happy'){const sw=bw/10;for(let k=0;k<10;k++){const f=cl(R[1]*10-k,0,1);g.beginPath();g.roundRect(x+60+k*sw,yy+10,sw-4,20,4);g.fillStyle=rgba('#1F2236',.6);g.fill();g.strokeStyle=rgba('#FFCF9A',.4);g.lineWidth=1;g.stroke();if(f>0){g.beginPath();g.roundRect(x+60+k*sw,yy+10,Math.max(2,(sw-4)*f),20,4);g.fillStyle='#FFCF9A';g.fill()}}}
    else if(R[0]==='axe'){for(let k=0;k<R[1];k++){ell(x+66+k*(bw-10)/14,yy+20,4,4);g.fillStyle=R[2];g.fill();g.strokeStyle=rgba('#1F2236',.6);g.lineWidth=1;g.stroke()}}
    else if(R[0]==='person'){for(let k=0;k<R[1];k++){ell(x+63+(k%29)*(bw-6)/28,yy+9+Math.floor(k/29)*11,1.8,1.8);g.fillStyle=rgba('#E1C8B8',.8);g.fill()}}
    else{bar(x+60,yy+12,bw,16,R[1],R[2],1,.4);ticks(x+60,yy+12,bw,16,10,1)}
    ell(x+w-30,yy+20,5,5);g.fillStyle=rgba(R[2],.8);g.fill()});
  // the thin grey line that was never there
  const ly=y+74+MLR.length*50-sc+18,lx0=x+24,lw=w*.66;
  if(lineA>0){g.save();g.globalAlpha*=lineA;const c=mixc('#9A9AAB','#E0505A',lineR);
    g.shadowColor=c;g.shadowBlur=4+14*lineR;g.beginPath();g.roundRect(lx0,ly-1.8,lw,3.6,1.8);g.fillStyle=rgba(c,.85);g.fill();g.shadowBlur=0;
    const sx=lx0+((t*.45)%1)*lw;const gr=g.createLinearGradient(sx-30,0,sx+30,0);gr.addColorStop(0,rgba('#FFFFFF',0));gr.addColorStop(.5,rgba('#FFFFFF',.55));gr.addColorStop(1,rgba('#FFFFFF',0));g.fillStyle=gr;g.fillRect(lx0,ly-2,lw,4);
    ell(lx0-8,ly,2.2,2.2);g.fillStyle=rgba(c,.7);g.fill();g.restore()}
  g.restore();
  return [lx0,ly];
}
// glyph for the "suggestibility" column: head profile with waves entering it
function suggIcon(cx,cy,s,gl){g.save();g.translate(cx,cy);g.scale(s,s);g.shadowColor='#E0505A';g.shadowBlur=22*gl;
  g.strokeStyle=rgba(mixc('#E0505A','#FFCF9A',gl*.5),.55+.45*gl);g.lineWidth=2;g.lineCap='round';
  g.beginPath();g.arc(6,-1,8,-2.3,2.1);g.lineTo(2,9);g.stroke();
  for(let k=0;k<3;k++){g.beginPath();g.arc(-4,-1,6+k*5,2.5,3.8);g.globalAlpha=.4+.6*cl(gl*3-k,0,1)*.8+.2;g.stroke()}
  g.restore()}
function rowCol(v){return v>=80?'#E0505A':mixc('#FFCF9A','#E0505A',cl((v-25)/60,0,1)*.75)}
// hidden-parameters menu (same layout as the library hiddenPanel) with extra controls:
// barA (bar column alpha), colGlow (column header + axis glow), bottom (grow upwards from this y)
function hMenu(x,w,o){
  const a=op(o,'a',1);if(a<=0)return;
  const open=op(o,'open',1),rows=o.rows,listH=op(o,'listH',RH*5),full=HH+listH+16;
  const h=Math.max(8,full*eout(open)),y=o.bottom-h,pu=.6+.4*Math.sin(t*4);
  panel(x,y,w,h,a,'#D8404E',.85*pu);
  g.save();g.globalAlpha*=a;g.beginPath();g.roundRect(x,y,w,h,14);g.clip();
  const es=1+.08*Math.sin(t*3);eyeClosed(x+34,y+32,14*es);
  g.fillStyle=rgba('#E0505A',.9);g.beginPath();g.roundRect(x+62,y+22,w*.36,8,4);g.fill();g.fillStyle=rgba('#E0505A',.45);g.beginPath();g.roundRect(x+62,y+38,w*.22,5,2.5);g.fill();
  const bx=x+w*.55,bw=w*.4-14,ba=op(o,'barA',0),cg=op(o,'colGlow',0);
  if(ba>0){g.save();g.globalAlpha*=ba;suggIcon(bx+bw/2,y+32,1.1,cg);g.restore()}
  g.strokeStyle=rgba('#D8404E',.5);g.lineWidth=1;g.beginPath();g.moveTo(x+14,y+HH-8);g.lineTo(x+w-14,y+HH-8);g.stroke();
  if(cg>0){g.save();g.shadowColor='#E0505A';g.shadowBlur=16*cg;g.strokeStyle=rgba('#FF8A8A',.7*cg);g.lineWidth=2;g.beginPath();g.moveTo(bx-8,y+HH-4);g.lineTo(bx-8,y+HH+listH);g.stroke();g.beginPath();g.moveTo(bx-4,y+HH-8);g.lineTo(bx+bw+4,y+HH-8);g.stroke();g.restore()}
  g.save();g.beginPath();g.rect(x+6,y+HH,w-12,listH);g.clip();
  const sc=op(o,'scroll',0);
  rows.forEach((R,i)=>{const yy=y+HH+i*RH-sc;if(yy<y+HH-RH||yy>y+HH+listH)return;
    g.save();
    g.save();ell(x+38,yy+RH/2,20,20);g.fillStyle=rgba('#241F4A',.85);g.fill();g.clip();portrait(R.C,x+38,yy+RH/2-1,12,.25,R.em);g.restore();
    ell(x+38,yy+RH/2,20,20);g.strokeStyle=rgba('#E1C8B8',.85);g.lineWidth=1.5;g.stroke();
    scribble(x+68,yy+RH/2+4,w*(.16+hash(i+3)*.08),i*7+11,'#E1C8B8',.7);
    const rb=ba*cl((op(o,'barT',0)-i*.1)/.3,0,1);
    if(rb>0){bar(bx,yy+RH/2-7,bw,14,0,'#E0505A',rb,.5);ticks(bx,yy+RH/2-7,bw,14,10,rb);
      g.save();g.globalAlpha*=rb;g.shadowColor='#E0505A';g.shadowBlur=10*cg;g.beginPath();g.roundRect(bx,yy+RH/2-7,bw,14,7);g.strokeStyle=rgba('#E0505A',.35+.5*cg);g.lineWidth=1.2;g.stroke();g.restore()}
    g.restore()});
  g.restore();g.restore();
}
const VIL=[ELDER,CARP,NEIGH,SMITH,woman(11,['#7A5A8A','#4E3A60','#9A7AAA']),woman(12,['#A0606A','#703E4A','#C08088']),BOY,GRANNY,worker(1),worker(2),worker(3),worker(4),worker(5),worker(6)];
const ROWS=VIL.map(C=>({C}));
// ---------- hero acting
function heroPose(){
  const o={x:HX,y:GYH,s:HS,yaw:.5,hipY:-200,fr:[20,0],fl:[-10,0],medal:'hidden',t,ls:1};
  const sq=sm(2.5,2.62,t)*(1-sm(TF,TF+.15,t)),rec=sm(FL,FL+.3,t);
  o.lean=.1+.1*sm(2.62,2.95,t)-.17*rec+.06*sm(8.5,10.5,t)+.09*sm(11.4,12.4,t);
  o.tilt=.12+.06*sm(2.55,2.75,t)-.16*sm(FL+.05,FL+.35,t)+.1*sm(5,6.2,t);
  // eyes: notice line, squint, shock, read, worry
  let lx=.55,ly=.3;ly=lerp(ly,.75,sm(1.9,2.05,t));ly=lerp(ly,.2,sm(FL,FL+.1,t));lx=lerp(lx,.45,sm(FL,FL+.1,t));
  if(t>8.4){const rd=sm(8.4,8.6,t)*(1-sm(10.8,11,t));ly=lerp(ly,.15+.25*Math.sin(t*5),rd)}
  if(t>11){lx=.6+.12*Math.sin(t*3.1);ly=.35+.15*nz(t*2)}
  const wor=sm(11.3,11.9,t),vn=sm(13.4,13.55,t)*(1-sm(14.1,14.4,t)*.5);
  o.em={look:[lx,ly],eyeOpen:lerp(1,.42,sq)+.35*rec*(1-sm(5,6.5,t))+.15*sm(5,6.5,t)*(1-wor)+.1*wor+.15*vn,
    brow:-.25*sq+1*rec*(1-sm(5,6.5,t))+.35*sm(5,6.5,t)*(1-wor)+.25*wor+.2*vn,browIn:.65*sq+.3*sm(5,6.5,t)+.45*wor,
    open:.4*rec*(1-sm(4.9,5.6,t))+.12*wor+.1*vn,smile:-.1-.3*wor,
    blink:(t>FL+.05&&t<FL+.17)||(t>6.9&&t<7.02)||(t>11.62&&t<11.74)?1:0};
  // right hand: scrolling swipes, hover, anticipation, touch, recoil down to the table
  const tp=[62,-234];let hr=null;
  if(t<1.75){const c=(t%.62)/.62,on=c<.62?ease(c/.62):1-ease((c-.62)/.38);hr=[71+(c<.62?0:5),-246-32*on]}
  if(t>=1.75&&t<3.25){const u=sm(1.75,2.1,t);hr=[71,lerp(-246,-262,u)+Math.sin(t*9)*.8]}
  if(t>=3.25){const back=sm(3.25,3.42,t),fwd=sm(3.42,TF,t);hr=[lerp(lerp(71,64,back),tp[0],fwd),lerp(lerp(-262,-246,back),tp[1],fwd)]}
  if(t>=FL){const r=eout((t-FL)/.45);hr=[lerp(tp[0],26,r),lerp(tp[1],-212,r)]}
  o.hr=hr;if(t<FL+.3)o.itemR=(gg,x,y,an)=>pointer(gg,x,y,an,1);
  return o;
}
const HP=heroPose(),HW=headW(HP);
const red=.7*sm(FL,FL+.8,t),cand=lerp(1,.38,sm(FL,7,t));
const menuOpen=sm(FL+.05,FL+.9,t);
function heroO(){return Object.assign({},HP,{rimC:mixc('#E1C8B8','#E0505A',red),rimA:.55+.3*red})}
function world(bb){hutInterior({night:1,red,candle:cand,bBack:bb,main:()=>person(HERO,heroO())});
  if(red>0){g.save();g.globalCompositeOperation='multiply';wash('#3A1A30',.3*red);g.restore()}}
// forearm + finger drawn again in front of the glass (clipped to the panel area), darker tint to match the night grade
function armOver(){if(!HP.itemR)return;layer(1,()=>{g.save();g.beginPath();g.rect(UX+5,585,US*MW-10,103);g.clip();
  const T0=TINT,A0=TA;TINT=mixc('#241F4A','#5A2038',red);TA=.42;person(HERO,heroO());TINT=T0;TA=A0;g.restore()})}
function ui(){
  const ma=1-sm(FL-.05,FL+.2,t);
  const L=mList(MX,MY,MW,MH,scrollMain(t),ma,sm(1.85,2.45,t)*(1-menuOpen),sm(TF,TF+.5,t));
  if(L&&t>TF&&t<FL+.4){const u=(t-TF)/.6;for(let k=0;k<2;k++){const q=cl(u-k*.25,0,1);if(q>0&&q<1){ell(MX+46,L[1],6+q*40,2+q*10);g.strokeStyle=rgba(mixc('#FFCF9A','#E0505A',q),1-q);g.lineWidth=2;g.stroke()}}}
  hMenu(MX,MW,{a:sm(FL-.02,FL+.08,t),open:menuOpen,bottom:MB,rows:ROWS,scroll:scrollList(t),barA:sm(10.9,11.1,t),barT:(t-10.95)*1.6,colGlow:sm(13.4,13.6,t)*(.8+.2*Math.sin(t*9))});
}
function scrollList(tt){return lerp(520,0,ease((tt-8.45)/2.25))*(tt<8.45?1:1)}
function glassSheen(x,y,w,h,a){g.save();g.beginPath();g.roundRect(x,y,w,h,14);g.clip();const sx=x-120+((t*.12)%1)*(w+240);g.globalCompositeOperation='screen';const gr=g.createLinearGradient(sx-60,y,sx+60,y+80);gr.addColorStop(0,rgba('#E1C8B8',0));gr.addColorStop(.5,rgba('#E1C8B8',a));gr.addColorStop(1,rgba('#E1C8B8',0));g.fillStyle=gr;g.fillRect(x,y,w,h);g.restore()}
function fgMotes(n,col,a){layer(1.5,()=>{for(let i=0;i<n;i++){const x=hash(i*3.1)*700-80+Math.sin(t*.5+i)*20,y=(hash(i*7.3)*1100+t*(8+hash(i)*14))%1100-70;ell(x,y,2+hash(i+2)*3,2+hash(i+2)*3);g.fillStyle=rgba(col,a*(.4+.6*hash(i+5)));g.fill()}},3)}
function lit(lx,ly,r,c,a){const w=uW(lx,ly),s=toScreen(w[0],w[1],1);lampLight(s[0],s[1],r,c,a)}
const MED=[250,566,1.75]; // medium two-shot framing (hero left third, panel right)
// ---------- shots
if(S.i===0){ // medium: night, scrolling the panel (continuity from scene 10)
  const u=S.u;setCam(MED[0]+4-u*6,MED[1]+4-u*6,MED[2]-.04+u*.07,-.012+u*.01);
  world(2.5);layer(1,()=>uiT(()=>{ui();glassSheen(MX,MY,MW,MH,.12)}));armOver();
  lit(128,190,320,'#C8D0FF',.1);
}
if(S.i===1){ // infographic: bottom of the panel, scroll stops, grey line fades in
  setCam(304-lt*4,626,2.95+lt*.1,.015);
  world(6);layer(1,()=>uiT(()=>{ui();glassSheen(MX,MY,MW,MH,.1)}));armOver();
  lit(110,360,260,'#C8D0FF',.06+.08*sm(1.9,2.4,t));
  fgMotes(10,'#FFE6C4',.25);
}
if(S.i===2){ // close-up: squints, leans in (eyes → head → body)
  setCam(HW[0]+18,HW[1]+12,5.0+lt*.35,-.02);
  world(8);
  layer(1,()=>{g.globalAlpha=.7;uiT(ui,42)},7);
  lampLight(480,500,420,'#C8D0FF',.16);lampLight(500,720,300,'#FFB36B',.1);
  fgMotes(8,'#FFE6C4',.3);
}
if(S.i===3){ // insert: finger touches → red flash, menu rises from the line, camera pulls back
  const pb=ease((t-FL-.05)/1.5),f0=[262,640];
  setCam(lerp(f0[0],MED[0],pb),lerp(f0[1],MED[1],pb),lerp(3.5+lt*.15,MED[2],pb),lerp(.02,0,pb));
  CAM.sx=kick(t,FL,4,.3);CAM.sy=kick(t,TF,2,.2);
  world(lerp(6,2.5,pb));layer(1,()=>uiT(()=>{ui();if(t>FL)glassSheen(MX,MB-376*menuOpen,MW,376*menuOpen,.1)}));armOver();
  lit(128,200,380,'#E0505A',.2*red);
  fgMotes(8,'#FFB0A0',.22);
}
if(S.i===4){ // infographic: header with the closed eye
  const hc=uW(112-lt*10,44);setCam(hc[0],hc[1]+52,4.0+lt*.15,-.012);
  world(6);layer(1,()=>uiT(()=>{ui();glassSheen(MX,4,MW,376,.1)}));
  lit(34,36,220,'#E0505A',.12+.06*Math.sin(t*4));
  fgMotes(10,'#FFB0A0',.25);
}
if(S.i===5){ // infographic: list of villagers scrolls, empty bars appear
  const pan=sm(10.85,11.6,t);
  setCam(lerp(292,312,pan)-lt*2,lerp(570,560,pan)+Math.sin(t*.8)*2,2.6+lt*.05,.012);
  world(5);layer(1,()=>uiT(()=>{ui();glassSheen(MX,4,MW,376,.1)}));
  fgMotes(10,'#FFB0A0',.22);
}
if(S.i===6){ // close-up: face in red light, worried
  setCam(HW[0]+16,HW[1]+10,4.6+lt*.3,.015);
  world(9);layer(1,()=>{g.globalAlpha=.7;uiT(ui,42)},7);
  lampLight(480,470,420,'#E0505A',.16+.05*Math.sin(t*4));
  fgMotes(8,'#FFB0A0',.28);
}
if(S.i===7){ // two-shot: hero leaning to the glass, column header glows on «Внушаемость»
  setCam(MED[0]+10+lt*5,MED[1]-24,MED[2]+.15+lt*.05,.01);
  CAM.sy=kick(t,13.45,2,.25);
  world(3);layer(1,()=>uiT(()=>{ui();glassSheen(MX,4,MW,376,.1)}));
  lit(200,36,240,'#E0505A',.1+.18*sm(13.4,13.6,t));
}
// ---------- finishing
const fl=Math.max(0,1-Math.abs(t-FL-.02)/.16);
wash('#E0505A',fl*.7);wash('#FFFFFF',fl*.2);
g.save();g.globalCompositeOperation='multiply';wash('#241F4A',.1+.12*red);g.restore();
vignette(.6);grain(.05);
const cuts=ST.filter(s=>s!==ST[0]);
wash("#000000",cutDip(t,[0].concat(cuts)));
// half of the 0.13 s dip on the hard cut into scene 12
wash("#000000",.85*sm(env.duration-.065,env.duration,t));
