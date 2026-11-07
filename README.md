# Sai Studios

Seven-page Sai Studios website built with Astro, TypeScript and Tailwind CSS.

## Run and deploy
- `npm install`
- `npm run dev`
- `npm run check`
- `npm run build`
- `npm run preview`

Upload all contents of `dist/`, including hidden `.htaccess`, to cPanel. Cloudflare Pages reads `_headers`. The build hashes inline structured data for CSP and enforces an 8 KB total client JavaScript budget.

## Original brand assets
The site includes the Sai Studios, Sai Studios Podcast and Prajwal Unplugged logos, along with photography and film previews.

The site uses optimized local images in `public/images/client/`. Portraits follow the explicitly named Drive files; unnamed wedding photos appear as a photography collection without assigning them to unverified couples or named films. No stock photography is displayed.

## Portfolio media
Nine named films link to their original Drive masters. Four include local 45-second MP4 excerpts with poster frames taken from the corresponding originals:
- Himal & Renu
- Prashiddha & Aastha
- Barsha Oli — Udi Udi Mann
- Aama

The local excerpts are 720p web previews, not full films. Full masters open in Google Drive and may require sign-in or access. Five larger masters exceed the connector's 256 MB download limit and use branded title cards with original Drive links. Drive sharing settings were not changed.

The supplied square five-second brand animation is retained as `studio-intro.mp4` for future use. The homepage uses an original wedding photograph.

## Design and motion
The seven pages keep each service's information on its own page, with one enquiry form on Contact. The visual system pairs navy and ivory surfaces with emerald accents, large editorial headings and original photography.

The motion layer adds staged hero entrances, scroll reveals, portfolio filter transitions, dialog entrances, a sticky glass header and hover details. It uses native browser APIs without animation dependencies. Reduced-motion preferences disable these effects; content remains visible without JavaScript.

The homepage centers the original Sai Studios logo among six floating service links. Wedding films, pre-weddings and music videos open the relevant portfolio filter; photography opens the photo collection. Brand films and studio sessions open their service pages. Visitors can pause the floating motion, and keyboard focus pauses it while navigating the service links.

Project records live in `src/data/portfolioData.ts`. An entry can provide `video`, `youtubeId` or `driveUrl`. Native dialog supports Escape, previous/next, arrow keys and focus return. Photo entries open full-image previews.

## Asset processing
Included optimized images and video clips are ready for builds; original masters are not needed for deployment. Optional preparation helpers read original inputs from a sibling `drive-assets/` directory. They are not part of `npm run build`.
Drop `_DSC*.jpg` files into `raw-assets/` and run `npm run optimize-media` to generate WebP and AVIF under 150,000 bytes.

## Booking and business data
Three service tabs prepare encoded WhatsApp enquiries for +977 9848036062. Visitors send them in WhatsApp. The site stores no enquiries and sends no email. Client validation and a honeypot provide basic input handling; a browser-only honeypot is not a server-side anti-spam guarantee.

Business data lives in `src/data/`. Pricing and equipment records were checked against the documents in the supplied Drive folder. Other business details come from the original brief.

## Hosting and security
No website can be guaranteed zero-vulnerability. This static implementation avoids a server/database and third-party JavaScript, and supplies restrictive CSP, HTTPS redirect for the client domain, HSTS, framing protection and input validation. Verify actual headers, HTTPS and HSTS preload eligibility on the final host. Immutable caching applies to hashed assets; replaceable media revalidates.


