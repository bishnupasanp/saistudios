import fs from 'node:fs/promises';import path from 'node:path';import {createHash} from 'node:crypto';
async function walk(dir){const files=[];for(const entry of await fs.readdir(dir,{withFileTypes:true})){const p=path.join(dir,entry.name);if(entry.isDirectory())files.push(...await walk(p));else if(p.endsWith('.html'))files.push(p);}return files;}
const hashes=new Set();for(const file of await walk('dist')){const html=await fs.readFile(file,'utf8');for(const match of html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)){hashes.add("'sha256-"+createHash('sha256').update(match[1]).digest('base64')+"'");}}
for(const name of ['_headers','.htaccess']){let body=await fs.readFile(path.join('public',name),'utf8');body=body.replace("script-src 'self'","script-src 'self' "+[...hashes].join(' '));await fs.writeFile(path.join('dist',name),body);}
await fs.writeFile('dist/_astro/.htaccess','<IfModule mod_headers.c>\nHeader set Cache-Control "public, max-age=31536000, immutable"\n</IfModule>\n');
const js=(await fs.readdir('dist/_astro')).filter(f=>f.endsWith('.js'));let total=0;for(const file of js)total+=(await fs.stat(path.join('dist/_astro',file))).size;
console.log('Client JavaScript: '+total+' bytes');if(total>=8192)throw Error('Client JavaScript exceeds the 8 KB budget');
