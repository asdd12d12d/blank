// SCENE 1 — «Медальон в колее» (0 – 14.2)
const ST=[0,4.2,6.9,10.0,12.4];
const S=shot(t,ST);
TINT='#6C4377';TA=.12;
const MX=306,MY=722,GY=716,HS=.62;
// hero path: walks right, decelerates and stops near the medallion
function heroD(tt){if(tt<6.9)return 70*Math.max(0,tt-4.2);const u=Math.min(tt-6.9,.6);return 189+70*(u-u*u/1.2)}
const hx0=60;
const crouch=ease((t-7.75)/.85)*(1-ease((t-9.35)/.6)*.55);
const grab=t>9.05;
function heroPose(){
  const d=heroD(t),x=hx0+d;
  const o={x,y:GY,s:HS,yaw:.95,t,ls:1,rimC:PAL.rim,rimA:.7};
  if(t<7.5)o.walk={d,st:110*HS};
  else{const st=110,c=(210/HS)/st;const a=gait(c*st,0,0,1,1,st,9,0),b=gait(c*st,0,0,1,1,st,9,.5);o.fr=[a.fx,a.fy];o.fl=[b.fx,b.fy]}
  const cr=t>=7.5?crouch:0;
  o.hipY=lerp(-142.8,-84,cr);o.lean=lerp(.04,.42,cr);o.hipX=lerp(0,-6,cr);
  // look: eyes first, then head, then body
  const notice=sm(7.0,7.15,t),headN=sm(7.08,7.3,t);
  o.em={look:[.5*notice,.8*notice],brow:.5*notice*(1-sm(8.5,9,t)),open:.15*notice};
  o.tilt=.28*headN-.1*cr;o.turn=0;
  // left hand: bucket while walking, then sets it down on the knee
  if(t<7.9){o.itemL=(gg,ex,ey)=>bucket(ex,ey+30,1.7,Math.sin(t*5.5)*.08*(t<7?1:sm(7.9,7.2,t)),0)}
  else o.hl=[lerp(10,30,cr),-62];
  // right hand reaches medallion, lifts it toward the chest
  const reach=sm(8.3,9.05,t),lift=sm(9.35,9.95,t);
  if(t>=8.3){const tgt=[(MX-x)/HS,(MY-GY)/HS-4];o.hr=[lerp(lerp(18,tgt[0],reach),40,lift),lerp(lerp(-40,tgt[1],reach),-205,lift)];
    if(grab)o.itemR=(gg,ex,ey,an)=>medallion(ex+4,ey-2,9,an,lerp(.85,.7,lift),0)}
  o.headDY=0;return o;
}
function world(bF,bM,bFg,heroOn){
  villageWorld({tod:'dawn',bF,bM,bFg,main:()=>{
    // medallion lying in the rut until grabbed; dawn glint calls the hero
    if(!grab){g.save();g.translate(MX,MY);g.scale(1,.5);medallion(0,0,9,0,.8,0);g.restore();
      const gl=Math.max(0,Math.sin((t-6.95)*9))*sm(6.9,7.0,t)*(1-sm(7.6,7.9,t));if(gl>0)spark(MX-3,MY-3,14*gl,gl)}
    if(heroOn){const o=heroPose();if(t>=7.9)bucket(o.x-26*HS,GY-1,1.05,0,0);person(HERO,o)}
    grassRow(772,2,50,-600,1400,26,tc('#3E3A58'))}});
}
// ---------------- shot 0: macro of the rut
if(S.i===0){
  const u=t/4.2;setCam(270,500,1+u*.14,-.03+u*.03);
  layer(0,()=>{const gr=g.createLinearGradient(0,0,0,960);gr.addColorStop(0,'#6C4377');gr.addColorStop(.22,'#F09A6C');gr.addColorStop(.3,mixc(PAL.ground,PAL.far,.4));gr.addColorStop(1,'#1E1830');g.fillStyle=gr;g.fillRect(0,0,540,960)});
  // far misty road edge and silhouettes of houses, defocused
  layer(.3,()=>{hills(250,30,mixc(PAL.far,PAL.sky2,.4),6,-200,800);izba(120,262,120,60,9,.8,0);izba(420,258,110,58,8,.6,0);sun(330,215,14)},7);
  layer(.75,()=>{ // mud plane with perspective ruts
    g.fillStyle=tc('#3A2C44');g.beginPath();g.moveTo(-300,300);g.lineTo(840,300);g.lineTo(1100,1300);g.lineTo(-560,1300);g.closePath();g.fill();
    brush(-100,300,740,600,'#5A4458',4,80,.4);
    for(const k of[-1,1]){g.strokeStyle=rgba('#1F2236',.7);g.lineWidth=18;g.beginPath();g.moveTo(270+k*60,300);g.quadraticCurveTo(270+k*120,600,270+k*330,1100);g.stroke();g.strokeStyle=rgba('#F09A6C',.25);g.lineWidth=3;g.beginPath();g.moveTo(270+k*60+10,302);g.quadraticCurveTo(270+k*120+12,600,270+k*330+14,1100);g.stroke()}
  },2.5);
  layer(1,()=>{
    // puddle in the left rut reflecting the sky
    ell(170,640,150,48,-.15);const pg=g.createLinearGradient(40,600,300,680);pg.addColorStop(0,'#6C4377');pg.addColorStop(.6,'#F09A6C');pg.addColorStop(1,'#FFCF9A');g.fillStyle=pg;g.fill();ol(.8);
    g.save();ell(170,640,150,48,-.15);g.clip();clouds(620,4,11,'#FFE6C4',.25,10);g.restore();
    const drop=(t%1.4)/1.4;ripples(150,640,70,0,'#FFE6C4',.7);if(drop<.3){ell(150,520+drop/.3*120,2.5,4);g.fillStyle=rgba('#FFE6C4',.8);g.fill()}
    // medallion half in mud, lying flat
    g.save();g.translate(330,590);g.rotate(-.2);g.scale(1,.5);medallion(0,0,74,0,.62,.15+.25*Math.max(0,Math.sin(t*2.4-1))**4);g.restore();
    g.fillStyle=tc('#3A2C44');g.beginPath();g.moveTo(262,612);g.quadraticCurveTo(300,600,340,628);g.quadraticCurveTo(380,640,400,618);g.lineTo(410,660);g.lineTo(255,660);g.closePath();g.fill();
    brush(250,600,170,40,'#5A4458',8,14,.6);
    const gl=Math.max(0,Math.sin(t*2.4-1))**6;spark(300,578,36*gl+4,.3+gl*.7);
    // a boot steps into frame near the find
    const st=ease((t-3.35)/.45);if(t>3.2){const by=lerp(-120,560,st),bx=lerp(60,120,st);g.save();g.translate(bx,by);g.rotate(-.15+st*.15);segs([[ -8,-420,0,-150,74,tc(HERO.pants)],[0,-150,6,-60,66,tc(HERO.boots)]]);g.strokeStyle=rgba("#FFCF9A",.25);g.lineWidth=6;g.beginPath();g.moveTo(22,-140);g.lineTo(26,-70);g.stroke();g.beginPath();g.moveTo(-36,-70);g.quadraticCurveTo(-46,10,-30,18);g.lineTo(78,18);g.quadraticCurveTo(92,-10,34,-60);g.closePath();fo(tc(HERO.boots));g.restore();
      if(t>3.8){ripples(140,600,120,3.8,'#FFE6C4',.6);for(let i=0;i<8;i++){const u=cl((t-3.8)/.5,0,1),a=i/8*Math.PI+Math.PI;ell(120+Math.cos(a)*90*u,600+Math.sin(a)*60*u+u*u*80,5,4);g.fillStyle=rgba('#4A3848',1-u);g.fill()}}}
  });
  layer(1.6,()=>{grassRow(960,5,24,-100,700,260,'#241F36')},6);
  g.save();g.globalCompositeOperation='screen';beam(560,140,250,620,30,140,'#FFB36B',.22);g.restore();
  motes(26,3,0,200,540,500,'#FFE6C4',.5,1.8);
}
// ---------------- shot 1: wide village road, hero walks right
if(S.i===1){
  const x=hx0+heroD(t),u=S.u;
  setCam(x+60+u*20,560-u*10,1.0+u*.05,.01-u*.02);
  world(0,0,2.5,1);
  leaves(8,4,0,200,540,600,'#C9926F');
}
// ---------------- shot 2: medium — stops, notices, crouches and picks it up
if(S.i===2){
  const x=hx0+heroD(t),cr=crouch;
  setCam(lerp(x+40,x+30,cr),lerp(600,640,cr)-sm(9.35,10,t)*30,1.75+S.u*.08,-.015);
  CAM.sy=kick(t,9.05,2.5,.25);
  world(2,1.5,3,1);
  leaves(5,8,0,100,540,700,'#C9926F');
}
// ---------------- shot 3: insert — thumb wipes the mud off
if(S.i===3){
  const lt=S.lt;setCam(300,560,2.6+lt*.06,.02);
  world(8,6,8,0);
  layer(0,()=>{wash('#1F2236',.25);
    const cx=270,cy=470,R=96;
    // palm and curled fingers under the medallion
    ell(cx+30,cy+120,150,110,-.3);fo(tc(SKIN[0]));ell(cx-60,cy+140,60,40,-.4);g.fillStyle=rgba(SKIN[1],.35);g.fill();
    for(let i=0;i<3;i++){segs([[cx-118+i*12,cy-40+i*58,cx-92+i*10,cy+10+i*58,40,tc(SKIN[0])]])}
    const sw=[[.35,.85],[.95,1.45],[1.55,1.95]];let dirt=.88;for(const w of sw)dirt-=.29*sm(w[0],w[1],lt);
    const glow_=sm(1.95,2.3,lt)*.5;
    medallion(cx,cy,R,-.05,Math.max(0,dirt),glow_);
    // clean streak left by each swipe
    g.save();ell(cx,cy,R*.95,R*.95);g.clip();for(let k=0;k<3;k++){const p=sm(sw[k][0],sw[k][1],lt);if(p<=0)continue;g.strokeStyle=rgba('#E1C8B8',.25*(1-sm(1.9,2.3,lt)));g.lineWidth=36;g.beginPath();g.arc(cx+150,cy+160,200-k*34,-2.5,-2.5+p*1.1);g.stroke()}g.restore();
    // thumb sweeping arcs (pivot bottom-right)
    let a=-.25;for(const w of sw){const q=(lt-w[0])/(w[1]-w[0]);if(q>=0&&q<=1)a=lerp(-.25,-1.25,ease(q));else if(lt>w[1])a=lerp(a,-.25,sm(w[1],w[1]+.1,lt))}
    g.save();g.translate(cx+190,cy+230);g.rotate(a-.6);segs([[0,0,0,-170,72,tc(SKIN[0])],[0,-170,0,-250,58,tc(SKIN[0])]]);
    g.beginPath();g.roundRect(-20,-275,40,46,16);g.fillStyle=tc('#E7C6AD');g.fill();ol(.7);g.strokeStyle=rgba(SKIN[1],.6);g.lineWidth=3;g.beginPath();g.moveTo(-26,-170);g.quadraticCurveTo(0,-160,26,-172);g.stroke();g.restore();
    if(lt>1.95)spark(cx-40,cy-50,40*sm(1.95,2.15,lt)*(1-sm(2.2,2.4,lt))+6,.8);
  });
  motes(14,8,0,200,540,560,'#FFE6C4',.45,2);
}
// ---------------- shot 4: close-up — flash, transparent lines appear before the eyes
if(S.i===4){
  const lt=S.lt,fl=12.85;
  const x=hx0+heroD(t);
  setCam(x-2,553+lerp(5,0,ease(lt/1.8)),6.6+lt*.22,0);
  CAM.sx=kick(t,fl,4,.3);
  villageWorld({tod:"dawn",bF:9,bM:7,bFg:0,fg:0,main:()=>{
    const w=sm(fl-.2,fl+.1,t);
    const o={x,y:GY,s:HS,yaw:lerp(.75,.35,sm(12.5,12.9,t)),t,ls:1,rimC:PAL.rim,rimA:.8+w*.2,
      fr:[22,0],fl:[-28,0],tilt:lerp(.18,-.04,sm(12.6,12.85,t)),turn:0,
      em:{look:[lerp(.4,.1,w),lerp(.7,-.2,w)],brow:lerp(.2,1,w),open:lerp(.1,.55,w),eyeOpen:lerp(1,1.3,w),blink:t>fl&&t<fl+.12?1:0},
      hr:[10,-198],itemR:(gg,ex,ey,an)=>medallion(ex+4,ey-2,9,an,0,.4+w*.6)};
    person(HERO,o);
  }});
  // glass lines before the eyes
  const ap=sm(fl,fl+.25,t);
  for(let i=0;i<5;i++){const tt=t-fl-.1-i*.12;if(tt<0)continue;const q=eout(tt/.35),y=150+i*50+Math.sin(t*1.3+i)*3,w=(340-i*30)*q,xx=270-w/2+(i%2?14:-10);
    g.save();g.globalAlpha=.85*ap;g.shadowColor=rgba('#E1C8B8',.9);g.shadowBlur=18;g.beginPath();g.roundRect(xx,y,w,24,12);g.fillStyle=rgba('#241F4A',.35);g.fill();g.strokeStyle=rgba('#E1C8B8',.9);g.lineWidth=1.5;g.stroke();g.shadowBlur=0;
    for(let k=0;k<6;k++){const dx=xx+18+k*(w-36)/6,dw=((w-36)/6)*(.4+hash(i*7+k)*.5);if(dx+dw>xx+w-14)break;g.fillStyle=rgba('#FFE6C4',.6+.3*Math.sin(t*6+k+i));g.fillRect(dx,y+10,dw,4)}g.restore()}
  wash('#E1C8B8',.12*ap,'screen');
  const f=Math.max(0,1-Math.abs(t-fl)/.18);wash('#FFFFFF',f*.95);
}
// ---------------- finishing
g.save();g.globalCompositeOperation='multiply';wash('#6C4377',.12);g.restore();
vignette(.55);
grain(.05);
wash('#000000',cutDip(t,[0,4.2,6.9,10.0]));
wash('#000000',1-sm(0,.9,t));
