import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
const args=process.argv.slice(2), option=(key,fallback)=>{const i=args.indexOf(key);return i<0?fallback:args[i+1];};
const root=resolve('dist'),port=Number(option('--port','3000')),host=option('--host','0.0.0.0');
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.txt':'text/plain'};
createServer(async(req,res)=>{try{const path=resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://local').pathname));const file=path===root?resolve(root,'index.html'):path;if(!file.startsWith(root+sep))throw new Error('Invalid path');const data=await readFile(file);res.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream'});res.end(data);}catch{res.writeHead(404);res.end('Not found');}}).listen(port,host,()=>console.log(`Serving dist on ${host}:${port}`));
