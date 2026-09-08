# LowSeasonGrowth — Shopify Intake Implementation

Verified: 2026-09-08.

## Current status

The questionnaire is published and renders in English and Italian on the current live theme. Earlier notes describing it as an unpublished draft are obsolete.

| Object | Verified value |
| --- | --- |
| Live theme | LSG Backup 2026-09-08 — Checkout corretto |
| Theme ID | `gid://shopify/OnlineStoreTheme/206505902422` |
| Page | Start Your Low Season Plan |
| Page ID | `gid://shopify/Page/196635328854` |
| Published at | 2026-09-06T11:07:42Z |
| Template | `low-season-intake` |
| English URL | https://lowseasongrowth.com/pages/start-your-low-season-plan |
| Italian URL | https://lowseasongrowth.com/it/pages/start-your-low-season-plan |

Live source was read back and synchronized into this repository:
- `shopify/theme/sections/low-season-intake.liquid`
- `shopify/theme/templates/page.low-season-intake.json`

This synchronization is a source backup, not a new theme deployment.

## Verified behavior and limits

- Both language views render the form and its labels. Switching EN to IT preserves the intake page.
- The native contact form posts to Shopify's localized contact endpoint.
- Required fields: order number, checkout email, full name, property name, destination, country, property URLs, weak dates, 90-day goal and data-use confirmation.
- Other fields collect units, rates, social links, occupancy, budget, guest segments, channels, past promotions, competitors and notes.
- The page contains localized success/error handling in its source.
- Clicking submit with the form empty keeps the visitor on the Italian intake page and focuses the required order-number field with the browser validation message; no form was transmitted.
- The prepared notification block and backed-up intake section passed the local Shopify Liquid/HTML parser in strict mode. The page-template JSON also parses successfully. This is syntax validation, not a Shopify notification-preview test.
- No questionnaire was submitted in this verification. Email receipt, success redirect and end-to-end matching remain unverified. This was a desktop browser check; mobile submission was not tested.
- Two existing orders were examined, both explicitly marked as test orders. Shopify records an order-confirmation send event for each. This does not prove inbox delivery or the presence of the questionnaire link.
- Existing `INTAKE_SENT` and `INTAKE_PENDING` tags do not prove that an intake email was delivered or that a Flow is active.
- No relevant intake or Shopify order-confirmation message was found in the connected operations mailbox with focused searches since 2026-09-01. This is not proof of failure: the test customers and the store's sender-mailbox configuration may differ.
- Existing test orders are already fulfilled/archived. This status must not be treated as evidence that consulting work was delivered.

## Remaining operational connection

1. Inspect the existing **Settings → Notifications → Customer notifications → Order confirmation** template.
2. Back up that complete template before changes. Check whether it already contains the correct intake links.
3. If missing, integrate `notifications/order-confirmation-intake.liquid` once into the existing message. It is a prepared addition, not a replacement template, and is **not installed**.
4. Preview it with real product SKU data. Shopify's generic preview may use unrelated sample items, in which case the conditional block intentionally does not appear.
5. Verify the **Sender email** under Notifications: Shopify sends native contact forms there. Do not infer it from the store account/contact email fields.
6. Use an owner-controlled test recipient to verify email content and a clearly marked questionnaire submission. Do not resend to earlier test customer addresses or create a paid order without authorization.
7. Confirm receipt, match order number plus checkout email to a paid order, and enter the fulfillment workflow.

The available Shopify connector does not expose notification-template or Flow configuration. No notification settings, sender email, order tags, payment settings or customer messages were changed during this check.

## Current delivery commitments

After all required information is provided and payment is confirmed:
- Revenue Audit: 5 business days.
- Booking Sprint: strategy in 5 business days; session/review follow the purchased scope.
- Growth Partner: initial strategy in 7 business days; programme sessions/reviews follow.

See `POST_PURCHASE_AUTOMATION.md` and `../operations/FULFILLMENT_SOP.md` for the controlled operating procedure.

## Official references

- [Native contact forms and recipient email](https://help.shopify.com/en/manual/online-store/themes/customizing-themes/common-customizations/add-contact-page)
- [Editing and previewing notifications](https://help.shopify.com/en/manual/fulfillment/setup/notifications/customizing-notification-template)
- [Notification Liquid variables](https://help.shopify.com/en/manual/fulfillment/setup/notifications/email-variables)
