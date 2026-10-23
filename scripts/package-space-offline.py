from pathlib import Path
import re,shutil,json,hashlib
import argparse
parser=argparse.ArgumentParser(description="Package the built course with personal offline videos (MP4 and yt-dlp info.json pairs). Run npm run build first.")
parser.add_argument("destination", type=Path)
parser.add_argument("media", type=Path)
args=parser.parse_args()
r=Path(__file__).resolve().parents[1]
out=args.destination.resolve()
media=args.media.resolve()
if out.exists():
 raise SystemExit("Choose a new destination folder to avoid mixing different builds.")
if not (r/"dist/scouts/space-exploration-fall-2026/index.html").is_file():
 raise SystemExit("Build the course first: npm run build")
out.mkdir(parents=True,exist_ok=True)
shutil.copytree(r/'dist',out/'site',dirs_exist_ok=True)
(out/'site/videos').mkdir(exist_ok=True)
records=[]
for p in sorted(media.glob('*.mp4')):
 shutil.copy2(p,out/'site/videos'/p.name)
 info=json.loads(p.with_suffix('.info.json').read_text())
 records.append({'file':p.name,'title':info['title'],'channel':info.get('channel'),'source':info.get('webpage_url'),'duration_seconds':info.get('duration'),'bytes':p.stat().st_size,'sha256':hashlib.sha256(p.read_bytes()).hexdigest()})
for p in (out/'site').rglob('*.html'):
 s=p.read_text()
 s=re.sub(r'<link\b[^>]*href="https://fonts\.[^"]*"[^>]*>','',s)
 # Site-only transformation: downloaded videos stay in the private offline folder.
 def video(m):
  ident=m[2]
  if not (out/'site/videos'/f'{ident}.mp4').exists():return m[0]
  return m[1]+f'<video controls playsinline preload="metadata" style="width:100%;max-height:42vh;aspect-ratio:16/9" src="/videos/{ident}.mp4"></video></div>'
 s=re.sub(r'(<div\b[^>]*class="ds-video"[^>]*data-yt="([^"]+)"[^>]*>).*?</button>\s*</div>',video,s,flags=re.S)
 for record in records:
  ident=Path(record['file']).stem
  s=s.replace(f'href="https://www.youtube.com/watch?v={ident}"',f'href="/videos/{ident}.mp4"')
 s=s.replace('open on YouTube ↗','open saved video ↗')
 p.write_text(s)
(out/'video-manifest.json').write_text(json.dumps(records,indent=2))
(out/'Start Offline.command').write_text('''#!/bin/zsh
cd -- "$(dirname -- "$0")"
if ! command -v python3 >/dev/null; then
  echo "Python 3 is required. Install it before leaving internet access, or use the prepared teaching Mac."
  read "?Press Return to close."
  exit 1
fi
exec python3 serve.py
''')
(out/'Start Offline.command').chmod(0o755)
(out/'serve.py').write_text('''from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import os, re, webbrowser, sys
os.chdir(Path(__file__).resolve().parent / "site")
class Handler(SimpleHTTPRequestHandler):
    def send_head(self):
        self.remaining = None
        path = Path(self.translate_path(self.path))
        header = self.headers.get("Range", "")
        if path.is_file() and header:
            size = path.stat().st_size
            match = re.fullmatch(r"bytes=(\\d*)-(\\d*)", header)
            if match and (match[1] or match[2]):
                start = int(match[1]) if match[1] else max(0, size-int(match[2]))
                end = min(int(match[2]), size-1) if match[1] and match[2] else size-1
                if start > end or start >= size:
                    self.send_response(416); self.send_header("Content-Range", f"bytes */{size}"); self.end_headers(); return None
                file = path.open("rb"); file.seek(start)
                self.remaining = end-start+1
                self.send_response(206)
                self.send_header("Content-Type", self.guess_type(str(path)))
                self.send_header("Content-Length", str(self.remaining))
                self.send_header("Content-Range", f"bytes {start}-{end}/{size}")
                self.send_header("Accept-Ranges", "bytes")
                self.end_headers(); return file
        return super().send_head()
    def copyfile(self, source, outputfile):
        if self.remaining is None: return super().copyfile(source, outputfile)
        while self.remaining:
            block=source.read(min(65536,self.remaining))
            if not block: break
            outputfile.write(block); self.remaining-=len(block)
    def log_message(self, *args): pass
server=ThreadingHTTPServer(("127.0.0.1", int(sys.argv[1]) if len(sys.argv)>1 else 0), Handler)
url=f"http://127.0.0.1:{server.server_port}/scouts/space-lessons/"
print("Offline course: " + url, flush=True)
print("Keep this window open. Press Control-C when finished.", flush=True)
if len(sys.argv)<2: webbrowser.open(url)
try: server.serve_forever()
except KeyboardInterrupt: server.server_close()
''')
(out/'START-HERE.txt').write_text('''SPACE EXPLORATION — OFFLINE TEACHING KIT
Prepared for Monday, October 26, 2026

1. Keep this entire folder together on the teaching Mac.
2. Double-click Start Offline.command (requires Python 3, present on this Mac).
   If macOS will not launch it, open Terminal, type python3 and a space,
   drag serve.py into Terminal, and press Return.
3. Leave Terminal open. Your browser opens the seven animated lessons.
4. Choose a lesson. Arrow keys advance; Space pauses; R replays; F expands.
   Monday's lesson is Missions and Bases. Saved videos play from their slides.
   The separate Make Space Move show is also linked from the lesson menu.
5. Before leaving: turn Wi-Fi off and rehearse the videos and Moon simulator.

Included: built course, all seven decks, interactive simulations, photos,
local PDFs, printable web worksheets, and eight suggested/backup MP4 videos.
Videos play directly from their slides. Full videos are included: choose short
excerpts before class rather than playing the whole documentaries.

External biographies, shops and other off-site resources are still online-only.
The offline copy uses system fonts and local video files. No login or network
is required for the lesson. Browser-saved Scout entries stay on that computer;
they are not copied into this package.

Monday timing (45 minutes): 3 options / 7 Voyager + Apollo / 4 Moon sim /
5 debate / 5 shuttle / 5 sample return / 2 base systems / 10 design / 4 pitches.
The base-systems chart replaces the optional Moon-base video in this plan.
Print the individual Sample Return Card and Base Design Sheet from the
counselor page. Group discussion is not automatic group credit.

video-manifest.json lists titles, sources, durations and file hashes.
Use these local teaching copies personally; they are not added to the public
site or source repository. The public site has a smaller download containing
all seven animated lessons and photos, without the video files.
''')
print(out)
print('Videos:',len(records),'bytes:',sum(x['bytes'] for x in records))
