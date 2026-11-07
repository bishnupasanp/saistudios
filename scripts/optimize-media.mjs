import fs from 'node:fs/promises';import path from 'node:path';import sharp from 'sharp';
const input='raw-assets',output='public/images/portfolio';await fs.mkdir(input,{recursive:true});await fs.mkdir(output,{recursive:true});
const files=(await fs.readdir(input)).filter(f=>/^_DSC.*\.jpe?g$/i.test(f));
for(const file of files){const name=path.parse(file).name.toLowerCase().replace(/[^a-z0-9_-]/g,'-');for(const format of ['webp','avif']){let width=1600,quality=format==='avif'?60:78,buffer;do{buffer=await sharp(path.join(input,file)).rotate().resize({width,withoutEnlargement:true})[format]({quality}).toBuffer();quality-=8;if(quality<30){width=Math.floor(width*.8);quality=60;}}while(buffer.length>=150000&&width>=240);if(buffer.length>=150000)throw Error('Could not meet 150 KB budget: '+file);await fs.writeFile(path.join(output,name+'.'+format),buffer);console.log(name+'.'+format+': '+buffer.length+' bytes');}}
console.log(files.length+' raw photographs optimized.');
