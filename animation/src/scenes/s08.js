// SCENE 8 — «Подушка, закат и пустая улица» (91.9 – 105.4)
// shots: granny crosses (wide) | puts pillow (medium) | finished bench, sunset arc (wide) | face in sunset (close) |
//        nobody asks for a reward (medium) | doors close (wide) | smile fades (close) + fade to black
const ST=[0,1.7,3.15,6.35,8.8,10.45,12.2];
const S=shot(t,ST);
const GY=716,WY=700,WC=340,BX0=100,BX1=300,SEAT=664,HX=262,HY=712,HS=.6;
const PIL=['#C48A8A','#8E5A66','#E7C6AD'];
const WOOD=['#A07A60','#7A5848','#C8A080'];
const W11=woman(11,['#7A5A8A','#4E3A60','#9A7AAA']),W12=woman(12,['#A0606A','#703E4A','#C08088']),NB=worker(1);
function wD(tt,t0,v,acc){const u=tt-t0;if(u<=0)return 0;if(u<acc)return v*u*u/(2*acc);return v*(acc/2+u-acc)}
// embroidered pillow (#C48A8A, embroidery #E7C6AD)
function pillow(x,y,w,h,a){g.save();g.translate(x,y);g.rotate(a||0);
  const P=[[-w*.5,-h*.4],[0,-h*.56],[w*.5,-h*.4],[w*.57,0],[w*.5,h*.42],[0,h*.54],[-w*.5,h*.42],[-w*.57,0]];
  blob(P);const pg=g.createLinearGradient(0,-h*.5,0,h*.5);pg.addColorStop(0,tc(mixc(PIL[0],'#FFFFFF',.15)));pg.addColorStop(1,tc(PIL[1]));g.fillStyle=pg;g.fill();ol();
  g.strokeStyle=tc(PIL[2]);g.lineWidth=Math.max(1,h*.06);g.lineJoin='round';g.beginPath();
  for(let i=0;i<=8;i++){const xx=-w*.36+i*w*.09;g.lineTo(xx,(i%2?-1:1)*h*.1)}g.stroke();
  for(const sd of[-1,1]){g.beginPath();g.moveTo(-w*.38,sd*h*.28);g.lineTo(w*.38,sd*h*.28);g.lineWidth=Math.max(.8,h*.035);g.stroke();
    for(let i=0;i<4;i++){const xx=-w*.27+i*w*.18;ell(xx,sd*h*.28,h*.05,h*.05);g.fillStyle=tc(PIL[2]);g.fill()}}
  for(const c of[[-w*.5,-h*.4],[w*.5,-h*.4],[w*.5,h*.42],[-w*.5,h*.42]]){ell(c[0]*1.04,c[1]*1.05,h*.07,h*.07);fo(tc(PIL[1]),.6)}
  g.restore()}
// hero's izba: long log wall on the far side of the road, corner at WC
function heroWall(){
  const top=392;
  g.beginPath();g.rect(-900,top,900+WC,WY-top);
  const wg=g.createLinearGradient(-200,0,WC,0);wg.addColorStop(0,tc('#3A2836'));wg.addColorStop(.75,tc('#664650'));wg.addColorStop(1,tc('#7E5A58'));g.fillStyle=wg;g.fill();
  for(let y=top;y<WY;y+=26){
    g.strokeStyle=rgba('#1F2236',.6);g.lineWidth=3;g.beginPath();g.moveTo(-900,y);g.lineTo(WC,y);g.stroke();
    g.strokeStyle=rgba(tc('#B08A7A'),.3);g.lineWidth=2;g.beginPath();g.moveTo(-900,y+6);g.lineTo(WC-16,y+6);g.stroke();
    ell(WC+3,y+13,15,13);fo(tc('#8A6A64'),.8);g.strokeStyle=rgba(tc('#5A3E48'),.8);g.lineWidth=1.2;ell(WC+3,y+13,8,7);g.stroke();ell(WC+3,y+13,2.5,2.5);g.stroke()}
  brush(-300,top,WC+300,WY-top,'#8A6A64',17,26,.22);
  // okno with carved frame, glass reflects the sky
  const wx=200,wy=494,ww=74,wh=86;
  g.beginPath();g.rect(wx-ww/2,wy-wh/2,ww,wh);const gg=g.createLinearGradient(0,wy-wh/2,0,wy+wh/2);gg.addColorStop(0,tc('#4B3463'));gg.addColorStop(1,tc('#F09A6C'));g.fillStyle=gg;g.fill();ol();
  g.strokeStyle=rgba('#FFE6C4',.35);g.lineWidth=5;g.beginPath();g.moveTo(wx-24,wy+30);g.lineTo(wx+6,wy-36);g.stroke();
  g.strokeStyle=tc('#B9A6A2');g.lineWidth=5;g.beginPath();g.moveTo(wx,wy-wh/2);g.lineTo(wx,wy+wh/2);g.moveTo(wx-ww/2,wy);g.lineTo(wx+ww/2,wy);g.stroke();
  g.beginPath();g.moveTo(wx-ww*.78,wy-wh*.56);g.lineTo(wx,wy-wh*.92);g.lineTo(wx+ww*.78,wy-wh*.56);g.lineTo(wx+ww*.7,wy-wh*.47);g.lineTo(wx-ww*.7,wy-wh*.47);g.closePath();fo(tc('#B9A6A2'),.8);
  for(let i=-2;i<=2;i++){ell(wx+i*ww*.26,wy-wh*.5+2,4,4);g.fillStyle=tc('#8C7890');g.fill()}
  g.beginPath();g.rect(wx-ww*.7,wy+wh*.5,ww*1.4,7);fo(tc('#B9A6A2'),.8);
  for(const sd of[-1,1]){g.beginPath();g.rect(wx+sd*ww*.62-5,wy-wh*.47,10,wh*.97);fo(tc('#B9A6A2'),.7)}
  // roof slope above the eave + carved eave board
  g.beginPath();g.moveTo(-900,top+4);g.lineTo(WC+38,top+4);g.lineTo(WC-70,top-190);g.lineTo(-900,top-190);g.closePath();fo(tc('#3E3048'));
  g.strokeStyle=rgba(tc('#5E4A62'),.9);g.lineWidth=2;for(let i=1;i<7;i++){const y=top+4-i*27;g.beginPath();g.moveTo(-900,y);g.lineTo(lerp(WC+38,WC-70,i/7),y);g.stroke()}
  g.beginPath();g.moveTo(-900,top-2);g.lineTo(WC+40,top-2);g.lineTo(WC+40,top+12);for(let x=WC+40;x>-900;x-=22)g.quadraticCurveTo(x-11,top+22,x-22,top+12);g.closePath();fo(tc('#B9A6A2'),.8);
  // bundle of dry herbs swaying under the eave
  g.save();g.translate(60,top+14);g.rotate(Math.sin(t*1.1)*.07);g.strokeStyle=tc('#5A4450');g.lineWidth=2;g.beginPath();g.moveTo(0,0);g.lineTo(0,30);g.stroke();
  for(let k=0;k<6;k++){ell((k-2.5)*4,40+k%3*8,4,15,(k-2.5)*.15);g.fillStyle=tc(k%2?'#6E6A86':'#4F5470');g.fill()}g.restore();
  // grass and a few flowers at the foot of the wall
  grassRow(WY+2,31,24,-200,WC+30,16,tc('#4F5470'));
  for(let i=0;i<5;i++){const fx=-80+i*80+hash(i+3)*30,fy=WY-6-hash(i)*8+Math.sin(t*1.7+i)*1.5;ell(fx,fy,3,3);g.fillStyle=tc(i%2?'#E7C6AD':'#C9926F');g.fill()}
}
// unfinished bench: planks laid on two stumps
function benchRaw(){
  for(const x of[BX0+44,BX1-30]){g.beginPath();g.rect(x-16,SEAT+6,32,WY+6-SEAT-6);fo(tc('#5E4648'));ell(x,SEAT+6,16,5);fo(tc('#8A6A58'),.8);g.strokeStyle=rgba('#5A3E48',.8);g.lineWidth=1;ell(x,SEAT+6,8,2.5);g.stroke()}
  for(let k=0;k<3;k++){const y=SEAT-2+k*3,dx=(k-1)*4;g.beginPath();g.rect(BX0+16+dx,y-5,BX1-BX0-10,7);fo(tc(k%2?'#C8A07A':'#B8906A'),.8)}
  g.beginPath();g.rect(BX0+40,WY-6,90,6);fo(tc('#B8906A'),.7);
}
// finished bench #A07A60: wide, high back, carved armrests
function benchNew(){
  const w0=BX0,w1=BX1,s=SEAT,back=s-112;
  const wd=tc(WOOD[0]),wk=tc(WOOD[1]),wl=tc(WOOD[2]);
  for(const x of[w0+10,w1-10]){g.beginPath();g.rect(x-6,back-6,12,WY-back);fo(wk)}
  for(let k=0;k<3;k++){const y=back+8+k*26;g.beginPath();g.rect(w0+6,y,w1-w0-12,18);fo(k===1?wd:mixc(wd,wk,.25),.9);g.strokeStyle=rgba(wl,.5);g.lineWidth=2;g.beginPath();g.moveTo(w0+12,y+4);g.lineTo(w1-12,y+4);g.stroke()}
  // carved crest
  g.beginPath();g.moveTo(w0,back+6);g.lineTo(w0,back-4);for(let i=0;i<8;i++){const x=lerp(w0,w1,i/8),x2=lerp(w0,w1,(i+1)/8),hc=i===3||i===4?-24:-12;g.quadraticCurveTo((x+x2)/2,back+hc,x2,back-4)}g.lineTo(w1,back+6);g.closePath();fo(wd);
  for(let i=0;i<8;i++){const x=lerp(w0,w1,(i+.5)/8);ell(x,back-2,3,3);g.fillStyle=wk;g.fill()}
  // seat
  g.beginPath();g.rect(w0-8,s-10,w1-w0+16,10);fo(wl);g.beginPath();g.rect(w0-8,s,w1-w0+16,9);fo(wd);
  for(const x of[w0+16,w1-16,(w0+w1)/2]){g.beginPath();g.rect(x-6,s+9,12,GY-6-s-9);fo(wk)}
  // armrests with scroll ends
  for(const sd of[-1,1]){const x=sd<0?w0-2:w1+2,top=s-40;
    g.beginPath();g.moveTo(x-7,s);g.quadraticCurveTo(x-12,s-20,x-5,top+6);g.lineTo(x+5,top+6);g.quadraticCurveTo(x+12,s-20,x+7,s);g.closePath();fo(wd);
    g.beginPath();g.moveTo(x-sd*30,top+4);g.lineTo(x+sd*14,top+4);g.quadraticCurveTo(x+sd*26,top+4,x+sd*24,top-6);g.quadraticCurveTo(x+sd*20,top-14,x+sd*10,top-6);g.lineTo(x-sd*30,top-6);g.closePath();fo(wl);
    ell(x+sd*17,top-3,4.5,4.5);g.strokeStyle=wk;g.lineWidth=2;g.stroke();
    g.strokeStyle=wk;g.lineWidth=1.5;for(let k=0;k<3;k++){g.beginPath();g.arc(x,s-12-k*9,3,0,Math.PI*2);g.stroke()}}
  brush(w0,back,w1-w0,s-back,'#E7C6AD',23,10,.15);
}
function block(x){g.beginPath();g.rect(x-22,670,44,44);fo(tc('#5E4648'));ell(x,670,22,6);fo(tc('#9A7A64'),.8);g.strokeStyle=rgba('#5A3E48',.8);g.lineWidth=1;ell(x,670,12,3);g.stroke();ell(x,670,5,1.4);g.stroke()}
// granny walk: constant speed then a 0.5 s deceleration; stride chosen so both feet are planted at the stop
const GV=85,GT1=1.96,GST=73.7,GX0=530,GS=.55;
function grannyD(tt){if(tt<GT1)return GV*tt;const u=Math.min(tt-GT1,.5);return GV*GT1+GV*(u-u*u)}
function grannyO(){
  const d=grannyD(t),x=GX0-d;
  const place=sm(2.42,2.78,t),rel=t>2.8,back=sm(2.85,3.2,t);
  const o={x,y:GY,s:GS,yaw:-.95,walk:{d,st:GST},ls:1,rimC:PAL.rim,rimA:.5,medal:0};
  o.lean=-(.15*place*(1-back));
  const hugL=[-58,-128],hugR=[-50,-134],tgt=[-91,-121];
  if(!rel){o.hl=[lerp(hugL[0],tgt[0]+4,place),lerp(hugL[1],tgt[1]+4,place)];o.hr=[lerp(hugR[0],tgt[0],place),lerp(hugR[1],tgt[1]-6,place)];
    o.itemL=(gg,ex,ey)=>{pillow(ex-8,ey-10,88,52,lerp(-.35,0,place));ell(ex-30,ey-2,6,5);fo(tc(SKIN[0]),.8);ell(ex+12,ey-6,6,5);fo(tc(SKIN[0]),.8)}}
  else{const h1=[lerp(tgt[0],-24,back),lerp(tgt[1],-118,back)];o.hl=h1;o.hr=[h1[0]+8,h1[1]-4]}
  const lookDown=1-sm(2.9,3.05,t);
  o.em={browIn:.55,brow:.25+.2*Math.sin(t*1.3),look:[lerp(-.6,-.2,lookDown),lerp(-.1,.5,lookDown)],smile:-.18,open:.08+.06*Math.sin(t*2)};
  o.tilt=.06*Math.sin(t*2.6)+.1*place;o.turn=-.15*back;
  return o;
}
function heroBlock(look){
  return {x:62,y:GY,s:HS,yaw:.85,hipY:-87,lean:.14,fr:[52,0],fl:[38,0],hr:[48,-76],hl:[38,-80],medal:'hidden',ls:1,rimC:PAL.rim,rimA:.6,
    em:{look,brow:.35,browIn:.15,smile:.1},tilt:.06,turn:.05};
}
// seated hero on the finished bench
function heroBench(e){
  const o={x:HX,y:HY,s:HS,yaw:.55,hipY:-88,lean:-.06,fr:[44,0],fl:[28,0],hr:[-6,-100],hl:[56,-142],medal:'hidden',ls:1,rimC:PAL.rim,rimA:.85,
    em:{look:[.55,-.25],smile:.35,eyeOpen:.9},tilt:-.05};
  return Object.assign(o,e||{});
}
// ---------------- world for exterior shots
// low sun drawn on the hill plane so it reads above the horizon in sunset shots
function lowSun(){g.save();g.globalCompositeOperation='screen';glow(306,432,200,'#FFB36B',.5);glow(306,432,64,'#FFE0B8',.6);g.restore();ell(306,432,24,24);g.fillStyle='#FFE6C4';g.fill();
  g.fillStyle=rgba('#F09A6C',.5);for(let i=0;i<3;i++){ell(250+i*70+((t*5)%40),428+i*16,60-i*10,3);g.fill()}}
function world(tod,bF,bM,bFg,main,mid,bMain){
  villageWorld({tod,bF,bM,bFg,mid,bMain:bMain||0,fg:bMain?0:1,far:tod==='sunset'?lowSun:null,main:()=>{heroWall();if(main)main()}});
}
// close-up: wall and bench softly defocused behind the sharp hero, warm side light
function closeWorld(fall,heroO){
  world('sunset',10,8,0,()=>{benchNew();pillow(196,640,56,34,-.12)},null,5);
  const k=toScreen(380,560,1);g.save();g.globalCompositeOperation='screen';glow(k[0]+200,k[1],620,'#FFB36B',.32*(1-fall*.6));g.restore();
  heroO.hl=[30,-102];layer(1,()=>person(HERO,heroO));
}
// ---------------- shot 0: wide — granny crosses the street with the pillow
if(S.i===0){
  const u=S.u;setCam(lerp(280,296,u),lerp(592,586,u),1.15+u*.05,-.012+u*.012);
  world('day',1.5,.5,2.5,()=>{benchRaw();block(62);
    const go=grannyO();person(HERO,heroBlock([lerp(.9,.7,u),.05]));person(GRANNY,go)});
  leaves(6,4,0,150,540,600,'#C9926F');
}
// ---------------- shot 1: medium — she puts the pillow on the planks, puzzled
if(S.i===1){
  const lt=S.lt;setCam(lerp(328,318,S.u),lerp(626,620,S.u),2.9+S.u*.2,.01);
  CAM.sy=kick(t,2.8,2,.25);
  world('day',4,3,4,()=>{benchRaw();if(t>2.8)pillow(287.5,644,48.4,28.6,0);person(GRANNY,grannyO())});
  leaves(5,9,0,100,540,700,'#C9926F');motes(10,3,0,250,540,500,'#FFE6C4',.4,1.6);
}
// hero sitting-down timeline on the new bench (shot 2)
function heroSitO(){
  const sit=ease((t-3.55)/.55),ant=sm(3.3,3.55,t)*(1-sit);
  const st0=[-8,0],sl0=[10,0];
  const o=heroBench({hipY:lerp(-142.8,-88,sit),lean:lerp(0,-.06,sm(4.0,4.4,t))+.28*Math.sin(Math.PI*cl((t-3.5)/.75,0,1))+.04*ant,
    fr:[lerp(st0[0],44,sit),0],fl:[lerp(sl0[0],28,sit),0],yaw:lerp(.35,.55,sit)});
  const hs=sm(3.55,3.9,t)*(1-sm(4.1,4.5,t));
  o.hr=[lerp(lerp(8,28,sit),20,hs),lerp(lerp(-50,-96,sit),-90,hs)];o.hl=[lerp(lerp(30,56,sit),36,hs),lerp(lerp(-48,-142,sm(4.0,4.5,t)),-92,hs)];
  o.turn=-.5*ant;o.em={look:[lerp(-.4,.55,sm(3.9,4.3,t)),lerp(.3,-.25,sm(3.9,4.3,t))],smile:.35*sm(4.2,4.8,t),eyeOpen:lerp(1,.9,sit)};
  return o;
}
// ---------------- shot 2: wide sunset — finished bench, hero sits down, camera arcs
if(S.i===2){
  const u=ease(S.u);setCam(lerp(330,420,u),lerp(562,548,u),lerp(1.22,1.1,u),lerp(.03,-.025,u));
  world('sunset',0,0,2.5,()=>{benchNew();pillow(196,640,56,34,-.12);person(HERO,heroSitO())},
    ()=>{const wd=wD(t,3.15,22,.2);person(W12,{x:640-wd,y:628,s:.22,yaw:-.95,walk:{d:wd,st:24},ls:1})});
  leaves(7,4,0,150,540,600,'#C9926F');
  g.save();g.globalCompositeOperation='screen';const sp=toScreen(330,590,.06);beam(sp[0],sp[1],sp[0]-420,sp[1]+40,10,120,'#FFB36B',.16);g.restore();
}
// ---------------- shot 3: close-up — face in the sunset, quiet smile
if(S.i===3){
  const lt=S.lt;setCam(268+lt*1.2,580+lt*.6,8.2+lt*.22,-.01);
  closeWorld(0,heroBench({em:{look:[.55+.1*Math.sin(t*.7),-.28],smile:.38+.06*Math.sin(t*.9),eyeOpen:.88,blink:0},rimA:1,tilt:-.07+.02*Math.sin(t*.6)}));
  const sp=toScreen(306,432,.2);lampLight(sp[0],sp[1],260,'#FFB36B',.3);
  for(let i=0;i<3;i++){const k=.35+i*.3,fx=lerp(sp[0],540-sp[0],k),fy=lerp(sp[1],960-sp[1],k);g.save();g.globalCompositeOperation='screen';ell(fx,fy,10+i*8,10+i*8);g.fillStyle=rgba('#FFCF9A',.08);g.fill();g.restore()}
  motes(16,7,0,200,540,560,'#FFE6C4',.55,2.2);
}
// ---------------- shot 4: medium — he offers thanks, the carpenter just turns away
function carpO(){
  const turn=sm(9.4,9.75,t),d=wD(t,9.6,70,.35);
  const o={x:400+d,y:GY,s:HS,yaw:lerp(-.9,.95,turn),ls:1,rimC:PAL.rim,rimA:.7,t};
  if(d>0)o.walk={d,st:66};
  o.tilt=.12*Math.sin(Math.PI*cl((t-9.05)/.35,0,1));
  o.em={look:[lerp(-.3,.2,turn),0],eyeOpen:.85,smile:0,browIn:0};
  o.itemR=(gg,ex,ey,an)=>{g.save();g.translate(ex,ey);g.rotate(Math.sin(t*3)*.15);g.beginPath();g.moveTo(-6,0);g.quadraticCurveTo(-10,22,-4,40);g.lineTo(8,38);g.quadraticCurveTo(10,18,6,0);g.closePath();fo(tc('#CDB39C'));g.restore()};
  return o;
}
if(S.i===4){
  const lt=S.lt;setCam(lerp(300,318,S.u),lerp(604,596,S.u),1.55+S.u*.08,.012-S.u*.012);
  world('sunset',3,2,3,()=>{benchNew();pillow(196,640,56,34,-.12);
    const off=sm(8.95,9.3,t)*(1-sm(9.9,10.35,t));
    const o=heroBench({lean:lerp(-.06,.18,off),hr:[lerp(28,82,off),lerp(-96,-158,off)],
      em:{look:[lerp(.55,.7,sm(9,9.2,t)),lerp(-.25,-.05,sm(9,9.2,t))],brow:.45*off,smile:lerp(.35,.15,sm(9.7,10.3,t)),open:.28*off*(1-sm(9.45,9.6,t))},turn:.1*off,tilt:-.04});
    person(HERO,o);person(CARP,carpO())},
    ()=>{const wd=wD(t,8.8,24,.2);person(W12,{x:520+wd,y:628,s:.22,yaw:.95,walk:{d:wd,st:24},ls:1});
      const wd2=wD(t,8.8,20,.2);person(NB,{x:430+wd2,y:630,s:.23,yaw:.95,walk:{d:wd2,st:24},ls:1,hr:[-30,-235],itemR:(gg,ex,ey)=>{g.beginPath();g.rect(ex-90,ey-10,180,10);fo(tc('#C8A07A'),.8)}})});
  leaves(6,8,0,100,540,700,'#C9926F');
}
// ---------------- shot 5: wide — everyone goes home, doors close one after another
const DOORS=[[510,622,26,56,11.5],[572,622,22,50,11.85]];
function door(D){const dt=t-D[4],cl_=sm(0,.35,dt),x=D[0],gy=D[1],w=D[2],h=D[3];
  g.beginPath();g.rect(x,gy-h,w,h);g.fillStyle=mixc('#1F1626','#FFB36B',.55);g.fill();glow(x+w/2,gy-h/2,w*1.4,'#FFB36B',.3*(1-cl_));
  const lw=w*lerp(.15,1,cl_);g.beginPath();g.rect(x+w-lw,gy-h,lw,h);fo(tc('#4A3442'),.7);
  g.strokeStyle=rgba('#1F2236',.5);g.lineWidth=1;for(let k=1;k<3;k++){g.beginPath();g.moveTo(x+w-lw*k/3,gy-h+3);g.lineTo(x+w-lw*k/3,gy-3);g.stroke()}}
function goer(C,x0,x1,t0,tIn,s,y){const face=x1>x0?1:-1,v=Math.abs(x1-x0)/(tIn-t0),d=Math.min(Math.abs(x1-x0),v*Math.max(0,t-t0)),a=1-sm(tIn,tIn+.2,t);
  if(a<=0)return;g.save();g.globalAlpha*=a;person(C,{x:x0+face*d,y,s,yaw:face*.95,walk:{d,st:22},ls:1,t});g.restore()}
if(S.i===5){
  const u=S.u;setCam(lerp(668,690,u),lerp(474,466,u),1.85+u*.08,-.008);
  world('sunset',0,0,2,null,
    ()=>{izba(620,622,118,80,6,.6,1);
      for(const D of DOORS)door(D);
      goer(CARP,430,518,10.3,11.2,.2,626);goer(BOY,452,522,10.3,11.32,.2,626);goer(W11,676,580,10.3,11.62,.19,626);
      const wd=wD(t,10.3,30,.1);person(W12,{x:380-wd,y:630,s:.19,yaw:-.95,walk:{d:wd,st:22},ls:1});
      const wd2=wD(t,10.3,26,.1);person(NB,{x:590+wd2,y:634,s:.22,yaw:.95,walk:{d:wd2,st:22},ls:1});
      for(const D of DOORS){const q=sm(D[4]+.3,D[4]+.8,t);if(q>0)glow(D[0]-30,D[1]-50,40,'#FFB36B',.4*q)}});
  leaves(5,3,0,150,540,600,'#C9926F');
}
// ---------------- shot 6: close-up — alone, the smile fades
if(S.i===6){
  const lt=S.lt;setCam(262,580,8.4+lt*.4,.01);
  const fall=sm(12.45,13.0,t);
  closeWorld(fall,heroBench({em:{look:[lerp(.7,.25,fall),lerp(-.05,.35,fall)],smile:lerp(.3,-.15,fall),browIn:.6*fall,brow:-.1*fall,eyeOpen:lerp(.95,.85,fall),blink:t>12.95&&t<13.07?1:0},
      rimA:lerp(.8,.35,fall),tilt:lerp(-.04,.1,fall),turn:-.12*fall}));
  g.save();g.globalCompositeOperation='multiply';wash('#241F4A',.35*sm(12.2,13.4,t));g.restore();
  motes(10,7,0,200,540,560,'#FFE6C4',.4,2.2);
}
// ---------------- finishing
g.save();g.globalCompositeOperation='multiply';wash(S.i<2?'#F09A6C':'#6C4377',S.i<2?.08:.1+.12*sm(10.4,13.4,t));g.restore();
vignette(.5);
grain(.05);
wash('#000000',cutDip(t,ST));
wash('#000000',sm(13.1,13.48,t));
