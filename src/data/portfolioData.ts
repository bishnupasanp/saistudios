export type Category='Weddings'|'Engagements & Pre-Wedding'|'Commercial & Unplugged'|'Music Videos & Films';
export interface Project {id:string;title:string;category:Category;year:string;image?:string;alt?:string;logoCover?:boolean;youtubeId?:string;video?:string;driveUrl?:string;preview?:boolean}
export const prajwalLogo = '/images/client/prajwal-unplugged-logo.webp';
export const projects:Project[]=[
{id:'bishal',title:'Bishal & Ankita',category:'Weddings',year:'2083',driveUrl:'https://drive.google.com/file/d/1sMBisFtSHo7vI4xKoCpieS9cmMnjiFIt/view'},
{id:'himal',title:'Himal & Renu',category:'Engagements & Pre-Wedding',year:'2083',image:'/images/client/himal-poster.webp',alt:'Frame from Himal and Renu’s post-wedding film',video:'/videos/himal-preview.mp4',preview:true,driveUrl:'https://drive.google.com/file/d/1P2KNC-phyK5iZArFBDJeqomfLjxmhA5a/view'},
{id:'prajwal',title:'Prajwal Unplugged',category:'Commercial & Unplugged',year:'2083',image:prajwalLogo,alt:'Prajwal Unplugged logo',logoCover:true,driveUrl:'https://drive.google.com/file/d/1qhCDbOQ6gWS3cjHDsH79TO0cXjPPoB8r/view'},
{id:'maharaja',title:'Maharaja Mobile',category:'Commercial & Unplugged',year:'4K MASTER',driveUrl:'https://drive.google.com/file/d/18svD5vvd0CEiZj00VAzbchpoUmUjzWFr/view'},
{id:'prashiddha',title:'Prashiddha & Aastha',category:'Weddings',year:'2082',image:'/images/client/prashiddha-poster.webp',alt:'Frame from Prashiddha and Aastha’s wedding film',video:'/videos/prashiddha-preview.mp4',preview:true,driveUrl:'https://drive.google.com/file/d/1POZYBLPmMtmAtORg4fYtr-U4e1gP5SUT/view'},
{id:'barsha',title:'Barsha Oli · Udi Udi Mann',category:'Music Videos & Films',year:'2023 · MUSIC VIDEO',image:'/images/client/udi-poster.webp',alt:'Frame from Barsha Oli’s Udi Udi Mann music video',video:'/videos/udi-preview.mp4',preview:true,driveUrl:'https://drive.google.com/file/d/1bVN5K7gjETYJsXbXeimApqXNZ44SWhRY/view'},
{id:'aama',title:'Aama',category:'Music Videos & Films',year:'2081 · SHORT FILM',image:'/images/client/aama-poster.webp',alt:'Frame from the film Aama',video:'/videos/aama-preview.mp4',preview:true,driveUrl:'https://drive.google.com/file/d/10BzQMp1r7vdba9zQqUZh_3A_oyHda9xe/view'},
{id:'fulthunge',title:'Barsha Oli · Fulthunge Rani',category:'Music Videos & Films',year:'2023 · MUSIC VIDEO',driveUrl:'https://drive.google.com/file/d/1BlWRnKb9pdePWtQAz6V3mPeUk_8_7CR8/view'},
{id:'fijeko',title:'Barsha Oli · Fijeko Kesh',category:'Music Videos & Films',year:'2023 · EXTENDED CUT',driveUrl:'https://drive.google.com/file/d/1xZLuXUYAY138TSM7fn371j8m8oXnCYj9/view'}
];
export const categories=['All','Weddings','Engagements & Pre-Wedding','Commercial & Unplugged','Music Videos & Films'];
