// SCENE 9 — «Красный индикатор дерева» (105.4 – 118.4)
// shots: back at the table, medallion out (medium) | panel, wood row blinks red (UI) | frown in red light (close) |
//        61 + staircase of falling stock (infographic) | dive: map, stumps around, forest far (schematic) |
//        finger: assign extraction -> wood (UI insert) | fifteen worker pips light up (medium)
const ST=[0,1.2,2.6,3.9,6.9,8.85,11.15];
const S=shot(t,ST);
const V={wood:61,iron:14,stone:40,grain:410,food:380,happy:47};
const HX=150,HY=1000,HSc=1.35;
const redA=.55+.45*Math.sin(t*7.5);
function uiAt(x,y,s,fn){g.save();g.translate(x,y);g.scale(s,s);fn();g.restore()}
// hero at the table; o extends the seated pose
function heroO(e){
  const o={x:HX,y:HY,s:HSc,yaw:.5,hipY:-200,fr:[20,0],fl:[-10,0],medal:'hidden',ls:1,rimC:'#FFB36B',rimA:.5,hl:[40,-215],
    em:{look:[.5,-.2],browIn:.3}};
  return Object.assign(o,e||{});
}
// medallion held in the right palm with the index finger extended along ang
function medHand(glowA,pt){return (gg,ex,ey,an)=>{medallion(ex+2,ey+6,9,an,0,glowA);
  if(pt){g.save();g.translate(ex,ey);g.rotate(an);g.beginPath();g.roundRect(2,-4,22,8,4);fo(tc(SKIN[0]),.8);g.restore()}}}
// thin glowing link from medallion to the hologram
function link(x1,y1,x2,y2,a){g.save();g.globalCompositeOperation='screen';g.strokeStyle=rgba('#E1C8B8',.35*a);g.lineWidth=2;g.setLineDash([4,6]);g.lineDashOffset=-t*30;g.beginPath();g.moveTo(x1,y1);g.lineTo(x2,y2);g.stroke();g.setLineDash([]);g.restore()}
// ---------------- shot 0: medium — back to the table, medallion pulled out, panel blooms
if(S.i===0){
  const u=S.u;setCam(lerp(214,226,u),lerp(548,536,u),1.62+u*.08,.01);
  const reach=sm(.15,.45,t),pull=sm(.5,.85,t),open=eout((t-.75)/.4);
  hutInterior({night:1,candle:1,bBack:2,main:()=>{
    const o=heroO({hr:[lerp(lerp(20,-8,reach),45,pull),lerp(lerp(-215,-262,reach),-245,pull)],medal:pull>.05?0:'hidden',
      em:{look:[lerp(.1,.5,pull),lerp(.3,-.2,pull)],browIn:.35,brow:.1},tilt:lerp(.15,0,pull)});
    if(pull>.05)o.itemR=medHand(.3+.6*pull,0);
    person(HERO,o)}});
  if(open>0)layer(1,()=>{uiAt(250,330,.62,()=>resPanel(0,0,380,{a:open,v:V,red:0,redA}));link(HX+45*HSc,HY-245*HSc,250,420,open)});
}
// ---------------- shot 1: UI — resource panel, the wood row keeps blinking red (over the shoulder)
if(S.i===1){
  const u=S.u;setCam(lerp(270,262,u),lerp(450,410,u),lerp(1.15,1.45,ease(u)),-.015+u*.02);
  hutInterior({night:1,candle:1,bBack:6});
  wash('#1F2236',.35);
  layer(1,()=>{resPanel(75,250,390,{a:1,v:V,red:0,redA});
    g.save();g.globalCompositeOperation='screen';glow(260,345,260,'#E0505A',.18*redA);g.restore()});

  motes(14,5,0,150,540,600,'#FFE6C4',.35,1.6);
}
// ---------------- shot 2: close-up — he frowns, lit red from the panel
if(S.i===2){
  const lt=S.lt;setCam(HX+14,HY-330*HSc+6,5.2+lt*.25,-.01);
  const fr=sm(2.7,3.1,t);
  hutInterior({night:1,candle:1,bBack:8,main:()=>{
    person(HERO,heroO({hr:[45,-245],medal:0,itemR:medHand(.5,0),em:{look:[.6,.05],browIn:lerp(.3,.85,fr),brow:-.25*fr,smile:-.3*fr,eyeOpen:lerp(1,.8,fr),blink:t>2.62&&t<2.72?1:0},tilt:.04+.04*fr,turn:.1,rimC:'#E0505A',rimA:.6+.3*redA}))}});
  lampLight(470,520,420,'#E0505A',.22*redA);
  motes(10,8,0,150,540,600,'#FFE6C4',.35,2);
}
// ---------------- shot 3: infographic — 61 lands red, then the staircase of buildings eating the stock
const STEPS=[[140,null],[110,'well'],[106,'bench'],[90,'roof'],[77,'road'],[68,'izba'],[61,'fence']];
function smallIcon(k,x,y,s,a){
  if(k==='izba'||k==='fence'){g.save();g.translate(x,y);g.scale(s,s);g.globalAlpha*=a;g.lineWidth=2/s;g.strokeStyle='#1F2236';
    if(k==='izba'){g.beginPath();g.rect(-9,-2,18,11);g.fillStyle='#6B4A4E';g.fill();g.stroke();g.beginPath();g.moveTo(-12,-1);g.lineTo(0,-11);g.lineTo(12,-1);g.closePath();g.fillStyle='#3E3048';g.fill();g.stroke();g.fillStyle='#FFB36B';g.fillRect(-3,1,6,5)}
    else{for(let i=-2;i<=2;i++){g.beginPath();g.rect(i*5-1.5,-9,3,17);g.fillStyle='#A0704A';g.fill();g.stroke()}g.beginPath();g.moveTo(-12,-3);g.lineTo(12,-3);g.moveTo(-12,4);g.lineTo(12,4);g.strokeStyle='#A0704A';g.lineWidth=2;g.stroke()}
    g.restore()}else icon(k,x,y,s,a)}
if(S.i===3){
  const lt=S.lt,dive=ein((t-6.55)/.35);
  setCam(lerp(270,474,dive),lerp(470,600,dive),(1.02+lt*.03)*(1+dive*3.5),.01-lt*.005);
  CAM.sy=kick(t,4.1,3,.3);
  hutInterior({night:1,candle:1,bBack:9});
  wash('#120F2A',.6);
  layer(1,()=>{
    // big wood row: fills and lands on 61 at the spoken number
    const up=ease((t-4.35)/.45),ry=lerp(380,190,up),rs=lerp(1.25,.9,up);
    uiAt(270,ry,rs,()=>{panel(-200,-40,400,80,1,'#E0505A',.4+.5*redA);icon('wood',-160,0,1.8,1);
      const fill=eout((t-3.92)/.18)*61/200;bar(-125,-14,300,28,fill,mixc('#A0704A','#E0505A',.5+.5*redA),1,redA);ticks(-125,-14,300,28,10,1);
      const fl=Math.max(0,1-Math.abs(t-4.1)/.25);if(fl>0){g.save();g.globalCompositeOperation='screen';glow(-125+300*61/200,0,90,'#E0505A',.8*fl);g.restore()}
      ell(178,0,8,8);g.fillStyle=rgba('#E0505A',.4+.6*redA);g.fill()});
    // staircase: one column per state, a building icon eats a chunk each step
    const x0=78,bw=48,gap=14,base=700,k=2.3;
    g.strokeStyle=rgba('#E1C8B8',.35);g.lineWidth=1.5;g.beginPath();g.moveTo(x0-20,base);g.lineTo(x0+7*(bw+gap),base);g.stroke();
    for(let i=0;i<7;i++){const t0=4.7+i*.3,q=eout((t-t0)/.25);if(q<=0)continue;
      const v=STEPS[i][0],x=x0+i*(bw+gap),h=v*k*q,last=i===6,col=last?mixc('#A0704A','#E0505A',.5+.5*redA):'#A0704A';
      g.save();g.globalAlpha*=q;
      g.beginPath();g.roundRect(x,base-h,bw,h,6);const cg=g.createLinearGradient(0,base-h,0,base);cg.addColorStop(0,mixc(col,'#FFFFFF',.3));cg.addColorStop(1,col);g.fillStyle=cg;g.fill();g.strokeStyle=rgba('#E1C8B8',.5);g.lineWidth=1.5;g.stroke();
      g.strokeStyle=rgba('#1F2236',.4);g.lineWidth=1;for(let y=base-20*k;y>base-h;y-=20*k){g.beginPath();g.moveTo(x+3,y);g.lineTo(x+bw-3,y);g.stroke()}
      if(i>0){const pv=STEPS[i-1][0],cut=(pv-v)*k,ft=cl((t-t0)/.6,0,1);
        g.strokeStyle=rgba('#E1C8B8',.35);g.setLineDash([3,4]);g.beginPath();g.moveTo(x-gap,base-pv*k);g.lineTo(x+bw,base-pv*k);g.stroke();g.setLineDash([]);
        // chunk of stock falling off the column
        g.save();g.translate(x+bw/2+ft*14,base-v*k-cut/2+ft*ft*120);g.rotate(ft*1.4);g.globalAlpha*=1-ft;g.beginPath();g.rect(-bw/2,-cut/2,bw,cut);g.fillStyle='#E0505A';g.fill();g.restore();
        const iy=base-pv*k-34-Math.max(0,1-q)*40;smallIcon(STEPS[i][1],x+bw/2,iy,2.1,1)}
      if(last){g.save();g.shadowColor='#E0505A';g.shadowBlur=20*redA;g.strokeStyle=rgba('#E0505A',.6+.4*redA);g.lineWidth=3;g.beginPath();g.roundRect(x-4,base-h-4,bw+8,h+8,8);g.stroke();g.restore()}
      g.restore()}
    // trend line through column tops
    const n=Math.min(7,Math.floor((t-4.7)/.3)+1);if(n>1){g.strokeStyle=rgba('#E0505A',.7);g.lineWidth=2.5;g.beginPath();for(let i=0;i<n;i++){const x=x0+i*(bw+gap)+bw/2,y=base-STEPS[i][0]*k-6;if(i)g.lineTo(x,y);else g.moveTo(x,y)}g.stroke()}
  });
  motes(12,4,0,150,540,600,'#FFE6C4',.3,1.6);
  wash('#E1C8B8',.9*sm(6.75,6.9,t));
}
// ---------------- shot 4: schematic — oblique plan of the village: stumps all around, forest only at the horizon
const MCX=270,MCY=640,MK=.56;
function mp(x,y){const d=cl((y-MCY)/800,-1,1),sc=1+.28*d;return [MCX+(x-MCX)*sc,MCY+(y-MCY)*MK*(1+.12*d),sc]}
function mapTree(x,y,s,seed){const h=26*s,r=13*s*(.85+hash(seed)*.4);ell(x,y,r*.9,r*.3);g.fillStyle=rgba('#0A0820',.45);g.fill();
  g.strokeStyle='#3A3048';g.lineWidth=2.5*s;g.beginPath();g.moveTo(x,y);g.lineTo(x,y-h*.5);g.stroke();
  blob([[x-r,y-h*.55],[x-r*.7,y-h*1.05],[x,y-h*1.3],[x+r*.75,y-h*1.05],[x+r,y-h*.55],[x,y-h*.35]]);g.fillStyle=hash(seed*2)>.5?'#4F5470':'#5E6280';g.fill();g.strokeStyle=rgba('#E1C8B8',.55);g.lineWidth=1.1;g.stroke();
  ell(x-r*.3,y-h*.95,r*.35,r*.22);g.fillStyle=rgba('#C9926F',.5);g.fill()}
function mapStump(x,y,s){const r=6.5*s;g.beginPath();g.rect(x-r,y-r*.9,r*2,r*.9);g.fillStyle='#7A5848';g.fill();ell(x,y,r,r*.38);g.fillStyle='#7A5848';g.fill();ell(x,y-r*.9,r,r*.38);g.fillStyle='#C8A07A';g.fill();g.strokeStyle=rgba('#E1C8B8',.7);g.lineWidth=1;g.stroke();ell(x,y-r*.9,r*.45,r*.17);g.strokeStyle=rgba('#7A5848',.9);g.stroke()}
function mapHouse(x,y,s,i){const w=15*s,h=10*s;g.beginPath();g.rect(x-w/2,y-h,w,h);g.fillStyle='#6B4A4E';g.fill();g.strokeStyle=rgba('#E1C8B8',.8);g.lineWidth=1;g.stroke();
  g.beginPath();g.moveTo(x-w*.62,y-h);g.lineTo(x,y-h-w*.55);g.lineTo(x+w*.62,y-h);g.closePath();g.fillStyle='#3E3048';g.fill();g.stroke();
  const lit=.5+.5*Math.sin(t*2.5+i*1.7);g.fillStyle=rgba('#FFB36B',.55+.4*lit);g.fillRect(x-2*s,y-h*.7,4*s,4*s)}
if(S.i===4){
  const lt=S.lt,u=ease(lt/1.95);
  setCam(lerp(270,282,u)+Math.sin(lt*.8)*4,lerp(610,500,u),lerp(2.5,.92,u)*(1+.4*(1-eout(lt/.3))),lerp(-.1,.03,u));
  layer(0,()=>{const sg=g.createLinearGradient(0,0,0,960);sg.addColorStop(0,'#120F2A');sg.addColorStop(1,'#241F4A');g.fillStyle=sg;g.fillRect(0,0,540,960)});
  layer(1,()=>{
    // map plate with a hazy horizon at the top
    const pg=g.createLinearGradient(0,MCY-460,0,MCY+600);pg.addColorStop(0,'#141030');pg.addColorStop(.18,'#2A2448');pg.addColorStop(.55,'#3A3058');pg.addColorStop(1,'#2A2448');g.fillStyle=pg;g.fillRect(-900,MCY-470,2340,1700);
    g.strokeStyle=rgba('#E1C8B8',.08);g.lineWidth=1;
    for(let k=-12;k<=12;k++){const a=mp(MCX+k*70,MCY-800),b=mp(MCX+k*70,MCY+800);g.beginPath();g.moveTo(a[0],a[1]);g.lineTo(b[0],b[1]);g.stroke()}
    for(let k=-11;k<=11;k++){const a=mp(MCX-900,MCY+k*70),b=mp(MCX+900,MCY+k*70);g.beginPath();g.moveTo(a[0],a[1]);g.lineTo(b[0],b[1]);g.stroke()}
    // dashed rings: where the forest edge stood in grandfathers' time, receding outward
    for(let k=0;k<4;k++){const rr=160+k*85,q=sm(7.0+k*.22,7.3+k*.22,t);if(q<=0)continue;g.strokeStyle=rgba('#E1C8B8',.25*q);g.setLineDash([6,8]);g.lineWidth=1.5;g.beginPath();
      for(let j=0;j<=48;j++){const a=j/48*Math.PI*2,P=mp(MCX+Math.cos(a)*rr,MCY+Math.sin(a)*rr);if(j)g.lineTo(P[0],P[1]);else g.moveTo(P[0],P[1])}g.stroke();g.setLineDash([])}
    // collect trees / stumps / houses and paint far-to-near
    const items=[];
    for(let i=0;i<300;i++){const a=hash(i*3.3)*Math.PI*2,r=125+Math.pow(hash(i*7.1),.9)*560,x=MCX+Math.cos(a)*r,y=MCY+Math.sin(a)*r;
      if(r>480&&Math.sin(a)>.05)continue;items.push([x,y,r>480?2:1,i,r])}
    for(let i=0;i<150;i++){const a=-Math.PI*(.04+.92*hash(i*5.3)),r=500+hash(i*2.9)*300;items.push([MCX+Math.cos(a)*r,MCY+Math.sin(a)*r,2,i+400,r])}
    for(let k=-3;k<=3;k++){if(!k)continue;for(const sd of[-1,1]){items.push([MCX+k*28,MCY+sd*24,3,k*2+sd]);items.push([MCX+sd*24,MCY+k*28,3,k*3+sd+20])}}
    items.sort((A,B)=>A[1]-B[1]);
    for(const it of items){const P=mp(it[0],it[1]);
      if(it[2]===3){mapHouse(P[0],P[1],P[2],it[3]);continue}
      if(it[2]===2){mapTree(P[0],P[1],P[2]*1.1,it[3]);continue}
      const tc_=6.95+(it[4]-125)/355*1.05;
      if(t<tc_)mapTree(P[0],P[1],P[2],it[3]);else{mapStump(P[0],P[1],P[2]);const pf=cl((t-tc_)/.35,0,1);if(pf<1){ell(P[0],P[1]-8-pf*12,8*(.5+pf),6*(.5+pf));g.fillStyle=rgba('#E1C8B8',.35*(1-pf));g.fill()}}}
    // roads and the well
    for(const R of[[[MCX-110,MCY],[MCX+110,MCY]],[[MCX,MCY-110],[MCX,MCY+110]]]){const a=mp(R[0][0],R[0][1]),b=mp(R[1][0],R[1][1]);g.strokeStyle=rgba('#E1C8B8',.5);g.lineWidth=6;g.lineCap='round';g.beginPath();g.moveTo(a[0],a[1]);g.lineTo(b[0],b[1]);g.stroke();g.strokeStyle='#5A4458';g.lineWidth=3.5;g.stroke()}
    const W0=mp(MCX,MCY);ell(W0[0],W0[1],7,4);g.fillStyle='#A07A60';g.fill();g.strokeStyle='#E1C8B8';g.lineWidth=1.2;g.stroke();
    // palisade ring of stakes
    g.fillStyle='#8A6A58';for(let j=0;j<60;j++){const a=j/60*Math.PI*2,P=mp(MCX+Math.cos(a)*102,MCY+Math.sin(a)*102);g.fillRect(P[0]-1.2,P[1]-7*P[2],2.4,7*P[2])}
    // the long way from the gate to the far forest
    const pq=sm(7.85,8.6,t);if(pq>0){g.strokeStyle=rgba('#FFCF9A',.9);g.lineWidth=2.5;g.setLineDash([8,7]);g.lineDashOffset=-t*20;g.beginPath();
      for(let j=0;j<=20;j++){const q=j/20*pq,P=mp(MCX+lerp(100,380,q)+Math.sin(q*5)*20,MCY-lerp(10,520,q));if(j)g.lineTo(P[0],P[1]);else g.moveTo(P[0],P[1])}g.stroke();g.setLineDash([]);
      const E=mp(MCX+lerp(100,380,pq)+Math.sin(pq*5)*20,MCY-lerp(10,520,pq));icon('axe',E[0],E[1]-14,1.6,pq)}
    // drifting cloud shadows
    for(let i=0;i<3;i++){const x=((t*40+i*330)%1300)-450,y=MCY-260+i*230;ell(x,y,170,60);g.fillStyle=rgba('#0A0820',.2);g.fill()}
  });
  const sl=(t*260)%1100-70;g.save();g.globalCompositeOperation='screen';g.fillStyle=rgba('#E1C8B8',.05);g.fillRect(0,sl,540,40);g.restore();
  panel(14,20,512,920,.5,'#E1C8B8',.3);
  wash('#E1C8B8',.9*(1-sm(6.9,7.12,t)));
}
// ---------------- shot 5: UI insert — finger picks "assign extraction", then wood
const MI=['axe','roof','happy','person'];
function fingerAt(tx,ty,s,ang,pr){const sx=-Math.sin(ang),cy=Math.cos(ang),x=tx+22*s*sx,y=ty+22*s*cy;
  g.save();g.translate(x,y);g.rotate(ang);segs([[0,60*s,0,520,32*s,tc('#B9A6A2')]]);g.restore();finger(x,y,s,ang,pr)}
if(S.i===5){
  const lt=S.lt,u=S.u;setCam(lerp(276,290,u),lerp(470,480,u),1.12+u*.08,.01-u*.015);
  hutInterior({night:1,candle:1,bBack:8});
  wash('#120F2A',.45);
  const sub=eout((t-9.6)/.35);
  let tip;
  layer(1,()=>{
    const px=70,py=240,pw=400;
    panel(px,py,pw,300,1,'#E1C8B8',.7);medallion(px+34,py+36,15,0,0,.3);g.fillStyle=rgba('#E1C8B8',.85);g.beginPath();g.roundRect(px+62,py+26,pw*.42,7,3.5);g.fill();
    const p1=sm(9.4,9.6,t);
    for(let i=0;i<4;i++){const yy=py+74+i*54,hi=i===0?p1:0;
      if(hi>0){g.save();g.shadowColor='#FFCF9A';g.shadowBlur=18*hi;g.beginPath();g.roundRect(px+12,yy,pw-24,46,10);g.fillStyle=rgba('#FFCF9A',.16*hi);g.fill();g.strokeStyle=rgba('#FFCF9A',.9*hi);g.lineWidth=2;g.stroke();g.restore()}
      icon(MI[i],px+40,yy+23,1.4,1);scribble(px+68,yy+28,pw*.42,i*9+5,'#E1C8B8',.65);
      ell(px+pw-32,yy+23,7,7);g.strokeStyle=rgba('#E1C8B8',.6);g.lineWidth=1.5;g.stroke()}
    // resource chooser slides out below the panel
    if(sub>0){const sy=py+316,p2=sm(10.6,10.78,t);panel(px+40,sy,pw-80,92,sub,'#FFCF9A',.5*sub);
      ['wood','stone','iron'].forEach((k,j)=>{const ix=px+100+j*100,iy=sy+46,on=j===0?p2:0;g.save();g.globalAlpha*=sub;
        ell(ix,iy,30,30);g.fillStyle=rgba('#1F2236',.6);g.fill();g.strokeStyle=rgba(on>0?'#FFCF9A':'#E1C8B8',.5+.5*on);g.lineWidth=2+2*on;g.stroke();
        if(on>0){g.save();g.globalCompositeOperation='screen';glow(ix,iy,70,'#FFCF9A',.6*on);g.restore()}
        icon(k,ix,iy,2,1);g.restore()})}
    // finger path: approach -> press axe row -> move to wood -> press
    const A=[px+60,py+100],B=[px+100,py+316+52],R=[470,940];
    const m1=ease((t-8.9)/.5),m2=ease((t-9.85)/.65);
    tip=[lerp(lerp(R[0],A[0],m1),B[0],m2),lerp(lerp(R[1],A[1],m1),B[1],m2)];
    const press=Math.max(sm(9.38,9.48,t)*(1-sm(9.6,9.75,t)),sm(10.58,10.66,t)*(1-sm(10.85,11,t)));
    tip[1]+=press*4;
    const ant=sm(9.25,9.38,t)*(1-sm(9.38,9.45,t))+sm(10.45,10.58,t)*(1-sm(10.58,10.64,t));tip[1]-=ant*8;
    fingerAt(tip[0],tip[1],1.7,-.32,press);
    const rp=[[9.46,A],[10.66,B]];for(const r of rp){const q=cl((t-r[0])/.4,0,1);if(q>0&&q<1){g.strokeStyle=rgba('#FFCF9A',1-q);g.lineWidth=2;ell(r[1][0],r[1][1],10+q*40,10+q*40);g.stroke()}}
  });
  CAM.sx=0;
  motes(10,6,0,150,540,600,'#FFE6C4',.3,1.6);
}
// ---------------- shot 6: medium — fifteen worker pips light up one by one (the 15th on the word, ~12.2)
if(S.i===6){
  const lt=S.lt,u=S.u;setCam(lerp(304,312,u),lerp(530,518,u),1.3+u*.07,-.01+u*.012);
  CAM.sy=kick(t,12.2,2.5,.3);
  const n=cl(Math.floor((t-11.36)/.0571)+1,0,15);
  const px=212,py=372,pw=276,hold=sm(11.25,11.35,t)*(1-sm(12.35,12.5,t));
  const tipX=px+34,tipY=py+176+3*hold;
  hutInterior({night:1,candle:1,bBack:2,main:()=>{
    const loc=[(tipX-24-HX)/HSc,(tipY+14-HY)/HSc];
    person(HERO,heroO({hr:[lerp(45,loc[0],sm(11.15,11.4,t)),lerp(-245,loc[1],sm(11.15,11.4,t))],medal:0,itemR:medHand(.7,1),
      em:{look:[.7,.1],browIn:lerp(.5,.2,sm(12.2,12.7,t)),smile:.15*sm(12.3,12.8,t),eyeOpen:1},tilt:.05,turn:.05,lean:.14*sm(11.15,11.4,t)}))}});
  layer(1,()=>{panel(px,py,pw,250,1,'#FFCF9A',.6);
    icon('axe',px+34,py+36,1.6,1);icon('wood',px+76,py+36,1.6,1);g.fillStyle=rgba('#E1C8B8',.7);g.beginPath();g.roundRect(px+104,py+32,pw*.4,7,3.5);g.fill();
    g.strokeStyle=rgba('#E1C8B8',.3);g.lineWidth=1;g.beginPath();g.moveTo(px+14,py+70);g.lineTo(px+pw-14,py+70);g.stroke();
    for(let i=0;i<15;i++){const x=px+92+(i%5)*40,y=py+110+Math.floor(i/5)*44,on=i<n,jt=t-(11.36+i*.0571);
      if(on){const pop=1+.35*Math.max(0,1-jt/.2);g.save();g.globalCompositeOperation='screen';glow(x,y,26,'#FFCF9A',.5);g.restore();icon('person',x,y,1.5*pop,1);
        g.save();g.globalCompositeOperation='multiply';ell(x,y-2,13*pop,15*pop);g.fillStyle='#FFCF9A';g.fill();g.restore()}
      else{ell(x,y,12,14);g.strokeStyle=rgba('#E1C8B8',.3);g.lineWidth=1.5;g.setLineDash([3,3]);g.stroke();g.setLineDash([])}}
    // count bar under the pips fills in step
    bar(px+70,py+222,pw-94,10,n/15,'#FFCF9A',1,.6);
    ell(px+34,py+160,19,19);g.fillStyle=rgba("#1F2236",.6);g.fill();g.strokeStyle=rgba("#FFCF9A",.5+.5*hold);g.lineWidth=2+hold;g.stroke();if(hold>0){g.save();g.globalCompositeOperation="screen";glow(px+34,py+160,50,"#FFCF9A",.5*hold);g.restore()}icon("person",px+34,py+163,1.1,1);g.beginPath();g.moveTo(px+28,py+150);g.lineTo(px+34,py+144);g.lineTo(px+40,py+150);g.strokeStyle="#FFCF9A";g.lineWidth=2;g.stroke();
    ptr(tipX,tipY,hold*(.6+.4*Math.sin(t*20)));
    const fl=Math.max(0,1-Math.abs(t-12.2)/.3);if(fl>0){g.save();g.globalCompositeOperation='screen';glow(px+pw/2,py+160,180,'#FFCF9A',.35*fl);g.restore()}
  });
}
// ---------------- finishing
vignette(.55);
grain(.05);
wash('#000000',cutDip(t,[0,1.2,2.6,3.9,8.85,11.15]));
wash('#000000',1-sm(0,.4,t));
function ptr(tx,ty,pr){const hx=tx-24,hy=ty+14;segs([[hx,hy,tx,ty,7,tc(SKIN[0])]]);ell(hx,hy,10,9);fo(tc(SKIN[0]));ell(hx-5,hy+3,6,4);g.fillStyle=rgba(SKIN[1],.5);g.fill();if(pr>0){g.strokeStyle=rgba("#FFCF9A",pr);g.lineWidth=2;ell(tx,ty-2,12*(1.6-pr*.6),5*(1.6-pr*.6));g.stroke()}}
