function(g,t,p,env){
const W=540,H=960;
const PAL={sky0:'#241F4A',sky1:'#6C4377',sky2:'#F09A6C',far:'#4B3463',ground:'#2C2140',key:'#FFB36B',rim:'#FFCF9A',out:'#1F2236'};
function cl(x,a,b){return x<a?a:x>b?b:x}
function lerp(a,b,u){return a+(b-a)*u}
function sm(a,b,x){const u=cl((x-a)/(b-a),0,1);return u*u*(3-2*u)}
function ease(u){u=cl(u,0,1);return u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2}
function eout(u){u=cl(u,0,1);return 1-Math.pow(1-u,3)}
function hash(n){const s=Math.sin(n*127.1+311.7)*43758.5453;return s-Math.floor(s)}
function nz(x){const i=Math.floor(x),f=x-i,u=f*f*(3-2*f);return lerp(hash(i),hash(i+1),u)*2-1}
function rot(x,y,a){const c=Math.cos(a),s=Math.sin(a);return [x*c-y*s,x*s+y*c]}
function op(o,k,d){return (o&&(k in o))?o[k]:d}
function hx(c){return [Number('0x'+c.slice(1,3)),Number('0x'+c.slice(3,5)),Number('0x'+c.slice(5,7))]}
function h2(n){return (256+Math.round(cl(n,0,255))).toString(16).slice(1)}
function mixc(a,b,u){const A=hx(a),B=hx(b);return '#'+h2(lerp(A[0],B[0],u))+h2(lerp(A[1],B[1],u))+h2(lerp(A[2],B[2],u))}
function rgba(c,a){const A=hx(c);return 'rgba('+A[0]+','+A[1]+','+A[2]+','+cl(a,0,1).toFixed(3)+')'}
function kick(t,e,amp,dur){const u=t-e;if(u<0||u>dur)return 0;return amp*Math.sin(u/dur*Math.PI*3)*(1-u/dur)}
function blink(t,seed){const per=2.4+hash(seed)*1.4,ph=((t+hash(seed+7)*per)%per+per)%per;return ph<.16?Math.sin(ph/.16*Math.PI):0}
function ik2(ax,ay,bx,by,l1,l2,px,py){const dx=bx-ax,dy=by-ay,d=Math.max(1e-3,Math.min(Math.hypot(dx,dy),l1+l2-1e-3)),a=Math.atan2(dy,dx),k=Math.acos(Math.max(-1,Math.min(1,(l1*l1+d*d-l2*l2)/(2*l1*d))));let j=null;for(const s of [1,-1]){const x=ax+l1*Math.cos(a+s*k),y=ay+l1*Math.sin(a+s*k),q=(x-px)**2+(y-py)**2;if(!j||q<j.q)j={x,y,q};}return {jx:j.x,jy:j.y,ex:ax+d*Math.cos(a),ey:ay+d*Math.sin(a)};}
function leg(hx,hy,fx,fy,l1,l2,face){return ik2(hx,hy,fx,fy,l1,l2,(hx+fx)/2+face*l1,(hy+fy)/2);}
function arm(sx,sy,hx,hy,l1,l2,side,face){return ik2(sx,sy,hx,hy,l1,l2,sx+side*l1*.6-face*l1*.3,sy+l1*1.1);}
function gait(t,hx,groundY,face,speed,stride,lift,ph){const c=((t*speed/stride+ph)%1+1)%1,st=.6,w=stride*st;if(c<st){const u=c/st;return {fx:hx+face*w*(.5-u),fy:groundY};}const u=(c-st)/(1-st),e=u*u*(3-2*u);return {fx:hx+face*w*(e-.5),fy:groundY-lift*Math.sin(Math.PI*u)};}
const CAM={x:270,y:480,z:1,r:0,sx:0,sy:0};
let LW=3;
let TINT='#241F4A',TA=0;
function setCam(x,y,z,r){CAM.x=x;CAM.y=y;CAM.z=z;CAM.r=r||0;CAM.sx=0;CAM.sy=0}
function layer(f,fn,blur){
  g.save();
  const z=1+(CAM.z-1)*f,cx=270+(CAM.x-270)*f,cy=480+(CAM.y-480)*f;
  if(blur>.4)g.filter='blur('+blur.toFixed(1)+'px)';
  g.translate(270+CAM.sx*f,480+CAM.sy*f);g.rotate(CAM.r*f);g.scale(z,z);g.translate(-cx,-cy);
  LW=3/z;fn(z);g.restore();LW=3;
}
function tc(c){return TA>0?mixc(c,TINT,TA):c}
function ol(w){g.lineWidth=(w||1)*LW;g.strokeStyle=PAL.out;g.lineJoin='round';g.lineCap='round';g.stroke()}
function fo(c,w){g.fillStyle=c;g.fill();ol(w)}
function poly(pts,close){g.beginPath();g.moveTo(pts[0][0],pts[0][1]);for(let i=1;i<pts.length;i++)g.lineTo(pts[i][0],pts[i][1]);if(close)g.closePath()}
function ell(x,y,rx,ry,a){g.beginPath();g.ellipse(x,y,Math.max(.01,rx),Math.max(.01,ry),a||0,0,Math.PI*2)}
function blob(pts){const n=pts.length;g.beginPath();let m=[(pts[n-1][0]+pts[0][0])/2,(pts[n-1][1]+pts[0][1])/2];g.moveTo(m[0],m[1]);for(let i=0;i<n;i++){const a=pts[i],b=pts[(i+1)%n];g.quadraticCurveTo(a[0],a[1],(a[0]+b[0])/2,(a[1]+b[1])/2)}g.closePath()}
function segs(S,noOl){g.lineCap='round';g.lineJoin='round';if(!noOl){g.strokeStyle=PAL.out;for(const s of S){g.lineWidth=s[4]+2*LW;g.beginPath();g.moveTo(s[0],s[1]);g.lineTo(s[2],s[3]);g.stroke()}}for(const s of S){g.strokeStyle=s[5];g.lineWidth=s[4];g.beginPath();g.moveTo(s[0],s[1]);g.lineTo(s[2],s[3]);g.stroke()}}
function segLight(x1,y1,x2,y2,w,col,a,ls){const d=Math.hypot(x2-x1,y2-y1)||1,nx=-(y2-y1)/d,ny=(x2-x1)/d,k=(nx*ls>0?1:-1)*w*.26;g.strokeStyle=rgba(col,a);g.lineWidth=w*.3;g.lineCap='round';g.beginPath();g.moveTo(x1+nx*k,y1+ny*k);g.lineTo(x2+nx*k,y2+ny*k);g.stroke()}
function brush(x,y,w,h,col,seed,n,a){g.save();g.strokeStyle=col;g.lineCap='round';for(let i=0;i<n;i++){const px=x+hash(seed+i*3.1)*w,py=y+hash(seed+i*5.7)*h,l=6+hash(seed+i*1.3)*w*.12,an=(hash(seed+i*2.9)-.5)*.5;g.globalAlpha=a*(.4+hash(seed+i*9.1)*.6);g.lineWidth=1.5+hash(seed+i*4.4)*3;g.beginPath();g.moveTo(px,py);g.quadraticCurveTo(px+l*.5,py+Math.sin(an)*l*.5-2,px+l*Math.cos(an),py+l*Math.sin(an));g.stroke()}g.restore()}
const SKIN=['#C98972','#885C70','#F2B895'];
const HERO={seed:1,r:24,l1:72,l2:72,a1:54,a2:50,torso:96,neck:10,sw:62,hw:44,thigh:24,shin:19,uarm:15,farm:13,foot:26,
  skin:SKIN,hair:['#49384F','#302B49','#79566A'],hairStyle:'short',top:['#B9A6A2','#79677F','#E7C6AD'],pants:'#3B3352',boots:'#2B2338',belt:'#7A4E4A',hem:34,mole:1,collar:1,cord:'#5A4A44'};
const NEIGH={seed:2,r:23,l1:60,l2:60,a1:46,a2:42,torso:80,neck:7,sw:72,hw:54,thigh:24,shin:18,uarm:16,farm:13,foot:22,
  skin:SKIN,hair:['#5A3F4A','#3A2A3A','#7A5A64'],hairStyle:'kerchief',kerchief:['#8E4F5E','#5E3346','#C07884'],braid:1,top:['#D9C2B0','#9C8494','#F2DCC8'],skirt:['#5E4C72','#3E3254','#7E6A92'],apron:'#CDB39C',boots:'#3A2E3E',dress:1,blush:'#D98A80'};
const ELDER={seed:3,r:25,l1:80,l2:80,a1:58,a2:54,torso:104,neck:8,sw:64,hw:46,thigh:24,shin:19,uarm:16,farm:14,foot:27,stoop:.16,
  skin:SKIN,hair:['#A9A2B4','#6F6884','#D2CCDA'],hairStyle:'hat',hat:['#4A3A55','#2E2440','#6A5878'],beard:['#A9A2B4','#6F6884','#D2CCDA'],beardLen:1.75,brows:1,top:['#5B4A6E','#3A2E4E','#7E6A90'],kaftan:1,pants:'#3B3352',boots:'#2B2338',belt:'#8A6A4A',hem:84};
const CARP={seed:4,r:24,l1:72,l2:72,a1:54,a2:50,torso:94,neck:9,sw:70,hw:50,thigh:25,shin:20,uarm:16,farm:12,foot:27,
  skin:SKIN,hair:['#7A4E3E','#4E3236','#9A6A54'],hairStyle:'bald',beard:['#7A4E3E','#4E3236','#9A6A54'],beardLen:1.2,top:['#8C7F92','#5E5470','#B2A6B4'],rolled:1,apron:'#7A5A48',pants:'#3B3352',boots:'#2B2338',belt:'#5A4048',hem:30};
const SMITH={seed:5,r:25,l1:74,l2:74,a1:56,a2:52,torso:100,neck:10,sw:84,hw:56,thigh:28,shin:22,uarm:19,farm:16,foot:28,
  skin:SKIN,hair:['#2E2838','#1F1A2A','#4A4058'],hairStyle:'short',beard:['#2E2838','#1F1A2A','#4A4058'],beardLen:1.45,top:['#6D6280','#4A4060','#8E84A0'],rolled:1,apron:'#4E3A40',pants:'#2E2840',boots:'#231C30',belt:'#3A2C34',hem:30};
const BOY={seed:6,r:20,l1:42,l2:42,a1:32,a2:30,torso:56,neck:5,sw:40,hw:32,thigh:16,shin:13,uarm:11,farm:10,foot:17,
  skin:SKIN,hair:['#79566A','#4E3A50','#A07A88'],hairStyle:'short',top:['#B0A0A8','#7A6A80','#D8C8C8'],pants:'#4B3463',boots:'#C98972',bare:1,belt:'#6B5050',hem:20};
const GRANNY={seed:7,r:21,l1:54,l2:54,a1:42,a2:38,torso:72,neck:5,sw:56,hw:48,thigh:20,shin:16,uarm:13,farm:11,foot:20,stoop:.42,
  skin:SKIN,hair:['#D8CFE0','#9A90A8','#F0E8F2'],hairStyle:'kerchief',kerchief:['#D8CFE0','#9A90A8','#F4ECF4'],top:['#9A8AA0','#6A5C78','#C0B0C4'],skirt:['#4A3D5C','#302844','#6A5A7E'],apron:'#8A7A90',boots:'#2E2438',dress:1};
function woman(seed,kc){return {seed,r:22,l1:62,l2:62,a1:46,a2:42,torso:82,neck:7,sw:62,hw:50,thigh:22,shin:17,uarm:15,farm:12,foot:22,skin:SKIN,hair:['#49384F','#302B49','#79566A'],hairStyle:'kerchief',kerchief:kc,top:['#C8B4AC','#8C7890','#E8D4C8'],skirt:['#6A4E6E','#46344E','#8A6E8E'],apron:'#B8A090',boots:'#3A2E3E',dress:1,blush:'#D98A80'}}
function worker(seed){const sh=[['#8C7F92','#5E5470','#B2A6B4'],['#79677F','#4E4060','#A08EA4'],['#9C8478','#6A5460','#C0A496']][seed%3];return {seed,r:23,l1:72,l2:72,a1:54,a2:50,torso:94,neck:9,sw:66,hw:48,thigh:24,shin:19,uarm:15,farm:13,foot:26,skin:SKIN,hair:[['#49384F','#302B49','#79566A'],['#5A4048','#3A2A36','#7A5A60'],['#3A3046','#262036','#5A4E66']][seed%3],hairStyle:seed%2?'short':'bald',beard:seed%3===1?null:[['#49384F','#302B49','#79566A'],['#5A4048','#3A2A36','#7A5A60'],['#3A3046','#262036','#5A4E66']][seed%3],beardLen:1.2,top:sh,pants:'#3B3352',boots:'#2B2338',belt:'#5A4048',hem:30}}
function headPath(r,yw){g.beginPath();const sx=Math.sin(yw);for(let i=0;i<=28;i++){const a=i/28*Math.PI*2,c=Math.cos(a),s=Math.sin(a);let x=.84*r*c,y=r*s-.04*r;if(s>0){x*=1-.2*s;x+=.1*r*sx*s;y=1.03*r*s-.04*r}if(i)g.lineTo(x,y);else g.moveTo(x,y)}g.closePath()}
function head(C,o,yw,r){
  const sx=Math.sin(yw),z=Math.cos(yw),ls=op(o,'ls',1);
  const sk=C.skin.map(tc),em=o.em||{};
  const bl=Math.max(op(em,'blink',0),blink(op(o,'t',t),C.seed*3.3)),lk=op(em,'look',[0,0]);
  // back hair / braid root / kerchief back
  if(C.hairStyle==='kerchief'){const k=C.kerchief.map(tc);ell(-sx*r*.1,-.08*r,r*1.02,r*1.1);fo(k[0])}
  if(C.hairStyle==='hat'){const h=C.hair.map(tc);ell(-sx*r*.35,.05*r,r*.8,r*.75);fo(h[0])}
  // ear
  for(const sd of [-1,1]){const e=Math.cos(sd*Math.PI/2+yw);if(e>-.25&&e<.7){const ex=.86*r*Math.sin(sd*Math.PI/2+yw);ell(ex,.12*r,.16*r,.22*r);fo(sk[0]);g.beginPath();g.arc(ex,.12*r,.07*r,0,Math.PI*2);g.fillStyle=sk[1];g.fill()}}
  headPath(r,yw);g.fillStyle=sk[0];g.fill();
  g.save();headPath(r,yw);g.clip();
  const gr=g.createLinearGradient(-r*ls,0,r*ls,0);gr.addColorStop(0,rgba(sk[1],.75));gr.addColorStop(.45,rgba(sk[1],0));gr.addColorStop(.85,rgba(sk[2],.0));gr.addColorStop(1,rgba(sk[2],.7));g.fillStyle=gr;g.fillRect(-r*1.2,-r*1.2,r*2.4,r*2.4);
  if(C.blush){g.fillStyle=rgba(C.blush,.35);for(const sd of[-1,1]){const a=sd*.55+yw;if(Math.cos(a)>.2){ell(.8*r*Math.sin(a),.32*r,.17*r,.1*r);g.fill()}}}
  if(o.rimC){g.translate(-ls*r*.16,r*.04);headPath(r,yw);g.strokeStyle=rgba(o.rimC,op(o,'rimA',.85));g.lineWidth=r*.16;g.stroke()}
  g.restore();
  headPath(r,yw);ol();
  // eyes
  const bu=op(em,'brow',0),bi=op(em,'browIn',0),sh=op(em,'eyeOpen',1);
  for(const sd of [-1,1]){
    const a=sd*.4+yw,ez=Math.cos(a);if(ez<.12)continue;
    const ex=.82*r*Math.sin(a),ey=-.04*r,ew=.15*r*Math.sqrt(ez),eh=.11*r*sh*(1-bl)+.012*r;
    if(r*3/LW>30){ell(ex,ey,ew*1.05,eh*1.05);g.fillStyle='#EFE2DA';g.fill();g.save();ell(ex,ey,ew*1.05,eh*1.05);g.clip();ell(ex+lk[0]*ew*.45,ey+lk[1]*eh*.35,ew*.62,ew*.62);g.fillStyle='#3A2A3E';g.fill();ell(ex+lk[0]*ew*.45,ey+lk[1]*eh*.35,ew*.3,ew*.3);g.fillStyle=PAL.out;g.fill();ell(ex+lk[0]*ew*.45+ew*.2,ey-eh*.3,ew*.16,ew*.16);g.fillStyle='#FFF4EA';g.fill();g.restore();
      g.beginPath();g.ellipse(ex,ey,ew*1.08,eh*1.08,0,Math.PI*1.05,Math.PI*1.95);g.strokeStyle=PAL.out;g.lineWidth=Math.max(LW,r*.04);g.stroke();}
    else{ell(ex+lk[0]*ew*.3,ey,ew*.55,eh);g.fillStyle=PAL.out;g.fill()}
    // brow
    const by=-.27*r-bu*.09*r,inner=-sd*bi*.08*r;g.beginPath();g.moveTo(ex-sd*ew*-1.3,by+(sd>0?inner:-inner)*0+(-bi*.08*r)*0);
    const x1=ex+(sd>0?-1:1)*ew*1.2,x2=ex-(sd>0?-1:1)*ew*1.3;g.moveTo(x1,by-bi*.09*r);g.quadraticCurveTo(ex,by-.05*r,x2,by+bi*.03*r);
    g.strokeStyle=tc(C.brows?C.hair[1]:C.hair[1]);g.lineWidth=r*(C.brows?.11:.07);g.lineCap='round';g.stroke();
    if(C.mole&&sd>0){const ma=.52+yw;if(Math.cos(ma)>.25){ell(.8*r*Math.sin(ma),.14*r,.035*r,.035*r);g.fillStyle='#5E3F55';g.fill()}}
  }
  // nose
  const nx=.86*r*sx;
  if(Math.abs(sx)>.55){g.beginPath();g.moveTo(nx-sx*.05*r,-.04*r);g.lineTo(nx+sx*.16*r,.2*r);g.lineTo(nx-sx*.02*r,.25*r);g.fillStyle=sk[0];g.fill();g.beginPath();g.moveTo(nx-sx*.03*r,-.02*r);g.lineTo(nx+sx*.16*r,.2*r);g.lineTo(nx-sx*.02*r,.25*r);ol(.8)}
  else{g.beginPath();g.moveTo(nx*.92,-.02*r);g.lineTo(nx*.92+sx*.06*r+.03*r,.18*r);g.lineTo(nx*.92-.05*r,.22*r);g.strokeStyle=sk[1];g.lineWidth=r*.06;g.lineCap='round';g.lineJoin='round';g.stroke()}
  // mouth
  const sm_=op(em,'smile',0),mo=op(em,'open',0),mx=.8*r*Math.sin(yw*1.02),mw=.2*r*(.55+.45*z);
  if(!C.beard||C.beardLen<1.3||true){
    g.beginPath();g.moveTo(mx-mw,.5*r-sm_*.06*r);g.quadraticCurveTo(mx,.5*r+sm_*.1*r+mo*.18*r,mx+mw,.5*r-sm_*.06*r);
    if(mo>.05){g.quadraticCurveTo(mx,.5*r-mo*.05*r,mx-mw,.5*r-sm_*.06*r);g.fillStyle='#4A2238';g.fill()}
    g.strokeStyle=PAL.out;g.lineWidth=Math.max(LW*.8,r*.05);g.lineCap='round';g.stroke();
  }
  // hair
  if(C.hairStyle==='short'||C.hairStyle==='bald')hairShort(C,r,yw);
  if(C.beard)beard(C,r,yw,mo);
  if(C.hairStyle==='kerchief')kerchief(C,r,yw);
  if(C.hairStyle==='hat')hat(C,r,yw);
}
function hairShort(C,r,yw){
  const h=C.hair.map(tc),sx=Math.sin(yw),bald=C.hairStyle==='bald';
  if(bald){ // side/back band only
    g.beginPath();const bs=sx>0?-1:1;g.moveTo(bs*.86*r,-.25*r);g.quadraticCurveTo(bs*.96*r,.2*r,bs*.6*r,.42*r);g.lineTo(bs*.45*r,.1*r);g.quadraticCurveTo(bs*.55*r,-.2*r,bs*.86*r,-.25*r);fo(h[0],.8);return}
  const lY=sx>0?lerp(-.05,.45,sx):lerp(-.05,-.25,-sx),rY=sx<0?lerp(-.05,.45,-sx):lerp(-.05,-.25,sx);
  const pL=Math.PI-Math.asin(cl(lY,-1,1)),pR=Math.PI*2+Math.asin(cl(rY,-1,1));
  g.beginPath();
  for(let i=0;i<=18;i++){const a=lerp(pL,pR,i/18);const x=.92*r*Math.cos(a),y=1.06*r*Math.sin(a)-.06*r;if(i)g.lineTo(x,y);else g.moveTo(x,y)}
  const x0=.92*r*Math.cos(pR),y0=1.06*r*Math.sin(pR)-.06*r,x1=.92*r*Math.cos(pL),y1=1.06*r*Math.sin(pL)-.06*r;
  const fx=.84*r*sx;
  for(let i=1;i<=9;i++){const u=i/10;let x=lerp(x0,x1,u),y=lerp(y0,y1,u);const fr=Math.max(0,1-Math.abs(x-fx)/(r*.9));y=lerp(y,-.4*r,Math.min(1,fr*1.6));y+=(i%2?.13:-.02)*r*(.6+.4*hash(i+C.seed));x+=(i%2?.04:0)*r;g.lineTo(x,y)}
  g.lineTo(x1,y1);g.closePath();fo(h[0]);
  g.strokeStyle=h[1];g.lineWidth=r*.05;for(let i=0;i<4;i++){const a=lerp(pL,pR,.2+i*.18);g.beginPath();g.moveTo(.6*r*Math.cos(a),.7*r*Math.sin(a));g.quadraticCurveTo(.75*r*Math.cos(a+.15),.85*r*Math.sin(a+.1),.88*r*Math.cos(a+.25),.98*r*Math.sin(a+.2)-.06*r);g.stroke()}
  g.strokeStyle=rgba(h[2],.8);g.lineWidth=r*.07;g.beginPath();g.arc(-sx*.1*r,-.1*r,.78*r,-2.2,-1.3);g.stroke();
}
function beard(C,r,yw,mo){
  const b=C.beard.map(tc),sx=Math.sin(yw),L=C.beardLen,cx=.6*r*sx;
  g.beginPath();g.moveTo(-.8*r+sx*.25*r,.05*r);g.quadraticCurveTo(-.85*r+sx*.3*r,(L*.7)*r,cx,L*r);g.quadraticCurveTo(.85*r+sx*.3*r,(L*.7)*r,.8*r+sx*.25*r,.05*r);
  g.quadraticCurveTo(.5*r+sx*.3*r,.45*r,cx+.25*r,.42*r);g.quadraticCurveTo(cx,.32*r,cx-.25*r,.42*r);g.quadraticCurveTo(-.5*r+sx*.3*r,.45*r,-.8*r+sx*.25*r,.05*r);g.closePath();fo(b[0]);
  g.strokeStyle=b[1];g.lineWidth=r*.05;for(let i=0;i<5;i++){const x=cx+(i-2)*.2*r;g.beginPath();g.moveTo(x,.55*r);g.quadraticCurveTo(x+.05*r,(L*.75)*r,x*.8+cx*.2,(L-.15)*r);g.stroke()}
  g.strokeStyle=rgba(b[2],.7);g.lineWidth=r*.06;g.beginPath();g.moveTo(cx-.3*r,.6*r);g.quadraticCurveTo(cx-.2*r,L*.6*r,cx-.05*r,(L-.2)*r);g.stroke();
  // mouth line over beard
  g.beginPath();g.moveTo(cx-.15*r,.5*r);g.quadraticCurveTo(cx,.5*r+mo*.15*r,cx+.15*r,.5*r);g.strokeStyle=PAL.out;g.lineWidth=r*.06;g.stroke();
}
function kerchief(C,r,yw){
  const k=C.kerchief.map(tc),sx=Math.sin(yw),cx=.8*r*sx;
  g.beginPath();
  for(let i=0;i<=16;i++){const a=lerp(Math.PI*.82,Math.PI*2.18,i/16);const x=1.0*r*Math.cos(a)-sx*.06*r,y=1.08*r*Math.sin(a)-.08*r;if(i)g.lineTo(x,y);else g.moveTo(x,y)}
  for(let i=16;i>=0;i--){const a=lerp(Math.PI*.95,Math.PI*2.05,i/16);const x=.7*r*Math.cos(a)+cx*.35,y=.66*r*Math.sin(a)-.02*r;g.lineTo(x,y)}
  g.closePath();fo(k[0]);
  g.strokeStyle=k[1];g.lineWidth=r*.05;g.beginPath();g.arc(cx*.3,-.05*r,.86*r,-2.6,-.5);g.stroke();
  g.fillStyle=rgba(k[2],.6);for(let i=0;i<5;i++){const a=-2.5+i*.45;ell(.88*r*Math.cos(a)+cx*.2,.88*r*Math.sin(a)-.05*r,.05*r,.05*r);g.fill()}
  // knot under chin
  const kx=cx*.55,ky=1.0*r;ell(kx,ky,.16*r,.11*r);fo(k[0],.8);
  poly([[kx,ky],[kx-.25*r,ky+.42*r],[kx-.05*r,ky+.4*r]],1);fo(k[0],.8);poly([[kx,ky],[kx+.22*r,ky+.4*r],[kx+.04*r,ky+.42*r]],1);fo(k[1],.8);
}
function hat(C,r,yw){const h=C.hat.map(tc),sx=Math.sin(yw);g.beginPath();g.moveTo(-.98*r,-.3*r);g.quadraticCurveTo(-1.0*r-sx*.1*r,-1.35*r,-sx*.1*r,-1.4*r);g.quadraticCurveTo(1.0*r-sx*.1*r,-1.35*r,.98*r,-.3*r);g.quadraticCurveTo(0,-.45*r,-.98*r,-.3*r);g.closePath();fo(h[0]);
  g.beginPath();g.moveTo(-1.02*r,-.28*r);g.quadraticCurveTo(0,-.5*r,1.02*r,-.28*r);g.lineTo(1.0*r,-.12*r);g.quadraticCurveTo(0,-.32*r,-1.0*r,-.12*r);g.closePath();fo(h[1]);
  g.strokeStyle=rgba(h[2],.7);g.lineWidth=r*.08;g.beginPath();g.moveTo(.4*r-sx*.2*r,-1.2*r);g.quadraticCurveTo(.75*r,-1*r,.8*r,-.5*r);g.stroke()}
function medallion(x,y,R,ang,dirt,glow){
  g.save();g.translate(x,y);g.rotate(ang||0);
  if(glow>0){const gr=g.createRadialGradient(0,0,R*.3,0,0,R*3.2);gr.addColorStop(0,rgba('#FFE8C8',.55*glow));gr.addColorStop(1,rgba('#FFB36B',0));g.fillStyle=gr;g.fillRect(-R*3.3,-R*3.3,R*6.6,R*6.6)}
  const m=['#9A9AAB','#615C79','#E1C8B8'].map(tc);
  ell(0,0,R,R);fo(m[1],1);ell(0,0,R*.86,R*.86);const gr=g.createLinearGradient(-R,-R,R,R);gr.addColorStop(0,m[2]);gr.addColorStop(.5,m[0]);gr.addColorStop(1,m[1]);g.fillStyle=gr;g.fill();
  g.strokeStyle=m[1];g.lineWidth=R*.07;g.lineCap='round';g.lineJoin='round';
  // mill
  g.beginPath();g.moveTo(-R*.2,R*.12);g.lineTo(-R*.13,-R*.32);g.lineTo(R*.13,-R*.32);g.lineTo(R*.2,R*.12);g.closePath();g.stroke();
  const ba=(glow>0?t*1.5:0.3);for(let i=0;i<4;i++){const a=ba+i*Math.PI/2;g.beginPath();g.moveTo(0,-R*.36);g.lineTo(Math.cos(a)*R*.42,-R*.36+Math.sin(a)*R*.42);g.stroke()}
  // three ears
  for(let i=-1;i<=1;i++){const ex=i*R*.26,ey=R*.62;g.beginPath();g.moveTo(ex,ey);g.quadraticCurveTo(ex+i*R*.05,R*.4,ex+i*R*.08,R*.22);g.stroke();for(let k=0;k<3;k++){ell(ex+i*R*.07-(k%2?R*.04:-R*.04),R*.3+k*R*.07,R*.04,R*.06,(k%2?.5:-.5));g.fillStyle=m[1];g.fill()}}
  ell(-R*.35,-R*.4,R*.18,R*.1,-.7);g.fillStyle=rgba('#FFFFFF',.35);g.fill();
  if(dirt>0){g.save();ell(0,0,R*.98,R*.98);g.clip();g.globalAlpha=dirt;for(let i=0;i<7;i++){ell((hash(i)-.5)*R*1.3,(hash(i+9)-.5)*R*1.3,R*(.35+hash(i+3)*.4),R*(.3+hash(i+5)*.3),hash(i+2)*3);g.fillStyle=i%2?'#4A3848':'#5A4450';g.fill()}g.restore()}
  ell(0,0,R,R);ol();
  g.restore();
}
function person(C,o){
  const s=op(o,'s',1),yaw=op(o,'yaw',0),sy=Math.sin(yaw),cy=Math.cos(yaw),face=sy>.3?1:sy<-.3?-1:0;
  const tt=op(o,'t',t),ls=op(o,'ls',1);
  g.save();g.translate(o.x,o.y);g.scale(s,s);const LW0=LW;LW=LW/s;
  const sk=C.skin.map(tc),top=C.top.map(tc),pants=tc(C.pants||C.skirt[1]),boots=tc(C.boots);
  const L1=C.l1,L2=C.l2,A1=C.a1,A2=C.a2;
  const br=Math.sin(tt*2*Math.PI/3.4+C.seed)*op(o,'breath',1);
  let fr=o.fr,fl=o.fl,bob=0,swR=0,swL=0;
  const wk=o.walk;
  if(wk&&face){const st=wk.st/s,d=wk.d/s,lift=op(wk,'lift',(L1+L2)*.09);const a=gait(d,0,0,face,1,st,lift,0),b=gait(d,0,0,face,1,st,lift,.5);fr=[a.fx,a.fy];fl=[b.fx,b.fy];const c=((d/st)%1+1)%1;bob=2.5*Math.cos(4*Math.PI*c);swR=-a.fx*.55;swL=-b.fx*.55}
  const rx=-cy*C.hw*.36,lx=cy*C.hw*.36;
  if(!fr)fr=[rx*1.1+face*6,0];if(!fl)fl=[lx*1.1-face*5,0];
  const hipY=op(o,'hipY',-(.95*(L1+L2)+6))+bob+op(o,'hipDY',0),hipX=op(o,'hipX',0);
  const lean=op(o,'lean',0)+face*(C.stoop||0);
  const zR=sy,zL=-sy;
  // legs
  function legDraw(hx0,fp,z){
    const hx_=hipX+hx0,hy_=hipY,ax=fp[0],ay=fp[1]-6;
    let k;if(face)k=leg(hx_,hy_,ax,ay,L1,L2,face);else{k=ik2(hx_,hy_,ax,ay,L1,L2,(hx_+ax)/2+Math.sign(hx0||1)*L1*.25,(hy_+ay)/2);const ux=k.ex-hx_,uy=k.ey-hy_,ul=Math.hypot(ux,uy)||1,al=((k.jx-hx_)*ux+(k.jy-hy_)*uy)/ul,px=hx_+ux/ul*al,py=hy_+uy/ul*al;k.jx=px+(k.jx-px)*.3;k.jy=py+(k.jy-py)*.3}
    const bx=lerp(k.jx,k.ex,.55),by=lerp(k.jy,k.ey,.55);
    const pc=z<0?mixc(pants,PAL.out,.25):pants,bc=C.bare?(z<0?mixc(sk[0],sk[1],.4):sk[0]):(z<0?mixc(boots,PAL.out,.2):boots);
    segs([[hx_,hy_,k.jx,k.jy,C.thigh,pc],[k.jx,k.jy,bx,by,C.shin,pc],[bx,by,k.ex,k.ey,C.shin+(C.bare?-2:2),bc]]);
    if(z>=0)segLight(k.jx,k.jy,k.ex,k.ey,C.shin,'#FFCF9A',.25,ls);
    // foot
    const fl_=C.foot,lift=cl((-fp[1])/(L1*.15),0,1);g.save();g.translate(k.ex,k.ey+3);
    const fd=face||(hx0<0?-.3:.3);g.rotate(face?face*lift*.35:0);
    g.beginPath();g.moveTo(-fd*fl_*.3,-6);g.quadraticCurveTo(-fd*fl_*.4,5,-fd*fl_*.2,6);g.lineTo(fd*fl_*.75,6);g.quadraticCurveTo(fd*fl_*.85,-1,fd*fl_*.25,-5);g.closePath();fo(bc);g.restore();
    return k;
  }
  // arms
  const sc=rot(0,-C.torso-br*.8,lean);const scx=hipX+sc[0],scy=hipY+sc[1];
  const sR=rot(-cy*C.sw*.5,0,lean),sL=rot(cy*C.sw*.5,0,lean);
  function armDraw(sd,z){
    const so=sd<0?sR:sL,sx_=scx+so[0],sy_=scy+so[1]+(Math.abs(cy)<.5?3:0);
    const side=cl(Math.sign(so[0])*Math.abs(cy)*1.4,-1,1);
    let hp=sd<0?o.hr:o.hl;
    if(!hp){const sw=(sd<0?swR:swL);hp=[sx_+side*4+sw+face*2,sy_+(A1+A2)*.96+br*.5]}
    const k=arm(sx_,sy_,hp[0],hp[1],A1,A2,side,face||(sd<0?-.0:0));
    const tc_=z<0?mixc(top[0],top[1],.45):top[0];
    const fa=C.rolled?(z<0?mixc(sk[0],sk[1],.4):sk[0]):tc_;
    const wx=lerp(k.jx,k.ex,.92),wy=lerp(k.jy,k.ey,.92);
    segs([[sx_,sy_,k.jx,k.jy,C.uarm,tc_],[k.jx,k.jy,wx,wy,C.farm,fa]]);
    if(z>=0)segLight(sx_,sy_,k.jx,k.jy,C.uarm,top[2],.5,ls);
    if(C.rolled){g.strokeStyle=tc_;g.lineWidth=C.farm+3;g.beginPath();const cx_=lerp(k.jx,k.ex,.12),cy_=lerp(k.jy,k.ey,.12);g.moveTo(k.jx,k.jy);g.lineTo(cx_,cy_);g.stroke()}
    const it=sd<0?o.itemR:o.itemL,ang=Math.atan2(k.ey-k.jy,k.ex-k.jx);
    ell(k.ex,k.ey,C.farm*.5,C.farm*.55,ang);fo(z<0?mixc(sk[0],sk[1],.4):sk[0]);
    if(it){g.save();LW=LW;it(g,k.ex,k.ey,ang);g.restore()}
    return k;
  }
  const ordered=[];
  // contact shadow
  g.save();g.globalAlpha=.35*op(o,'shadowA',1);ell((fr[0]+fl[0])/2,2,C.hw*1.1+Math.abs(fr[0]-fl[0])*.5,7);g.fillStyle=PAL.out;g.fill();g.restore();
  const farArm=zR<zL?-1:1,nearArm=-farArm;
  if(face){armDraw(farArm,-1)}
  if(zR<zL){legDraw(rx,fr,-1);legDraw(lx,fl,1)}else{legDraw(lx,fl,-1);legDraw(rx,fr,1)}
  if(C.braid&&((zL<0&&face)||0))braid(C,scx,scy,lean,-1);
  torso(C,o,hipX,hipY,lean,yaw,br,top,sk);
  if(!face&&C.braid)braid(C,scx,scy,lean,1);
  // neck + head
  const ht=op(o,'tilt',0),hyaw=cl(yaw+op(o,'turn',0),-1.3,1.3);
  const hc=rot(0,-(C.torso+C.neck+C.r*.92)-br*.9,lean);const hcx=hipX+hc[0]+op(o,'headDX',0),hcy=hipY+hc[1]+op(o,'headDY',0);
  segs([[scx,scy,hcx,hcy+C.r*.6,C.r*.62,sk[0]]]);
  g.save();g.translate(hcx,hcy);g.rotate(lean*.5+ht);head(C,o,hyaw,C.r);g.restore();
  if(face&&C.braid&&zL>0)braid(C,scx,scy,lean,1);
  if(face)armDraw(nearArm,1);else{armDraw(-1,1);armDraw(1,1)}
  LW=LW0;g.restore();
}
function braid(C,scx,scy,lean,front){const h=C.hair.map(tc);const bx=scx+C.sw*.28,by=scy-C.r*.3;for(let i=0;i<7;i++){const x=bx+Math.sin(t*1.3+i*.6)*1.2*i*.3,y=by+i*11;ell(x,y,6.5-i*.3,8,(i%2?.4:-.4));fo(i%2?h[0]:h[2],.7)}ell(bx,by+80,4,6);fo(tc('#8E4F5E'),.7)}
function torso(C,o,hx,hy,lean,yaw,br,top,sk){
  const sy=Math.sin(yaw),cy=Math.abs(Math.cos(yaw)),ls=op(o,'ls',1),cloth=op(o,'cloth',0);
  const wS=C.sw*.5*(cy+.55*Math.abs(sy))+br*.6,wH=C.hw*.5*(cy+.6*Math.abs(sy)),T=C.torso,fb=sy*C.sw*.1;
  g.save();g.translate(hx,hy);const wp=rot(0,-T*.32,lean);
  if(C.dress){
    const sk_=C.skirt.map(tc),hem=-hy-16;
    const sw_=Math.sin(t*2.2+C.seed)*3+cloth*8;
    g.beginPath();g.moveTo(wp[0]-wH*1.05,wp[1]);g.quadraticCurveTo(wp[0]*.5-wH*1.6,hem*.5,-wH*1.75+sw_,hem);g.quadraticCurveTo(0,hem+8,wH*1.75+sw_,hem);g.quadraticCurveTo(wp[0]*.5+wH*1.6,hem*.5,wp[0]+wH*1.05,wp[1]);g.closePath();
    const gr=g.createLinearGradient(-wH*1.7*ls,0,wH*1.7*ls,0);gr.addColorStop(0,sk_[1]);gr.addColorStop(.6,sk_[0]);gr.addColorStop(1,sk_[2]);g.fillStyle=gr;g.fill();ol();
    g.strokeStyle=sk_[1];g.lineWidth=2;for(let i=-2;i<=2;i++){g.beginPath();g.moveTo(i*wH*.3,-T*.15);g.quadraticCurveTo(i*wH*.5+sw_*.3,hem*.5,i*wH*.7+sw_,hem-4);g.stroke()}
    if(C.apron){g.beginPath();g.moveTo(wp[0]-wH*.6+fb,wp[1]+4);g.lineTo(wp[0]+wH*.6+fb,wp[1]+4);g.lineTo(wH*.9+fb+sw_,hem-14);g.quadraticCurveTo(fb,hem-8,-wH*.9+fb+sw_,hem-14);g.closePath();fo(tc(C.apron),.8)}
  }
  g.rotate(lean);
  // shirt / kaftan body
  const hem=C.dress?-T*.24:(C.hem||30),sw2=Math.sin(t*1.7+C.seed)*1.5+cloth*5;
  g.beginPath();g.moveTo(-wS,-T);g.quadraticCurveTo(-wS*1.08,-T*.55,-wH*.98,-T*.25);
  g.quadraticCurveTo(-wH*1.25,hem*.5,-wH*1.2+sw2,hem);g.quadraticCurveTo(fb,hem+5,wH*1.2+sw2,hem);g.quadraticCurveTo(wH*1.25,hem*.5,wH*.98,-T*.25);
  g.quadraticCurveTo(wS*1.08,-T*.55,wS,-T);g.quadraticCurveTo(fb,-T-8,-wS,-T);g.closePath();
  const gr=g.createLinearGradient(-wS*ls,0,wS*ls,0);gr.addColorStop(0,top[1]);gr.addColorStop(.5,top[0]);gr.addColorStop(.9,top[0]);gr.addColorStop(1,top[2]);g.fillStyle=gr;g.fill();ol();
  g.strokeStyle=top[1];g.lineWidth=2;g.lineCap='round';
  for(let i=0;i<3;i++){const x=(i-1)*wH*.55+fb;g.beginPath();g.moveTo(x,-T*.2);g.quadraticCurveTo(x+sw2,hem*.4,x+sw2*1.5,hem-3);g.stroke()}
  g.beginPath();g.moveTo(-wS*.7,-T*.92);g.quadraticCurveTo(-wS*.3,-T*.6,-wS*.55,-T*.4);g.stroke();
  if(C.collar){g.strokeStyle=top[1];g.lineWidth=2.4;g.beginPath();g.moveTo(fb+wS*.18,-T*.98);g.lineTo(fb+wS*.32,-T*.72);g.stroke();g.strokeStyle=tc('#7A4E4A');g.lineWidth=2;g.beginPath();g.moveTo(fb-wS*.35,-T*.99);g.quadraticCurveTo(fb,-T*.9,fb+wS*.35,-T*.99);g.stroke()}
  if(C.apron&&!C.dress){g.beginPath();g.moveTo(-wS*.55+fb,-T*.8);g.lineTo(wS*.55+fb,-T*.8);g.lineTo(wH*.95+fb+sw2,hem+18);g.lineTo(-wH*.95+fb+sw2,hem+18);g.closePath();fo(tc(C.apron),.9);g.strokeStyle=rgba('#FFCF9A',.18);g.lineWidth=3;g.beginPath();g.moveTo(-wS*.3+fb,-T*.7);g.lineTo(-wH*.5+fb,hem+10);g.stroke()}
  // belt with knot on the character's left hip
  if(C.belt&&!C.dress){const bt=tc(C.belt);g.beginPath();g.moveTo(-wH*1.02,-T*.08);g.quadraticCurveTo(fb,-T*.03,wH*1.02,-T*.08);g.lineTo(wH*1.02,-T*.08+7);g.quadraticCurveTo(fb,-T*.03+7,-wH*1.02,-T*.08+7);g.closePath();fo(bt,.8);
    const kz=Math.cos(Math.PI/2+yaw);if(kz>-.2){const kx=wH*.95*Math.sin(Math.PI/2+yaw);ell(kx,-T*.05,5,4);fo(bt,.8);poly([[kx,-T*.05],[kx-3+sw2,-T*.05+20],[kx+2+sw2,-T*.05+19]],1);fo(bt,.7)}}
  // medallion on chest or hidden cord
  if(o.medal==='chest'){g.strokeStyle=tc(C.cord||'#5A4A44');g.lineWidth=1.6;g.beginPath();g.moveTo(fb-wS*.3,-T);g.quadraticCurveTo(fb,-T*.6,fb+wS*.3,-T);g.stroke();medallion(fb,-T*.66,8,0,0,0)}
  if(o.medal==='hidden'){g.strokeStyle=tc(C.cord||'#5A4A44');g.lineWidth=1.6;g.beginPath();g.moveTo(fb-wS*.28,-T-1);g.quadraticCurveTo(fb-wS*.1,-T*.9,fb,-T*.88);g.moveTo(fb+wS*.28,-T-1);g.quadraticCurveTo(fb+wS*.1,-T*.9,fb,-T*.88);g.stroke();ell(fb,-T*.62,6,6);g.fillStyle=rgba(top[1],.5);g.fill()}
  if(o.rimC){g.save();g.beginPath();g.moveTo(ls*wS,-T);g.quadraticCurveTo(ls*wS*1.08,-T*.55,ls*wH*.98,-T*.25);g.strokeStyle=rgba(o.rimC,.6*op(o,'rimA',.85));g.lineWidth=4;g.stroke();g.restore()}
  g.restore();
}
function glow(x,y,r,c,a){const gr=g.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,rgba(c,a));gr.addColorStop(1,rgba(c,0));g.fillStyle=gr;g.fillRect(x-r,y-r,r*2,r*2)}
function motes(n,seed,x0,y0,w,h,col,a,sz){for(let i=0;i<n;i++){const ph=hash(seed+i),x=x0+((hash(seed+i*3)*w+Math.sin(t*.5+ph*9)*12+t*4*(ph-.5))%w+w)%w,y=y0+((hash(seed+i*5)*h-t*(4+ph*8))%h+h)%h;g.fillStyle=rgba(col,a*(.4+.6*Math.sin(t*2+ph*20)**2));ell(x,y,(sz||1.6)*(.6+ph),(sz||1.6)*(.6+ph));g.fill()}}
function panel(x,y,w,h,a,frame,glowA){
  if(a<=0)return;
  g.save();g.globalAlpha*=a;
  if(glowA>0){g.shadowColor=rgba(frame||'#E1C8B8',.8*glowA);g.shadowBlur=24}
  g.beginPath();g.roundRect(x,y,w,h,14);g.fillStyle=rgba('#241F4A',.55);g.fill();g.shadowBlur=0;
  const gr=g.createLinearGradient(x,y,x,y+h);gr.addColorStop(0,rgba('#E1C8B8',.18));gr.addColorStop(.25,rgba('#E1C8B8',.04));gr.addColorStop(1,rgba('#6C4377',.12));g.fillStyle=gr;g.fill();
  g.strokeStyle=rgba(frame||'#E1C8B8',.9);g.lineWidth=2;g.stroke();
  g.beginPath();g.roundRect(x+5,y+5,w-10,h-10,10);g.strokeStyle=rgba(frame||'#E1C8B8',.25);g.lineWidth=1;g.stroke();
  g.restore();
}
function bar(x,y,w,h,v,col,a,blinkA){g.save();g.globalAlpha*=a;g.beginPath();g.roundRect(x,y,w,h,h/2);g.fillStyle=rgba('#1F2236',.6);g.fill();g.strokeStyle=rgba('#E1C8B8',.35);g.lineWidth=1;g.stroke();
  const vv=cl(v,0,1);if(vv>.001){g.beginPath();g.roundRect(x,y,Math.max(h,w*vv),h,h/2);const gr=g.createLinearGradient(x,y,x,y+h);gr.addColorStop(0,mixc(col,'#FFFFFF',.35));gr.addColorStop(1,col);g.fillStyle=gr;g.fill();g.shadowColor=col;g.shadowBlur=10*(blinkA||.4);g.fill()}
  g.restore()}
function ticks(x,y,w,h,n,a){g.save();g.strokeStyle=rgba('#1F2236',.45*a);g.lineWidth=1;for(let i=1;i<n;i++){const xx=x+w*i/n;g.beginPath();g.moveTo(xx,y+2);g.lineTo(xx,y+h-2);g.stroke()}g.restore()}
function icon(kind,x,y,s,a){g.save();g.translate(x,y);g.scale(s,s);g.globalAlpha*=a;g.lineJoin='round';g.lineCap='round';const ow=2/s;
  const st=(c)=>{g.fillStyle=c;g.fill();g.strokeStyle='#1F2236';g.lineWidth=ow;g.stroke()};
  if(kind==='wood'){g.beginPath();g.roundRect(-12,-5,22,10,5);st('#A0704A');ell(10,0,4,5);st('#D8A878');g.beginPath();g.arc(10,0,2,0,7);g.strokeStyle='#8A5A3A';g.lineWidth=1;g.stroke()}
  if(kind==='iron'){g.beginPath();g.moveTo(-11,5);g.lineTo(-7,-5);g.lineTo(7,-5);g.lineTo(11,5);g.closePath();st('#8C8FA3');g.beginPath();g.moveTo(-6,-3);g.lineTo(5,-3);g.strokeStyle='#D8DAE6';g.lineWidth=1.5;g.stroke()}
  if(kind==='stone'){blob([[-10,4],[-8,-5],[0,-8],[9,-4],[11,4],[2,7]]);st('#7D7890');ell(-3,-3,3,2);g.fillStyle='#A8A2B8';g.fill()}
  if(kind==='grain'){for(let i=-1;i<=1;i++){g.beginPath();g.moveTo(i*4,9);g.lineTo(i*5,-4);g.strokeStyle='#C89040';g.lineWidth=2;g.stroke();ell(i*5,-6,2.6,5,i*.3);st('#E0B060')}}
  if(kind==='food'){ell(0,1,11,8);st('#C88A50');g.strokeStyle='#8A5A3A';g.lineWidth=1.4;for(let i=-1;i<=1;i++){g.beginPath();g.moveTo(i*5-2,-3);g.lineTo(i*5+2,1);g.stroke()}}
  if(kind==='happy'){ell(0,0,10,10);st('#FFCF9A');g.beginPath();g.arc(0,1,5,.3,Math.PI-.3);g.strokeStyle='#1F2236';g.lineWidth=1.6;g.stroke();ell(-3.5,-3,1.3,1.6);g.fillStyle='#1F2236';g.fill();ell(3.5,-3,1.3,1.6);g.fill()}
  if(kind==='well'){g.beginPath();g.rect(-9,-1,18,9);st('#8A6A58');g.beginPath();g.moveTo(-11,-6);g.lineTo(0,-13);g.lineTo(11,-6);g.closePath();st('#6B5A60');g.beginPath();g.moveTo(-8,-6);g.lineTo(-8,-1);g.moveTo(8,-6);g.lineTo(8,-1);g.stroke()}
  if(kind==='bench'){g.beginPath();g.rect(-11,-2,22,4);st('#A07A60');g.beginPath();g.moveTo(-8,2);g.lineTo(-8,8);g.moveTo(8,2);g.lineTo(8,8);g.strokeStyle='#1F2236';g.lineWidth=2;g.stroke();g.beginPath();g.rect(-11,-10,22,4);st('#A07A60')}
  if(kind==='roof'){g.beginPath();g.moveTo(-11,6);g.lineTo(-11,-2);g.lineTo(0,-10);g.lineTo(11,-2);g.lineTo(11,6);g.closePath();st('#7A5A68')}
  if(kind==='road'){g.beginPath();g.moveTo(-4,-9);g.lineTo(4,-9);g.lineTo(10,9);g.lineTo(-10,9);g.closePath();st('#6A5468')}
  if(kind==='axe'){g.beginPath();g.moveTo(-8,9);g.lineTo(6,-7);g.strokeStyle='#A0704A';g.lineWidth=3;g.stroke();g.beginPath();g.moveTo(2,-11);g.quadraticCurveTo(12,-10,11,0);g.lineTo(5,-5);g.closePath();st('#8C8FA3')}
  if(kind==='person'){ell(0,-5,4.5,4.5);st('#C98972');g.beginPath();g.moveTo(-7,9);g.quadraticCurveTo(-7,0,0,0);g.quadraticCurveTo(7,0,7,9);g.closePath();st('#B9A6A2')}
  if(kind==='warn'){g.beginPath();g.moveTo(0,-10);g.lineTo(10,8);g.lineTo(-10,8);g.closePath();st('#E0505A');g.fillStyle='#1F2236';g.fillRect(-1.2,-4,2.4,7);ell(0,5,1.4,1.4);g.fill()}
  g.restore()}
function scribble(x,y,w,seed,col,a){g.save();g.strokeStyle=rgba(col,a);g.lineWidth=1.8;g.lineCap='round';g.beginPath();g.moveTo(x,y);const n=Math.floor(w/7);for(let i=1;i<=n;i++){const xx=x+i*w/n,up=hash(seed+i)>.7?-7:-3;g.quadraticCurveTo(xx-w/n*.6,y+up,xx-w/n*.2,y+(hash(seed+i*2)>.5?2:0))}g.stroke();g.restore()}
function vignette(a){const gr=g.createRadialGradient(270,480,220,270,480,640);gr.addColorStop(0,'rgba(31,34,54,0)');gr.addColorStop(1,'rgba(31,34,54,'+a+')');g.fillStyle=gr;g.fillRect(0,0,W,H)}
function wash(c,a,mode){if(a<=0)return;g.save();g.globalCompositeOperation=mode||'source-over';g.fillStyle=rgba(c,a);g.fillRect(0,0,W,H);g.restore()}
function lampLight(x,y,r,c,a){g.save();g.globalCompositeOperation='screen';glow(x,y,r,c,a);g.restore()}
function beam(x1,y1,x2,y2,w1,w2,c,a){g.save();g.globalCompositeOperation='screen';const gr=g.createLinearGradient(x1,y1,x2,y2);gr.addColorStop(0,rgba(c,a));gr.addColorStop(1,rgba(c,0));g.fillStyle=gr;const d=Math.hypot(x2-x1,y2-y1),nx=-(y2-y1)/d,ny=(x2-x1)/d;g.beginPath();g.moveTo(x1+nx*w1,y1+ny*w1);g.lineTo(x2+nx*w2,y2+ny*w2);g.lineTo(x2-nx*w2,y2-ny*w2);g.lineTo(x1-nx*w1,y1-ny*w1);g.closePath();g.fill();g.restore()}
function grain(a){g.save();g.globalAlpha=a;for(let i=0;i<70;i++){const x=hash(i+Math.floor(t*12)*.37)*W,y=hash(i*1.7+Math.floor(t*12)*.53)*H;g.fillStyle=i%2?'#FFCF9A':'#1F2236';g.fillRect(x,y,1.5,1.5)}g.restore()}
function shot(t,st){let i=0;while(i+1<st.length&&t>=st[i+1])i++;const e=i+1<st.length?st[i+1]:env.duration;return {i,lt:t-st[i],d:e-st[i],u:(t-st[i])/(e-st[i])}}
function cutDip(t,st){let a=0;for(let i=1;i<st.length;i++){const d=Math.abs(t-st[i]);if(d<.065)a=Math.max(a,1-d/.065)}return a*.85}
function toScreen(x,y,f){const z=1+(CAM.z-1)*f,cx=270+(CAM.x-270)*f,cy=480+(CAM.y-480)*f,q=rot((x-cx)*z,(y-cy)*z,CAM.r*f);return [270+CAM.sx*f+q[0],480+CAM.sy*f+q[1]]}
function stars(n,seed,x0,y0,w,h){for(let i=0;i<n;i++){const a=.35+.65*Math.abs(Math.sin(t*1.3+i*1.7));g.fillStyle=rgba('#F2E6F0',a);const s=hash(seed+i*3)>.85?2.4:1.4;g.fillRect(x0+hash(seed+i)*w,y0+hash(seed+i*2)*h,s,s)}}
function candle(x,y,s){const fl=1+.08*Math.sin(t*13)+.05*Math.sin(t*23+1)+.04*nz(t*6);g.save();g.translate(x,y);g.scale(s,s);
  ell(0,0,26,7);fo(tc('#8C8FA3'));g.beginPath();g.rect(-8,-48,16,48);const cg=g.createLinearGradient(-8,0,8,0);cg.addColorStop(0,'#C8B0A0');cg.addColorStop(1,'#F2DCC8');g.fillStyle=cg;g.fill();ol(.8);
  g.beginPath();g.moveTo(-6,-46);g.quadraticCurveTo(-9,-36,-6,-30);ol(.6);
  glow(0,-64,60*fl,'#FFB36B',.35);g.save();g.translate(0,-50);g.rotate(Math.sin(t*3)*.08);g.beginPath();g.moveTo(0,-30*fl);g.quadraticCurveTo(9,-8,0,0);g.quadraticCurveTo(-9,-8,0,-30*fl);g.fillStyle='#FFCF9A';g.fill();g.beginPath();g.moveTo(0,-18*fl);g.quadraticCurveTo(4,-5,0,0);g.quadraticCurveTo(-4,-5,0,-18*fl);g.fillStyle='#FFF4EA';g.fill();g.restore();
  g.restore();return fl}
function hutInterior(o){
  const night=op(o,'night',1),red=op(o,'red',0),cd=op(o,'candle',1);
  TINT='#241F4A';TA=.22*night;
  layer(.6,()=>{
    g.fillStyle=tc('#4A3442');g.fillRect(-700,-500,1900,1700);
    for(let y=-480;y<1100;y+=38){const lg=g.createLinearGradient(0,y,0,y+38);lg.addColorStop(0,tc('#6B4A4E'));lg.addColorStop(.5,tc('#5A3E48'));lg.addColorStop(1,tc('#3A2836'));g.fillStyle=lg;g.fillRect(-700,y+2,1900,34);g.fillStyle=rgba('#1F2236',.6);g.fillRect(-700,y,1900,3)}
    brush(-300,-200,1100,1000,'#8A6A64',31,70,.18);
    for(let i=0;i<10;i++){ell(-200+hash(i+3)*900,-100+hash(i*5)*900,6,4);g.fillStyle=rgba('#2A1E2E',.6);g.fill()}
    // okno with night sky
    g.save();g.beginPath();g.rect(70,250,140,170);const wg=g.createLinearGradient(0,250,0,420);wg.addColorStop(0,'#120F2A');wg.addColorStop(1,mixc('#4B3463','#6C4377',.4));g.fillStyle=wg;g.fill();g.clip();stars(14,9,70,250,140,120);ell(170,295,13,13);g.fillStyle='#E7DCE6';g.fill();ell(176,291,11,11);g.fillStyle='#1A1636';g.fill();g.fillStyle=rgba('#241F4A',.9);g.beginPath();g.moveTo(70,400);for(let x=70;x<=210;x+=10)g.lineTo(x,388-hash(x)*16);g.lineTo(210,420);g.lineTo(70,420);g.closePath();g.fill();g.restore();
    g.beginPath();g.rect(70,250,140,170);ol(1.2);g.strokeStyle=tc('#B9A6A2');g.lineWidth=7;g.beginPath();g.moveTo(140,250);g.lineTo(140,420);g.moveTo(70,330);g.lineTo(210,330);g.stroke();
    g.beginPath();g.moveTo(52,246);g.lineTo(140,212);g.lineTo(228,246);g.lineTo(220,256);g.lineTo(60,256);g.closePath();fo(tc('#B9A6A2'));g.beginPath();g.rect(56,420,168,12);fo(tc('#B9A6A2'));
    // embroidered towel (rushnyk) beside the okno
    const sw=Math.sin(t*.9)*2;g.beginPath();g.moveTo(232,236);g.lineTo(262,236);g.lineTo(264+sw,400);g.lineTo(234+sw,400);g.closePath();fo(tc('#E7C6AD'),.8);g.strokeStyle=tc('#A0505A');g.lineWidth=3;for(let k=0;k<3;k++){g.beginPath();g.moveTo(236+sw,372+k*9);for(let x=0;x<6;x++)g.lineTo(238+x*5+sw,(x%2?366:372)+k*9);g.stroke()}
    // shelf with clay pots
    g.beginPath();g.rect(290,236,170,10);fo(tc('#6B4A4E'));for(let i=0;i<4;i++){const px=310+i*40,ph=26+hash(i+4)*14;g.beginPath();g.moveTo(px-12,236);g.quadraticCurveTo(px-18,236-ph*.6,px-7,236-ph);g.lineTo(px+7,236-ph);g.quadraticCurveTo(px+18,236-ph*.6,px+12,236);g.closePath();fo(tc(i%2?'#8A5A50':'#7A6A70'),.8)}
    // drying herbs swaying
    for(let i=0;i<3;i++){g.save();g.translate(320+i*42,120);g.rotate(Math.sin(t*.8+i)*.06);g.strokeStyle=tc('#5A4450');g.lineWidth=2;g.beginPath();g.moveTo(0,0);g.lineTo(0,40);g.stroke();for(let k=0;k<6;k++){ell((k-2.5)*4,48+k%3*10,4,16,(k-2.5)*.15);g.fillStyle=tc(k%2?'#6E6A86':'#4F5470');g.fill()}g.restore()}
    // whitewashed stove at right with ember mouth
    g.beginPath();g.moveTo(430,980);g.lineTo(430,180);g.quadraticCurveTo(430,150,460,150);g.lineTo(760,150);g.lineTo(760,980);g.closePath();const sg=g.createLinearGradient(430,0,600,0);sg.addColorStop(0,tc('#9C8494'));sg.addColorStop(.3,tc('#B9A6A2'));sg.addColorStop(1,tc('#8C7890'));g.fillStyle=sg;g.fill();ol();
    brush(440,170,200,700,'#E7C6AD',41,30,.2);g.beginPath();g.moveTo(462,600);g.lineTo(462,520);g.quadraticCurveTo(500,480,538,520);g.lineTo(538,600);g.closePath();g.fillStyle='#1F1626';g.fill();ol();
    const em=.5+.3*Math.sin(t*2.1)+.2*nz(t*3);glow(500,590,70,'#FFB36B',.45*em);ell(500,592,30,7);g.fillStyle=rgba('#FFB36B',.7*em);g.fill();
  },op(o,'bBack',2));
  layer(.85,()=>{g.fillStyle=tc('#3A2836');g.fillRect(-500,860,1500,500);g.strokeStyle=rgba('#1F2236',.6);g.lineWidth=2;for(let i=-12;i<14;i++){g.beginPath();g.moveTo(270+i*40,860);g.lineTo(270+i*90,1300);g.stroke()}},op(o,'bBack',2)*.5);
  layer(1,()=>{
    if(o.main)o.main();
    // table: worn top, long embroidered cloth hiding the legs
    g.beginPath();g.moveTo(-80,690);g.lineTo(620,690);g.lineTo(620,716);g.lineTo(-80,716);g.closePath();const tg=g.createLinearGradient(0,690,0,716);tg.addColorStop(0,tc('#8A6A64'));tg.addColorStop(1,tc('#6B4A4E'));g.fillStyle=tg;g.fill();ol();
    brush(-60,692,660,22,'#B08A7A',51,30,.3);
    g.beginPath();g.moveTo(-80,714);g.lineTo(620,714);g.lineTo(624,940);for(let x=620;x>=-80;x-=35)g.quadraticCurveTo(x-17,948+Math.sin(x+t)*2,x-35,940);g.closePath();const cg=g.createLinearGradient(0,714,0,940);cg.addColorStop(0,tc('#B9A6A2'));cg.addColorStop(1,tc('#79677F'));g.fillStyle=cg;g.fill();ol();
    g.strokeStyle=tc('#A0505A');g.lineWidth=4;g.beginPath();for(let x=-80;x<=620;x+=14)g.lineTo(x,(x/14)%2?898:910);g.stroke();g.strokeStyle=rgba(tc('#79677F'),.8);g.lineWidth=2;for(let x=-40;x<620;x+=70){g.beginPath();g.moveTo(x,720);g.quadraticCurveTo(x+8,820,x-4,936);g.stroke()}
    // clay mug at left
    g.beginPath();g.moveTo(70,700);g.lineTo(74,660);g.lineTo(112,660);g.lineTo(116,700);g.closePath();fo(tc('#8A5A50'));g.beginPath();g.arc(118,680,10,-1.2,1.2);ol(1.2);
    if(cd>0)candle(455,702,1);
    if(o.front)o.front();
  });
  layer(1.45,()=>{g.fillStyle='#1A1424';g.beginPath();g.moveTo(-300,-80);g.lineTo(900,-80);g.lineTo(900,60);g.quadraticCurveTo(300,90,-300,40);g.closePath();g.fill();g.save();g.translate(80,40);g.rotate(Math.sin(t*.7)*.05);g.strokeStyle='#2A2036';g.lineWidth=3;g.beginPath();g.moveTo(0,0);g.lineTo(0,70);g.stroke();for(let k=0;k<5;k++){ell((k-2)*6,90+k%2*12,6,24);g.fillStyle='#2A2036';g.fill()}g.restore()},4);
  // light: night blue multiply, candle warm screen, optional red menu light
  g.save();g.globalCompositeOperation='multiply';wash('#241F4A',.35*night);g.restore();
  if(cd>0){const c=toScreen(455,640,1),f=1+.06*Math.sin(t*13)+.05*nz(t*6);lampLight(c[0],c[1],430*CAM.z*.6+180,'#FFB36B',.38*cd*f)}
  const wn=toScreen(140,330,.6);beamStatic(wn,night);
  if(red>0){g.save();g.globalCompositeOperation='multiply';wash('#E0505A',.22*red);g.restore();lampLight(380,420,520,'#E0505A',.28*red)}
  motes(18,13,0,200,540,600,'#FFE6C4',.35*cd,1.5);
}
function beamStatic(wn,night){beam(wn[0],wn[1],wn[0]+260,wn[1]+520,60,160,'#6C4377',.16*night)}
function portrait(C,x,y,r,yaw,em){g.save();g.translate(x,y);const tp=C.top.map(tc);g.beginPath();g.moveTo(-r*1.8,r*2.3);g.quadraticCurveTo(-r*1.7,r*1.0,0,r*.95);g.quadraticCurveTo(r*1.7,r*1.0,r*1.8,r*2.3);g.closePath();fo(tp[0]);segs([[0,r*.4,0,r*1.0,r*.6,tc(C.skin[0])]]);head(C,{t,em:em||{}},yaw||0,r);g.restore()}
function eyeClosed(x,y,r){g.save();g.strokeStyle='#E0505A';g.lineWidth=2.4;g.lineCap='round';g.beginPath();g.moveTo(x-r,y-2);g.quadraticCurveTo(x,y+r*.8,x+r,y-2);g.stroke();for(let i=-2;i<=2;i++){g.beginPath();g.moveTo(x+i*r*.42,y+r*.32-Math.abs(i)*1.5);g.lineTo(x+i*r*.55,y+r*.75-Math.abs(i)*1.5);g.stroke()}g.restore()}
// ---- scene
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
}