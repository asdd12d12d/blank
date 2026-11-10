// SCENE 10 — «Пятнадцать молчаливых» (118.4 – 132.3)
// shots: pips become fifteen men at the palisade, hero peeks (wide) | pan across blank faces (medium-close) |
//        the line turns and marches to the far forest, hero behind the corner (OTS) | dip — evening return with logs (wide) |
//        a woman asks, one only shrugs (medium) | wood bar grows to 118 gold (insert) | enough: woodpile (medium-wide) |
//        night: hero scrolls the panel (medium)
const ST=[0,1.7,3.15,5.43,6.9,8.4,10.55,12.3];
const S=shot(t,ST);
const GY=716,N=15;
const MEN=Array.from({length:N},(_,i)=>worker(i+2));
const W11=woman(11,['#7A5A8A','#4E3A60','#9A7AAA']);
function wD(tt,t0,v,acc){const u=tt-t0;if(u<=0)return 0;if(u<acc)return v*u*u/(2*acc);return v*(acc/2+u-acc)}
// axe resting on the RIGHT shoulder, head behind; sw = small swing from the walk
function axeItem(sw){return (gg,ex,ey)=>{g.save();g.translate(ex,ey);g.rotate(-.42+sw);
  segs([[0,24,0,-88,7,tc('#A0704A')]]);
  g.beginPath();g.moveTo(-3,-78);g.lineTo(-30,-90);g.quadraticCurveTo(-37,-73,-30,-56);g.lineTo(-3,-66);g.closePath();fo(tc('#8C8FA3'));
  g.strokeStyle=rgba('#E1C8B8',.7);g.lineWidth=2;g.beginPath();g.moveTo(-29,-86);g.quadraticCurveTo(-34,-73,-29,-60);g.stroke();g.restore()}}
// log on the right shoulder
function logItem(len,seed){return (gg,ex,ey)=>{g.save();g.translate(ex,ey-8);g.rotate(-.08);
  g.beginPath();g.roundRect(-len*.55,-12,len,24,10);fo(tc('#7A5848'));g.strokeStyle=rgba(tc('#A0704A'),.9);g.lineWidth=2;for(let k=0;k<3;k++){g.beginPath();g.moveTo(-len*.5+k*30+hash(seed+k)*20,-4+k*4);g.lineTo(-len*.2+k*40,-4+k*4);g.stroke()}
  ell(len*.45,0,9,12);fo(tc('#C8A07A'),.8);ell(len*.45,0,4,6);g.strokeStyle=tc('#7A5848');g.lineWidth=1;g.stroke();g.restore()}}
function uiAt(x,y,s,fn){g.save();g.translate(x,y);g.scale(s,s);fn();g.restore()}
const BLANK={look:[0,0],eyeOpen:.78,smile:0,brow:-.05};
function dust(x,y,seed,a,s){for(let k=0;k<4;k++){const ag=((t*1.6+hash(seed)*.9+k/4)%1);ell(x-ag*30*s,y-ag*18*s,(8+ag*22)*s,(4+ag*9)*s);g.fillStyle=rgba(tc("#C8B0B8"),a*(1-ag)*.6);g.fill()}}
// standing / turning / marching man of the line
function lineMan(i,x0,y,s,turnT,walkT,v){
  const tu=sm(turnT,turnT+.28,t),d=wD(t,walkT,v,.35),C=MEN[i];
  const ant=sm(turnT-.15,turnT,t)*(1-tu);
  const o={x:x0+d,y,s,yaw:lerp(0,.95,tu),lean:-.05*ant,ls:1,rimC:PAL.rim,rimA:.55,em:Object.assign({},BLANK,{blink:0}),t:t+i*.37};
  if(d>0)o.walk={d,st:112*s};
  const ph=d/(112*s);o.hr=tu>.5?[-6,-226]:[-24,-224];o.itemR=axeItem(d>0?Math.sin(ph*Math.PI*2)*.06:0);
  return o;
}
// hero's izba corner seen close, used as a foreground occluder
function corner(x,top,bot){g.beginPath();g.rect(x-400,top,400,bot-top);const wg=g.createLinearGradient(x-120,0,x,0);wg.addColorStop(0,tc('#3A2836'));wg.addColorStop(1,tc('#6B4A4E'));g.fillStyle=wg;g.fill();
  for(let y=top;y<bot;y+=30){g.strokeStyle=rgba('#1F2236',.6);g.lineWidth=3;g.beginPath();g.moveTo(x-400,y);g.lineTo(x,y);g.stroke();ell(x+4,y+15,16,15);fo(tc('#8A6A64'),.8);g.strokeStyle=rgba(tc('#5A3E48'),.8);g.lineWidth=1.2;ell(x+4,y+15,8,7);g.stroke()}
  brush(x-200,top,200,bot-top,'#8A6A64',9,14,.25)}
function heroPeek(x,y,s,e){return Object.assign({x,y,s,yaw:.9,lean:.2,hipX:4,medal:'hidden',ls:1,rimC:PAL.rim,rimA:.7,hl:[30,-170],hr:[38,-200],
  em:{look:[.7,.05],browIn:.55,brow:.15,eyeOpen:1.1}},e||{})}
function mist(y,a){for(let i=0;i<4;i++){const x=((t*12+i*260)%1300)-380;ell(x,y+i*14,260,22);g.fillStyle=rgba('#E1C8B8',a);g.fill()}}
// ---------------- shot 0: wide — the pips become fifteen silent men at the palisade
if(S.i===0){
  const u=S.u;setCam(lerp(300,292,u),lerp(590,582,u),1.3+u*.05,-.01+u*.01);
  villageWorld({tod:'dawn',bF:1,bM:.5,bFg:2.5,main:()=>{
    palisade(-120,700,702,150,4);mist(668,.06);
    for(let i=0;i<N;i++){person(MEN[i],lineMan(i,150+i*25,GY,.42,99,99,0))}
    mist(700,.08)}});
  layer(1.3,()=>{person(HERO,heroPeek(116,830,.8,{em:{look:[.7,.05],browIn:.5,brow:.2,eyeOpen:1.1}}));corner(120,300,900)},.8);
  // match from the fifteen panel pips of the previous scene
  const m=ease(t/.5),fa=1-sm(.35,.7,t);
  if(fa>0){wash('#120F2A',.75*fa);for(let i=0;i<N;i++){const a=[150+(i%5)*58,410+Math.floor(i/5)*58],b=toScreen(150+i*25,GY-262*.42,1);
    const x=lerp(a[0],b[0],m),y=lerp(a[1],b[1],m);g.save();g.globalCompositeOperation='screen';glow(x,y,22,'#FFCF9A',.6*fa);g.restore();icon('person',x,y,lerp(1.6,.9,m),fa)}}
  leaves(5,4,0,150,540,600,'#C9926F');
}
// ---------------- shot 1: medium-close — pan across the blank faces
if(S.i===1){
  const lt=S.lt;setCam(lerp(170,300,ease(S.u)),556,2.75+lt*.06,.01);
  villageWorld({tod:'dawn',bF:6,bM:5,bFg:4,fg:0,main:()=>{palisade(-120,700,690,190,4);mist(640,.07);
    for(let i=0;i<9;i++){const o=lineMan(i,60+i*52,GY,.6,99,99,0);o.em=Object.assign({},BLANK,{look:[0,.02*Math.sin(t+i)]});o.t=t+i*.61;person(MEN[i],o)}}});
  motes(14,3,0,150,540,600,'#FFE6C4',.4,1.8);
}
// ---------------- shot 2: OTS — hero behind the corner, the line turns and marches off to the far forest
if(S.i===2){
  const lt=S.lt;setCam(lerp(300,330,ease(S.u)),lerp(562,552,S.u),1.38+lt*.03,-.012);
  villageWorld({tod:'dawn',bF:2,bM:1.5,bFg:3,far:()=>{forestLine(586,mixc(PAL.far,'#4F5470',.4),9,600,1300,34)},main:()=>{
    palisade(-200,900,690,130,4);
    for(let i=N-1;i>=0;i--){const o=lineMan(i,120+i*30,702,.38,3.25+i*.015,3.6+i*.025,62);if(o.walk)dust(o.x-6,702,i,.9,.5);person(MEN[i],o)}
    mist(700,.07)}});
  layer(1.35,()=>{person(HERO,heroPeek(178,812,.85,{em:{look:[lerp(.3,.75,sm(3.5,4.2,t)),lerp(.1,0,sm(3.5,4.2,t))],browIn:.6,brow:.25+.2*sm(3.3,3.5,t),eyeOpen:1.15,blink:t>3.42&&t<3.52?1:0},
    lean:.22+.04*Math.sin(t*1.3),turn:.08*sm(3.6,4.3,t)}));corner(165,180,900)},.6);
  leaves(5,8,0,150,540,600,'#C9926F');
}
// ---------------- shot 3: wide evening — they return with logs on the right shoulder
function retMan(i,x0,s,y,t0,v){const d=wD(t,t0,v,.01),C=MEN[i];const o={x:x0-d,y,s,yaw:-.95,walk:{d,st:110*s},ls:1,rimC:PAL.rim,rimA:.6,hr:[-14,-238],em:BLANK,t:t+i*.41,itemR:logItem(230+hash(i)*40,i)};return o}
if(S.i===3){
  const lt=S.lt;setCam(lerp(330,300,S.u),lerp(566,572,S.u),1.15+lt*.03,.01);
  villageWorld({tod:'sunset',bF:1,bM:.5,bFg:2.5,far:()=>{forestLine(586,mixc(PAL.far,'#4F5470',.4),9,500,1300,30)},main:()=>{
    palisade(-200,900,690,130,4);
    for(let i=0;i<N;i++){const x0=230+i*38+(i%2)*6,o=retMan(i,x0,.44,708+(i%2)*6,5.3,58);if(o.x<-60||o.x>640)continue;dust(o.x+8,o.y,i,.9,.5);person(MEN[i],o)}
  }});
  leaves(5,2,0,150,540,600,'#C9926F');
}
// ---------------- shot 4: medium — a woman asks, he only shrugs
if(S.i===4){
  const lt=S.lt;setCam(lerp(312,302,S.u),lerp(588,584,S.u),2.2+lt*.06,-.01);
  const sh=sm(7.45,7.8,t)*(1-sm(8.15,8.4,t)),stop=wD(t,6.9,70,.01),dm=Math.min(stop,wD(7.3,6.9,70,.01));
  villageWorld({tod:'sunset',bF:3,bM:2,bFg:3,mid:()=>{for(let k=0;k<3;k++){const d=wD(t,6.6,24,.01);person(MEN[k+5],{x:620+k*44-d,y:628,s:.2,yaw:-.95,walk:{d,st:22},hr:[-14,-238],itemR:logItem(240,k),em:BLANK,ls:1})}},main:()=>{
    palisade(-200,900,690,130,4);
    // woman asks: palm up, eyebrows raised
    const ask=sm(7.0,7.25,t);
    person(W11,{x:225,y:GY,s:.6,yaw:.9,ls:1,rimC:PAL.rim,rimA:.6,hr:[lerp(20,64,ask),lerp(-90,-152,ask)],hl:[10,-100],lean:.08*ask,
      em:{look:[.6,-.1],brow:.55*ask,browIn:.15,open:.3*ask*(.5+.5*Math.sin(t*14))*(1-sm(7.5,7.6,t)),smile:0},tilt:-.08*ask,turn:.05});
    // he stops in his stride and only spreads his free hand
    const x=385-dm,o={x,y:GY,s:.6,yaw:-.95,ls:1,rimC:PAL.rim,rimA:.6,hr:[-14,-238],itemR:logItem(250,3),t:t+.3};
    if(t<7.3)o.walk={d:dm,st:66};else{o.walk={d:dm,st:66}}
    o.hl=sh>0?[lerp(-6,-58,sh),lerp(-100,-172,sh)]:null;o.headDY=7*sh;o.tilt=.2*sh;o.lean=-.04*sh;
    o.em={look:[lerp(-.1,-.5,sm(7.2,7.4,t)),0],eyeOpen:.78,brow:.25*sh,smile:-.08*sh};
    person(MEN[3],o)}});
  leaves(4,6,0,150,540,600,'#C9926F');
}
// ---------------- shot 5: insert — the wood bar grows to 118 in gold, the red light goes out
const V0={wood:61,iron:14,stone:40,grain:410,food:380,happy:47};
function woodpile(x,gy,rows,seed,s){g.save();g.translate(x,gy);g.scale(s,s);
  g.beginPath();g.moveTo(-rows*11-10,0);g.lineTo(-rows*5,-rows*19);g.lineTo(rows*5+40,-rows*19+4);g.lineTo(rows*11+50,0);g.closePath();fo(tc('#7A5848'));
  for(let r=0;r<rows;r++){const n=rows-r;for(let k=0;k<n;k++){const cx=(k-(n-1)/2)*22,cy=-11-r*19;ell(cx,cy,11,11);fo(tc(hash(seed+r*7+k)>.5?'#C8A07A':'#B8906A'),.7);ell(cx,cy,5,5);g.strokeStyle=rgba(tc('#7A5848'),.8);g.lineWidth=1;g.stroke()}}
  g.restore()}
if(S.i===5){
  const lt=S.lt,u=S.u;setCam(lerp(262,274,u),lerp(500,486,u),1.12+u*.08,.012-u*.02);
  CAM.sy=kick(t,10.1,3,.3);
  const gw=ease((t-8.6)/1.5),wv=61+57*gw,off=sm(10.1,10.45,t),rA=(.55+.45*Math.sin(t*7.5))*(1-off);
  villageWorld({tod:'sunset',bF:8,bM:7,bMain:6,fg:0,main:()=>{palisade(-200,900,690,130,4);woodpile(300,712,Math.round(3+3*gw),5,1.6)}});
  wash('#120F2A',.35);
  layer(1,()=>{const px=78,py=260,pw=384;
    resPanel(px,py,pw,{a:1,v:Object.assign({},V0,{wood:wv}),red:0,redA:rA});
    const bx=px+60,by=py+86,bw=pw-110;
    // old level marker and the added part in gold
    g.strokeStyle=rgba('#E1C8B8',.8);g.setLineDash([3,3]);g.lineWidth=1.5;g.beginPath();g.moveTo(bx+bw*61/200,by-6);g.lineTo(bx+bw*61/200,by+22);g.stroke();g.setLineDash([]);
    if(gw>0){g.save();g.shadowColor='#FFCF9A';g.shadowBlur=14;g.beginPath();g.roundRect(bx+bw*61/200,by,bw*(wv-61)/200,16,8);const gg=g.createLinearGradient(0,by,0,by+16);gg.addColorStop(0,'#FFF0D8');gg.addColorStop(1,'#FFCF9A');g.fillStyle=gg;g.fill();g.restore();ticks(bx,by,bw,16,10,1)}
    const fl=Math.max(0,1-Math.abs(t-10.1)/.3);if(fl>0){g.save();g.globalCompositeOperation='screen';glow(bx+bw*118/200,by+8,120,'#FFCF9A',.7*fl);g.restore();for(let k=0;k<8;k++){const a=k/8*Math.PI*2,r=20+60*(1-fl);spark(bx+bw*118/200+Math.cos(a)*r,by+8+Math.sin(a)*r,6*fl,fl)}}
    if(off>0){ell(px+pw-30,py+94,10*(1+off),10*(1+off));g.strokeStyle=rgba('#FFCF9A',.8*(1-off));g.lineWidth=2;g.stroke()}
  });
  motes(14,9,0,150,540,600,'#FFE6C4',.4,1.8);
}
// ---------------- shot 6: medium-wide — for the first time it was enough
if(S.i===6){
  const lt=S.lt,u=S.u;setCam(lerp(282,302,ease(u)),lerp(574,560,u),lerp(1.32,1.42,u),.012-u*.02);
  const lift=sm(10.7,11.3,t),drop=sm(11.3,11.5,t);
  villageWorld({tod:'sunset',bF:1.5,bM:1,bFg:3,main:()=>{palisade(-200,900,690,130,4);woodpile(300,706,6,5,1.5);
    // last log goes onto the pile
    const mo={x:478,y:712,s:.55,yaw:-.7,ls:1,rimC:PAL.rim,rimA:.6,em:BLANK,lean:lerp(.15,.05,lift),hr:[lerp(-60,-90,lift),lerp(-130,-250,lift)],hl:[lerp(-20,-60,lift),lerp(-130,-260,lift)]};
    if(drop<1)mo.itemR=(gg,ex,ey)=>{g.save();g.translate(ex,ey);g.rotate(-.2);g.beginPath();g.roundRect(-60,-10,120,20,9);fo(tc('#7A5848'));ell(-58,0,7,10);fo(tc('#C8A07A'),.8);g.restore()};
    person(MEN[8],mo);
    if(drop>0){g.save();g.translate(300,706-6*19*1.5-16);g.globalAlpha*=drop;ell(-30,0,16,16);fo(tc('#C8A07A'),.7);g.restore()}
    person(MEN[11],{x:560+wD(t,10.55,40,.2),y:712,s:.5,yaw:.95,walk:{d:wD(t,10.55,40,.2),st:55},hr:[-6,-226],itemR:axeItem(0),em:BLANK,ls:1});
    // hero: hands on hips, relief
    const rel=sm(11.0,11.6,t);
    person(HERO,{x:150,y:GY,s:.62,yaw:.6,medal:'hidden',ls:1,rimC:PAL.rim,rimA:.9,hr:[-40,-150],hl:[40,-150],lean:-.04*rel,
      em:{look:[.6,-.15],smile:lerp(.05,.4,rel),brow:.3*rel,browIn:lerp(.3,0,rel),eyeOpen:lerp(1,.9,rel)},tilt:-.06*rel})}});
  smoke(80,520,3,.25);
  leaves(5,7,0,150,540,600,'#C9926F');
}
// ---------------- shot 7: night — hero scrolls the panel upward with his right finger
if(S.i===7){
  const lt=S.lt,u=S.u;setCam(lerp(282,292,u),lerp(530,520,u),1.42+u*.06,-.008);
  const s1=ease((t-12.45)/.45),s2=ease((t-13.2)/.45),scroll=150*s1+150*s2;
  const sw=Math.max(cl((t-12.45)/.45,0,1)*(1-sm(12.95,13.15,t)),cl((t-13.2)/.45,0,1)*(1-sm(13.7,13.9,t)));
  const px=212,py=372,pw=250,ph=270;
  const tipX=px+40,tipY=py+236-sw*64;
  hutInterior({night:1,candle:1,bBack:2,main:()=>{
    const HX=150,HY=1000,HSc=1.35,loc=[(tipX-24-HX)/HSc,(tipY+14-HY)/HSc];
    person(HERO,{x:HX,y:HY,s:HSc,yaw:.5,hipY:-200,fr:[20,0],fl:[-10,0],medal:0,ls:1,rimC:'#FFB36B',rimA:.5,hl:[40,-215],hr:loc,
      itemR:(gg,ex,ey,an)=>{medallion(ex+2,ey+6,9,an,0,.6);g.save();g.translate(ex,ey);g.rotate(an);g.beginPath();g.roundRect(2,-4,22,8,4);fo(tc(SKIN[0]),.8);g.restore()},
      em:{look:[.7,lerp(.2,-.1,sw)],browIn:.25,smile:.05,eyeOpen:1},tilt:.04,lean:.14})}});
  layer(1,()=>{panel(px,py,pw,ph,1,'#E1C8B8',.6);
    g.save();g.beginPath();g.roundRect(px+4,py+4,pw-8,ph-8,12);g.clip();
    uiAt(px+8,py+10-scroll,.62,()=>{resPanel(0,0,378,{a:1,v:Object.assign({},V0,{wood:118})});problemsPanel(0,392,378,{a:1});resPanel(0,606,378,{a:.7,v:Object.assign({},V0,{wood:118}),rows:[1,1,1,0,0,0]})});
    g.restore();
    // scroll rail
    g.fillStyle=rgba('#E1C8B8',.25);g.fillRect(px+pw-10,py+20,3,ph-40);g.fillStyle=rgba('#E1C8B8',.85);g.fillRect(px+pw-11,py+20+scroll/600*(ph-80),5,40);
    if(sw>.05){g.strokeStyle=rgba('#FFCF9A',.5*sw);g.lineWidth=3;g.beginPath();g.moveTo(tipX,tipY);g.lineTo(tipX,tipY+60*sw);g.stroke()}
    {ptr(tipX,tipY,sw>.05?.6:0)}
  });
}
// ---------------- finishing
vignette(.5);
grain(.05);
wash('#000000',cutDip(t,[0,1.7,3.15,6.9,8.4,10.55,12.3]));
// short dip between morning and evening
wash('#000000',Math.max(0,1-Math.abs(t-5.43)/.16));
function ptr(tx,ty,pr){const hx=tx-24,hy=ty+14;segs([[hx,hy,tx,ty,7,tc(SKIN[0])]]);ell(hx,hy,10,9);fo(tc(SKIN[0]));ell(hx-5,hy+3,6,4);g.fillStyle=rgba(SKIN[1],.5);g.fill();if(pr>0){g.strokeStyle=rgba("#FFCF9A",pr);g.lineWidth=2;ell(tx,ty-2,12*(1.6-pr*.6),5*(1.6-pr*.6));g.stroke()}}
