// Zero-dependency static server with optional live reload.
// Usage:  node server.js           -> production-like (no reload)
//         node server.js --dev     -> auto-reloads the browser when files change
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const DEV = process.argv.includes('--dev');
const PORT = Number(process.env.PORT) || 3000;
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.json': 'application/json',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.gif': 'image/gif', '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
  '.pdf': 'application/pdf', '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  '.mp4': 'video/mp4', '.woff2': 'font/woff2'
};
const SKIP = new Set(['node_modules', '.git']);
const clients = new Set();
const RELOAD = `<script>new EventSource('/__reload').onmessage=()=>location.reload()</script>`;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  if (DEV && url.pathname === '/__reload') {
    res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', Connection: 'keep-alive' });
    res.write('\n'); clients.add(res); req.on('close', () => clients.delete(res)); return;
  }
  let rel;
  try { rel = decodeURIComponent(url.pathname); } catch { res.writeHead(400); return res.end('Bad request'); }
  if (rel.endsWith('/')) rel += 'index.html';
  const file = path.join(ROOT, path.normalize(rel));
  const first = path.relative(ROOT, file).split(path.sep)[0];
  if (!file.startsWith(ROOT + path.sep) || SKIP.has(first) || ['server.js', 'package.json', 'package-lock.json'].includes(first)) {
    res.writeHead(403); return res.end('Forbidden');
  }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404, { 'Content-Type': 'text/plain' }); return res.end('Not found'); }
    const ext = path.extname(file).toLowerCase();
    res.writeHead(200, { 'Content-Type': TYPES[ext] || 'application/octet-stream', 'Cache-Control': DEV ? 'no-store' : 'public, max-age=300' });
    res.end(DEV && ext === '.html' ? data.toString().replace('</body>', RELOAD + '</body>') : data);
  });
});

if (DEV) {
  let t;
  const ping = () => { clearTimeout(t); t = setTimeout(() => clients.forEach(c => c.write('data: reload\n\n')), 80); };
  try { fs.watch(ROOT, { recursive: true }, (_, f) => { if (f && !f.startsWith('node_modules') && !f.startsWith('.git')) ping(); }); }
  catch { ['index.html', 'style.css', 'script.js'].forEach(f => fs.watchFile(path.join(ROOT, f), { interval: 300 }, ping)); }
}

server.listen(PORT, () => console.log(`Portfolio running at http://localhost:${PORT}${DEV ? '  (live reload on)' : ''}`));
