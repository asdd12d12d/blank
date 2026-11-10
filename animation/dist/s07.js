function(g,t,p,env){
const W=540,H=960;
const PAL={sky0:'#241F4A',sky1:'#6C4377',sky2:'#F09A6C',far:'#4B3463',ground:'#2C2140',key:'#FFB36B',rim:'#FFCF9A',out:'#1F2236'};
function cl(x,a,b){return x<a?a:x>b?b:x}
function lerp(a,b,u){return a+(b-a)*u}
function sm(a,b,x){const u=cl((x-a)/(b-a),0,1);return u*u*(3-2*u)}
function ease(u){u=cl(u,0,1);return u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2}
function ein(u){u=cl(u,0,1);return u*u*u}
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
function finger(x,y,s,ang,pressA){g.save();g.translate(x,y);g.rotate(ang);g.scale(s,s);const LW0=LW;LW=3/s;
  segs([[0,60,0,26,30,tc('#B9A6A2')]]);ell(0,10,15,18);fo(tc(SKIN[0]));g.beginPath();g.roundRect(-5,-22,10,30,5);fo(tc(SKIN[0]));ell(0,-18,3.5,2.5);g.fillStyle=rgba('#F2B895',.8);g.fill();
  if(pressA>0){g.strokeStyle=rgba('#FFCF9A',pressA);g.lineWidth=2/s;ell(0,-24,14*(1.6-pressA*.6),5*(1.6-pressA*.6));g.stroke()}
  LW=LW0;g.restore()}
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
// SCENE 7 — Проверка мелочью: скамейка (0 – 12.17)
// shots: hero thinks by his wall · build menu, finger picks the bench · glass outline of the bench by the wall ·
//        cost insert: 4 wood chips + 1 iron chip · time-lapse: neighbour brings planks · hammer drives nails · evening, unfinished bench
const ST=[0,2.65,4.0,5.05,7.7,10.05,11.15];
const S=shot(t,ST);
const GY=716,HS=.62,BX=290,BLX=108,BLH=40,WL0=-380,WL1=430,WH=250;
// ---------- helpers (local)
function wd(tt,t0,v,D){const l=Math.max(0,tt-t0)*v;return l<D-40?l:D-40+40*(1-Math.exp(-(l-(D-40))/40))}
function gaitFeet(C,d,st,s,face){const L=(C.l1+C.l2)*.09,a=gait(d/s,0,0,face,1,st/s,L,0),b=gait(d/s,0,0,face,1,st/s,L,.5);return [[a.fx,a.fy],[b.fx,b.fy]]}
function standFeet(C,face,yaw){const rx=-Math.cos(yaw)*C.hw*.36;return [[rx*1.1+face*6,0],[-rx*1.1-face*5,0]]}
function walker(C,x0,face,t0,v,D,y,s){
  const d=wd(t,t0,v,D),st=(C.l1+C.l2)*.76*s,yaw=.95*face,o={x:x0+face*d,y,s,yaw,t,lean:.04*face};
  const ts=t0+(D+60)/v,b=sm(ts,ts+.4,t);
  if(b<=0&&t>=t0)o.walk={d,st};
  else{const f=gaitFeet(C,d,st,s,face),q=standFeet(C,face,yaw),bb=t<t0?1:b;
    o.fr=[lerp(f[0][0],q[0][0],bb),lerp(f[0][1],q[0][1],bb)-Math.sin(sm(0,.5,bb)*Math.PI)*5];
    o.fl=[lerp(f[1][0],q[1][0],bb),lerp(f[1][1],q[1][1],bb)-Math.sin(sm(.5,1,bb)*Math.PI)*5];o.lean=.04*face*(1-bb)}
  return o;
}
// time-lapse clock: the day jumps forward twice; k = 0 day .. 1 evening
const K=lerp(0,.45,sm(7.7,8.3,t))+.35*sm(10.05,10.55,t)+.2*sm(11.15,11.6,t);
const LT=t+38*sm(7.7,8.3,t)+30*sm(10.05,10.55,t)+20*sm(11.15,11.6,t);
const SUN=[lerp(440,170,K),lerp(270,575,K*K*.6+K*.4)];
TOD.lapse={sky:[mixc('#4B3463','#241F4A',K),mixc('#9A6A8E','#6C4377',K),mixc('#F2B895','#F09A6C',K)],sun:SUN,tint:'#F09A6C',ta:lerp(.04,.15,K),lit:K*K*.85};
function lapseClouds(){for(let i=0;i<6;i++){const w=110+hash(i+3)*120,x=((hash(i*3+1)*900+LT*9*(.6+hash(i)*.6))%900)-180,y=250+hash(i*7)*120;g.fillStyle=rgba(mixc('#F2B895','#F09A6C',K),.25);ell(x,y,w*.5,14);g.fill();ell(x+w*.2,y-9,w*.3,10);g.fill()}}
function boards(x,y,ang,len,n,col){g.save();g.translate(x,y);g.rotate(ang);for(let i=0;i<n;i++){g.beginPath();g.roundRect(-len/2+i*5-5,-i*7-6,len,7,2);fo(tc(i%2?mixc(col,'#A07A60',.3):col),.8);g.strokeStyle=rgba('#FFF4EA',.35);g.lineWidth=1.5;g.beginPath();g.moveTo(-len/2+i*5,-i*7-4);g.lineTo(len/2+i*5-12,-i*7-4);g.stroke()}g.restore()}
function hen(x,y,s,seed){const pk=Math.max(0,Math.sin(t*3.1+seed*2))**6,dir=Math.sin(t*.35+seed)>0?1:-1,hx_=x+Math.sin(t*.35+seed)*14;g.save();g.translate(hx_,y);g.scale(s*dir,s);
  ell(0,-14,14,10,-.2);fo(tc(seed%2?'#D8C8C0':'#A0705A'),.8);poly([[-12,-18],[-22,-28],[-18,-12]],1);fo(tc(seed%2?'#C0B0AC':'#7A5048'),.8);
  const hy=lerp(-26,-6,pk),hxx=lerp(12,18,pk);segs([[8,-18,hxx,hy,5,tc(seed%2?'#D8C8C0':'#A0705A')]],1);ell(hxx,hy,5,5);fo(tc(seed%2?'#D8C8C0':'#A0705A'),.7);poly([[hxx+4,hy-1],[hxx+9,hy+1],[hxx+4,hy+2]],1);g.fillStyle=tc('#E0B060');g.fill();ell(hxx,hy-5,2.5,2.5);g.fillStyle=tc('#C04050');g.fill();
  g.strokeStyle=tc('#C89040');g.lineWidth=1.6;g.beginPath();g.moveTo(-2,-5);g.lineTo(-3,0);g.moveTo(3,-5);g.lineTo(4,0);g.stroke();g.restore()}
function burdock(x,y,s,seed){g.save();g.translate(x,y);g.scale(s,s);for(let i=0;i<5;i++){const a=-1.9+i*.45+Math.sin(t*1.1+i+seed)*.05;g.save();g.rotate(a+Math.PI/2);g.beginPath();g.moveTo(0,0);g.quadraticCurveTo(-26,-60,0,-110);g.quadraticCurveTo(26,-60,0,0);g.fillStyle=i%2?'#2A2238':'#241E34';g.fill();g.strokeStyle='#3A3050';g.lineWidth=2;g.beginPath();g.moveTo(0,0);g.lineTo(0,-100);g.stroke();g.restore()}g.restore()}
// hero's izba side wall on the action plane (same logs and carved okno as scene 5), eave shadow follows the sun
function wall(x0,x1,gy,h){
  const top=gy-h;
  g.beginPath();g.rect(x0,top,x1-x0,h);g.fillStyle=tc('#5A3E48');g.fill();
  for(let y=top;y<gy;y+=24){const lg=g.createLinearGradient(0,y,0,y+24);lg.addColorStop(0,tc('#7A5A5C'));lg.addColorStop(.45,tc('#6B4A4E'));lg.addColorStop(1,tc('#3E2C3A'));g.fillStyle=lg;g.fillRect(x0,y+1,x1-x0,22);g.fillStyle=rgba('#1F2236',.55);g.fillRect(x0,y,x1-x0,2);
    ell(x1+6,y+12,11,11);fo(tc('#8A6A64'),.7);g.strokeStyle=rgba('#5A3E48',.8);g.lineWidth=1.2;g.beginPath();g.arc(x1+6,y+12,5,0,6.3);g.stroke()}
  brush(x0,top,x1-x0,h,'#8A6A64',27,50,.22);
  // eave
  g.beginPath();g.moveTo(x0-40,top-30);g.lineTo(x1+40,top-30);g.lineTo(x1+40,top+4);for(let x=x1+40;x>x0-40;x-=16)g.quadraticCurveTo(x-8,top+16,x-16,top+4);g.closePath();fo(tc('#3E3048'));
  // roof slope receding to the ridge, own chimney with smoke
  g.beginPath();g.moveTo(x0-40,top-28);g.lineTo(x1+40,top-28);g.lineTo(x1+6,top-90);g.lineTo(x0-6,top-90);g.closePath();fo(tc('#3E3048'));
  g.strokeStyle=tc('#5E4A62');g.lineWidth=2;for(let i=1;i<4;i++){const y=top-28-i*16;g.beginPath();g.moveTo(x0-40+i*7,y);g.lineTo(x1+40-i*7,y);g.stroke()}
  g.beginPath();g.rect(x0+330,top-122,22,50);fo(tc("#4A3A48"));smoke(x0+341,top-124,5,.55);
  // okno with open shutters
  const wx=BX,wy=top+60;g.beginPath();g.rect(wx-40,wy,80,80);g.fillStyle=mixc(tc('#2A2440'),'#FFB36B',K*K*.8);g.fill();ol();
  if(K>.5)glow(wx,wy+40,90,'#FFB36B',.35*(K-.5)*2);
  g.strokeStyle=tc('#B9A6A2');g.lineWidth=4;g.beginPath();g.moveTo(wx,wy);g.lineTo(wx,wy+80);g.moveTo(wx-40,wy+36);g.lineTo(wx+40,wy+36);g.stroke();
  for(const sd of[-1,1]){g.beginPath();g.rect(wx+sd*40+(sd<0?-34:0),wy-2,34,84);fo(tc('#6B5A70'),.8);g.strokeStyle=tc('#B9A6A2');g.lineWidth=2;g.beginPath();g.moveTo(wx+sd*57,wy+8);g.lineTo(wx+sd*57,wy+74);g.stroke()}
  g.beginPath();g.moveTo(wx-58,wy-4);g.lineTo(wx,wy-34);g.lineTo(wx+58,wy-4);g.lineTo(wx+50,wy+4);g.lineTo(wx-50,wy+4);g.closePath();fo(tc('#B9A6A2'),.9);
  g.beginPath();g.rect(wx-52,wy+80,104,10);fo(tc('#B9A6A2'),.9);for(let i=0;i<5;i++){ell(wx-40+i*20,wy+96,4,5);fo(tc('#B9A6A2'),.6)}
  // geranium pot on the sill
  g.beginPath();g.moveTo(wx+12,wy+80);g.lineTo(wx+16,wy+64);g.lineTo(wx+34,wy+64);g.lineTo(wx+38,wy+80);g.closePath();fo(tc('#8A5A50'),.7);for(let i=0;i<4;i++){ell(wx+20+i*5,wy+58-(i%2)*6+Math.sin(t*1.5+i)*1,5,4);g.fillStyle=tc(i%2?'#C04050':'#4F5470');g.fill()}
  // sun light on the logs and the eave shadow (time-lapse)
  g.save();g.beginPath();g.rect(x0,top,x1-x0,h);g.clip();
  const sx=lerp(x1+200,x0+300,K),lgr=g.createLinearGradient(sx-500,0,sx+200,0);lgr.addColorStop(0,rgba('#FFB36B',0));lgr.addColorStop(.8,rgba(mixc('#FFE6C4','#FFB36B',K),.2));lgr.addColorStop(1,rgba('#FFB36B',0));g.fillStyle=lgr;g.fillRect(x0,top,x1-x0,h);
  const eh=lerp(70,18,K),sl=lerp(-.25,.55,K);g.fillStyle=rgba('#1F2236',.32);g.beginPath();g.moveTo(x0,top);g.lineTo(x1,top);g.lineTo(x1,top+eh-sl*40);g.lineTo(x0,top+eh+sl*40);g.closePath();g.fill();
  g.restore();
  // ground shadow strip at the wall foot
  g.fillStyle=rgba('#1F2236',lerp(.35,.2,K));g.beginPath();g.moveTo(x0,gy);g.lineTo(x1,gy);g.lineTo(x1+lerp(10,90,K),gy+lerp(10,22,K));g.lineTo(x0+lerp(10,90,K),gy+lerp(10,22,K));g.closePath();g.fill();
}
// chopping block with an axe leaning on it
function block(x,gy){ell(x,gy+2,34,8);g.fillStyle=rgba(PAL.out,.35);g.fill();g.beginPath();g.moveTo(x-28,gy-BLH);g.lineTo(x-30,gy);g.quadraticCurveTo(x,gy+8,x+30,gy);g.lineTo(x+28,gy-BLH);g.closePath();fo(tc('#6B4A4E'));
  g.strokeStyle=rgba('#3E2C3A',.7);g.lineWidth=1.5;for(let i=0;i<4;i++){g.beginPath();g.moveTo(x-22+i*14,gy-BLH+6);g.lineTo(x-24+i*15,gy-2);g.stroke()}
  ell(x,gy-BLH,28,8);fo(tc('#C8A07A'));g.strokeStyle=rgba('#8A6A58',.8);g.lineWidth=1;for(let r=2;r<8;r+=2){ell(x,gy-BLH,r*3.4,r);g.stroke()}
  g.save();g.translate(x+36,gy);g.rotate(.32);segs([[0,0,0,-60,4,tc('#A0704A')]]);g.beginPath();g.moveTo(-2,-56);g.lineTo(-16,-66);g.quadraticCurveTo(-20,-56,-16,-44);g.lineTo(-2,-50);g.closePath();fo(tc('#8C8FA3'),.8);g.restore()}
// the bench under the okno: 0 none, 1 planks stacked, 2 legs + nailed seat (unfinished)
function benchSite(stage){
  if(stage>=1){boards(BX+44,GY-6,0,150,stage>=2?2:4,'#C8A07A')}
  if(stage>=2){for(const sd of[-1,1]){g.beginPath();g.roundRect(BX+sd*58-12,GY-46,24,38,4);fo(tc('#A07A60'),.9);ell(BX+sd*58,GY-46,12,4);fo(tc('#C8A07A'),.7)}
    g.beginPath();g.roundRect(BX-86,GY-56,172,11,3);fo(tc('#C8A07A'),.9);g.strokeStyle=rgba('#FFF4EA',.4);g.lineWidth=1.5;g.beginPath();g.moveTo(BX-80,GY-53);g.lineTo(BX+70,GY-53);g.stroke();
    for(const sd of[-1,1]){ell(BX+sd*58,GY-50,2.2,2.2);g.fillStyle=tc('#D8DAE6');g.fill()}
    // back plank leaning on the wall, not yet fixed
    g.save();g.translate(BX+70,GY-10);g.rotate(-.12);g.beginPath();g.roundRect(-6,-120,12,120,3);fo(tc('#C8A07A'),.8);g.restore()}
}
// glass outline of the planned bench
function ghostBench(a){if(a<=0)return;g.save();g.globalAlpha=a;g.shadowColor='#E1C8B8';g.shadowBlur=14;g.strokeStyle=rgba('#E1C8B8',.9);g.lineWidth=2.2;g.setLineDash([7,5]);g.lineDashOffset=-t*20;
  g.beginPath();g.rect(BX-88,GY-58,176,12);g.moveTo(BX-70,GY-46);g.lineTo(BX-70,GY-8);g.moveTo(BX+70,GY-46);g.lineTo(BX+70,GY-8);g.rect(BX-88,GY-150,176,14);g.moveTo(BX-80,GY-136);g.lineTo(BX-80,GY-58);g.moveTo(BX+80,GY-136);g.lineTo(BX+80,GY-58);g.stroke();
  g.setLineDash([]);g.fillStyle=rgba('#E1C8B8',.08);g.fillRect(BX-88,GY-150,176,142);g.restore()}
// ---------- characters
const NB=worker(1);
function heroO(){
  // 0..4.9 standing, thinking; 7.7.. sitting on the chopping block
  if(t<7.7){const th=sm(.15,.55,t),med=sm(4.0,4.4,t);
    const o={x:142,y:726,s:HS,yaw:.62,t,medal:med>0?'hidden':'hidden',fr:[26,0],fl:[-18,0],ls:1,rimC:PAL.rim,rimA:.5,lean:.03};
    o.hr=[lerp(14,10,th)+med*22,lerp(-60,-247,th)+med*55];o.hl=[lerp(-10,22,th)*(1-med),lerp(-150,-176,th)];
    if(med>0)o.itemR=(gg,ex,ey,an)=>medallion(ex+4,ey-4,9,an,0,.4+.4*med);
    o.em={look:[.75,.35-.2*med],browIn:.35*th*(1-med),brow:.1+.4*med,smile:lerp(-.1,.15,sm(2.2,2.6,t)),open:0};
    o.tilt=.12*th*(1-med)+.04*Math.sin(t*1.2);o.turn=-.05*Math.sin(t*.8);return o}
  const look=nbO(),lx=cl((look.x-200)/220,-1,1);
  const o={x:BLX,y:GY+8,s:HS,yaw:.7,t,medal:'hidden',hipY:-(BLH/HS)-10,fr:[52,0],fl:[30,0],lean:.12,ls:1,rimC:PAL.rim,rimA:.7,
    hr:[48,-100],hl:[40,-96],em:{look:[lx,.15],brow:.15,smile:.05},turn:lerp(-.1,.25,(lx+1)/2),tilt:.06};
  return o;
}
function nbO(){
  // time-lapse: he walks briskly
  const o=walker(NB,600,-1,7.75,140,215,724,HS),dn=ease((t-9.2)/.55),up=sm(9.78,10.05,t);
  const crouch=dn*(1-up*.8);o.hipY=lerp(-142.8,-102,crouch);o.lean=lerp(o.lean,-.45,crouch);
  const sh=[-4,-252],lo=[-58,-78];
  if(dn<1){const hp=[lerp(sh[0],lo[0],dn),lerp(sh[1],lo[1],dn)];o.hr=hp;o.hl=dn>.4?[lerp(30,-40,dn),lerp(-150,-90,dn)]:null;
    o.itemR=(gg,ex,ey)=>boards(ex-12*dn,ey-6*(1-dn),lerp(.08,0,dn),240,4,'#C8A07A')}
  else{o.hr=[lerp(-40,-10,up),lerp(-90,-150,up)];o.hl=[lerp(-30,10,up),lerp(-96,-150,up)]}
  o.em={look:[-.6,.4*crouch],smile:.1};o.tilt=.2*crouch;return o;
}
function yard(bF,bM,bFg,stage,people,ghost){
  villageWorld({tod:'lapse',bF,bM,fg:0,
    far:()=>{lapseClouds()},
    main:()=>{
      wall(WL0,WL1,GY-8,WH);
      // long shadows swing with the time-lapse sun
      const L=(x,w)=>{const dir=x<SUN[0]?-1:1,len=lerp(20,150,K);ell(x+dir*len*.5,GY+6,w*.5+len*.5,5+K*2);g.fillStyle=rgba(PAL.out,.22+.1*K);g.fill()};
      L(BLX,60);if(people){L(heroO().x,50);if(t>=7.7&&t<10.05)L(nbO().x,50)}if(stage>=2)L(BX,170);
      benchSite(stage);ghostBench(ghost||0);
      hen(560,720,.62,1);
      block(BLX,GY+6);
      if(people){const L=[];if(t>=7.7&&t<10.05)L.push({C:NB,o:nbO()});L.push({C:HERO,o:heroO()});L.sort((a,b)=>a.o.y-b.o.y);for(const a of L)person(a.C,a.o)}
      grassRow(770,4,40,-600,1400,30,tc('#3E3A58'));
    }});
  layer(1.7,()=>{grassRow(980,7,40,-600,1400,90,'#241F36');g.fillStyle='#1E1830';g.fillRect(-800,975,2600,400)},bFg);
}
// ---------------- shot 0: medium — the hero thinks, eyes on the empty place under his okno
if(S.i===0){
  const u=S.u;setCam(222+u*10,556-u*6,1.62+u*.1,-.01+u*.01);
  yard(3,2,4,0,1);
  layer(1.4,()=>{burdock(-20,830,1.2,3)},4);
  motes(18,5,180,150,360,520,'#FFE6C4',.45,1.8);
}
// ---------------- shot 1: insert — build menu, the right index finger picks the bench
if(S.i===1){
  const lt=S.lt;setCam(300,560,2.4,0);
  villageWorld({tod:'lapse',bF:10,bM:9,bMain:8,fg:0,main:()=>{wall(WL0,WL1,GY-8,WH);block(BLX,GY+6);person(HERO,heroO())}});
  wash('#241F4A',.3);
  const z=1+lt*.05,ap=sm(2.65,2.9,t),press=sm(3.35,3.45,t)*(1-sm(3.7,4,t)),pick=sm(3.45,3.6,t);
  g.save();g.translate(270,470);g.scale(z,z);g.rotate(.02-lt*.01);g.translate(-270,-470);
  panel(50,330,440,250,ap,'#E1C8B8',.6);
  g.save();g.globalAlpha*=ap;medallion(84,366,16,0,0,.6);g.fillStyle=rgba('#E1C8B8',.8);g.beginPath();g.roundRect(112,358,150,7,3.5);g.fill();
  const kinds=['well','bench','roof','road'];
  for(let i=0;i<4;i++){const x=70+i*102,y=400,sel=i===1,hv=sel?Math.max(pick,sm(3.0,3.35,t)*.4):0,dim=i===0?.45:1;
    g.save();if(hv>0){g.shadowColor='#FFCF9A';g.shadowBlur=26*hv}g.beginPath();g.roundRect(x,y,92,150,12);g.fillStyle=rgba(sel?mixc('#241F4A','#FFCF9A',.18*hv):'#241F4A',.6);g.fill();g.strokeStyle=rgba(sel&&hv>0?'#FFCF9A':'#E1C8B8',sel?.5+.5*hv:.35);g.lineWidth=2;g.stroke();g.restore();
    icon(kinds[i],x+46,y+58,2.3*(sel?1+.15*pick:1),dim);
    // size pips: the bench is the smallest job (one pip)
    const np=[4,1,3,3][i];for(let k=0;k<np;k++){ell(x+46-(np-1)*7+k*14,y+122,4.5,4.5);g.fillStyle=rgba(sel?'#FFCF9A':'#E1C8B8',sel?.9:.5);g.fill()}
    if(i===0){g.strokeStyle=rgba('#FFCF9A',.7);g.lineWidth=3;g.beginPath();g.moveTo(x+64,y+18);g.lineTo(x+72,y+28);g.lineTo(x+86,y+10);g.stroke()}}
  g.restore();
  // finger approaches from below-right, anticipation dip, taps the bench tile
  const ap2=ease((t-2.8)/.5),tap=Math.sin(cl((t-3.3)/.25,0,1)*Math.PI);
  const fx=lerp(470,226,ap2)+4*Math.sin(t*2),fy=lerp(900,500,ap2)+lerp(0,-8,sm(3.15,3.3,t))+tap*14;
  finger(fx,fy,1.35,-.12,press);
  if(press>0){g.strokeStyle=rgba('#FFCF9A',press);g.lineWidth=2;for(let r=0;r<2;r++){ell(222,476,30+r*16+(t-3.4)*60,10+r*5+(t-3.4)*20);g.stroke()}}
  g.restore();
  motes(14,6,0,200,540,600,'#FFE6C4',.4,2);
}
// ---------------- shot 2: medium-wide — a glass outline of the bench appears under the okno
if(S.i===2){
  const u=S.u;setCam(222+u*12,556-u*6,1.4+u*.07,.008);
  yard(2,1.5,3,0,1,sm(4.15,4.6,t)*(.85+.15*Math.sin(t*6)));
  motes(16,8,0,150,540,560,'#FFE6C4',.45,1.8);
}
// ---------------- shot 3: insert — cost: four wood chips, one iron chip
if(S.i===3){
  const lt=S.lt;setCam(300,560,2.4,0);
  villageWorld({tod:'lapse',bF:10,bM:9,bMain:9,fg:0,main:()=>{wall(WL0,WL1,GY-8,WH);ghostBench(.6);block(BLX,GY+6);person(HERO,heroO())}});
  wash('#241F4A',.35);
  // camera: whole panel → push to the wood bar end → slide to the iron bar end
  const pu=ease((lt-.5)/.9),sl=ease((t-6.75)/.35);
  const PX=40,PY=330,PW=460,bw=PW-120,woodE=PX+70+bw*110/200,ironE=PX+70+bw*15/50,ry0=PY+74,ry1=PY+124;
  const z=lerp(1.05,1.9,pu)+lt*.02,cx=lerp(270,lerp(woodE+70,ironE+90,sl),pu),cy=lerp(430,lerp(ry0+20,ry1,sl),pu);
  g.save();g.translate(270,470+kick(t,6.4,2,.2)+kick(t,7.2,3,.25));g.scale(z,z);g.translate(-cx,-cy);
  panel(PX,PY,PW,190,sm(5.05,5.3,t),'#E1C8B8',.6);
  g.save();g.globalAlpha*=sm(5.05,5.3,t);
  icon('bench',PX+40,PY+34,1.6,1);g.fillStyle=rgba('#E1C8B8',.7);g.beginPath();g.roundRect(PX+70,PY+30,120,6,3);g.fill();
  const wc=[6.3,6.38,6.46,6.54],nW=wc.filter(c=>t>=c).length,nI=t>=7.2?1:0;
  icon('wood',PX+36,ry0+12,1.25,1);bar(PX+70,ry0,bw,24,(110-nW)/200,'#A0704A',1,.4);ticks(PX+70,ry0,bw,24,20,1);
  icon('iron',PX+36,ry1+12,1.25,1);bar(PX+70,ry1,bw,24,(15-nI)/50,'#8C8FA3',1,.4);ticks(PX+70,ry1,bw,24,10,1);
  // the bench cost slot on the right: fills with what was taken
  const slot=[PX+PW-36,PY+98],got=nW+nI;g.save();g.shadowColor='#FFCF9A';g.shadowBlur=12*sm(6.3,6.6,t);g.beginPath();g.roundRect(slot[0]-22,slot[1]-26,44,52,8);g.fillStyle=rgba('#241F4A',.6);g.fill();g.strokeStyle=rgba('#FFCF9A',.4+.1*got);g.lineWidth=1.5;g.stroke();g.restore();
  icon('bench',slot[0],slot[1]-8,1,1);for(let k=0;k<got;k++){ell(slot[0]-12+k*6,slot[1]+14,2.2,2.2);g.fillStyle=k<nW?'#D8A878':'#C8CBE0';g.fill()}
  // flying chips (tiny on purpose)
  function chip(t0,sx,sy,col,w){const u=(t-t0)/.55;if(u<0||u>1)return;const px=lerp(sx,slot[0]-10,ein(u)),py=lerp(sy,slot[1]+12,u)-Math.sin(u*Math.PI)*28;g.save();g.translate(px,py);g.rotate(u*7);g.fillStyle=col;g.fillRect(-w/2,-4,w,8);g.restore();if(u<.25)spark(sx,sy,6*(1-u*4),1-u*4)}
  wc.forEach(c=>chip(c,woodE-bw/400,ry0+12,'#D8A878',bw/200));chip(7.2,ironE-bw/100,ry1+12,'#C8CBE0',bw/50);
  g.restore();g.restore();
  motes(12,4,0,200,540,600,'#FFE6C4',.4,2);
}
// ---------------- shot 4: time-lapse — sun jumps, the neighbour brings sanded planks on his right shoulder
if(S.i===4){
  const u=S.u;setCam(268-u*14,550-u*8,1.32+u*.08,-.006);
  yard(2,1.5,3,t>=9.75?1:0,1);
  leaves(8,4,0,200,540,600,'#C9926F');
}
// ---------------- shot 5: insert — a hammer drives new nails, chips fly
if(S.i===5){
  const lt=S.lt;setCam(300,560,2,0);
  villageWorld({tod:'lapse',bF:10,bM:9,bMain:10,fg:0,main:()=>{wall(WL0,WL1,GY-8,WH);benchSite(1);block(BLX,GY+6);person(HERO,heroO())}});
  wash('#241F4A',.2);
  const hits=[10.3,10.62,10.94],z=1+lt*.05;
  g.save();g.translate(270+kick(t,10.3,3,.2)+kick(t,10.62,3,.2),480+kick(t,10.94,3,.2));g.scale(z*1.45,z*1.45);g.rotate(-.04);g.translate(-232,-548);
  // plank seat, big
  g.beginPath();g.roundRect(-40,500,640,110,10);const pg=g.createLinearGradient(0,500,0,610);pg.addColorStop(0,tc('#E0BC94'));pg.addColorStop(1,tc('#A07A60'));g.fillStyle=pg;g.fill();ol();
  g.strokeStyle=rgba('#8A6A58',.55);g.lineWidth=2;for(let i=0;i<6;i++){g.beginPath();g.moveTo(-40,516+i*16);for(let x=-40;x<600;x+=40)g.quadraticCurveTo(x+20,516+i*16+Math.sin(x*.05+i)*5,x+40,516+i*16);g.stroke()}
  g.beginPath();g.roundRect(-40,610,640,40,6);fo(tc('#7A5848'));
  // nails: one per hit goes in; earlier nails already flush
  const nx=[110,210,310];
  for(let k=0;k<3;k++){const h=hits[k],dn=t<h-.02?0:1,hh=lerp(46,3,dn)*(t<h-.6&&k>0?1:1),x=nx[k];if(t<h-.6&&k>0)continue;
    g.beginPath();g.rect(x-3,548-hh,6,hh);fo(tc('#8C8FA3'),.6);ell(x,548-hh,10,4);fo(tc('#D8DAE6'),.8);if(dn)spark(x,546,10*Math.max(0,1-(t-h)/.25),Math.max(0,1-(t-h)/.25))}
  // wood chips fly on every hit
  for(const h of hits){const u=t-h;if(u<0||u>.6)continue;for(let i=0;i<9;i++){const a=-Math.PI/2+(hash(i+h)-.5)*2.4,v=180+hash(i*3+h)*220,px=nx[hits.indexOf(h)]+Math.cos(a)*v*u,py=548+Math.sin(a)*v*u+500*u*u;
    g.save();g.translate(px,py);g.rotate(u*12+i);g.fillStyle=rgba(i%2?'#E0BC94':'#C8A07A',1-u/.6);g.fillRect(-5,-2,10,4);g.restore()}}
  // the hammer and the hand of "someone": raise (anticipation), strike
  let cur=0;for(let k=0;k<3;k++)if(t>=hits[k]-.32)cur=k;
  // positive angle lifts the head; strike lands the head's face on the nail (head centre 160 left of the fist)
  const ph=Math.max(0,(t-(hits[cur]-.32))/.32),ang=ph<.7?lerp(.1,1.15,ease(ph/.7)):ph<1?lerp(1.15,0,ein((ph-.7)/.3)):lerp(0,.12,sm(hits[cur],hits[cur]+.15,t));
  const px_=cur>0?lerp(nx[cur-1],nx[cur],ease(ph/.55))+160:nx[0]+160,piv=[px_,517];
  segs([[piv[0],piv[1],piv[0]+260,piv[1]+190,46,tc('#8C7F92')]]);
  g.save();g.translate(piv[0],piv[1]);g.rotate(ang);
  segs([[0,0,-150,0,14,tc('#A0704A')]]);g.beginPath();g.roundRect(-176,-28,32,56,5);fo(tc('#8C8FA3'));g.fillStyle=rgba('#E1E4F0',.5);g.fillRect(-172,-24,6,48);
  ell(6,4,30,24,.5);fo(tc(SKIN[0]));for(let i=0;i<4;i++){ell(-12+i*9,-14+i*3,8,10,.3);fo(tc(SKIN[0]),.7)}ell(-14,8,9,6,-.4);fo(tc(SKIN[0]),.7);
  g.restore();g.restore();
  motes(16,9,0,150,540,600,'#FFE6C4',.55,2);
}
// ---------------- shot 6: evening — the unfinished bench, the hero on his block
if(S.i===6){
  const u=S.u;setCam(244-u*10,552-u*6,1.36+u*.06,.006);
  yard(2,1.5,3,2,1);
  leaves(6,2,0,200,540,600,'#C9926F');
  motes(14,3,0,200,540,500,'#FFE6C4',.45,1.8);
}
// ---------------- finishing: light-only transitions between time-lapse beats (no darkening)
g.save();g.globalCompositeOperation='screen';const bs=toScreen(SUN[0],SUN[1],.06);beam(bs[0],bs[1],270,820,30,200,'#FFB36B',.05+.06*K);g.restore();
if(S.i!==1&&S.i!==3&&S.i!==5)lampLight(bs[0],bs[1]+200,760,mixc('#FFE6C4','#FFB36B',K),.1*(1-K)+.03);
if(K>.3){g.save();g.globalCompositeOperation='multiply';wash('#6C4377',.14*K);g.restore()}
vignette(.42+.1*K);
grain(.05);
wash('#000000',cutDip(t,[0,2.65,4.0,5.05]));
for(const c of[7.7,10.05,11.15]){const f=Math.max(0,1-Math.abs(t-c)/.14);if(f>0){g.save();g.globalCompositeOperation='screen';wash('#FFCF9A',.45*f);g.restore()}}
wash('#000000',(1-sm(0,.07,t))*.85);
}