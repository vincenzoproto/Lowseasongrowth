# LowSeasonGrowth — checkout access fix, 8 September 2026

## Status

The SEO theme `206501708118` was confirmed as MAIN during this follow-up. Its previous version `206472773974` is UNPUBLISHED.

The checkout correction is saved in the unpublished duplicate **LSG Backup 2026-09-08 — Checkout corretto** (`206505902422`). It includes the published SEO changes. The Shopify connector does not allow publishing themes; activate the corrected copy from Shopify admin after checking its mobile preview.

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

## Activation and rollback

1. Open Shopify admin → Online Store → Themes.
2. Preview **LSG Backup 2026-09-08 — Checkout corretto**, including on a phone.
3. Publish the corrected copy. Keep the previous theme as the rollback option.
4. If needed, revert `auto_open_cart_drawer` to `false` on an unpublished copy or publish the previous theme.

Until publication, visitors can reach the existing working checkout through the cart page at `https://lowseasongrowth.com/it/cart`.
