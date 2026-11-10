// SCENE 6 — «Так надо» и смех у воды (0 – 12.17)
// shots: elder gestures at the well · hero suspicious close-up · dip → sunset wide, new well · one-hand crank ·
//        pouring + laugh · laughing faces close · happiness panel insert 41→47
const ST=[0,1.85,4.0,5.55,6.85,8.3,9.75];
const S=shot(t,ST);
const GY=716,HS=.62,WX=410,WGY=692,WS=.85,EX=520,HX=430;
// ---------- helpers (local to this scene)
function wd(tt,t0,v,D){const l=Math.max(0,tt-t0)*v;return l<D-40?l:D-40+40*(1-Math.exp(-(l-(D-40))/40))}
function walker(C,x0,face,t0,v,D,y,s){const d=wd(t,t0,v,D);return {x:x0+face*d,y,s,yaw:.95*face,t,lean:.04*face,walk:{d,st:(C.l1+C.l2)*.76*s}}}
function talk(tt,k){return (.5+.5*Math.sin(tt*15+k))*(.55+.45*Math.sin(tt*4.3+k*2))}
function palmUp(x,y,sd){g.save();g.translate(x,y);ell(0,-2,8,4.5,sd*.15);fo(tc(SKIN[0]),.7);g.strokeStyle=tc(SKIN[1]);g.lineWidth=1.3;for(let i=0;i<3;i++){g.beginPath();g.moveTo(sd*(3+i*1.5),-4-i);g.lineTo(sd*(9+i*1.5),-6-i*1.5);g.stroke()}ell(-sd*5,-5,2.6,3.6,-sd*.6);fo(tc(SKIN[0]),.6);g.restore()}
function axeOnShoulder(x,y,face){g.save();g.translate(x,y);g.rotate(face*-.9);segs([[0,10,0,-70,5,tc('#A0704A')]]);g.beginPath();g.moveTo(-face*2,-62);g.lineTo(-face*22,-74);g.quadraticCurveTo(-face*28,-62,-face*22,-48);g.lineTo(-face*2,-56);g.closePath();fo(tc('#8C8FA3'),.8);g.restore()}
function hammer(x,y,ang){g.save();g.translate(x,y);g.rotate(ang);segs([[0,6,0,-34,4,tc('#A0704A')]]);g.beginPath();g.roundRect(-9,-42,18,9,2);fo(tc('#8C8FA3'),.8);g.restore()}
function hen(x,y,s,seed){const pk=Math.max(0,Math.sin(t*3.1+seed*2))**6,dir=Math.sin(t*.35+seed)>0?1:-1,hx_=x+Math.sin(t*.35+seed)*14;g.save();g.translate(hx_,y);g.scale(s*dir,s);
  ell(0,-14,14,10,-.2);fo(tc(seed%2?'#D8C8C0':'#A0705A'),.8);poly([[-12,-18],[-22,-28],[-18,-12]],1);fo(tc(seed%2?'#C0B0AC':'#7A5048'),.8);
  const hy=lerp(-26,-6,pk),hxx=lerp(12,18,pk);segs([[8,-18,hxx,hy,5,tc(seed%2?'#D8C8C0':'#A0705A')]],1);ell(hxx,hy,5,5);fo(tc(seed%2?'#D8C8C0':'#A0705A'),.7);poly([[hxx+4,hy-1],[hxx+9,hy+1],[hxx+4,hy+2]],1);g.fillStyle=tc('#E0B060');g.fill();ell(hxx,hy-5,2.5,2.5);g.fillStyle=tc('#C04050');g.fill();
  g.strokeStyle=tc('#C89040');g.lineWidth=1.6;g.beginPath();g.moveTo(-2,-5);g.lineTo(-3,0);g.moveTo(3,-5);g.lineTo(4,0);g.stroke();g.restore()}
// water drops flying in arcs from (x,y) after t0
function drops(x,y,t0,n,spd,col,seed){for(let i=0;i<n;i++){const u=t-t0-hash(seed+i)*.25;if(u<0||u>.7)continue;const a=-Math.PI/2+(hash(seed+i*3)-.5)*2.2,v=spd*(.5+hash(seed+i*7)*.6);
  const px=x+Math.cos(a)*v*u,py=y+Math.sin(a)*v*u+260*u*u;ell(px,py,2.6,3.4);g.fillStyle=rgba(col,.9*(1-u/.7));g.fill()}}
const WM=woman(11,['#7A5A8A','#4E3A60','#9A7AAA']),WM2=woman(12,['#A0606A','#703E4A','#C08088']);
const W1=worker(2),W2=worker(0),W8=worker(8),BOY2=Object.assign({},BOY,{seed:16});
const WELLK={};
// ---------- morning: the elder explains, crowd around the old well (continues scene 5)
function elderMorning(){
  const sp=t<1.9?talk(t,2):0,gs=sm(.1,.5,t);
  const o={x:EX,y:730,s:HS,yaw:lerp(-.42,-.62,gs),t,turn:-.15+.08*Math.sin(t*2.2),tilt:.06*Math.sin(t*5)*sm(.2,.5,t),ls:1};
  o.em={look:[-.75,.05],brow:.35+.15*Math.sin(t*3),smile:.25,open:.4*sp};
  // confident sweep of the far (right) hand toward the well, palm open
  const sw=Math.sin(t*2.6)*.5+.5;o.hr=[lerp(-92,-100+sw*8,gs),lerp(-206,-214+sw*8,gs)];o.itemR=(gg,ex,ey)=>palmUp(ex,ey,-1);
  o.hl=[lerp(92,18,gs),lerp(-204,-150,gs)];return o;
}
function heroMorning(){
  // suspicion: eyes narrow first, then a slight head tilt, then the body leans back
  const e=sm(2.05,2.25,t),h=sm(2.15,2.45,t),b=sm(2.3,2.65,t);
  return {x:HX,y:GY+10,s:HS,yaw:lerp(.8,.7,b),t,medal:'hidden',fr:[24,0],fl:[-20,0],ls:1,rimC:PAL.rim,rimA:.55,
    em:{look:[lerp(.6,.85,e),lerp(-.05,.08,e)],eyeOpen:lerp(1,.62,e),browIn:lerp(0,-.75,e),brow:lerp(0,-.3,e),smile:lerp(0,-.25,h),open:0,blink:t>3.2&&t<3.3?1:0},
    tilt:lerp(0,.1,h),turn:lerp(0,-.12,h),lean:lerp(.02,-.04,b),hl:[14,-150],hr:[-6,-148]};
}
function crowdMorning(){
  const L=[];
  L.push({C:W2,o:{x:260,y:684,s:HS,yaw:.6,t,hr:[6,-246],itemR:(gg,ex,ey)=>axeOnShoulder(ex,ey,1),em:{look:[.6,.1]}}});
  L.push({C:W8,o:{x:322,y:700,s:HS,yaw:.95,t,hipY:-84,lean:.42,hipX:-6,fr:[34,0],fl:[-14,0],hr:[66+Math.sin(t*2.3)*6,-72],hl:[58,-96],em:{look:[.6,.5]},tilt:.15}});
  L.push({C:CARP,o:{x:330,y:698,s:HS,yaw:.7,t,hl:[40,-150],hr:[46+9*Math.cos(t*7),-146+6*Math.sin(t*7)],em:{look:[.6,0]}}});
  L.push({C:W1,o:{x:520,y:682,s:HS,yaw:-.6,t,hr:[-40,-150+Math.sin(t*3)*4],em:{look:[-.6,.3]}}});
  L.push({C:WM,o:{x:545,y:690,s:HS,yaw:-.35,t,em:{look:[-.6,.1],smile:.2}}});
  L.push({C:WM2,o:{x:580,y:678,s:HS,yaw:-.5,t,em:{look:[-.5,.1],smile:.2}}});
  for(const k of[0,1]){const C=k?BOY2:BOY,dump=sm(.3+k*.4,.8+k*.4,t);L.push({C,o:{x:570+k*44,y:708+k*5,s:HS,yaw:-.95,t,hipY:lerp(-86,-60,dump*(1-sm(1.5,2,t))),lean:-.3*dump,hr:[-18,lerp(-78,-40,dump)],hl:[-10,lerp(-76,-40,dump)],em:{smile:.4}}})}
  L.push({C:ELDER,o:elderMorning()});L.push({C:HERO,o:heroMorning()});L.push({C:WELLK,o:{y:WGY},st:0});
  return L;
}
// ---------- sunset: repaired well, work done, women at the water
function crankA(){return t<5.0?0:Math.pow(Math.max(0,t-5.3),1.15)*9}
function riseU(){return eout((t-5.5)/1.15)}
function crowdSunset(){
  const L=[];
  // last taps of the carpenter at the log box
  const hit=t%.55,sw=hit<.18?ease(hit/.18):1-ease((hit-.18)/.37);
  L.push({C:CARP,o:{x:318,y:704,s:HS,yaw:.95,t,hipY:-84,lean:.4,hipX:-6,fr:[34,0],fl:[-14,0],hl:[62,-88],hr:[lerp(30,72,sw),lerp(-150,-96,sw)],itemR:(gg,ex,ey,an)=>hammer(ex,ey,an-Math.PI/2+.4),em:{look:[.6,.4],smile:.2}}});
  // people leave the square after the work
  L.push({C:SMITH,o:walker(SMITH,560,1,3.6,52,500,700,HS)});
  {const o=walker(W2,240,-1,3.4,58,500,690,HS);o.hl=[4,-246];o.itemL=(gg,ex,ey)=>axeOnShoulder(ex,ey,-1);L.push({C:W2,o})}
  for(const k of[0,1]){const o=walker(k?BOY2:BOY,600+k*40,1,3.8+k*.1,95,600,710+k*4,HS);o.em={smile:.6};L.push({C:k?BOY2:BOY,o})}
  {const o=walker(W1,540,1,3.3,48,500,684,HS);L.push({C:W1,o})}
  L.push({C:ELDER,o:{x:600,y:722,s:HS,yaw:-.5,t,hl:[18,-150],hr:[-14,-150],em:{look:[-.6,.1],smile:.35},tilt:.04*Math.sin(t*1.3)}});
  L.push({C:HERO,o:{x:225,y:726,s:HS,yaw:.6,t,medal:'hidden',fr:[22,0],fl:[-20,0],hl:[30,-196],hr:[22,-190],em:{look:[.7,0],browIn:-.3},ls:1,rimC:PAL.rim,rimA:.8}});
  // woman 11 cranks with ONE hand, the other on her hip; woman 12 waits with her bucket
  {const hub=[WX+84*WS,WGY-125*WS],ca=crankA(),hx_=hub[0]+Math.cos(ca)*24*WS,hy_=hub[1]+Math.sin(ca)*24*WS,x=505,y=702;
    const pour=sm(6.85,7.3,t),laugh=sm(7.25,7.6,t);
    const o={x,y,s:HS,yaw:-.7,t,ls:1,rimC:PAL.rim,rimA:.8};
    if(t<6.85){o.hl=[(hx_-x)/HS,(hy_-y)/HS];o.hr=[-6,-128];o.em={look:[-.5,-.3],smile:lerp(.2,.7,sm(5.9,6.4,t)),brow:lerp(0,.6,sm(5.8,6.2,t))};o.tilt=-.05}
    else{o.hl=[lerp(-52,-60,pour),lerp(-176,-168,pour)];o.itemL=(gg,ex,ey)=>{bucket(ex-2,ey+24,1.75,-.9*pour*(1-sm(7.6,8,t)*.7),1);if(pour>.3&&t<7.7){g.strokeStyle=rgba('#9AB0D0',.8);g.lineWidth=5;g.beginPath();g.moveTo(ex-22,ey+6);g.quadraticCurveTo(ex-46,ey+10,ex-58,ey+60);g.stroke()}};
      o.hr=[lerp(-6,-20,laugh),lerp(-128,-150,laugh)];}
    if(t>=6.85){const lf=laugh,bb=Math.sin(t*15);o.em={look:[-.2,-.5],smile:lerp(.7,1,lf),open:lf*(.5+.2*bb),eyeOpen:lerp(1,.35,lf),brow:.6*lf};o.tilt=-.3*lf+.04*bb*lf;o.headDY=-2*lf*Math.abs(bb);o.lean=.08*lf}
    L.push({C:WM,o})}
  {const laugh=sm(7.3,7.65,t),bb=Math.sin(t*14+1);
    // walks up with her bucket in the wide; stands left of the log box during the crank shot; by the well for the pour
    const wk=walker(WM2,230,1,3.9,55,100,714,HS),x2=t<5.55?wk.x:t<6.85?318:428;
    const o={x:x2,y:714,s:HS,yaw:.7,t,walk:t<5.55?wk.walk:null,ls:1,rimC:PAL.rim,rimA:.8,hr:[34,-100],itemR:(gg,ex,ey)=>{bucket(ex,ey+24,1.75,.15,t>7.05?1:0);if(t>7.05&&t<7.9){drops(ex+2,ey+10,7.05,10,150,'#B8CCE8',3);ripples(ex,ey+8,26,7.05,'#E8F0FF',.8)}},hl:[lerp(-16,6,laugh),lerp(-150,-196,laugh)],
      em:{look:[.5,-.3],smile:lerp(.4,1,laugh),open:laugh*(.55+.2*bb),eyeOpen:lerp(1,.35,laugh),brow:.5*laugh},tilt:-.32*laugh+.04*bb*laugh,lean:-.08*laugh,headDY:-2*laugh*Math.abs(bb)};
    L.push({C:WM2,o})}
  L.push({C:WELLK,o:{y:WGY},st:1});
  return L;
}
function drawCrowd(L,foc,bb){
  L.sort((a,b)=>a.o.y-b.o.y);
  for(const a of L){layer(1,()=>{
    if(a.C===WELLK){well(WX,WGY,WS,a.st,a.st?crankA():Math.sin(t*.6)*.3);
      if(a.st&&t<6.85){// bucket rising out of the shaft on the rope
        const ry=lerp(WGY+30,WGY-125*WS+52,riseU()),top=WGY-75*WS;g.save();g.beginPath();g.rect(WX-80,0,160,top+1);g.clip();
        g.strokeStyle=tc('#B8A0A0');g.lineWidth=2;g.beginPath();g.moveTo(WX,WGY-125*WS+8);g.lineTo(WX,ry-34);g.stroke();bucket(WX,ry,1.4,Math.sin(t*9)*.06*(1-riseU()),1);
        if(riseU()>.98&&t<6.85)drops(WX,ry-10,6.65,6,90,'#B8CCE8',9);g.restore()}}
    else person(a.C,a.o)},!foc||foc.includes(a.C)?0:bb)}
}
function world(tod,bF,bM,bFg,L,foc,bb){
  villageWorld({tod,bF,bM,fg:0,far:()=>{palisade(820,1300,600,46,4)},
    main:()=>{const pile=tod==='sunset'?0:1;if(pile){for(let i=0;i<9;i++){blob([[480+i*9,697],[483+i*9,689-(i%3)*3],[490+i*9,688],[494+i*9,696]]);fo(tc(i%2?'#7D7890':'#8E89A0'),.6)}}
      else{g.save();g.globalAlpha=.6;for(let i=0;i<6;i++){ell(330+i*30+hash(i)*20,712+hash(i*3)*10,7,2,hash(i)*3);g.fillStyle=tc('#C8A07A');g.fill()}g.restore()}
      hen(230,708,.62,1);hen(300,716,.6,2);hen(640,712,.58,3)}});
  drawCrowd(L,foc,bb);
  layer(1,()=>grassRow(770,4,40,-600,1400,30,tc('#3E3A58')));
  layer(1.7,()=>{grassRow(980,7,40,-600,1400,90,'#241F36');g.fillStyle='#1E1830';g.fillRect(-800,975,2600,400)},bFg);
}
// ---------------- shot 0: medium on the elder — "it's time to fix the well, everyone knows"
if(S.i===0){
  const u=S.u;setCam(538-u*8,572-u*6,2.75+u*.15,.02);
  world('day',4,3,4,crowdMorning(),[ELDER],2.4);
  motes(14,3,0,150,540,560,'#FFE6C4',.4,1.8);
}
// ---------------- shot 1: close-up — hero's suspicious look
if(S.i===1){
  const u=S.u;setCam(HX-4-u*3,GY+10-271*HS+6,7.6+u*.5,-.01);
  villageWorld({tod:'day',bF:10,bM:9,bMain:7,fg:0,main:()=>{for(const a of crowdMorning())if(a.C!==HERO&&a.C!==WELLK&&a.C!==ELDER)person(a.C,a.o);well(WX,WGY,WS,0,0)}});
  layer(1,()=>person(HERO,heroMorning()));
  wash('#241F4A',.08);
  motes(16,7,0,100,540,700,'#FFE6C4',.55,2.4);
  leaves(4,3,0,100,540,600,'#C9926F');
}
// ---------------- shot 2: sunset wide — the well is repaired, people leave
if(S.i===2){
  const u=S.u;setCam(400-u*10,552-u*8,1.18+u*.07,-.01+u*.014);
  CAM.sy=kick(t,4.55,2,.2)+kick(t,5.1,2,.2);
  world('sunset',0,0,2.5,crowdSunset(),null,0);
  leaves(8,4,0,200,540,600,'#C9926F');
}
// ---------------- shot 3: medium — one hand on the crank, the bucket flies up
if(S.i===3){
  const u=S.u;setCam(452-u*6,604-u*10,2.35+u*.12,-.015);
  world('sunset',4,3,4,crowdSunset(),[WM,WELLK],2.4);
  motes(16,5,0,150,540,560,'#FFE6C4',.5,1.8);
}
// ---------------- shot 4: two-shot — water poured, the women laugh
if(S.i===4){
  const u=S.u;setCam(470+u*6,600-u*6,2.15+u*.1,.01);
  world('sunset',4,3,4,crowdSunset(),[WM,WM2,WELLK],2.4);
  motes(16,9,0,150,540,560,'#FFE6C4',.5,1.8);
}
// ---------------- shot 5: close two-shot — laughing faces against the sun
if(S.i===5){
  const u=S.u;setCam(468,GY-262*HS+u*4,3.5+u*.25,-.01+u*.02);
  world('sunset',9,7,5,crowdSunset(),[WM,WM2],3);
  for(let i=0;i<7;i++){const q=(t*.5+i/7)%1;spark(80+i*70+Math.sin(t+i)*12,700-q*240,4+3*Math.sin(t*5+i),.4*(1-q))}
  motes(20,11,0,150,540,600,'#FFE6C4',.6,2.2);
}
// ---------------- shot 6: insert — happiness grows 41 → 47 on the word
if(S.i===6){
  const lt=S.lt;setCam(450,560,1.6,0);
  villageWorld({tod:'sunset',bF:12,bM:10,bMain:9,fg:0,main:()=>{well(WX,WGY,WS,1,0);person(WM,{x:505,y:702,s:HS,yaw:-.7,t,em:{smile:1,open:.4}});person(WM2,{x:428,y:714,s:HS,yaw:.7,t,em:{smile:1,open:.4}})}});
  wash('#241F4A',.2);lampLight(330,700,560,'#FFB36B',.45);lampLight(270,560,300,'#FFCF9A',.12*(1+Math.max(0,1-Math.abs(t-11.42)/.35)));
  const gv=41+6*eout((t-11.05)/.45),pulse=Math.max(0,1-Math.abs(t-11.42)/.35);
  const z=1.17+lt*.035,cx=270,cy=436+lt*3;
  g.save();g.translate(270+kick(t,11.42,3,.25),480);g.scale(z,z);g.rotate(-.025+lt*.006);g.translate(-cx,-cy);
  resPanel(60,180,420,{a:sm(9.75,10.05,t),v:{wood:110,iron:15,stone:40,grain:410,food:380,happy:gv},rows:[.55,.55,.55,.55,.55,1]});
  // happiness row highlight; six gold motes fly into the bar
  const ry=180+74+5*50,bx=60+60,sw=(420-110)/10;
  g.save();g.shadowColor='#FFCF9A';g.shadowBlur=24*(.4+pulse);g.beginPath();g.roundRect(70,ry+2,400,42,10);g.strokeStyle=rgba('#FFCF9A',.5+.5*pulse);g.lineWidth=2;g.stroke();g.restore();
  for(let k=0;k<6;k++){const u_=cl((t-10.85-k*.07)/.45,0,1);if(u_<=0||u_>=1)continue;const tx=bx+4*sw+k*sw*.12,ty=ry+20,sx=150+k*40,sy=ry-150-hash(k)*60;
    const px=lerp(sx,tx,ein(u_)),py=lerp(sy,ty,u_)-Math.sin(u_*Math.PI)*30;spark(px,py,6,.9)}
  if(pulse>0)spark(bx+4*sw+sw*.7,ry+20,22*pulse,pulse);
  g.restore();
  motes(16,4,0,100,540,700,'#FFE6C4',.5,2);
}
// ---------------- finishing
if(S.i>=2&&S.i<6){g.save();g.globalCompositeOperation='screen';beam(560,520,200,760,40,220,'#FFB36B',.16);g.restore();lampLight(380,600,600,'#FFB36B',.12)}
else if(S.i<2){g.save();g.globalCompositeOperation='screen';beam(600,60,320,700,30,170,'#FFB36B',.14);g.restore()}
vignette(S.i===1?.6:.45);
grain(.05);
wash('#000000',cutDip(t,[0,1.85,5.55,6.85,8.3,9.75]));
wash('#000000',(1-sm(0,.07,t))*.85);
// dip to black into the sunset
wash('#000000',sm(3.75,3.98,t)*(1-sm(4.0,4.3,t)));
