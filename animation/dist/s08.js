function(g,t,p,env){
const W=540,H=960;
const PAL={sky0:'#241F4A',sky1:'#6C4377',sky2:'#F09A6C',far:'#4B3463',ground:'#2C2140',key:'#FFB36B',rim:'#FFCF9A',out:'#1F2236'};
function cl(x,a,b){return x<a?a:x>b?b:x}
function lerp(a,b,u){return a+(b-a)*u}
function sm(a,b,x){const u=cl((x-a)/(b-a),0,1);return u*u*(3-2*u)}
function ease(u){u=cl(u,0,1);return u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2}
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
const CARP={seed:4,r:24,l1:72,l2:72,a1:54,a2:50,torso:94,neck:9,sw:70,hw:50,thigh:25,shin:20,uarm:16,farm:12,foot:27,
  skin:SKIN,hair:['#7A4E3E','#4E3236','#9A6A54'],hairStyle:'bald',beard:['#7A4E3E','#4E3236','#9A6A54'],beardLen:1.2,top:['#8C7F92','#5E5470','#B2A6B4'],rolled:1,apron:'#7A5A48',pants:'#3B3352',boots:'#2B2338',belt:'#5A4048',hem:30};
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
function sky(c0,c1,c2,y1,y2){const gr=g.createLinearGradient(0,y1,0,y2);gr.addColorStop(0,c0);gr.addColorStop(.55,c1);gr.addColorStop(1,c2);g.fillStyle=gr;g.fillRect(-2000,-2000,4540,4960)}
function glow(x,y,r,c,a){const gr=g.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,rgba(c,a));gr.addColorStop(1,rgba(c,0));g.fillStyle=gr;g.fillRect(x-r,y-r,r*2,r*2)}
function sun(x,y,r){glow(x,y,r*6,PAL.key,.35);glow(x,y,r*2.2,'#FFE0B8',.5);ell(x,y,r,r);g.fillStyle='#FFE6C4';g.fill()}
function clouds(y,n,seed,col,a,sp){for(let i=0;i<n;i++){const w=90+hash(seed+i)*140,x=((hash(seed+i*3)*900+t*sp*(.6+hash(i)*.6))%900)-180,yy=y+hash(seed+i*7)*70;g.fillStyle=rgba(col,a);ell(x,yy,w*.5,12+hash(i+seed)*8);g.fill();ell(x+w*.2,yy-8,w*.3,10);g.fill()}}
function hills(y,amp,col,seed,x0,x1){g.beginPath();g.moveTo(x0,y+400);for(let x=x0;x<=x1;x+=20){g.lineTo(x,y-amp*(.5+.5*nz(x*.006+seed))-amp*.3*nz(x*.02+seed*3))}g.lineTo(x1,y+400);g.closePath();g.fillStyle=col;g.fill()}
function forestLine(y,col,seed,x0,x1,h){g.fillStyle=col;g.beginPath();g.moveTo(x0,y+60);for(let x=x0;x<=x1;x+=9){const hh=h*(.5+hash(seed+x*.13)*.7);g.lineTo(x,y);g.lineTo(x+4.5,y-hh);g.lineTo(x+9,y)}g.lineTo(x1,y+60);g.closePath();g.fill()}
function birch(x,gy,h,seed,col){
  const sw=Math.sin(t*.9+seed)*4,lean=(hash(seed)-.5)*.08;
  const tx=x+lean*h,tw=7+h*.02;
  g.beginPath();g.moveTo(x-tw,gy);g.quadraticCurveTo(x-tw*.8+lean*h*.5,gy-h*.5,tx-tw*.4+sw*.3,gy-h);g.lineTo(tx+tw*.4+sw*.3,gy-h);g.quadraticCurveTo(x+tw*.8+lean*h*.5,gy-h*.5,x+tw,gy);g.closePath();fo(tc('#D9CCD6'));
  g.fillStyle=tc('#302B49');for(let i=0;i<9;i++){const yy=gy-h*hash(seed+i*2.1)*.9,xx=lerp(x,tx,(gy-yy)/h);g.fillRect(xx-tw*.6+hash(i+seed)*3,yy,tw*(.5+hash(seed+i)*.6),2.2)}
  const fc=col||['#4F5470','#6E6A86','#C9926F'];
  // weeping crown: soft volume, then drooping branches covered with small leaf clusters
  for(let i=0;i<4;i++){ell(tx+sw*.7+(hash(seed+i*4.1)-.5)*h*.3,gy-h*(.7+hash(seed+i*1.9)*.25),h*.17,h*.13);g.fillStyle=rgba(tc(fc[0]),.45);g.fill()}
  for(let b=0;b<10;b++){
    const by=gy-h*(.48+hash(seed+b*1.3)*.5),k0=(gy-by)/h,bx=lerp(x,tx,k0)+sw*k0;
    const dir=(b%2?1:-1)*(.45+hash(seed+b)*.55),len=h*(.16+hash(seed+b*2.2)*.16),sy_=Math.sin(t*1.3+b+seed)*3;
    const cx_=bx+dir*len*.6,cy_=by-len*.22,ex=bx+dir*len+sy_,ey=by+len*.6;
    g.strokeStyle=tc('#3A3048');g.lineWidth=1.5;g.beginPath();g.moveTo(bx,by);g.quadraticCurveTo(cx_,cy_,ex,ey);g.stroke();
    for(let k=0;k<7;k++){const u=k/6,px=lerp(lerp(bx,cx_,u),lerp(cx_,ex,u),u),py=lerp(lerp(by,cy_,u),lerp(cy_,ey,u),u)+4,r=h*.042*(1.15-u*.45);
      ell(px,py,r*1.35,r);g.fillStyle=tc(k%3?fc[0]:fc[1]);g.fill();ell(px+r*.35,py-r*.35,r*.6,r*.38);g.fillStyle=rgba(tc(fc[2]),.5);g.fill()}
  }
}
function izba(x,gy,w,h,seed,lit,smokeOn){
  const wall=tc('#6B4A4E'),log=tc('#4A3442'),roof=tc('#3E3048'),rl=tc('#5E4A62');
  const rh=h*.75;
  // wall
  g.beginPath();g.rect(x-w/2,gy-h,w,h);fo(wall);
  g.strokeStyle=log;g.lineWidth=2;for(let y=gy-h+10;y<gy;y+=12){g.beginPath();g.moveTo(x-w/2,y);g.lineTo(x+w/2,y);g.stroke()}
  for(let y=gy-h+4;y<gy;y+=12){for(const sd of[-1,1]){ell(x+sd*(w/2+3),y,5,5.5);fo(tc('#8A6A64'),.6)}}
  brush(x-w/2,gy-h,w,h,rgba(tc('#8A6A64'),1),seed,10,.25);
  // roof
  g.beginPath();g.moveTo(x-w/2-16,gy-h+4);g.lineTo(x,gy-h-rh);g.lineTo(x+w/2+16,gy-h+4);g.closePath();fo(roof);
  g.strokeStyle=rl;g.lineWidth=2;for(let i=1;i<7;i++){const u=i/7;g.beginPath();g.moveTo(lerp(x,x-w/2-16,u),lerp(gy-h-rh,gy-h+4,u));g.lineTo(lerp(x,x+w/2+16,u),lerp(gy-h-rh,gy-h+4,u));g.stroke()}
  // gable with carved board
  g.beginPath();g.moveTo(x-w*.3,gy-h);g.lineTo(x,gy-h-rh*.75);g.lineTo(x+w*.3,gy-h);g.closePath();fo(tc('#5A3E48'),.8);
  g.beginPath();g.moveTo(x,gy-h-rh-2);g.lineTo(x,gy-h-rh+16);ol(1.2);
  // okno
  const wx=x,wy=gy-h*.55,ww=w*.22,wh=h*.32;
  g.beginPath();g.rect(wx-ww/2,wy-wh/2,ww,wh);g.fillStyle=lit>0?mixc('#2A2440','#FFB36B',lit):'#2A2440';g.fill();ol();
  if(lit>0)glow(wx,wy,ww*1.6,'#FFB36B',.35*lit);
  g.beginPath();g.moveTo(wx,wy-wh/2);g.lineTo(wx,wy+wh/2);g.moveTo(wx-ww/2,wy);g.lineTo(wx+ww/2,wy);g.strokeStyle=tc('#B9A6A2');g.lineWidth=2.5;g.stroke();
  g.beginPath();g.moveTo(wx-ww*.75,wy-wh*.6);g.lineTo(wx,wy-wh*.95);g.lineTo(wx+ww*.75,wy-wh*.6);g.lineTo(wx+ww*.7,wy-wh*.5);g.lineTo(wx-ww*.7,wy-wh*.5);g.closePath();fo(tc('#B9A6A2'),.8);
  g.beginPath();g.rect(wx-ww*.7,wy+wh*.5,ww*1.4,5);fo(tc('#B9A6A2'),.8);
  // chimney + smoke
  const chx=x+w*.22,chy=gy-h-rh*.42;g.beginPath();g.rect(chx-7,chy-24,14,28);fo(tc('#4A3A48'));
  if(smokeOn)smoke(chx,chy-26,seed,.5);
}
function smoke(x,y,seed,a){for(let i=0;i<9;i++){const u=((t*.18+i/9+hash(seed+i)*.1)%1),r=6+u*26;g.fillStyle=rgba(tc('#B9A6C2'),a*(1-u)*(u*4>1?1:u*4));ell(x+u*30+Math.sin(t*.8+i)*6*u,y-u*120,r,r*.8);g.fill()}}
function motes(n,seed,x0,y0,w,h,col,a,sz){for(let i=0;i<n;i++){const ph=hash(seed+i),x=x0+((hash(seed+i*3)*w+Math.sin(t*.5+ph*9)*12+t*4*(ph-.5))%w+w)%w,y=y0+((hash(seed+i*5)*h-t*(4+ph*8))%h+h)%h;g.fillStyle=rgba(col,a*(.4+.6*Math.sin(t*2+ph*20)**2));ell(x,y,(sz||1.6)*(.6+ph),(sz||1.6)*(.6+ph));g.fill()}}
function leaves(n,seed,x0,y0,w,h,col){for(let i=0;i<n;i++){const ph=hash(seed+i),u=((t*(.08+ph*.06)+ph)%1),x=x0+hash(seed+i*2)*w+Math.sin(t*1.5+i)*25+u*60,y=y0+u*h;g.save();g.translate(x,y);g.rotate(t*2+i);ell(0,0,4,2);g.fillStyle=rgba(col,.85*Math.sin(u*Math.PI));g.fill();g.restore()}}
function ripples(x,y,w,t0,col,a){for(let i=0;i<3;i++){const u=((t-t0)*.5+i/3)%1;if(t<t0)continue;g.strokeStyle=rgba(col,a*(1-u));g.lineWidth=1.5;ell(x,y,w*(.2+u),w*(.2+u)*.32);g.stroke()}}
function fenceW(x0,x1,gy,h,seed){g.strokeStyle=tc('#5A4450');for(let x=x0;x<=x1;x+=22){g.beginPath();g.moveTo(x,gy);g.lineTo(x+(hash(seed+x)-.5)*4,gy-h);g.lineWidth=5;g.stroke()}g.lineWidth=3;for(let k=0;k<4;k++){g.strokeStyle=tc(k%2?'#6B5260':'#4E3A4A');g.beginPath();g.moveTo(x0,gy-h*.2-k*h*.18);for(let x=x0;x<=x1;x+=11)g.lineTo(x,gy-h*.2-k*h*.18+((x/11+k)%2?3:-3));g.stroke()}}
function vignette(a){const gr=g.createRadialGradient(270,480,220,270,480,640);gr.addColorStop(0,'rgba(31,34,54,0)');gr.addColorStop(1,'rgba(31,34,54,'+a+')');g.fillStyle=gr;g.fillRect(0,0,W,H)}
function wash(c,a,mode){if(a<=0)return;g.save();g.globalCompositeOperation=mode||'source-over';g.fillStyle=rgba(c,a);g.fillRect(0,0,W,H);g.restore()}
function lampLight(x,y,r,c,a){g.save();g.globalCompositeOperation='screen';glow(x,y,r,c,a);g.restore()}
function beam(x1,y1,x2,y2,w1,w2,c,a){g.save();g.globalCompositeOperation='screen';const gr=g.createLinearGradient(x1,y1,x2,y2);gr.addColorStop(0,rgba(c,a));gr.addColorStop(1,rgba(c,0));g.fillStyle=gr;const d=Math.hypot(x2-x1,y2-y1),nx=-(y2-y1)/d,ny=(x2-x1)/d;g.beginPath();g.moveTo(x1+nx*w1,y1+ny*w1);g.lineTo(x2+nx*w2,y2+ny*w2);g.lineTo(x2-nx*w2,y2-ny*w2);g.lineTo(x1-nx*w1,y1-ny*w1);g.closePath();g.fill();g.restore()}
function grain(a){g.save();g.globalAlpha=a;for(let i=0;i<70;i++){const x=hash(i+Math.floor(t*12)*.37)*W,y=hash(i*1.7+Math.floor(t*12)*.53)*H;g.fillStyle=i%2?'#FFCF9A':'#1F2236';g.fillRect(x,y,1.5,1.5)}g.restore()}
function shot(t,st){let i=0;while(i+1<st.length&&t>=st[i+1])i++;const e=i+1<st.length?st[i+1]:env.duration;return {i,lt:t-st[i],d:e-st[i],u:(t-st[i])/(e-st[i])}}
function cutDip(t,st){let a=0;for(let i=1;i<st.length;i++){const d=Math.abs(t-st[i]);if(d<.065)a=Math.max(a,1-d/.065)}return a*.85}
function toScreen(x,y,f){const z=1+(CAM.z-1)*f,cx=270+(CAM.x-270)*f,cy=480+(CAM.y-480)*f,q=rot((x-cx)*z,(y-cy)*z,CAM.r*f);return [270+CAM.sx*f+q[0],480+CAM.sy*f+q[1]]}
function grassRow(y,seed,n,x0,x1,h,col){g.lineCap='round';for(let i=0;i<n;i++){const x=x0+hash(seed+i)*(x1-x0),hh=h*(.5+hash(seed+i*3)*.7),sw=Math.sin(t*1.6+x*.05)*hh*.15;g.strokeStyle=col;g.lineWidth=2.5;g.beginPath();g.moveTo(x,y);g.quadraticCurveTo(x+sw*.3,y-hh*.6,x+sw+(hash(i)-.5)*10,y-hh);g.stroke()}}
function birds(){g.strokeStyle=rgba('#241F4A',.8);g.lineWidth=2;for(let i=0;i<5;i++){const x=((t*28+i*40+hash(i)*30)%900)-200,y=330+i*9+Math.sin(t*2+i)*4,f=Math.sin(t*9+i*2)*4;g.beginPath();g.moveTo(x-7,y-f);g.quadraticCurveTo(x-3,y-2,x,y);g.quadraticCurveTo(x+3,y-2,x+7,y-f);g.stroke()}}
function stars(n,seed,x0,y0,w,h){for(let i=0;i<n;i++){const a=.35+.65*Math.abs(Math.sin(t*1.3+i*1.7));g.fillStyle=rgba('#F2E6F0',a);const s=hash(seed+i*3)>.85?2.4:1.4;g.fillRect(x0+hash(seed+i)*w,y0+hash(seed+i*2)*h,s,s)}}
function villageGround(T){
  const gr=g.createLinearGradient(0,600,0,1100);gr.addColorStop(0,mixc(PAL.ground,PAL.far,.5));gr.addColorStop(.25,PAL.ground);gr.addColorStop(1,'#1E1830');g.fillStyle=gr;g.fillRect(-1200,618,3600,1400);
  g.fillStyle=tc('#4A3848');g.beginPath();g.moveTo(-1200,676);for(let x=-1200;x<=2400;x+=40)g.lineTo(x,676+nz(x*.02)*4);g.lineTo(2400,770);for(let x=2400;x>=-1200;x-=40)g.lineTo(x,770+nz(x*.03+5)*5);g.closePath();g.fill();
  brush(-200,680,1200,90,'#6A5468',21,60,.35);
  for(const ry of[704,738]){g.strokeStyle=rgba('#1F2236',.55);g.lineWidth=4;g.beginPath();for(let x=-1200;x<=2400;x+=30){const y=ry+nz(x*.015+ry)*3;if(x===-1200)g.moveTo(x,y);else g.lineTo(x,y)}g.stroke();g.strokeStyle=rgba('#FFCF9A',.18);g.lineWidth=1.5;g.beginPath();for(let x=-1200;x<=2400;x+=30){const y=ry+3+nz(x*.015+ry)*3;if(x===-1200)g.moveTo(x,y);else g.lineTo(x,y)}g.stroke()}
  for(const pd of[[150,740,60],[420,706,48],[700,738,70],[-150,706,50]]){ell(pd[0],pd[1],pd[2],7);const pg=g.createLinearGradient(pd[0]-pd[2],0,pd[0]+pd[2],0);pg.addColorStop(0,T.sky[1]);pg.addColorStop(.6,T.sky[2]);pg.addColorStop(1,T.moon?'#4B3463':'#FFCF9A');g.fillStyle=pg;g.fill();ol(.6);ripples(pd[0]+10,pd[1],pd[2]*.5,0,'#FFE6C4',.4)}
  grassRow(676,1,60,-600,1400,22,tc('#4F5470'));
}
const TOD={
  dawn:{sky:['#241F4A','#6C4377','#F09A6C'],sun:[470,520],tint:'#6C4377',ta:.12,lit:.5},
  day:{sky:['#4B3463','#9A6A8E','#F2B895'],sun:[410,300],tint:'#F09A6C',ta:.04,lit:0},
  sunset:{sky:['#241F4A','#6C4377','#F09A6C'],sun:[330,590],tint:'#F09A6C',ta:.14,lit:.8},
  night:{sky:['#120F2A','#241F4A','#4B3463'],sun:null,moon:[400,210],tint:'#241F4A',ta:.42,lit:1}
};
function villageWorld(o){
  const T=TOD[op(o,'tod','dawn')];TINT=T.tint;TA=T.ta;
  const bF=op(o,'bF',0),bM=op(o,'bM',0),bFg=op(o,'bFg',2.5);
  layer(0,()=>sky(T.sky[0],T.sky[1],T.sky[2],-150,620));
  layer(.06,()=>{if(T.sun)sun(T.sun[0],T.sun[1],20);if(T.moon){stars(60,5,-300,-200,1200,700);glow(T.moon[0],T.moon[1],110,'#E1C8B8',.22);ell(T.moon[0],T.moon[1],16,16);g.fillStyle='#E7DCE6';g.fill()}clouds(380,7,3,T.sky[2],.22,6);clouds(260,5,8,T.sky[1],.3,4)},bF*.5);
  layer(.2,()=>{if(!T.moon)birds();hills(575,42,mixc(PAL.far,T.sky[2],.32),1,-600,1300);forestLine(592,mixc(PAL.far,T.sky[1],.15),4,-600,1300,24);if(o.far)o.far()},bF);
  layer(.5,()=>{g.fillStyle=mixc(PAL.ground,PAL.far,.55);g.fillRect(-900,600,2600,300);
    izba(-120,622,150,90,1,T.lit,1);birch(30,628,170,2);izba(160,620,130,80,2,T.lit*.8,1);birch(300,628,200,5);izba(470,622,160,92,3,T.lit,1);birch(600,630,180,8);izba(760,620,140,86,4,T.lit*.7,1);fenceW(-300,900,640,26,3);if(o.mid)o.mid()},bM);
  layer(1,()=>{villageGround(T);if(o.main)o.main()},op(o,'bMain',0));
  if(op(o,'fg',1))layer(1.7,()=>{grassRow(980,7,40,-600,1400,90,'#241F36');g.fillStyle='#1E1830';g.fillRect(-800,975,2600,400)},bFg);
}
// ---- scene
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
}