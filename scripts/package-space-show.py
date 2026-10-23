#!/usr/bin/env python3
"""Turn the built presentation into one HTML file that opens without a server."""
from pathlib import Path
import argparse, re
p=argparse.ArgumentParser(description=__doc__)
p.add_argument('destination',type=Path)
args=p.parse_args()
repo=Path(__file__).resolve().parents[1]
dist=repo/'dist'
source=dist/'scouts/space-presentation/index.html'
if not source.exists():p.error('Run npm run build first.')
html=source.read_text()
def css(m):
 path=dist/m[1].lstrip('/')
 return '<style>'+path.read_text()+'</style>'
def js(m):
 path=dist/m[1].lstrip('/')
 code=path.read_text()
 if re.search(r'\bimport\s*(?:[\"\x27{*]|\()',code):raise ValueError('External module import requires bundling: '+str(path))
 return '<script type="module">'+code.replace('</script','<\\/script')+'</script>'
html=re.sub(r'<link rel="stylesheet" href="([^"]+)"[^>]*>',css,html)
html=re.sub(r'<script[^>]*src="([^"]+)"[^>]*>\s*</script>',js,html)
html=html.replace('href="/scouts/space-exploration-fall-2026/#counselor"','href="#intro"')
html=html.replace('href="/scouts/space-exploration-fall-2026/"','href="#intro"')
html=html.replace('href="/scouts/space-lessons/"','href="#intro"')
# The single-file show is tested under a policy that forbids all network requests.
policy="default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src data:; connect-src 'none'; font-src 'none'; base-uri 'none'"
html=html.replace('<head>','<head><meta http-equiv="Content-Security-Policy" content="'+policy+'">',1)
assert not re.search(r'<(?:script|link)[^>]+(?:src|href)=',html),'Unbundled asset'
args.destination.parent.mkdir(parents=True,exist_ok=True)
args.destination.write_text(html)
print(str(args.destination)+' ('+str(len(html.encode()))+' bytes, no external assets)')
