import { cp, mkdir, rm } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await mkdir('dist');
for (const path of ['index.html','src','assets','robots.txt']) await cp(path, `dist/${path}`, {recursive:true});
console.log('Static build ready in dist/');
