# dustingamble.com

Personal website source for deployment on GitHub Pages.

## Local preview

Open `index.html` in a browser.

## 1) Create the GitHub repo

Create a new GitHub repository named `dustingamble` (empty repo, no README/license).

## 2) Push this code to GitHub

```bash
cd "/Users/dustingamble/Documents/New project/dustingamble"
git remote add origin https://github.com/<github-username>/dustingamble.git
git push -u origin main
```

## 3) Enable GitHub Pages

1. Open the repository on GitHub.
2. Go to `Settings` -> `Pages`.
3. Under `Build and deployment`, set:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main` and `/ (root)`
4. Save.
5. In the same Pages settings, set `Custom domain` to `dustingamble.com`.
6. Wait for the certificate, then enable `Enforce HTTPS`.

## 4) DNS records at your domain registrar

For apex/root (`@`) records:

- `A` -> `185.199.108.153`
- `A` -> `185.199.109.153`
- `A` -> `185.199.110.153`
- `A` -> `185.199.111.153`
- `AAAA` -> `2606:50c0:8000::153`
- `AAAA` -> `2606:50c0:8001::153`
- `AAAA` -> `2606:50c0:8002::153`
- `AAAA` -> `2606:50c0:8003::153`

For `www`:

- `CNAME` -> `<github-username>.github.io`

## 5) Verify DNS

```bash
dig +short dustingamble.com A
dig +short dustingamble.com AAAA
dig +short www.dustingamble.com CNAME
```
