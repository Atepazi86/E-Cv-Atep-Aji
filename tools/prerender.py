#!/usr/bin/env python3
"""Salin hasil render situs ke index.html sebagai isi bawaan (untuk Google & pratinjau link).
Pakai:  python3 tools/prerender.py data.json
data.json = isi kolom `data` tabel site_content (Supabase). Aman dijalankan berulang."""
import json, re, sys, threading, http.server, socketserver, functools, os
from playwright.sync_api import sync_playwright
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IDS = ["hTag","hStatus","h1","hRole","hLead","hBadges","hPanel","cName","cSub","aCopy","aStats","prGrid","skList","qv","tg","imGrid","tabs","pg","tlExp","tlEdu","cg","cLoc"]
data = json.load(open(sys.argv[1]))
H = functools.partial(http.server.SimpleHTTPRequestHandler, directory=ROOT)
H.log_message = lambda *a, **k: None
srv = socketserver.TCPServer(("127.0.0.1", 0), H); port = srv.server_address[1]
threading.Thread(target=srv.serve_forever, daemon=True).start()
out = {}
with sync_playwright() as p:
    b = p.chromium.launch(); ctx = b.new_context(viewport={"width": 1280, "height": 900})
    ctx.route(re.compile(r"^(?!http://127\.0\.0\.1).*"), lambda r: r.abort())
    pg = ctx.new_page()
    pg.add_init_script("localStorage.setItem('pf-cache', %s)" % json.dumps(json.dumps(data)))
    pg.goto(f"http://127.0.0.1:{port}/index.html"); pg.wait_for_selector("#pg .pc, #pg p")
    for i in IDS:
        out[i] = pg.evaluate("""(id)=>{const e=document.getElementById(id);if(!e)return null;
          const c=e.cloneNode(true);c.querySelectorAll('[data-n]').forEach(n=>n.textContent=n.getAttribute('data-n'));
          c.querySelectorAll('[style]').forEach(n=>{if(/transform|opacity/.test(n.getAttribute('style')||''))n.removeAttribute('style')});
          return c.innerHTML}""", i)
    b.close()
srv.shutdown()
path = os.path.join(ROOT, "index.html"); s = open(path, encoding="utf-8").read()
for i, html in out.items():
    if html is None: print("lewati", i); continue
    mk_a, mk_b = f"<!--ssr:{i}-->", f"<!--/ssr:{i}-->"
    if mk_a in s:
        s = re.sub(re.escape(mk_a) + ".*?" + re.escape(mk_b), lambda m: mk_a + html + mk_b, s, flags=re.S)
    else:
        pat = re.compile(r'(<(\w+)[^>]*\bid="%s"[^>]*>)(</\2>)' % i)
        m = pat.search(s)
        if not m: print("tidak ketemu", i); continue
        s = s[:m.end(1)] + mk_a + html + mk_b + s[m.start(3):]
open(path, "w", encoding="utf-8").write(s)
print("selesai:", sum(1 for v in out.values() if v), "bagian diisi")
