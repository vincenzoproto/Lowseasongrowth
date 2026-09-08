# LowSeasonGrowth — SEO and navigation update, 8 September 2026

## Release status

The SEO changes are published as part of **LSG Backup 2026-09-08 — Checkout corretto** (`206505902422`), confirmed as MAIN after the user's publication confirmation. The earlier SEO theme `206501708118` is UNPUBLISHED. The active theme also includes the Italian cart-opening correction documented in [CHECKOUT_FIX_2026-09-08.md](CHECKOUT_FIX_2026-09-08.md).

Public requests without preview cookies confirmed the active theme, updated SEO metadata and native cart auto-open setting on the English homepage, Italian homepage and Italian Audit page. Publication and rollback steps below record the original release procedure.

The working copy was duplicated from the live theme before changes, following `operations/BACKUP_AND_CHANGE_MANAGEMENT.md`. Shopify remains the source of truth for store content and transactions. This change belongs only to LowSeasonGrowth.

## Changes

- Homepage title and description now use English and Italian locale strings, matching the selected language.
- Titles no longer append a second version of the brand name. Open Graph product prices use a machine-readable decimal separator.
- Homepage and pages without a featured image now use the existing 1600 × 1005 hospitality photograph as their preferred preview image. Product pages retain their own images.
- Open Graph and Twitter image tags include HTTPS URLs, dimensions and alternative text. `max-image-preview:large` permits large previews without changing indexing directives.
- The existing LSG logo is assigned as the favicon, served at 96 × 96. Organization markup includes a stable identifier, canonical site URL, logo and the established Instagram profile.
- WebSite and WebPage JSON-LD identify the site name, locale and preferred page image. Native Shopify Product markup remains in place.
- Homepage service buttons use Shopify product URLs so Italian routes include both the locale prefix and translated handle.
- The shared product/page footer also uses native product, page and policy URLs, fixing malformed Italian destinations such as `/itproducts` and `/itpages` while retaining its existing layout.
- About and Sales Partner footer links use the real published pages: `about` and `become-a-sales-partner`.
- Refund and terms links use the existing published policy pages when Shopify's native policy fields are empty.
- The `packages` anchor supports links from the existing product-page navigation.
- Missing Italian translations for the existing package FAQ strings were completed.

## Verification

- Search Console connection and domain property verified. The returned finalized performance data confirms organic exposure; sparse query data is insufficient for keyword or ranking conclusions. Private analytics are not copied into this public repository.
- Live homepage, robots.txt and the sitemap index responded successfully. The sitemap lists English and Italian content.
- Nine preview responses checked: homepages in both languages, all three product pages in both languages, and cart. JSON-LD parsed successfully; canonical URLs omit preview parameters; image URLs use HTTPS; product markup retains EUR prices and product images.
- Browser verification covered the desktop homepage, language switch, Italian homepage-to-Audit navigation, the cart, and an enabled checkout submit control. No order or payment was created, and the existing cart was preserved.
- Final Italian homepage inspection confirms correct product and footer destinations. The shared footer was also verified on the Audit page in Italian and English, including translated product handles and published refund/terms page destinations.
- Shopify readback matches the eight Liquid/locale files byte for byte. The settings JSON is semantically identical; Shopify removed a trailing newline.
- Shopify's validator passed both SEO snippets, both locale files and settings data in integrated validation. The changed shared footer also passed validation. Existing Horizon header setting-count warnings and homepage complexity/hardcoded-language-switch warnings remain; no full-theme clean lint result is claimed.
- Mobile viewport emulation and a complete checkout/payment test were not performed. No CSS or JavaScript behavior was changed by this update; the existing homepage section was synced from the live theme before applying link fixes.

## Publication and rollback

1. In Shopify admin, open Online Store → Themes and preview **LSG Backup 2026-09-08 — SEO preview**. Check the mobile view before publishing.
2. Publish that theme when ready. Keep the previous LSG theme as the immediate rollback option.
3. After publication, inspect the canonical homepages and product URLs in Search Console and request indexing where appropriate. The connected SEO planning tool is read-only; no sitemap submission or indexing request was made in this task.
4. If a problem appears, publish the previous LSG theme. Product records, prices and checkout settings were not modified.

Google chooses whether and when to show images, favicons and enhanced results. Do not add fabricated ratings, reviews, physical shipping information or refund promises to remove optional warnings.

## References

- [Google image SEO guidance](https://developers.google.com/search/docs/appearance/google-images)
- [Google organization markup](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [Google favicon requirements](https://developers.google.com/search/docs/appearance/favicon-in-search)
- [Shopify locale-aware URLs](https://shopify.dev/docs/storefronts/themes/markets/multiple-currencies-languages)

## Search Console alert clarification — 2026-09-08

Existing Google alert emails dated September 6–7 were reviewed after the publication checks:
- Indexing: “Page with redirect.” The email does not identify the affected URLs, so it cannot establish whether each redirect is intentional or whether a specific current canonical page is excluded.
- Product snippets: missing `review` and `aggregateRating`, explicitly described as non-critical.
- Merchant listings: missing `hasMerchantReturnPolicy` and `shippingDetails`, explicitly described as non-critical.

These alerts predate the September 8 publication. They are not proof of a site-wide indexing block or proof that the new version has been reprocessed. Do not invent reviews, ratings or physical-shipping terms for this consulting service.

The connected GSC SEO Content Planning skill and tools are read-only. No URL inspection, indexing request, sitemap submission or validation request was performed. Next owner action in Search Console: inspect the canonical EN/IT homepage and Audit URLs, check the live URL result, and request indexing where appropriate. Investigate the redirect report's actual affected URLs before changing redirects.

[Google recrawl guidance](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl) explains that a request does not guarantee immediate indexing.
