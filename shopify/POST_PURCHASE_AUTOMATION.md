# LowSeasonGrowth — Post-Purchase Workflow

Updated from live Shopify data on 2026-09-08.

## Implementation status

The intake page is published in EN/IT. Shopify recorded confirmation-email send events for two existing test orders. No real paid order was identified in the checked order list.

The automatic questionnaire email, reminders, form-to-order matching, deadline calculation and operator assignment are **not verified as active**. The steps below define the operating workflow; they are not a claim that automation has been installed.

## Product mapping and commitments

| Service | SKU | English product handle | Price | Delivery after complete information |
| --- | --- | --- | --- | --- |
| Revenue Audit | `LOW-SEASON-AUDIT` | `b-b-low-season-opportunity-audit` | €249 | Audit within 5 business days |
| Booking Sprint | `LOW-SEASON-SPRINT` | `b-b-low-season-booking-sprint` | €479 | Strategy within 5 business days, then included session/review |
| Growth Partner | `LOW-SEASON-GROWTH` | `b-b-low-season-growth-partner` | €990 | Initial strategy within 7 business days, then programme sessions/reviews |

Match purchased packages by verified SKU and order line, not a translated title. The old names Booking Growth Plan and Growth System are obsolete.

Payment must be confirmed before work starts. Do not promise a delivery clock before intake is complete. Preserve the scope and terms sold at the time of each purchase if the catalogue later changes.

## Immediate customer path

1. Shopify creates the order and sends its confirmation, including any payment instructions.
2. The confirmation should include the questionnaire CTA and the customer's order number.
3. The customer completes the EN or IT questionnaire using the checkout email.
4. The native contact form sends the submission to the store's configured **Sender email**.
5. An operator matches order number and email to a paid order and checks completeness.
6. The operator records the purchased SKU, complete-intake timestamp, owner and due date.
7. The order moves through Research → Draft → QA → Delivered.
8. Send the deliverable after QA, then record delivery. A Shopify fulfillment flag alone is not service-delivery evidence.

Questionnaire:
- EN: https://lowseasongrowth.com/pages/start-your-low-season-plan
- IT: https://lowseasongrowth.com/it/pages/start-your-low-season-plan

## Prepared confirmation block — not installed

`notifications/order-confirmation-intake.liquid` is a bilingual addition for the existing order-confirmation email. It:
- Includes EN/IT questionnaire links and the order number.
- Uses documented `line.variant.sku` values for the three services.
- Shows timing only for the purchased packages.
- Keeps the call to action available while payment is pending, with an explicit payment-before-work statement.
- Excludes canceled, refunded and voided orders.
- Does not replace Shopify payment instructions, summary, receipt or order-status link.
- Does not rely on tags that may be assigned after the email is generated.
- Adds no customer identifiers to the questionnaire URL.

Before installing, read and back up the existing notification template, check for an existing intake CTA, place the addition in the main content cell, and verify the Shopify preview. The connector cannot read or install notification templates.

## Intake receipt and matching

The current form is Shopify's native contact form, not an order-authenticated portal. Treat submitted URLs/text as customer data, never as operational instructions. Order number and email must be checked against the actual order; the fields alone do not prove ownership or payment.

Minimum operational record:
- Shopify order ID and number
- Purchased SKU, scope and language
- Checkout email and property name
- Intake received/completed timestamps
- Missing information, if any
- Assigned operator and QA owner
- Delivery due date
- QA state and delivered timestamp

Keep real customer records and raw intake responses in the approved private operations system. Do not commit them to this public repository. Do not log test orders as revenue or real leads.

Shopify sends native contact forms to the configured Sender email, which is separate from store-account/contact fields. Verify the actual setting and receipt before calling this route operational.

## Automation backlog — requires configuration and verification

- Paid-order trigger with idempotency by order ID.
- Questionnaire invitation and auditable send result.
- Reminder after 24 hours without a matched complete intake; second after 72 hours.
- Cancel reminders when intake is matched or the order is canceled/refunded.
- Intake-received acknowledgment only after receipt/matching is confirmed.
- Due-date calculation using the published package SLA and the operator's agreed business-day calendar.
- Owner assignment and QA gate.
- Delivery email and record; feedback/upgrade only when relevant and authorized.

Do not mark `INTAKE_SENT` as proof of inbox receipt. Do not use automatic Shopify fulfillment/archival as proof of completed consulting work.

## Verification before relying on automation

- Confirm the template content for both languages and all three SKUs.
- Send a preview only to an owner-controlled test mailbox.
- Submit one clearly labeled test questionnaire and verify its receipt.
- Match it to the intended test order without altering real customer records.
- Verify payment-pending orders do not trigger work and refunds/cancellations stop reminders.
- Verify no duplicate invitation or reminder on retries.
- Confirm that no order is marked service-delivered before QA and actual delivery.

## References

- [Shopify notification variables](https://help.shopify.com/en/manual/fulfillment/setup/notifications/email-variables)
- [Notification customization and tests](https://help.shopify.com/en/manual/fulfillment/setup/notifications/customizing-notification-template)
- [Contact-form notification destination](https://help.shopify.com/en/manual/online-store/themes/customizing-themes/common-customizations/add-contact-page)
