import { cp, mkdir, rm, readFile, writeFile } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await mkdir('dist');
for (const path of ['index.html','src','assets','robots.txt']) await cp(path, `dist/${path}`, {recursive:true});
console.log('Static build ready in dist/');

await mkdir("dist/src/vendor", {recursive:true});
for(const file of ["three.module.js","three.core.js"]) await cp(`node_modules/three/build/${file}`,`dist/src/vendor/${file}`);
await cp("node_modules/three/LICENSE","dist/src/vendor/THREE-LICENSE.txt");

for(const file of ["SVGRenderer.js","Projector.js"]){const source=await readFile(`node_modules/three/examples/jsm/renderers/${file}`,"utf8");await writeFile(`dist/src/vendor/${file}`,source.replaceAll("from 'three'","from './three.module.js'"));}
