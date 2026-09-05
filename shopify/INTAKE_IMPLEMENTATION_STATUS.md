# LowSeasonGrowth — Shopify Intake Implementation

## Current status

The customer intake questionnaire has been implemented and tested at the configuration level on an unpublished Shopify theme copy.

### Shopify objects

- Live theme: `Low Season Growth - EN IT`
- Live theme ID: `gid://shopify/OnlineStoreTheme/206286094678`
- Safe implementation theme: `Copia di Low Season Growth - EN IT`
- Safe theme ID: `gid://shopify/OnlineStoreTheme/206293205334`
- Intake page title: `Start Your Low Season Plan`
- Intake page handle: `start-your-low-season-plan`
- Intake page ID: `gid://shopify/Page/196635328854`
- Intake page status: unpublished
- Intake page template: `low-season-intake`

## Files installed on the unpublished theme

- `sections/low-season-intake.liquid`
- `templates/page.low-season-intake.json`

Matching source files are versioned in this repository under `shopify/theme/`.

## Intake flow v1

1. Customer buys a LowSeasonGrowth package in Shopify.
2. Customer is directed to the intake questionnaire.
3. Customer provides Shopify order number and the email used at checkout.
4. Customer provides property URLs, destination, room/unit count, average rate, weak dates, weak-period occupancy, guest segments, booking channels, marketing budget, past promotions, competitors and 90-day goal.
5. The form is submitted through Shopify's native contact-form infrastructure.
6. Operations matches the submission to the Shopify order using order number + checkout email.
7. The case enters the fulfillment SOP.
8. Delivery is followed by the relevant upgrade / recurring-service offer.

## Languages

The section detects `request.locale.iso_code`. Italian customers see Italian copy; other locales receive English copy.

## Safety / deployment

The live theme has not been modified by this implementation. The intake page is intentionally unpublished while the code lives on the unpublished theme copy.

Before go-live:

1. Preview and test `Copia di Low Season Growth - EN IT` in Shopify.
2. Verify mobile and desktop form submission.
3. Verify where Shopify sends native contact-form notifications.
4. Deploy the two intake theme files to the production theme, or publish the tested theme copy through Shopify admin.
5. Publish `Start Your Low Season Plan`.
6. Add the page link to the post-purchase/customer notification path.
7. Run one real or test order end-to-end before paid traffic.

## Next automation layer

The current form removes the need for an external form provider. For a fully hands-off workflow, add an order-paid trigger that sends the intake URL, tags the order `LSG-INTAKE-PENDING`, and changes it to `LSG-INTAKE-RECEIVED` after the questionnaire is matched. This should be implemented through Shopify Flow or an approved automation integration rather than exposing Admin API credentials in theme code.
