import { cp, rm, mkdir } from 'node:fs/promises';
const root=new URL('.',import.meta.url).pathname;
const dist=root+'dist';
await rm(dist,{recursive:true,force:true});
await mkdir(dist,{recursive:true});
for(const item of ['index.html','styles.css','script.js','assets']) await cp(root+item,dist+'/'+item,{recursive:true});
console.log('Build complete:',dist);
