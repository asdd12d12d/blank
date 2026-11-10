// SCENE 5 — «Утро: деревня сама идёт к колодцу» (0 – 13.82)
// shots: door/freeze · wide square · carpenter · smith · boys · hero walks to elder · elder shrugs (two-shot)
const ST=[0,2.2,4.95,6.45,7.55,9.4,11.75];
const S=shot(t,ST);
const GY=716,HS=.62,WX=410,WGY=692,EX=520;
// ---------- motion helpers
// walked distance: constant speed v from t0, soft stop at D
function wd(tt,t0,v,D){const l=Math.max(0,tt-t0)*v;return l<D-40?l:D-40+40*(1-Math.exp(-(l-(D-40))/40))}
function gaitFeet(C,d,st,s,face){const L=(C.l1+C.l2)*.09,a=gait(d/s,0,0,face,1,st/s,L,0),b=gait(d/s,0,0,face,1,st/s,L,.5);return [[a.fx,a.fy],[b.fx,b.fy]]}
function standFeet(C,face,yaw){const rx=-Math.cos(yaw)*C.hw*.36;return [[rx*1.1+face*6,0],[-rx*1.1-face*5,0]]}
// walker: returns person options; blends from the last stride into a standing pose after arrival
function walker(C,x0,face,t0,v,D,y,s){
  const d=wd(t,t0,v,D),st=(C.l1+C.l2)*.76*s,yaw=.95*face,o={x:x0+face*d,y,s,yaw,t,lean:.04*face};
  const ts=t0+(D+60)/v,b=sm(ts,ts+.4,t);
  if(b<=0&&t>=t0)o.walk={d,st};
  else{const f=gaitFeet(C,d,st,s,face),q=standFeet(C,face,yaw),bb=t<t0?1:b;
    o.fr=[lerp(f[0][0],q[0][0],bb),lerp(f[0][1],q[0][1],bb)-Math.sin(sm(0,.5,bb)*Math.PI)*5];
    o.fl=[lerp(f[1][0],q[1][0],bb),lerp(f[1][1],q[1][1],bb)-Math.sin(sm(.5,1,bb)*Math.PI)*5];o.lean=.04*face*(1-bb)}
  o.arr=b;return o;
}
function talk(tt,k){return (.5+.5*Math.sin(tt*15+k))*(.55+.45*Math.sin(tt*4.3+k*2))}
// ---------- props
function boards(x,y,ang,len,n,col){g.save();g.translate(x,y);g.rotate(ang);for(let i=0;i<n;i++){g.beginPath();g.roundRect(-len/2+i*7-7,-i*7-6,len,7,2);fo(tc(i%2?mixc(col,'#6B4A4E',.2):col),.8);g.strokeStyle=rgba('#FFE6C4',.25);g.lineWidth=1.5;g.beginPath();g.moveTo(-len/2+i*7,-i*7-4);g.lineTo(len/2+i*7-14,-i*7-4);g.stroke()}g.restore()}
function axeOnShoulder(x,y,face){g.save();g.translate(x,y);g.rotate(face*-.9);segs([[0,10,0,-70,5,tc('#A0704A')]]);g.beginPath();g.moveTo(-face*2,-62);g.lineTo(-face*22,-74);g.quadraticCurveTo(-face*28,-62,-face*22,-48);g.lineTo(-face*2,-56);g.closePath();fo(tc('#8C8FA3'),.8);g.restore()}
function rag(x,y,ang){g.save();g.translate(x,y);const sw=Math.sin(t*7)*4;g.beginPath();g.moveTo(-8,-6);g.quadraticCurveTo(6,-10,10,-2);g.quadraticCurveTo(8+sw*.5,14,4+sw,28);g.lineTo(-6+sw,26);g.quadraticCurveTo(-4,10,-8,-6);g.closePath();fo(tc('#CDB39C'),.8);g.strokeStyle=rgba('#8A7A70',.7);g.lineWidth=1.4;g.beginPath();g.moveTo(-2,0);g.lineTo(sw*.6,22);g.stroke();g.restore()}
function brackets(x,y,face){g.save();g.translate(x,y);for(let i=0;i<3;i++){const yy=-i*7,xx=i*4*face;g.beginPath();g.moveTo(xx-30,yy-10);g.lineTo(xx-30,yy);g.lineTo(xx+30,yy);g.lineTo(xx+30,yy-10);g.lineWidth=5+2*LW;g.strokeStyle=PAL.out;g.lineJoin='round';g.stroke();g.lineWidth=5;g.strokeStyle=tc(i===1?'#9A9EB2':'#8C8FA3');g.stroke();g.strokeStyle=rgba('#E1E4F0',.6);g.lineWidth=1.5;g.beginPath();g.moveTo(xx-26,yy-1);g.lineTo(xx+20,yy-1);g.stroke()}g.restore()}
function hemStones(x,y,face,k){g.save();g.translate(x,y);g.beginPath();g.moveTo(-22,-6);g.quadraticCurveTo(0,4,22,-6);g.quadraticCurveTo(26,26,0,34);g.quadraticCurveTo(-26,26,-22,-6);g.closePath();fo(tc('#B0A0A8'),.8);
  g.strokeStyle=tc('#7A6A80');g.lineWidth=1.5;g.beginPath();g.moveTo(-12,4);g.quadraticCurveTo(-8,20,0,28);g.moveTo(10,4);g.quadraticCurveTo(8,18,2,28);g.stroke();
  for(let i=0;i<4;i++){const bx=-12+i*8+Math.sin(t*9+i+k)*.8,by=-6+(i%2)*3;blob([[bx-6,by+2],[bx-4,by-5],[bx+3,by-6],[bx+6,by],[bx+2,by+5]]);fo(tc(i%2?'#7D7890':'#8E89A0'),.7)}g.restore()}
function palmUp(x,y,sd){g.save();g.translate(x,y);ell(0,-2,8,4.5,sd*.15);fo(tc(SKIN[0]),.7);g.strokeStyle=tc(SKIN[1]);g.lineWidth=1.3;for(let i=0;i<3;i++){g.beginPath();g.moveTo(sd*(3+i*1.5),-4-i);g.lineTo(sd*(9+i*1.5),-6-i*1.5);g.stroke()}ell(-sd*5,-5,2.6,3.6,-sd*.6);fo(tc(SKIN[0]),.6);g.restore()}
// hero's izba front on the action plane: log wall, carved okno, door (open 0..1)
function izbaFront(x0,x1,gy,h,dx,open){
  const top=gy-h;
  g.beginPath();g.rect(x0,top,x1-x0,h);g.fillStyle=tc('#5A3E48');g.fill();
  for(let y=top;y<gy;y+=24){const lg=g.createLinearGradient(0,y,0,y+24);lg.addColorStop(0,tc('#7A5A5C'));lg.addColorStop(.45,tc('#6B4A4E'));lg.addColorStop(1,tc('#3E2C3A'));g.fillStyle=lg;g.fillRect(x0,y+1,x1-x0,22);g.fillStyle=rgba('#1F2236',.55);g.fillRect(x0,y,x1-x0,2);
    ell(x1+6,y+12,11,11);fo(tc('#8A6A64'),.7);g.strokeStyle=rgba('#5A3E48',.8);g.lineWidth=1.2;g.beginPath();g.arc(x1+6,y+12,5,0,6.3);g.stroke()}
  brush(x0,top,x1-x0,h,'#8A6A64',17,40,.22);
  // eave with carved edge
  g.beginPath();g.moveTo(x0-40,top-30);g.lineTo(x1+40,top-30);g.lineTo(x1+40,top+4);for(let x=x1+40;x>x0-40;x-=16)g.quadraticCurveTo(x-8,top+16,x-16,top+4);g.closePath();fo(tc('#3E3048'));
  g.fillStyle=tc('#2E2440');g.fillRect(x0-40,top-60,x1-x0+80,30);
  // okno with nalichnik
  const wx=dx-190,wy=top+70;g.beginPath();g.rect(wx-34,wy,68,70);g.fillStyle=tc('#2A2440');g.fill();ol();
  g.save();g.beginPath();g.rect(wx-34,wy,68,70);g.clip();g.fillStyle=rgba('#F09A6C',.25);g.beginPath();g.moveTo(wx-34,wy+70);g.lineTo(wx+10,wy);g.lineTo(wx+30,wy);g.lineTo(wx-14,wy+70);g.fill();g.restore();
  g.strokeStyle=tc('#B9A6A2');g.lineWidth=4;g.beginPath();g.moveTo(wx,wy);g.lineTo(wx,wy+70);g.moveTo(wx-34,wy+30);g.lineTo(wx+34,wy+30);g.stroke();
  g.beginPath();g.moveTo(wx-50,wy-4);g.lineTo(wx,wy-30);g.lineTo(wx+50,wy-4);g.lineTo(wx+44,wy+4);g.lineTo(wx-44,wy+4);g.closePath();fo(tc('#B9A6A2'),.9);
  g.beginPath();g.rect(wx-46,wy+70,92,9);fo(tc('#B9A6A2'),.9);
  for(let i=0;i<5;i++){ell(wx-36+i*18,wy+84,4,5);fo(tc('#B9A6A2'),.6)}
  // doorway
  const dw=74,dh=198,hxL=dx-dw/2;
  g.beginPath();g.rect(hxL,gy-dh,dw,dh);const ig=g.createLinearGradient(0,gy-dh,0,gy);ig.addColorStop(0,'#16121F');ig.addColorStop(1,'#2A1E2E');g.fillStyle=ig;g.fill();
  glow(dx,gy-60,60,'#FFB36B',.18);
  // door leaf swinging toward the camera around the left hinge
  const a=open*1.25,fw=dw*Math.cos(a),gr=Math.sin(a)*10;
  g.beginPath();g.moveTo(hxL,gy-dh);g.lineTo(hxL+fw,gy-dh-gr);g.lineTo(hxL+fw,gy+gr*.6);g.lineTo(hxL,gy);g.closePath();g.fillStyle=tc(mixc('#6B4A4E','#3E2C3A',open*.5));g.fill();ol();
  g.strokeStyle=rgba('#2E2234',.8);g.lineWidth=2;for(let i=1;i<4;i++){g.beginPath();g.moveTo(hxL+fw*i/4,gy-dh-gr*i/4);g.lineTo(hxL+fw*i/4,gy+gr*.6*i/4);g.stroke()}
  if(fw>8){ell(hxL+fw*.82,gy-dh*.5,3,3);fo(tc('#8C8FA3'),.6)}
  // jambs, lintel, threshold log
  g.beginPath();g.rect(hxL-10,gy-dh-12,dw+20,12);fo(tc('#7A5A5C'),.9);for(const sd of[-1,1]){g.beginPath();g.rect(dx+sd*(dw/2+5)-5,gy-dh,10,dh);fo(tc('#7A5A5C'),.9)}
  g.beginPath();g.roundRect(hxL-16,gy-6,dw+32,12,6);fo(tc('#6B4A4E'),.9);
  // firewood stack and a broom by the wall
  for(let r=0;r<4;r++)for(let i=0;i<6-r;i++){ell(x0+80+i*22+r*11,gy-10-r*19,11,10);fo(tc(hash(i+r*7)>.5?'#8A6A64':'#7A5A5C'),.7);g.beginPath();g.arc(x0+80+i*22+r*11,gy-10-r*19,4,0,6.3);g.strokeStyle=rgba('#5A3E48',.7);g.lineWidth=1;g.stroke()}
}
// pecking hen (wanders slowly, head bobs)
function hen(x,y,s,seed){const pk=Math.max(0,Math.sin(t*3.1+seed*2))**6,dir=Math.sin(t*.35+seed)>0?1:-1,hx_=x+Math.sin(t*.35+seed)*14;g.save();g.translate(hx_,y);g.scale(s*dir,s);
  ell(0,-14,14,10,-.2);fo(tc(seed%2?'#D8C8C0':'#A0705A'),.8);poly([[-12,-18],[-22,-28],[-18,-12]],1);fo(tc(seed%2?'#C0B0AC':'#7A5048'),.8);
  const hy=lerp(-26,-6,pk),hxx=lerp(12,18,pk);segs([[8,-18,hxx,hy,5,tc(seed%2?'#D8C8C0':'#A0705A')]],1);ell(hxx,hy,5,5);fo(tc(seed%2?'#D8C8C0':'#A0705A'),.7);poly([[hxx+4,hy-1],[hxx+9,hy+1],[hxx+4,hy+2]],1);g.fillStyle=tc('#E0B060');g.fill();ell(hxx,hy-5,2.5,2.5);g.fillStyle=tc('#C04050');g.fill();
  g.strokeStyle=tc('#C89040');g.lineWidth=1.6;g.beginPath();g.moveTo(-2,-5);g.lineTo(-3,0);g.moveTo(3,-5);g.lineTo(4,0);g.stroke();g.restore()}
function burdock(x,y,s,seed){g.save();g.translate(x,y);g.scale(s,s);for(let i=0;i<5;i++){const a=-1.9+i*.45+Math.sin(t*1.1+i+seed)*.05;g.save();g.rotate(a+Math.PI/2);g.beginPath();g.moveTo(0,0);g.quadraticCurveTo(-26,-60,0,-110);g.quadraticCurveTo(26,-60,0,0);g.fillStyle=i%2?'#2A2238':'#241E34';g.fill();g.strokeStyle='#3A3050';g.lineWidth=2;g.beginPath();g.moveTo(0,0);g.lineTo(0,-100);g.stroke();g.restore()}g.restore()}

// ---------- cast (positions are continuous over the whole scene)
const PC=[CARP,-150,1,-.2,60,480,698,HS],PS=[SMITH,1000,-1,2.9,56,330,698,HS],PB=[BOY,860,-1,4.6,52,290,708,HS];
const W1=worker(2),W2=worker(0),W8=worker(8),WM2=woman(12,['#A0606A','#703E4A','#C08088']),BOY2=Object.assign({},BOY,{seed:16}),WM=woman(11,['#7A5A8A','#4E3A60','#9A7AAA']);
function cast(){
  const L=[];
  // planks man from the right: sets the boards down by the well
  {const o=walker(W1,760,-1,1.0,60,240,682,HS),sh=-238,dn=sm(6.2,6.9,t);
    if(dn<1){o.hl=[lerp(12,-30,dn),lerp(sh-10,-130,dn)];o.lean=lerp(o.lean,-.25,dn);const px=lerp(4,-40,dn),py=lerp(sh-16,-120,dn);o.itemL=()=>boards(px,py,lerp(.1,-.02,dn),230,3,'#A07A60')}
    else{o.lean=-.2*(1-sm(6.9,7.4,t));o.hr=[-40,-150+Math.sin(t*3)*4];o.em={look:[-.6,.3]}}
    L.push({o,C:W1})}
  // man with an axe from the left (enters after the door shot)
  {const o=walker(W2,60,1,2.2,64,200,684,HS);o.hr=[6,-246];o.itemR=(gg,ex,ey)=>axeOnShoulder(ex,ey,1);L.push({o,C:W2,gate:2.2})}
  // second well woman brings her bucket too
  {const o=walker(WM2,700,-1,1.4,50,120,678,HS);o.itemR=(gg,ex,ey)=>bucket(ex,ey+26,1.7,Math.sin(t*3)*.08,0);o.em={look:[-.5,.1],smile:.2};L.push({o,C:WM2})}
  // a man already crouching at the old log box, feeling the rotten logs
  {const o={x:322,y:700,s:HS,yaw:.95,t,hipY:-84,lean:.42,hipX:-6,fr:[34,0],fl:[-14,0],hr:[66+Math.sin(t*2.3)*6,-72],hl:[58,-96],em:{look:[.6,.5],browIn:.3},tilt:.15};L.push({o,C:W8})}
  // carpenter wiping his hands with a rag (right hand)
  {const o=walker(...PC),w=t*8.5;o.hl=[44,-150+Math.sin(t*2)*2];o.hr=[46+9*Math.cos(w),-146+6*Math.sin(w)];o.itemR=(gg,ex,ey)=>rag(ex+2,ey,0);
    o.em={look:[.2,.3],smile:.15};o.tilt=.12;L.push({o,C:CARP})}
  // smith with iron brackets at the chest, both hands
  {const o=walker(...PS);o.hr=[-40,-196];o.hl=[-30,-192];o.itemL=(gg,ex,ey)=>brackets(ex-6,ey-4,-1);o.em={look:[-.3,.1]};L.push({o,C:SMITH})}
  // two boys with stones in their shirt hems
  for(const k of[0,1]){const C=k?BOY2:BOY,o=walker(C,PB[1]+k*44,-1,PB[3]+k*.15,PB[4],PB[5],PB[6]+k*5,HS);o.hr=[-14,-78];o.hl=[-8,-76];o.itemL=(gg,ex,ey)=>hemStones(ex-4,ey+10,-1,k);o.em={look:[-.4+k*.5,.1],smile:.3};o.turn=k?.5*Math.sin(t*1.5):0;L.push({o,C})}
  // woman already waiting at the well with an empty bucket
  {const o={x:545,y:690,s:HS,yaw:-.35,t,em:{look:[-.6+.3*Math.sin(t*.7),.1]},itemR:(gg,ex,ey)=>bucket(ex,ey+26,1.7,Math.sin(t*1.2)*.05,0)};L.push({o,C:WM})}
  return L;
}
// elder near the well; shrug with palms up 11.9..
function elderO(){
  const look=sm(10.25,10.35,t),head=sm(10.32,10.55,t),body=sm(10.45,10.8,t);
  const sh=ease((t-11.95)/.4),pre=sm(11.8,11.95,t)*(1-sh);
  const o={x:EX,y:730,s:HS,yaw:lerp(lerp(-.35,-.75,body),-.42,sh),t,turn:lerp(.25,-.1,head)*(1-sh)-.2*sh,ls:1};
  o.em={look:[lerp(-.3,-.8,look),.1],brow:lerp(0,.85,sh),smile:lerp(0,-.45,sh),eyeOpen:lerp(1,1.15,sh),open:t>12.6?.12*talk(t,3)*sm(12.6,12.8,t):0};
  o.tilt=lerp(0,.12,sh);o.headDY=lerp(0,6,sh)+pre*-2;o.lean=lerp(0,.06,sh);
  const rest=[[-14,-150],[16,-148]],up=[[-92,-206],[92,-204]];
  o.hr=[lerp(rest[0][0],up[0][0],sh)+pre*4,lerp(rest[0][1],up[0][1],sh)+pre*8];o.hl=[lerp(rest[1][0],up[1][0],sh)-pre*4,lerp(rest[1][1],up[1][1],sh)+pre*8];
  if(sh>.5){o.itemR=(gg,ex,ey)=>palmUp(ex,ey,-1);o.itemL=(gg,ex,ey)=>palmUp(ex,ey,1)}
  return o;
}
// hero: steps out of the door and freezes; later walks to the elder and asks
function heroO(){
  let o;
  if(t<9){const d=40*ease(cl((t-.55)/.8,0,1)),x=78+d;o={x,y:GY,s:HS,yaw:.95,t};
    const ph=d/(110*HS);if(t<1.35&&t>.55)o.walk={d,st:110*HS};else{const f=gaitFeet(HERO,t<=.55?0:40,110*HS,HS,1);o.fr=f[0];o.fl=f[1];if(t<=.55){const q=standFeet(HERO,1,.95);o.fr=q[0];o.fl=q[1]}}
    // freeze: eyes, then head, then body
    const e=sm(1.5,1.6,t),hd=sm(1.58,1.8,t),bd=sm(1.7,2.0,t);
    o.em={look:[lerp(.2,.85,e),lerp(.2,-.1,e)],eyeOpen:lerp(1,1.3,e),brow:lerp(0,.8,e),open:.25*hd,blink:t>1.5&&t<1.57?1:0};
    o.tilt=lerp(.05,-.12,hd);o.turn=lerp(0,.15,hd);o.lean=lerp(.05,-.07,bd);o.medal='hidden';
    o.hl=t<1.0?[lerp(-30,30,sm(.5,1,t)),-160]:null;o.hr=bd>0?[lerp(18,30,bd),lerp(-60,-110,bd)]:null;
    void ph;
  }else{
    const d=wd(t,8.75,80,130),x=300+d;o={x,y:GY+10,s:HS,yaw:.95,t,medal:'hidden'};
    const ts=8.75+190/80,b=sm(ts,ts+.4,t);
    if(b<=0)o.walk={d,st:110*HS};else{const f=gaitFeet(HERO,d,110*HS,HS,1),q=standFeet(HERO,1,.85);o.fr=[lerp(f[0][0],q[0][0],b),lerp(f[0][1],q[0][1],b)-Math.sin(sm(0,.5,b)*Math.PI)*5];o.fl=[lerp(f[1][0],q[1][0],b),lerp(f[1][1],q[1][1],b)-Math.sin(sm(.5,1,b)*Math.PI)*5]}
    const ask=sm(10.65,11.05,t)*(1-sm(11.9,12.3,t)*.6);
    o.yaw=lerp(.95,.8,b);o.lean=lerp(.04,.08,ask)-sm(12.0,12.4,t)*.06;
    o.em={look:[.7,-.05],brow:.5*ask+.3*sm(12.1,12.4,t),browIn:.35*sm(12.1,12.5,t),open:t>10.75&&t<11.8?.4*talk(t,1):0,smile:0};
    o.tilt=-.06*ask;o.hr=ask>0?[lerp(16,56,ask),lerp(-55,-186,ask)]:null;if(ask>.6)o.itemR=(gg,ex,ey)=>palmUp(ex,ey,1);
  }
  o.ls=1;o.rimC=PAL.rim;o.rimA=.6;return o;
}
// opt.focus: characters kept sharp; everyone else on the action plane gets opt.bb px of depth-of-field blur
const WELLK={};
function world(bF,bM,bFg,opt){
  const foc=op(opt,'focus',null),bb=op(opt,'bb',0);
  villageWorld({tod:'day',bF,bM,fg:0,
    far:()=>{palisade(820,1300,600,46,4)},
    mid:()=>{ // far villagers drifting toward the square on the house plane
      for(let i=0;i<3;i++){const C=worker(5+i),f=i%2?1:-1,x0=i%2?-140+i*30:760-i*20,d=wd(t,i*.6,30,260);person(C,{x:x0+f*d,y:646+i*3,s:.3,yaw:.95*f,t,walk:{d,st:(C.l1+C.l2)*.76*.3},shadowA:.5})}},
    main:()=>{
      izbaFront(-560,120,GY-8,290,78,sm(.15,.75,t));
      // stones and boards already brought, piling up by the well
      const pile=sm(5,11,t);for(let i=0;i<Math.floor(3+pile*6);i++){blob([[480+i*9,697],[483+i*9,689-(i%3)*3],[490+i*9,688],[494+i*9,696]]);fo(tc(i%2?'#7D7890':'#8E89A0'),.6)}
      boards(250,700,0,150,Math.floor(1+pile*3),'#A07A60');
      hen(230,708,.62,1);hen(300,716,.6,2);hen(640,712,.58,3);
    }});
  const L=cast();L.push({o:elderO(),C:ELDER});L.push({o:heroO(),C:HERO,hero:1});L.push({o:{y:WGY},C:WELLK});
  L.sort((a,b)=>a.o.y-b.o.y);
  for(const a of L){if(a.gate&&t<a.gate)continue;
    layer(1,()=>{if(a.C===WELLK)well(WX,WGY,.85,0,Math.sin(t*.6)*.3);else person(a.C,a.o);
      // doorway shadow while the hero is still inside
      if(a.hero&&t<1.3){const k=1-sm(.5,1.25,t);g.beginPath();g.rect(78-37,GY-8-198,74,198);g.clip();g.fillStyle=rgba('#16121F',.75*k);g.fillRect(0,0,300,800)}
    },!foc||foc.includes(a.C)?0:bb)}
  layer(1,()=>grassRow(770,4,40,-600,1400,30,tc('#3E3A58')));
  layer(1.7,()=>{grassRow(980,7,40,-600,1400,90,'#241F36');g.fillStyle='#1E1830';g.fillRect(-800,975,2600,400)},bFg);
}
// ---------------- shot 0: door opens, hero steps out and freezes
if(S.i===0){
  const u=S.u;setCam(140+u*10,592-u*8,1.85+u*.12,-.01+u*.012);
  CAM.sx=kick(t,.3,2,.25);
  world(4,2.5,3,{focus:[HERO],bb:2});
  layer(1.35,()=>{burdock(-30,820,1.2,1);burdock(560,840,1,4)},4);
  motes(18,5,200,150,340,500,'#FFE6C4',.45,1.8);
}
// ---------------- shot 1: wide — people gather at the old well
if(S.i===1){
  const u=S.u;setCam(372-u*12,548-u*6,1.2+u*.07,.008-u*.016);
  world(0,0,2.5);
  leaves(8,4,0,200,540,600,'#C9926F');
}
// ---------------- shot 2: carpenter tracking — wipes his hands with the rag
if(S.i===2){
  const c=walker(...PC);setCam(c.x+42+S.u*6,598,1.95+S.u*.08,-.012);
  world(3,2,4,{focus:[CARP],bb:2.2});
  layer(1.4,()=>{burdock(c.x-160,860,1.1,2)},5);
  leaves(6,9,0,150,540,600,'#C9926F');
}
// ---------------- shot 3: smith, low medium — brackets at the chest
if(S.i===3){
  const c=walker(...PS);setCam(c.x-28-S.u*8,592,2.35+S.u*.1,.02);
  world(4,3,5,{focus:[SMITH],bb:2.5});
  motes(14,8,0,200,540,500,'#FFE6C4',.4,1.8);
}
// ---------------- shot 4: the two boys, low angle
if(S.i===4){
  const c=walker(...PB);setCam(c.x+24-S.u*10,642,2.3+S.u*.08,-.02+S.u*.01);
  world(4,3,4,{focus:[BOY,BOY2],bb:2.5});
  layer(1.4,()=>{burdock(c.x+150-S.u*40,880,1.3,5)},5);
  leaves(6,2,0,200,540,500,'#C9926F');
}
// ---------------- shot 5: hero walks to the elder and asks
if(S.i===5){
  const h=heroO(),u=S.u;setCam(lerp(h.x+60,475,sm(.45,1,u)),596,1.65+u*.15,.006);
  world(3,2,4,{focus:[HERO,ELDER],bb:1.6});
  motes(16,3,0,150,540,560,'#FFE6C4',.4,1.8);
}
// ---------------- shot 6: two-shot — elder shrugs, palms up
if(S.i===6){
  const u=S.u;setCam(486+u*6,588-u*6,2.45+u*.12,-.014);
  CAM.sy=kick(t,12.2,2,.25);
  world(4,2.5,4,{focus:[HERO,ELDER],bb:2.2});
  leaves(5,6,0,150,540,500,'#C9926F');
}
// ---------------- finishing
g.save();g.globalCompositeOperation='screen';beam(600,60,320,700,30,170,'#FFB36B',.14);g.restore();
vignette(.42);
grain(.05);
wash('#000000',cutDip(t,ST));
wash('#000000',1-sm(0,.4,t));
