// Copies the website files into www/ (used as the offline fallback page).
const fs = require('fs'), path = require('path');
const src = process.env.WEB_SRC || path.join(__dirname, '..', '..', 'mindvora-main');
const dst = path.join(__dirname, '..', 'www');
if (!fs.existsSync(src)) { console.error('Web app folder not found at ' + src + ' — set WEB_SRC'); process.exit(1); }
fs.rmSync(dst, { recursive: true, force: true });
fs.cpSync(src, dst, { recursive: true, filter: (p) => !/(node_modules|\.git|BUGFIXES\.md|firestore\.rules|vercel\.json)$/.test(p) });
console.log('Copied web app from ' + src);
