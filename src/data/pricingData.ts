export interface Package {id:string;name:string;price:number;label:string;detail:string;features:string[];featured?:boolean}
export const packages:Package[]=[
{id:'royal',name:'The Royal Wedding',price:150000,label:'Bride + groom · 2 days',detail:'Both sides, one beautifully complete story.',features:['Full photography & video','Cinematic wedding film','Pre- or post-wedding shoot','Same town / city'],featured:true},
{id:'groom',name:'The Groom’s Story',price:95000,label:'Groom side · 2 days',detail:'Every tradition. Every quiet moment.',features:['Groom-side photography & video','Cinematic wedding film','Pre- or post-wedding shoot','Same town / city']},
{id:'bride',name:'The Bride’s Story',price:85000,label:'Bride side · 2 days',detail:'From the first preparations to the farewell.',features:['Bride-side photography & video','Cinematic wedding film','Pre- or post-wedding shoot','Same town / city']},
{id:'one-day',name:'One Perfect Day',price:65000,label:'Bride or groom · 1 day',detail:'A full day, remembered in every frame.',features:['One-day wedding coverage','Bride OR groom side','Same town / city']},
{id:'cinema',name:'Cinematic Wedding Film',price:35000,label:'Multi-angle · up to 12 min',detail:'A wedding story in moving images.',features:['Multi-angle film: NPR 35,000','Single shooter: NPR 25,000']},
{id:'pre',name:'Before & After “I Do”',price:25000,label:'Pre- or post-wedding',detail:'A little time for just the two of you.',features:['Full crew: NPR 25,000','Single shooter: NPR 15,000']},
{id:'celebrations',name:'Little Big Celebrations',price:15000,label:'Pasni & birthdays',detail:'The milestones that become family stories.',features:['Photo + video: NPR 15,000','Photo only: NPR 10,000']}
];
export const money=(n:number)=>new Intl.NumberFormat('en-IN').format(n);
