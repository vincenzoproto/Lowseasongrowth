# LowSeasonGrowth — SEO and navigation update, 8 September 2026

## Release status

Initially prepared and verified in the unpublished Shopify theme **LSG Backup 2026-09-08 — SEO preview** (`206501708118`). Follow-up verification on 8 September confirmed that this theme is now MAIN and **LSG** (`206472773974`) is UNPUBLISHED. The Shopify connector permits theme-file writes on unpublished themes and does not permit publishing themes; publication is performed in Shopify admin.

A subsequent Italian add-to-cart issue was reproduced and corrected in a separate unpublished duplicate. See [CHECKOUT_FIX_2026-09-08.md](CHECKOUT_FIX_2026-09-08.md) for the current checkout correction and activation steps.

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
