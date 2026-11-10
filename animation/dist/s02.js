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
function bucket(x,y,s,ang,water){g.save();g.translate(x,y);g.rotate(ang||0);g.scale(s,s);const LW0=LW;LW/=s;g.beginPath();g.moveTo(-14,-16);g.quadraticCurveTo(0,-34,14,-16);ol(1);g.strokeStyle=tc('#8C8FA3');g.lineWidth=2;g.stroke();g.beginPath();g.moveTo(-14,-16);g.lineTo(14,-16);g.lineTo(11,12);g.lineTo(-11,12);g.closePath();fo(tc('#6B5A60'));g.strokeStyle=tc('#8C8FA3');g.lineWidth=2.5;g.beginPath();g.moveTo(-13,-6);g.lineTo(13,-6);g.moveTo(-12,5);g.lineTo(12,5);g.stroke();if(water){ell(0,-16,13,3.5);g.fillStyle=rgba('#9AB0D0',.9);g.fill()}LW=LW0;g.restore()}
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
function vignette(a){const gr=g.createRadialGradient(270,480,220,270,480,640);gr.addColorStop(0,'rgba(31,34,54,0)');gr.addColorStop(1,'rgba(31,34,54,'+a+')');g.fillStyle=gr;g.fillRect(0,0,W,H)}
function wash(c,a,mode){if(a<=0)return;g.save();g.globalCompositeOperation=mode||'source-over';g.fillStyle=rgba(c,a);g.fillRect(0,0,W,H);g.restore()}
function lampLight(x,y,r,c,a){g.save();g.globalCompositeOperation='screen';glow(x,y,r,c,a);g.restore()}
function beam(x1,y1,x2,y2,w1,w2,c,a){g.save();g.globalCompositeOperation='screen';const gr=g.createLinearGradient(x1,y1,x2,y2);gr.addColorStop(0,rgba(c,a));gr.addColorStop(1,rgba(c,0));g.fillStyle=gr;const d=Math.hypot(x2-x1,y2-y1),nx=-(y2-y1)/d,ny=(x2-x1)/d;g.beginPath();g.moveTo(x1+nx*w1,y1+ny*w1);g.lineTo(x2+nx*w2,y2+ny*w2);g.lineTo(x2-nx*w2,y2-ny*w2);g.lineTo(x1-nx*w1,y1-ny*w1);g.closePath();g.fill();g.restore()}
function grain(a){g.save();g.globalAlpha=a;for(let i=0;i<70;i++){const x=hash(i+Math.floor(t*12)*.37)*W,y=hash(i*1.7+Math.floor(t*12)*.53)*H;g.fillStyle=i%2?'#FFCF9A':'#1F2236';g.fillRect(x,y,1.5,1.5)}g.restore()}
function shot(t,st){let i=0;while(i+1<st.length&&t>=st[i+1])i++;const e=i+1<st.length?st[i+1]:env.duration;return {i,lt:t-st[i],d:e-st[i],u:(t-st[i])/(e-st[i])}}
function cutDip(t,st){let a=0;for(let i=1;i<st.length;i++){const d=Math.abs(t-st[i]);if(d<.065)a=Math.max(a,1-d/.065)}return a*.85}
function toScreen(x,y,f){const z=1+(CAM.z-1)*f,cx=270+(CAM.x-270)*f,cy=480+(CAM.y-480)*f,q=rot((x-cx)*z,(y-cy)*z,CAM.r*f);return [270+CAM.sx*f+q[0],480+CAM.sy*f+q[1]]}
function spark(x,y,r,a){g.save();g.globalCompositeOperation='screen';glow(x,y,r*2.5,'#FFE6C4',.6*a);g.fillStyle=rgba('#FFF4EA',a);g.beginPath();g.moveTo(x,y-r);g.quadraticCurveTo(x+r*.12,y-r*.12,x+r,y);g.quadraticCurveTo(x+r*.12,y+r*.12,x,y+r);g.quadraticCurveTo(x-r*.12,y+r*.12,x-r,y);g.quadraticCurveTo(x-r*.12,y-r*.12,x,y-r);g.fill();g.restore()}
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
// SCENE 2 — «Строки, лужа и тайна» (14.2 – 28.13)
// shots: 0 CU lines→emblem | 1 UI 86 pips | 2 two-shot, medallion frame lights | 3 insert puddle splash, panel shatters |
//        4 medium pick-up, panel re-forms | 5 wide look-around | 6 medium-close hides medallion | 7 CU determined squint
const ST=[0,1.3,3.25,4.75,6.4,8.3,10.55,12.3];
const S=shot(t,ST);
TINT='#6C4377';TA=.12;
const GY=716,HX=270,HS=.62,MX=300,MY=724;
const PCX=366,PCY=512,PK=.5; // world position / scale of the floating glass panel
const tDrop=4.78,tSplash=5.0,tShat=5.97,tGrab=7.35;

// ---------- helpers
function qPip(x,y,r,col,a){g.fillStyle=rgba(col,a);ell(x,y-r*.62,r*.4,r*.4);g.fill();g.beginPath();g.moveTo(x-r*.72,y+r*.72);g.quadraticCurveTo(x-r*.68,y-r*.05,x,y-r*.05);g.quadraticCurveTo(x+r*.68,y-r*.05,x+r*.72,y+r*.72);g.closePath();g.fill()}
// village emblem: ring, two roofs and a birch; pr 0..1 draws it stroke by stroke
function qEmblem(x,y,r,pr,a){
  if(pr<=0||a<=0)return;g.save();g.globalAlpha*=a;g.lineCap='round';g.lineJoin='round';
  g.shadowColor='#FFCF9A';g.shadowBlur=8;
  g.strokeStyle=rgba('#FFCF9A',.95);g.lineWidth=r*.09;g.beginPath();g.arc(x,y,r,-Math.PI/2,-Math.PI/2+Math.PI*2*sm(0,.45,pr));g.stroke();
  const q=sm(.3,.75,pr);
  if(q>0){g.strokeStyle=rgba('#E1C8B8',.95*q);g.lineWidth=r*.07;
    for(const h_ of[[-.42,.42],[.38,.36]]){const hx_=x+r*h_[0],w_=r*h_[1];g.beginPath();g.moveTo(hx_-w_*.75,y+r*.28);g.lineTo(hx_,y-r*.08);g.lineTo(hx_+w_*.75,y+r*.28);g.moveTo(hx_-w_*.55,y+r*.24);g.lineTo(hx_-w_*.55,y+r*.58);g.lineTo(hx_+w_*.55,y+r*.58);g.lineTo(hx_+w_*.55,y+r*.24);g.stroke()}
    g.beginPath();g.moveTo(x-r*.8,y+r*.6);g.quadraticCurveTo(x,y+r*.7,x+r*.8,y+r*.6);g.stroke()}
  const b=sm(.55,1,pr);
  if(b>0){g.strokeStyle=rgba('#FFE6C4',b);g.lineWidth=r*.08;g.beginPath();g.moveTo(x+r*.02,y+r*.6);g.lineTo(x-r*.02,y+r*(.6-1.25*b));g.stroke();
    for(let i=0;i<7;i++){const yy=y-r*(.6-i*.14),sd=i%2?1:-1;if(yy>y+r*(.6-1.25*b)+2){g.fillStyle=rgba(i%3?'#FFCF9A':'#E1C8B8',.9*b);ell(x+sd*r*(.16+.05*Math.sin(t*2+i)),yy+r*.06,r*.09,r*.06,sd*.6);g.fill()}}}
  g.restore();
}
// glass shards of the 300×280 panel; u 0 = whole .. 1 = scattered and fallen
function qShards(u,a){
  if(a<=0)return;
  const V=(i,j)=>[i*75+(i>0&&i<4?(hash(i*7+j*3)-.5)*44:0),j*93.3+(j>0&&j<3?(hash(i*5+j*11)-.5)*44:0)];
  for(let i=0;i<4;i++)for(let j=0;j<3;j++)for(let h_=0;h_<2;h_++){
    const p0=V(i,j),p1=V(i+1,j),p2=V(i+1,j+1),p3=V(i,j+1),tri=h_?[p0,p1,p2]:[p0,p2,p3];
    const cx=(tri[0][0]+tri[1][0]+tri[2][0])/3,cy=(tri[0][1]+tri[1][1]+tri[2][1])/3,sd=i*6+j*2+h_;
    const dx=(cx-150)*(.6+hash(sd))*u+(hash(sd+3)-.5)*90*u,dy=(cy-140)*.5*u-60*u+520*u*u,ro=(hash(sd+5)-.5)*5*u;
    g.save();g.translate(cx+dx,cy+dy);g.rotate(ro);g.beginPath();g.moveTo(tri[0][0]-cx,tri[0][1]-cy);g.lineTo(tri[1][0]-cx,tri[1][1]-cy);g.lineTo(tri[2][0]-cx,tri[2][1]-cy);g.closePath();
    g.fillStyle=rgba('#E1C8B8',.16*a);g.fill();g.strokeStyle=rgba('#FFE6C4',.85*a);g.lineWidth=1.6;g.stroke();
    g.beginPath();g.moveTo(tri[0][0]-cx,tri[0][1]-cy);g.lineTo((tri[1][0]-cx)*.5,(tri[1][1]-cy)*.5);g.strokeStyle=rgba('#FFFFFF',.35*a);g.lineWidth=1;g.stroke();g.restore()}
}
// panel state as a function of time
function pState(){
  const o={a:1,em:sm(.1,1.25,t),pips:Math.floor(cl((t-1.45)/.85,0,1)*86+.001),flash:Math.max(0,1-Math.abs(t-2.32)/.3),ring:sm(3.45,4.35,t),ringF:Math.max(0,1-Math.abs(t-4.4)/.35),rev:1,shat:0,sa:0};
  if(t>tSplash&&t<tShat){const k=sm(tSplash,tShat,t);o.a=1-k*.55*(hash(Math.floor(t*22))>.45?1:.25)-.35*k}
  if(t>=tShat&&t<7.45){o.shat=cl((t-tShat)/.75,0,1);o.sa=1-sm(.55,1,o.shat);o.a=1-sm(tShat,tShat+.12,t)}
  if(t>=7.45){const u=1-eout((t-7.45)/.6);o.shat=u;o.sa=u>0?1:0;o.a=sm(7.8,8.15,t);o.rev=sm(7.8,8.3,t);o.flash=Math.max(0,1-Math.abs(t-8.1)/.25)*.6}
  if(t>8.3)o.a*=lerp(1,.62,sm(8.3,8.7,t));
  if(t>10.7)o.a*=1-sm(10.9,11.35,t);
  return o;
}
// the floating panel, local 300×280 units, centred at (cx,cy) with scale k
function qVPanel(k,cx,cy,o){
  g.save();g.translate(cx,cy);g.scale(k,k);g.translate(-150,-140);
  if(o.shat>0)qShards(o.shat,o.sa);
  const a=o.a;
  if(a>.01){
    panel(0,0,300,280,a,o.ringF>.05?'#FFCF9A':'#E1C8B8',.5+.5*o.flash+.4*o.ringF);
    g.save();g.globalAlpha*=a;g.beginPath();g.roundRect(0,0,300,280*o.rev,14);g.clip();
    qEmblem(44,42,26,o.em,1);
    g.fillStyle=rgba('#FFCF9A',.85*sm(.4,.9,o.em));g.beginPath();g.roundRect(86,28,150*sm(.35,1,o.em),8,4);g.fill();
    g.fillStyle=rgba('#E1C8B8',.45*sm(.6,1,o.em));g.beginPath();g.roundRect(86,44,90*sm(.5,1,o.em),5,2.5);g.fill();
    g.strokeStyle=rgba('#E1C8B8',.3);g.lineWidth=1;g.beginPath();g.moveTo(16,78);g.lineTo(284,78);g.stroke();
    // population: 86 person pips in rows of ten
    icon('person',26,98,1,.9);
    for(let i=0;i<o.pips;i++){const c=i%10,r=Math.floor(i/10),x=56+c*23,y=96+r*14;const pop=cl((t-1.45-i/86*.85)/.12,0,1),s_=r>=0?(o.pips<86?lerp(1.6,1,pop):1):1;
      qPip(x,y,5.6*s_*(1+.25*o.flash),mixc('#E1C8B8','#FFCF9A',.55+.45*o.flash),.95)}
    if(o.pips>0&&o.pips<86){const i=o.pips-1;spark(56+(i%10)*23,96+Math.floor(i/10)*14,9,.7)}
    // medallion slot: frame ring lights up around the medallion
    const ry=236;g.beginPath();g.roundRect(14,ry-22,272,44,12);g.fillStyle=rgba('#1F2236',.45);g.fill();g.strokeStyle=rgba('#E1C8B8',.35);g.lineWidth=1;g.stroke();
    medallion(42,ry,14,0,0,.3*o.ring+.6*o.ringF);
    if(o.ring>0){g.save();g.shadowColor='#FFCF9A';g.shadowBlur=12;g.strokeStyle=rgba('#FFCF9A',.95);g.lineWidth=3;g.beginPath();g.arc(42,ry,19,-Math.PI/2,-Math.PI/2+Math.PI*2*o.ring);g.stroke();
      g.beginPath();g.roundRect(14,ry-22,272*o.ring,44,12);g.strokeStyle=rgba('#FFCF9A',.7*o.ring);g.lineWidth=2;g.stroke();g.restore();
      bar(72,ry-6,196,12,o.ring,'#FFCF9A',1,.6+o.ringF)}
    g.restore();
    // glass sheen sweeping over
    g.save();g.beginPath();g.roundRect(0,0,300,280,14);g.clip();const sx=((t*.35)%1.6)*500-200;g.fillStyle=rgba('#FFFFFF',.06*a);g.beginPath();g.moveTo(sx,0);g.lineTo(sx+40,0);g.lineTo(sx-30,280);g.lineTo(sx-70,280);g.closePath();g.fill();g.restore();
  }
  g.restore();
}
function qPalm(ex,ey,an){ // flat right palm pressed to the chest
  g.save();g.translate(ex,ey);g.rotate(-.35);const sk=tc(SKIN[0]);
  segs([[2,-2,15,-6,5,sk],[3,1,17,0,5,sk],[3,4,16,6,5,sk],[2,6,13,11,4.5,sk],[-2,-3,4,-11,5,sk]]);
  ell(3,1,8,7.5);fo(sk);g.strokeStyle=rgba(SKIN[1],.6);g.lineWidth=1;g.beginPath();g.moveTo(9,-3);g.lineTo(14,-4);g.moveTo(10,2);g.lineTo(15,2);g.stroke();g.restore();
}
// ---------- hero
const cr=ease((t-6.5)/.55)*(1-ease((t-7.7)/.6));
function heroO(){
  const o={x:HX,y:GY,s:HS,t,ls:1,rimC:PAL.rim,rimA:.75,fr:[22,0],fl:[-28,0],medal:t>11.3?'hidden':'none'};
  let yaw=lerp(.35,.6,sm(.2,1.0,t));
  yaw=lerp(yaw,-.6,sm(8.75,9.2,t));yaw=lerp(yaw,1.0,sm(9.75,10.2,t));yaw=lerp(yaw,.5,sm(10.45,10.95,t));
  yaw=lerp(yaw,.85,cr);o.yaw=yaw;
  o.hipY=lerp(-142.8,-84,cr);o.lean=lerp(.03,.42,cr)-.04*sm(tSplash,tSplash+.25,t)*(1-sm(5.8,6.3,t));o.hipX=lerp(0,-6,cr);
  // eyes → head → body
  const lx=-.9*sm(8.45,8.6,t)*(1-sm(9.4,9.5,t))+.9*sm(9.45,9.6,t)*(1-sm(10.3,10.5,t));
  o.turn=-.55*sm(8.55,8.85,t)*(1-sm(9.55,9.85,t))+.3*sm(9.55,9.85,t)*(1-sm(10.35,10.65,t));
  const shock=sm(tSplash+.02,tSplash+.15,t)*(1-sm(6.3,6.8,t));
  let look=[lerp(.45,.7,sm(.1,.9,t))*(1-sm(4.5,4.8,t)),lerp(-.1,-.35,sm(.2,1,t))];
  if(t>4.75){look=[.3,.9]}
  if(t>6.6){look=[.5,.8]}
  if(t>8.1){look=[lx,0]}
  if(t>10.5){look=[.2,lerp(.2,.05,sm(11.5,12,t))]}
  const det=sm(11.5,12.1,t),w0=1-sm(.15,.75,t); // w0: amazed face carried over from scene 1
  if(t<1)look=[lerp(look[0],.1,w0),lerp(look[1],-.2,w0)];
  o.em={look,brow:Math.max(w0,lerp(.55*sm(.2,1,t)*(1-sm(4.4,4.7,t)),1,shock))-.25*sm(8.4,8.6,t)*(1-det)-.2*det,
    browIn:.5*sm(6,6.3,t)*(1-sm(7.5,8,t))+.35*sm(8.4,8.6,t)*(1-det)-.35*det,
    smile:.3*sm(.3,1.2,t)*(1-sm(4.3,4.6,t))+.12*det,open:lerp(.25*(1-sm(3.8,4.3,t)),.6,shock)+.15*(t>6&&t<6.4?1:0)+.3*w0,
    eyeOpen:lerp(lerp(1.1,1.3,w0),1.35,shock)*(1-det)+.68*det,blink:(t>tSplash+.02&&t<tSplash+.12)||(t>tShat&&t<tShat+.1)||(t>11.85&&t<11.97)?1:0};
  o.tilt=lerp(-.05,.05,sm(.3,1,t))+.3*sm(tSplash+.06,tSplash+.25,t)*(1-sm(6.3,6.8,t))-.1*cr+.08*sm(11.5,12,t);
  // right hand: holds medallion at chest, trembles, drops it, picks it up, hides it, palm on chest
  let hr=[lerp(10,22,sm(.3,1.2,t)),lerp(-198,-210,sm(.3,1.2,t))];
  const tr=sm(4.35,4.6,t)*(t<tDrop?1:0);hr[0]+=Math.sin(t*71)*3*tr;hr[1]+=Math.cos(t*53)*2.5*tr;
  if(t>=tDrop){const j=ease((t-tDrop)/.15),d=ease((t-5.3)/.5);hr=[lerp(lerp(22,36,j),18,d),lerp(lerp(-210,-188,j),-150,d)]}
  if(t>=6.8){const tgt=[(MX-HX)/HS-4,(MY-GY)/HS-6],re=sm(6.8,tGrab,t),li=sm(7.55,8.15,t);hr=[lerp(lerp(18,tgt[0],re),22,li),lerp(lerp(-150,tgt[1],re),-210,li)]}
  if(t>=10.65){const u=sm(10.7,11.25,t),v=sm(11.35,11.8,t);hr=[lerp(lerp(22,8,u),3,v),lerp(lerp(-210,-232,u),-206,v)]}
  o.hr=hr;
  const held=t<tDrop||(t>=tGrab&&t<11.3);
  if(held){const dirt=t<tDrop?0:lerp(.4,.12,sm(7.6,9,t)),gl=t<tDrop?.55+.25*Math.sin(t*4)+.4*Math.max(0,1-Math.abs(t-4.4)/.35):(.25+.3*sm(7.45,8.1,t))*(1-sm(8.5,9,t)*.6),
    rr=9*(1-sm(11.0,11.3,t)*.5);
    o.itemR=(gg,ex,ey,an)=>{g.save();g.globalAlpha*=1-sm(11.05,11.3,t);medallion(ex+4,ey-2,rr,an,dirt,gl*(1-sm(10.7,11,t)));g.restore()}}
  else if(t>11.3)o.itemR=(gg,ex,ey,an)=>qPalm(ex,ey,an);
  // left hand: on the knee in the crouch, rises in fright
  if(cr>.05)o.hl=[lerp(10,30,cr),lerp(-90,-62,cr)];
  else if(t>tSplash&&t<6.4)o.hl=[lerp(-14,-6,sm(5.8,6.3,t)),lerp(-110,-140,sm(5.8,6.3,t))-26*sm(tSplash+.1,tSplash+.3,t)*(1-sm(5.8,6.3,t))];
  o.cloth=Math.sin(t*1.3)*.3;
  return o;
}
function puddle(){ // small puddle in the rut where the medallion was found
  ell(MX+4,MY,34,6.5);const pg=g.createLinearGradient(MX-30,0,MX+38,0);pg.addColorStop(0,'#6C4377');pg.addColorStop(.6,'#F09A6C');pg.addColorStop(1,'#FFCF9A');g.fillStyle=pg;g.fill();ol(.6);
  ripples(MX+2,MY,26,0,'#FFE6C4',.35);if(t>tSplash)ripples(MX,MY,40,tSplash,'#FFE6C4',.8*(1-sm(6.5,8,t)));
  if(t<tGrab&&t>tSplash){g.save();g.translate(MX,MY+.5);g.scale(1,.45);medallion(0,0,9,.4,.45,0);g.restore();ell(MX,MY+1.5,10,2.4);g.fillStyle=rgba('#F09A6C',.45);g.fill()}
}
function world(bF,bM,bFg,bMain,panelOn){
  villageWorld({tod:'dawn',bF,bM,bFg,bMain,main:()=>{
    puddle();
    const o=heroO();bucket(o.x-26*HS,GY-1,1.05,0,0);person(HERO,o);
    if(panelOn){const ps=pState();g.save();g.translate(0,Math.sin(t*1.4)*2);qVPanel(PK,PCX,PCY,ps);g.restore()}
    grassRow(772,2,50,-600,1400,26,tc('#3E3A58'))}});
  // the glass casts a faint cool light on the hero
  if(panelOn){const ps=pState(),c=toScreen(PCX,PCY,1);lampLight(c[0],c[1],180*CAM.z,'#E1C8B8',.16*ps.a)}
}

// ---------------- shot 0: close-up — the glowing lines fold into the village emblem
if(S.i===0){
  const lt=S.lt;setCam(lerp(268,286,ease(lt/1.3)),lerp(553,548,ease(lt/1.3)),lerp(6.95,6.1,eout(lt/1.3)),0);
  villageWorld({tod:'dawn',bF:9,bM:7,bFg:0,fg:0,main:()=>{const o=heroO();o.tilt=lerp(-.04,.02,sm(0,1,lt));person(HERO,o)}});
  const E=[418,236],cv=ease(cl((lt-.05)/.75,0,1));
  for(let i=0;i<5;i++){const y0=150+i*50+Math.sin(t*1.3+i)*3,w0=340-i*30,x0=270+(i%2?14:-10);
    const xc=lerp(x0,E[0],cv),yc=lerp(y0,E[1],cv),w=lerp(w0,10,cv),a=1-sm(.7,1,cv);if(a<=0)continue;
    g.save();g.globalAlpha=.85*a;g.shadowColor=rgba('#E1C8B8',.9);g.shadowBlur=18;g.beginPath();g.roundRect(xc-w/2,yc-12*(1-cv*.6),w,24*(1-cv*.6),12);g.fillStyle=rgba('#241F4A',.35);g.fill();g.strokeStyle=rgba('#E1C8B8',.9);g.lineWidth=1.5;g.stroke();g.shadowBlur=0;
    for(let k=0;k<6;k++){const dx=xc-w/2+18+k*(w-36)/6,dw=((w-36)/6)*(.4+hash(i*7+k)*.5);if(w<60)break;g.fillStyle=rgba('#FFE6C4',.6+.3*Math.sin(t*6+k+i));g.fillRect(dx,yc-2,dw,4)}g.restore()}
  const ep=sm(.55,1.3,lt);
  if(ep>0){g.save();g.globalAlpha=sm(.5,.7,lt);ell(E[0],E[1],86,86);g.fillStyle=rgba('#241F4A',.35);g.fill();g.restore();qEmblem(E[0],E[1],70,ep,1);spark(E[0],E[1]-70,16*Math.max(0,1-Math.abs(lt-.75)/.25)+2,.8)}
  wash('#E1C8B8',.1,'screen');
  motes(16,5,0,100,540,600,'#FFE6C4',.4,2.2);
}
// ---------------- shot 1: UI — population: 86 pips fill the glass
if(S.i===1){
  const u=S.u;setCam(330,545,2.3+u*.12,-.01);
  world(10,9,6,5,0);
  wash('#1F2236',.25);
  const k=1.33+u*.07;g.save();g.translate(0,Math.sin(t*1.4)*2);qVPanel(k,312,348,pState());g.restore();
  wash('#E1C8B8',.05+.08*pState().flash,'screen');
  motes(20,7,0,80,540,640,'#FFE6C4',.45,2);
}
// ---------------- shot 2: two-shot — hero and the panel, the medallion slot lights up; hand starts to tremble
if(S.i===2){
  const u=S.u;setCam(336+u*6,546-u*4,2.45+u*.15,-.01);
  CAM.sx=kick(t,4.4,2.5,.3);
  world(4,3,4,0,1);
  leaves(5,8,0,100,540,700,'#C9926F');
}
// ---------------- shot 3: insert — the medallion falls into the puddle; the reflected glass flickers and shatters
if(S.i===3){
  const lt=S.lt,u=S.u;setCam(270,520,1+u*.08,.02-u*.02);
  CAM.sy=kick(t,tSplash,4,.3)+kick(t,tShat,2.5,.25);
  layer(0,()=>{const gr=g.createLinearGradient(0,0,0,960);gr.addColorStop(0,'#6C4377');gr.addColorStop(.2,'#F09A6C');gr.addColorStop(.28,mixc(PAL.ground,PAL.far,.4));gr.addColorStop(1,'#1E1830');g.fillStyle=gr;g.fillRect(-100,-100,740,1160)});
  layer(.3,()=>{hills(235,26,mixc(PAL.far,PAL.sky2,.4),6,-200,800);izba(110,250,120,60,9,.8,1);izba(430,246,110,58,8,.6,1);sun(330,200,14)},7);
  layer(.75,()=>{g.fillStyle=tc('#3A2C44');g.beginPath();g.moveTo(-300,280);g.lineTo(840,280);g.lineTo(1100,1300);g.lineTo(-560,1300);g.closePath();g.fill();
    brush(-100,280,740,620,'#5A4458',4,80,.4);
    for(const k of[-1,1]){g.strokeStyle=rgba('#1F2236',.7);g.lineWidth=18;g.beginPath();g.moveTo(270+k*60,280);g.quadraticCurveTo(270+k*120,600,270+k*330,1100);g.stroke()}},2.5);
  layer(1,()=>{
    // the puddle mirrors the dawn sky — and the glass panel above it
    const PX=280,PY=610;
    ell(PX,PY,205,66,-.05);const pg=g.createLinearGradient(80,560,480,660);pg.addColorStop(0,'#6C4377');pg.addColorStop(.55,'#F09A6C');pg.addColorStop(1,'#FFCF9A');g.fillStyle=pg;g.fill();ol(.8);
    g.save();ell(PX,PY,205,66,-.05);g.clip();clouds(570,4,11,'#FFE6C4',.25,10);
    const ps=pState();g.translate(PX+30,PY-6);g.scale(1,-.4);g.globalAlpha=.75;qVPanel(.9,0,0,ps);g.restore();
    g.save();ell(PX,PY,205,66,-.05);g.clip();ripples(PX-80,PY+8,90,0,'#FFE6C4',.5);
    if(t>tSplash){ripples(PX+10,PY,260,tSplash,'#FFE6C4',.9);ripples(PX+10,PY,160,tSplash+.3,'#FFE6C4',.7)}
    if(t>tShat)for(let i=0;i<9;i++){const tt=tShat+.12+i*.06;if(t>tt)ripples(PX-150+hash(i)*300,PY-30+hash(i+4)*60,50,tt,'#FFE6C4',.6)}
    g.restore();
    // hero's boot and the bucket at the edge of the frame
    g.save();g.translate(70,470);g.rotate(-.1);
    segs([[4,-520,0,-170,96,tc(HERO.pants)]]);segLight(4,-520,0,-170,96,'#FFCF9A',.18,1);
    g.beginPath();g.moveTo(-40,-190);g.lineTo(-38,-40);g.quadraticCurveTo(-52,20,-30,26);g.lineTo(96,26);g.quadraticCurveTo(112,-6,40,-44);g.lineTo(40,-190);g.closePath();fo(tc(HERO.boots));
    g.strokeStyle=rgba('#FFCF9A',.3);g.lineWidth=5;g.beginPath();g.moveTo(34,-180);g.lineTo(34,-50);g.quadraticCurveTo(80,-20,98,14);g.stroke();
    g.strokeStyle=rgba('#1F2236',.6);g.lineWidth=3;g.beginPath();g.moveTo(-38,-160);g.quadraticCurveTo(0,-150,40,-162);g.moveTo(-30,20);g.lineTo(90,20);g.stroke();
    ell(30,30,90,12);g.fillStyle=rgba('#4A3848',.6);g.fill();g.restore();
    bucket(470,470,4.2,.05,0);
    // the hand trembles at the top of the frame and lets go
    {const op_=sm(tDrop-.02,tDrop+.08,t),jx=Math.sin(t*71)*4*(1-op_),hy=lerp(70,-260,sm(tDrop+.12,5.45,t));g.save();g.translate(250+jx,hy-30);g.rotate(.15);g.scale(1.6,1.6);const sk=tc(SKIN[0]);
      segs([[-20,-200,0,-40,70,tc(HERO.top[0])]]);ell(0,0,46,40);fo(sk);
      for(let i=0;i<4;i++){const a=lerp(1.9,1.2,op_)-i*.22,l=lerp(34,58,op_);segs([[-30+i*20,14,-30+i*20+Math.cos(a)*l*.3,14+Math.sin(a)*l,17,sk]])}
      segs([[34,-6,lerp(40,66,op_),lerp(28,10,op_),18,sk]]);g.restore()}
    // falling medallion, tumbling
    if(t<tSplash){const q=cl((t-tDrop)/(tSplash-tDrop),0,1),y=lerp(110,PY,q*q),x=lerp(250,PX+10,q),ro=t*14;
      g.save();g.translate(x,y);g.scale(1,Math.max(.15,Math.abs(Math.cos(ro))));medallion(0,0,46,ro*.3,0,.6);g.restore();
      g.strokeStyle=rgba('#FFE6C4',.4);g.lineWidth=3;g.beginPath();g.moveTo(x-4,y-70);g.lineTo(x-14,y-170);g.stroke()}
    else{g.save();g.translate(PX+10,PY+4);g.scale(1,.42);medallion(0,0,50,.4,lerp(.1,.45,sm(tSplash,5.6,t)),.25*(1-sm(5.2,tShat,t)));g.restore();
      g.save();ell(PX+10,PY+20,70,16);g.fillStyle=rgba('#F09A6C',.4);g.fill();g.restore();
      // splash crown and droplets
      const su=(t-tSplash)/.55;if(su<1){for(let i=0;i<16;i++){const a=Math.PI+i/15*Math.PI,v=180+hash(i)*120,x=PX+10+Math.cos(a)*v*su*.9,y=PY-Math.sin(-a)*0+(-Math.abs(Math.sin(a))*v*su*1.2+su*su*420);
        ell(x,y,7*(1-su*.5),9*(1-su*.5));g.fillStyle=rgba('#FFE6C4',.9*(1-su));g.fill()}
        g.beginPath();g.ellipse(PX+10,PY,90*eout(su*1.4),28*eout(su*1.4),0,Math.PI,0);g.strokeStyle=rgba('#FFE6C4',.8*(1-su));g.lineWidth=6;g.stroke()}}
    // glass shards rain down after the panel breaks
    if(t>tShat){for(let i=0;i<14;i++){const tt=t-tShat-hash(i+20)*.2;if(tt<0)continue;const y=-40+tt*tt*1400+hash(i)*120,x=60+hash(i+9)*420+Math.sin(tt*3+i)*14,a=1-sm(PY-60,PY+20,y);if(a<=0)continue;
      g.save();g.translate(x,y);g.rotate(tt*6*(hash(i+3)-.5)+i);g.beginPath();g.moveTo(0,-16);g.lineTo(11,10);g.lineTo(-8,12);g.closePath();g.fillStyle=rgba('#E1C8B8',.25*a);g.fill();g.strokeStyle=rgba('#FFE6C4',.9*a);g.lineWidth=1.5;g.stroke();g.restore()}}
  });
  layer(1.6,()=>{grassRow(980,5,26,-100,700,280,'#241F36')},6);
  g.save();g.globalCompositeOperation='screen';beam(560,120,250,620,30,140,'#FFB36B',.2);g.restore();
  motes(22,3,0,200,540,500,'#FFE6C4',.5,1.8);
}
// ---------------- shot 4: medium — crouch, pick it up, the panel assembles again
if(S.i===4){
  const u=S.u;setCam(lerp(300,312,u),lerp(600,612,cr)-sm(7.6,8.2,t)*24,1.72+u*.1,-.015);
  CAM.sy=kick(t,tGrab,2.5,.25);
  world(2,1.5,3,0,1);
  leaves(5,9,0,100,540,700,'#C9926F');
}
// ---------------- shot 5: wide — he looks left and right: the road is empty
if(S.i===5){
  const u=S.u;setCam(lerp(250,290,ease(u)),560-u*8,1.0+u*.06,lerp(-.01,.01,u));
  world(0,0,2.5,0,1);
  leaves(9,4,0,200,540,600,'#C9926F');
}
// ---------------- shot 6: medium-close — hides the medallion under the shirt, palm on the chest
if(S.i===6){
  const u=S.u;setCam(282-u*6,540+u*4,3.1+u*.25,.01);
  CAM.sy=kick(t,11.8,2,.25);
  world(8,6,6,0,1);
  motes(14,6,0,100,540,600,'#FFE6C4',.4,2);
}
// ---------------- shot 7: close-up — determined squint, fade to black
if(S.i===7){
  const u=S.u;setCam(271,lerp(556,551,u),6.0+u*.5,0);
  villageWorld({tod:'dawn',bF:10,bM:8,bFg:0,fg:0,main:()=>{person(HERO,heroO())}});
  motes(14,8,0,80,540,600,'#FFE6C4',.4,2.4);
}
// ---------------- finishing
g.save();g.globalCompositeOperation='multiply';wash('#6C4377',.12+.1*sm(12,13.9,t));g.restore();
vignette(.55+.15*sm(12,13.9,t));
grain(.05);
wash('#000000',cutDip(t,ST));
wash('#000000',sm(13.45,13.9,t));
}