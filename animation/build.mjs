import fs from 'fs';
import * as espree from 'espree';
const lib = fs.readFileSync('src/lib.js','utf8');
const ast = espree.parse(lib,{ecmaVersion:'latest',range:true});
const decls=[];
for(const n of ast.body){
  let names=[];
  if(n.type==='FunctionDeclaration')names=[n.id.name];
  else if(n.type==='VariableDeclaration')names=n.declarations.map(d=>d.id.name);
  else continue;
  decls.push({names,src:lib.slice(n.range[0],n.range[1])});
}
const all=new Set(decls.flatMap(d=>d.names));
const idents=s=>new Set(espree.tokenize(s,{ecmaVersion:'latest'}).filter(t=>t.type==='Identifier').map(t=>t.value));
for(const d of decls)d.deps=[...idents(d.src)].filter(x=>all.has(x)&&!d.names.includes(x));
export function buildScene(body){
  // names the scene declares itself shadow library declarations of the same name
  const own=new Set();
  for(const n of espree.parse(body,{ecmaVersion:'latest'}).body){if(n.type==='FunctionDeclaration')own.add(n.id.name);else if(n.type==='VariableDeclaration')for(const d of n.declarations)if(d.id.type==='Identifier')own.add(d.id.name)}
  const need=new Set([...idents(body)].filter(x=>all.has(x)&&!own.has(x)));
  let ch=true;while(ch){ch=false;for(const d of decls)if(d.names.some(n=>need.has(n)))for(const x of d.deps)if(!need.has(x)&&!own.has(x)){need.add(x);ch=true}}
  const inc=decls.filter(d=>d.names.some(n=>need.has(n))).map(d=>d.src).join('\n');
  return 'function(g,t,p,env){\n'+inc+'\n// ---- scene\n'+body.trim()+'\n}';
}
const plan=JSON.parse(fs.readFileSync('src/plan.json','utf8'));
const header=fs.readFileSync('../.hoplite/attachments/art_upload_ffa404c14c164f48b43f6e4400f72fbd/animation-task-1-part1.md','utf8').split('\n')[0];
let md=header+'\n# STORY-PIPELINE-ANIMATION v1\n\n## PLAN\n```json\n'+JSON.stringify(plan,null,1)+'\n```\n';
const only=process.argv[2]?process.argv[2].split(",").map(Number):null;
plan.scenes.forEach((s,i)=>{
  if(only&&!only.includes(i+1))return;
  const id=String(i+1).padStart(2,'0'),f=`src/scenes/s${id}.js`;
  if(!fs.existsSync(f)){console.log('missing',f);return}
  let code;try{code=buildScene(fs.readFileSync(f,"utf8"))}catch(e){console.log("BUILD ERROR",f,e.message);return}
  fs.writeFileSync(`dist/s${id}.js`,code);
  md+=`\n## SCENE ${i+1}\n\`\`\`javascript\n${code}\n\`\`\`\n`;
});
if(!only)fs.writeFileSync("dist/package.md",md);
console.log('package bytes',md.length);
