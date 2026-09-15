"""Optional: preview the site on your own computer.
Run:  python3 local-server.py   then open http://localhost:8000
(Not needed for Vercel.)"""
import http.server, os, socketserver

ROOT = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=ROOT, **kw)

    def do_GET(self):
        path = self.path.split('?')[0].split('#')[0]
        if not os.path.isfile(os.path.join(ROOT, path.lstrip('/'))):
            self.path = '/index.html'
        return super().do_GET()

    def guess_type(self, path):
        if str(path).endswith('.js'):
            return 'text/javascript'
        return super().guess_type(path)

socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(('', 8000), Handler) as httpd:
    print('Preview running at http://localhost:8000  (Ctrl+C to stop)')
    httpd.serve_forever()
