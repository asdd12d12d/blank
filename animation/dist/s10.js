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
const RES=[['wood','#A0704A',200],['iron','#8C8FA3',50],['stone','#7D7890',100],['grain','#E0B060',500],['food','#C88A50',500]];
function resPanel(x,y,w,o){
  const a=op(o,'a',1),v=o.v||{},ra=o.rows||[1,1,1,1,1,1],red=op(o,'red',-1),rA=op(o,'redA',0),rh=50,h=74+6*rh;
  if(a<=0)return h;
  panel(x,y,w,h,a,'#E1C8B8',.7);
  g.save();g.globalAlpha*=a;
  medallion(x+34,y+36,15,0,0,.25);
  g.fillStyle=rgba('#E1C8B8',.85);g.beginPath();g.roundRect(x+62,y+26,w*.42,7,3.5);g.fill();
  g.fillStyle=rgba('#E1C8B8',.4);g.beginPath();g.roundRect(x+62,y+40,w*.26,5,2.5);g.fill();
  g.strokeStyle=rgba('#E1C8B8',.3);g.lineWidth=1;g.beginPath();g.moveTo(x+16,y+64);g.lineTo(x+w-16,y+64);g.stroke();
  for(let i=0;i<6;i++){const q=cl(ra[i]||0,0,1);if(q<=0)continue;const yy=y+74+i*rh,dx=(1-eout(q))*24;g.save();g.globalAlpha*=q;
    if(i<5){const R_=RES[i],val=op(v,R_[0],0),isR=red===i;
      if(isR&&rA>0){g.save();g.shadowColor='#E0505A';g.shadowBlur=16*rA;g.beginPath();g.roundRect(x+10+dx,yy+2,w-20,rh-8,10);g.fillStyle=rgba('#E0505A',.12*rA);g.fill();g.strokeStyle=rgba('#E0505A',rA);g.lineWidth=2;g.stroke();g.restore()}
      icon(R_[0],x+34+dx,yy+20,1.25,1);
      const bw=w-110;bar(x+60+dx,yy+12,bw,16,val/R_[2],isR?mixc(R_[1],'#E0505A',.4+.6*rA):R_[1],1,isR?rA:.4);ticks(x+60+dx,yy+12,bw,16,10,1);
      ell(x+w-30+dx,yy+20,6,6);g.fillStyle=isR?rgba('#E0505A',.4+.6*rA):rgba(R_[1],.9);g.fill();
    }else{icon('happy',x+34+dx,yy+20,1.25,1);const hv=op(v,'happy',0)/100,sw=(w-110)/10;
      for(let k=0;k<10;k++){const f=cl(hv*10-k,0,1);g.beginPath();g.roundRect(x+60+dx+k*sw,yy+10,sw-4,20,4);g.fillStyle=rgba('#1F2236',.6);g.fill();g.strokeStyle=rgba('#FFCF9A',.4);g.lineWidth=1;g.stroke();if(f>0){g.beginPath();g.roundRect(x+60+dx+k*sw,yy+10,Math.max(2,(sw-4)*f),20,4);g.fillStyle='#FFCF9A';g.fill()}}}
    g.restore()}
  g.restore();return h;
}
function star5(x,y,r){g.beginPath();for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,rr=i%2?r*.45:r;g.lineTo(x+Math.cos(a)*rr,y+Math.sin(a)*rr)}g.closePath()}
const PROB=[['well',5],['roof',2],['road',3]];
function problemsPanel(x,y,w,o){
  const a=op(o,'a',1),ra=o.rows||[1,1,1],hi=op(o,'hi',0),rh=52,h=44+3*rh;if(a<=0)return h;
  panel(x,y,w,h,a,'#E0505A',.5);
  g.save();g.globalAlpha*=a;
  icon('warn',x+26,y+24,1,1);g.fillStyle=rgba('#E0505A',.8);g.beginPath();g.roundRect(x+44,y+20,w*.4,6,3);g.fill();
  for(let i=0;i<3;i++){const q=cl(ra[i]||0,0,1);if(q<=0)continue;const yy=y+40+i*rh;g.save();g.globalAlpha*=q;
    if(i===0&&hi>0){g.save();g.shadowColor='#FFCF9A';g.shadowBlur=20*hi;g.beginPath();g.roundRect(x+8,yy+2,w-16,rh-6,10);g.fillStyle=rgba('#FFCF9A',.18*hi);g.fill();g.strokeStyle=rgba('#FFCF9A',.9*hi);g.lineWidth=2;g.stroke();g.restore()}
    const bl=.5+.5*Math.sin(t*7+i*1.3);ell(x+20,yy+24,5,5);g.fillStyle=rgba('#E0505A',.4+.6*bl);g.fill();
    icon(PROB[i][0],x+44,yy+24,1.2,1);scribble(x+66,yy+28,w*.26,i*5+3,'#E1C8B8',.6);
    for(let k=0;k<PROB[i][1];k++){const s_=i===0?1+.25*hi*Math.sin(t*6+k):1;star5(x+w-22-k*19,yy+24,7*s_);g.fillStyle=i===0?'#FFCF9A':rgba('#FFCF9A',.65);g.fill()}
    g.restore()}
  g.restore();return h;
}
// ---- scene
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
}