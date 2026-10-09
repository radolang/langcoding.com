# Deploying to healthcloudgroup.com

This folder is a self-contained static site. Upload its contents as-is to the web root of https://healthcloudgroup.com.

1. **Remove the noindex.** In `index.html`, delete the `<meta name="robots" content="noindex">` line (marked with a comment) so search engines can index the site.
2. **GitHub Pages only:** add a `CNAME` file containing `healthcloudgroup.com` at the site root, point DNS at GitHub Pages, then enable "Enforce HTTPS" once the certificate is issued. Other hosts don't need a CNAME file.
3. **Night Reception (chat + enquiry form):** no change needed. The `health-cloud` tenant's allowed origins already include `https://healthcloudgroup.com` and `https://www.healthcloudgroup.com`.
4. **After going live:** check that `/robots.txt`, `/sitemap.xml`, `/og-image.png` and the share preview work, and submit `https://healthcloudgroup.com/sitemap.xml` in Google Search Console.

Notes: `DEPLOY.md` itself can be left out of the upload. The canonical URL, Open Graph/Twitter image and JSON-LD already point to https://healthcloudgroup.com/.
