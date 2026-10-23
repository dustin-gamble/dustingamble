#!/usr/bin/env python3
"""Bundle all seven built lesson pages into portable HTML, then zip them."""
from pathlib import Path
import argparse,base64,json,mimetypes,re,zipfile
parser=argparse.ArgumentParser(description=__doc__)
parser.add_argument('destination',type=Path)
parser.add_argument('--zip',dest='archive',type=Path)
args=parser.parse_args()
repo=Path(__file__).resolve().parents[1];dist=repo/'dist';out=args.destination.resolve()
lesson_root=dist/'scouts/space-lessons'
if not (lesson_root/'index.html').exists():parser.error('Run npm run build first.')
lessons=sorted(p.parent.name for p in lesson_root.glob('*/index.html'))
out.mkdir(parents=True,exist_ok=True)
policy="default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src data:; media-src blob: data:; frame-src https://www.youtube-nocookie.com; connect-src 'none'; font-src 'none'; base-uri 'none'"
def bundle(path):
 html=path.read_text()
 def style(m):return '<style>'+(dist/m[1].lstrip('/')).read_text()+'</style>'
 def script(m):
  code=(dist/m[1].lstrip('/')).read_text()
  if re.search(r'\bimport\s*(?:[\"\x27{*]|\()',code):raise ValueError('Unbundled import in '+m[1])
  return '<script type="module">'+code.replace('</script','<\\/script')+'</script>'
 def picture(m):
  local=dist/m[1].lstrip('/')
  if not local.is_file():raise FileNotFoundError(local)
  mime=mimetypes.guess_type(local.name)[0] or 'application/octet-stream'
  return 'src="data:'+mime+';base64,'+base64.b64encode(local.read_bytes()).decode()+'"'
 html=re.sub(r'<link rel="stylesheet" href="([^"]+)"[^>]*>',style,html)
 html=re.sub(r'<script[^>]*src="([^"]+)"[^>]*>\s*</script>',script,html)
 html=re.sub(r'src="(/images/[^"]+)"',picture,html)
 html=re.sub(r'<a[^>]*href="/handouts/space-lessons-offline.zip"[^>]*>.*?</a>','',html)
 for ident in lessons:html=html.replace('/scouts/space-lessons/'+ident+'/',ident+'.html')
 html=html.replace('/scouts/space-lessons/','index.html')
 html=html.replace('/scouts/space-presentation/','make-space-move.html')
 # Course references open the published counselor guide; lesson navigation stays local.
 html=re.sub(r'href="(/[^"#]*)',r'href="https://dustingamble.com\1',html)
 html=html.replace('<head>','<head><meta http-equiv="Content-Security-Policy" content="'+policy+'">',1)
 assert not re.search(r'<(?:script|link)[^>]+(?:src|href)=',html),'External code asset'
 return html
for ident in lessons:(out/(ident+'.html')).write_text(bundle(lesson_root/ident/'index.html'))
(out/'index.html').write_text(bundle(lesson_root/'index.html'))
(out/'make-space-move.html').write_text(bundle(dist/'scouts/space-presentation/index.html'))
(out/'START-HERE.txt').write_text('SPACE EXPLORATION — SEVEN ANIMATED LESSONS\n\nUnzip this folder and double-click index.html. Choose a lesson.\nAll pictures, diagrams, simulations and animations are embedded. No server,\nlogin, installed package, or internet connection is needed for those lessons.\n\nArrow keys advance; Space pauses; R replays; F expands.\nClick the lesson background after using a slider to restore navigation keys.\nThe first lesson slide is an animated opener. Each added experiment has\ncontrols for taking over from its automatic demonstration.\n\nVIDEOS: YouTube playback and external resources need internet. Use the local\nvideo picker with a file already saved on your computer, or use the written\nWithout video prompt. The personal teaching kit separately includes the\neight downloaded videos; this public download does not redistribute them.\n\nThe lesson menu links to the online counselor guide for notes and handouts.\nOriginal requirements and teaching content are preserved. Added simulations\nare teaching aids and do not substitute for individual discussion or demo.\n')
if args.archive:
 args.archive.parent.mkdir(parents=True,exist_ok=True)
 with zipfile.ZipFile(args.archive,'w',compression=zipfile.ZIP_DEFLATED,compresslevel=8) as z:
  for file in sorted(out.iterdir()):
   if file.is_file() and file.suffix in ['.html','.txt']:z.write(file,arcname='Space-Lessons-Offline/'+file.name)
 with zipfile.ZipFile(args.archive) as z:assert z.testzip() is None
 print(str(args.archive)+': '+str(args.archive.stat().st_size)+' bytes')
print('Bundled '+str(len(lessons))+' lessons, an index and the five-experiment show.')
