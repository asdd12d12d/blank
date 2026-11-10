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
const ELDER={seed:3,r:25,l1:80,l2:80,a1:58,a2:54,torso:104,neck:8,sw:64,hw:46,thigh:24,shin:19,uarm:16,farm:14,foot:27,stoop:.16,
  skin:SKIN,hair:['#A9A2B4','#6F6884','#D2CCDA'],hairStyle:'hat',hat:['#4A3A55','#2E2440','#6A5878'],beard:['#A9A2B4','#6F6884','#D2CCDA'],beardLen:1.75,brows:1,top:['#5B4A6E','#3A2E4E','#7E6A90'],kaftan:1,pants:'#3B3352',boots:'#2B2338',belt:'#8A6A4A',hem:84};
const CARP={seed:4,r:24,l1:72,l2:72,a1:54,a2:50,torso:94,neck:9,sw:70,hw:50,thigh:25,shin:20,uarm:16,farm:12,foot:27,
  skin:SKIN,hair:['#7A4E3E','#4E3236','#9A6A54'],hairStyle:'bald',beard:['#7A4E3E','#4E3236','#9A6A54'],beardLen:1.2,top:['#8C7F92','#5E5470','#B2A6B4'],rolled:1,apron:'#7A5A48',pants:'#3B3352',boots:'#2B2338',belt:'#5A4048',hem:30};
const SMITH={seed:5,r:25,l1:74,l2:74,a1:56,a2:52,torso:100,neck:10,sw:84,hw:56,thigh:28,shin:22,uarm:19,farm:16,foot:28,
  skin:SKIN,hair:['#2E2838','#1F1A2A','#4A4058'],hairStyle:'short',beard:['#2E2838','#1F1A2A','#4A4058'],beardLen:1.45,top:['#6D6280','#4A4060','#8E84A0'],rolled:1,apron:'#4E3A40',pants:'#2E2840',boots:'#231C30',belt:'#3A2C34',hem:30};
const BOY={seed:6,r:20,l1:42,l2:42,a1:32,a2:30,torso:56,neck:5,sw:40,hw:32,thigh:16,shin:13,uarm:11,farm:10,foot:17,
  skin:SKIN,hair:['#79566A','#4E3A50','#A07A88'],hairStyle:'short',top:['#B0A0A8','#7A6A80','#D8C8C8'],pants:'#4B3463',boots:'#C98972',bare:1,belt:'#6B5050',hem:20};
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
function palisade(x0,x1,gy,h,seed){for(let x=x0;x<=x1;x+=16){const hh=h*(.9+hash(seed+x)*.2);g.beginPath();g.moveTo(x-7,gy);g.lineTo(x-7,gy-hh);g.lineTo(x,gy-hh-12);g.lineTo(x+7,gy-hh);g.lineTo(x+7,gy);g.closePath();fo(tc(hash(x+seed)>.5?'#5A4448':'#4E3A44'),.8);g.strokeStyle=rgba(tc('#8A6A64'),.5);g.lineWidth=2;g.beginPath();g.moveTo(x-3,gy-hh+6);g.lineTo(x-3,gy-8);g.stroke()}}
function well(x,gy,s,state,crank){
  g.save();g.translate(x,gy);g.scale(s,s);const LW0=LW;LW/=s;
  const old=1-state,lg=mixc(tc('#5E4648'),tc('#A07A60'),state),lgd=mixc(tc('#3E2E3A'),tc('#7A5848'),state);
  ell(0,4,110,14);g.fillStyle=rgba(PAL.out,.35);g.fill();
  // posts
  const pl=old*.06;for(const sd of[-1,1]){g.save();g.translate(sd*70,-60);g.rotate(sd*pl);g.beginPath();g.rect(-6,-130,12,140);fo(lgd);g.restore()}
  // roof
  g.save();g.translate(0,-195);g.rotate(old*.05);g.beginPath();g.moveTo(-100,20);g.lineTo(0,-38);g.lineTo(100,20);g.lineTo(92,28);g.lineTo(0,-24);g.lineTo(-92,28);g.closePath();fo(mixc(tc('#3E3048'),tc('#8A6A58'),state));
  g.strokeStyle=rgba(tc('#1F2236'),.4);g.lineWidth=1.5;for(let i=-4;i<=4;i++){g.beginPath();g.moveTo(i*20,-30+Math.abs(i)*10);g.lineTo(i*22,22);g.stroke()}
  if(old>.5){g.beginPath();g.moveTo(30,0);g.lineTo(50,10);g.lineTo(38,16);g.closePath();g.fillStyle=tc('#241F4A');g.fill()}
  g.restore();
  // windlass
  const wy=-125;g.beginPath();g.rect(-66,wy-9,132,18);fo(lg);
  g.strokeStyle=tc('#B8A0A0');g.lineWidth=2;for(let i=-3;i<=3;i++){const a=crank+i*.6;g.beginPath();g.moveTo(i*14+Math.sin(a)*3,wy-8);g.lineTo(i*14+Math.sin(a)*3,wy+8);g.stroke()}
  const ca=crank;g.beginPath();g.moveTo(70,wy);g.lineTo(84,wy);ol();g.strokeStyle=lgd;g.lineWidth=5;g.stroke();
  const hx_=84+0,hy_=wy;g.beginPath();g.moveTo(hx_,hy_);g.lineTo(hx_+Math.cos(ca)*24,hy_+Math.sin(ca)*24);g.lineWidth=7+2*LW;g.strokeStyle=PAL.out;g.stroke();g.lineWidth=7;g.strokeStyle=lgd;g.stroke();
  // log box (srub)
  for(let i=0;i<5;i++){const y=-12-i*14,wb=old*Math.sin(i*1.7)*4;g.beginPath();g.rect(-80+wb,y-7,160,14);fo(i%2?lg:mixc(lg,lgd,.3),.9);ell(-80+wb,y,6,7);fo(lgd,.7);ell(80+wb,y,6,7);fo(lgd,.7);
    if(old>.5&&i%2===0){g.strokeStyle=rgba(tc('#241F4A'),.7);g.lineWidth=1.5;g.beginPath();g.moveTo(-40+i*12,y-5);g.lineTo(-30+i*12,y+2);g.lineTo(-20+i*12,y-1);g.stroke()}}
  if(state>.5){g.strokeStyle=tc('#8C8FA3');g.lineWidth=4;for(const sx of[-50,50]){g.beginPath();g.moveTo(sx,-82);g.lineTo(sx,-6);g.stroke()}}
  brush(-80,-80,160,72,rgba(tc('#E7C6AD'),1),11,8,.15);
  LW=LW0;g.restore();
  return [x,gy+wy*s];
}
function bucket(x,y,s,ang,water){g.save();g.translate(x,y);g.rotate(ang||0);g.scale(s,s);const LW0=LW;LW/=s;g.beginPath();g.moveTo(-14,-16);g.quadraticCurveTo(0,-34,14,-16);ol(1);g.strokeStyle=tc('#8C8FA3');g.lineWidth=2;g.stroke();g.beginPath();g.moveTo(-14,-16);g.lineTo(14,-16);g.lineTo(11,12);g.lineTo(-11,12);g.closePath();fo(tc('#6B5A60'));g.strokeStyle=tc('#8C8FA3');g.lineWidth=2.5;g.beginPath();g.moveTo(-13,-6);g.lineTo(13,-6);g.moveTo(-12,5);g.lineTo(12,5);g.stroke();if(water){ell(0,-16,13,3.5);g.fillStyle=rgba('#9AB0D0',.9);g.fill()}LW=LW0;g.restore()}
function vignette(a){const gr=g.createRadialGradient(270,480,220,270,480,640);gr.addColorStop(0,'rgba(31,34,54,0)');gr.addColorStop(1,'rgba(31,34,54,'+a+')');g.fillStyle=gr;g.fillRect(0,0,W,H)}
function wash(c,a,mode){if(a<=0)return;g.save();g.globalCompositeOperation=mode||'source-over';g.fillStyle=rgba(c,a);g.fillRect(0,0,W,H);g.restore()}
function beam(x1,y1,x2,y2,w1,w2,c,a){g.save();g.globalCompositeOperation='screen';const gr=g.createLinearGradient(x1,y1,x2,y2);gr.addColorStop(0,rgba(c,a));gr.addColorStop(1,rgba(c,0));g.fillStyle=gr;const d=Math.hypot(x2-x1,y2-y1),nx=-(y2-y1)/d,ny=(x2-x1)/d;g.beginPath();g.moveTo(x1+nx*w1,y1+ny*w1);g.lineTo(x2+nx*w2,y2+ny*w2);g.lineTo(x2-nx*w2,y2-ny*w2);g.lineTo(x1-nx*w1,y1-ny*w1);g.closePath();g.fill();g.restore()}
function grain(a){g.save();g.globalAlpha=a;for(let i=0;i<70;i++){const x=hash(i+Math.floor(t*12)*.37)*W,y=hash(i*1.7+Math.floor(t*12)*.53)*H;g.fillStyle=i%2?'#FFCF9A':'#1F2236';g.fillRect(x,y,1.5,1.5)}g.restore()}
function shot(t,st){let i=0;while(i+1<st.length&&t>=st[i+1])i++;const e=i+1<st.length?st[i+1]:env.duration;return {i,lt:t-st[i],d:e-st[i],u:(t-st[i])/(e-st[i])}}
function cutDip(t,st){let a=0;for(let i=1;i<st.length;i++){const d=Math.abs(t-st[i]);if(d<.065)a=Math.max(a,1-d/.065)}return a*.85}
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
}