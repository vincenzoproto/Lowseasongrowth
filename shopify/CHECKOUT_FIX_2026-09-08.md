# LowSeasonGrowth — checkout access fix, 8 September 2026

## Status

The checkout correction is now published in **LSG Backup 2026-09-08 — Checkout corretto** (`206505902422`). After the user's publication confirmation, Shopify verified this theme as MAIN and the previous SEO theme `206501708118` as UNPUBLISHED. The active theme includes all SEO changes.

## Reproduced problem

On the Italian Audit product page, clicking **Aggiungi al carrello** added the selected product successfully and showed **Aggiunto**, but did not open the cart or navigate onward. All drawer dialogs remained closed.

The native theme setting `auto_open_cart_drawer` was absent, so the settings schema defaulted it to `false`. An existing customization enabled the drawer only when the product handle matched an English service handle. Translated Italian handles did not match that customization.

## Correction

Set `current.auto_open_cart_drawer` to `true` in `config/settings_data.json` on a duplicate of the current published theme. This enables the native cart drawer after a successful addition in either language and exposes the checkout button. A local semantic comparison confirms that this is the only configuration change.

## Verification

- Before the fix, the standard cart-page checkout button reached the payment form in both English and Italian. The reproduced blocker was the transition after adding a product.
- In the corrected preview, the Italian Audit page rendered the drawer's native `auto-open` attribute.
- Clicking **Aggiungi al carrello** opened the cart drawer with the new line and a visible **Check-out** button.
- Clicking that drawer button reached the Italian Shopify checkout, including the **Pagamento** section, card-entry fields and the expected order total.
- The temporary Audit line was removed after each test. The pre-existing Booking Sprint line was preserved. No email, billing information or payment details were entered; no order was placed.
- GraphQL operations passed schema validation. Shopify readback exactly matched the uploaded settings file, with the corrected theme still UNPUBLISHED.
- Local JSON parsing and a semantic comparison against the repository baseline passed; no unrelated setting changed.
- The telemetry-enabled theme validator was blocked by automated approval review because it would transmit the full settings file to an external validation endpoint. It was not retried. Validation instead used the local JSON comparison, Shopify settings schema and readback, and the real browser checkout path.
- Browser testing used a desktop viewport. Mobile emulation and payment processing were not tested. This update changes a native cart setting and adds no CSS or JavaScript.

## Publication verification and rollback

- Publication is complete. Public requests without a preview session returned HTTP 200 for the English homepage, Italian homepage and Italian Audit page, all serving theme `206505902422`.
- All three pages include the native cart `auto-open` attribute, updated localized SEO titles/descriptions, canonical URLs and preferred image metadata.
- Keep the previous theme as the rollback option. Further theme changes should continue on unpublished duplicates.
- Visitors can also access the cart directly at `https://lowseasongrowth.com/it/cart`.

## Next SEO action

Use Search Console URL Inspection to request a recrawl of the updated homepage and Audit pages. The connected planning tool is read-only; no indexing request has been submitted by the assistant. Google controls crawl timing and search-result imagery.
