import { money, royalWedding } from './pricingData';

export const siteConfig = {
 name:'Sai Studios', tagline:'Stories that stay.', site:'https://saistudiosnepal.com',
 phone:'+977 9848036062', whatsapp:'https://wa.me/9779848036062',
 emails:['sgn38655@gmail.com','info@saistudiosnepal.com'],
 facebook:['https://www.facebook.com/share/1C8Z5tLDZy/','https://www.facebook.com/profile.php?id=100082991881772'],
 address:'Ward No. 13, Sugandha Vinayak Tole, Nepalgunj, Banke, Nepal',
 base:'Nepalgunj & Kohalpur, Banke, Lumbini Province, Nepal',
 heritage:'2058 B.S.',pan:'300377862',
 regions:['Nepalgunj','Kohalpur','Gulariya','Bardiya','Surkhet (Karnali)','Dang Valley','Dhangadhi','Mahendranagar']
};
export const wa = (message:string) => siteConfig.whatsapp+'?text='+encodeURIComponent(message);
export const faqs = [
 {q:'Where does Sai Studios work?',a:'Based in Nepalgunj and Kohalpur, we serve Gulariya, Bardiya, Surkhet, Dang Valley, Dhangadhi and Mahendranagar. Ask us about travel arrangements for your location.'},
 {q:'What does the Royal Wedding Package include?',a:`NPR ${money(royalWedding.price)} covers both sides for two days of Haldi, Mehendi and wedding events in the same town or city. It includes photography, video, a cinematic film and a pre- or post-wedding shoot. Coverage across different towns or cities costs extra.`},
 {q:'How do I confirm a booking?',a:'Share your date, location and preferred service on WhatsApp. Our team will confirm availability, deliverables, travel requirements and booking terms directly.'},
 {q:'Can I book the podcast and shooting studio?',a:'Yes. Enquire about multi-camera 4K recording, RGB lighting and Hollyland wireless audio. Studio pricing is quoted for your session.'}
];
