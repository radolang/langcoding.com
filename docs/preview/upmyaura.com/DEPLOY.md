# Deploying to upmyaura.com

This folder is a self-contained static site. Copy its contents as-is to the web root of upmyaura.com.

Files: `index.html`, `og-image.png`, `apple-touch-icon.png`, `favicon.svg`, `robots.txt`, `sitemap.xml`, `llms.txt` (`DEPLOY.md` can be left out).

1. **Remove the noindex.** In `index.html`, delete the `<meta name="robots" content="noindex">` line (marked with a comment) so search engines can index the site. It is only there because this preview also lives at langcoding.com/preview/upmyaura.com/.
2. **Pick one hostname and redirect the other.** The canonical URL, sitemap, robots.txt, llms.txt, share image and JSON-LD all use `https://upmyaura.com/` (no www). Serve the site there and 301-redirect `https://www.upmyaura.com` to it (or, if you prefer www, change every `https://upmyaura.com/` in these files to `https://www.upmyaura.com/`). Make sure HTTPS works on both. GitHub Pages only: add a `CNAME` file containing `upmyaura.com`, point DNS at GitHub Pages, then enable "Enforce HTTPS".
3. **Night Reception (chat widget, AI assistant links):** no change needed. The `upmyaura` tenant already allows `https://upmyaura.com` and `https://www.upmyaura.com`. The widget will not work on any other domain.
4. **After going live, check:**
   - https://upmyaura.com/robots.txt, https://upmyaura.com/sitemap.xml and https://upmyaura.com/llms.txt load.
   - https://upmyaura.com/og-image.png loads, and the share preview looks right in a share debugger (e.g. https://developers.facebook.com/tools/debug/ or https://www.opengraph.xyz/).
   - Google Rich Results Test (https://search.google.com/test/rich-results) shows the HairSalon data without errors.
   - Submit `https://upmyaura.com/sitemap.xml` in Google Search Console.
5. **Keep facts in sync.** If hours, prices, phone or booking link change, update the page, the JSON-LD block in `index.html`, and `llms.txt` together.
