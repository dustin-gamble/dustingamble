# dustingamble.com

Source code for the personal website of Dustin Gamble.

Live site:
- `https://dustingamble.com`

Repository:
- `https://github.com/dustin-gamble/dustingamble`

## Site contents

This static site includes:
- Profile header and bio
- Professional highlights and technical focus areas
- Selected publications, records, patents, and project links
- Direct links to project videos, LifeGuideTool, GitHub, and YouTube
- Profile photo (`Dustin.JPG`)

## Project structure

- `index.html`: main page markup
- `styles.css`: site styling and responsive layout
- `Dustin.JPG`: profile image shown on the homepage
- `CNAME`: custom domain for GitHub Pages

## Local preview

Quick preview options:

```bash
cd "/Users/dustingamble/Documents/New project/dustingamble"
open index.html
```

Or run a local server:

```bash
cd "/Users/dustingamble/Documents/New project/dustingamble"
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Update and publish

```bash
cd "/Users/dustingamble/Documents/New project/dustingamble"
git add .
git commit -m "Update website content"
git push
```

GitHub Pages deploys from `main` branch root.

## GitHub Pages and domain settings

In GitHub repository settings:
1. Go to `Settings` -> `Pages`
2. Set source to `Deploy from a branch`
3. Set branch to `main` and folder to `/ (root)`
4. Set custom domain to `dustingamble.com`
5. Enable `Enforce HTTPS` after certificate is issued

## DNS records for `dustingamble.com`

Root (`@`) records:
- `A` -> `185.199.108.153`
- `A` -> `185.199.109.153`
- `A` -> `185.199.110.153`
- `A` -> `185.199.111.153`
- `AAAA` -> `2606:50c0:8000::153`
- `AAAA` -> `2606:50c0:8001::153`
- `AAAA` -> `2606:50c0:8002::153`
- `AAAA` -> `2606:50c0:8003::153`

`www` record:
- `CNAME` -> `dustin-gamble.github.io`
