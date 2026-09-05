# LowSeasonGrowth — Shopify Post-Purchase Automation

## Objective
Convert every paid order into a controlled fulfillment workflow with minimal manual coordination.

## Required flow
1. Customer completes checkout.
2. Shopify order is created.
3. Confirmation email includes a clear CTA: `Complete your property intake`.
4. Customer opens questionnaire.
5. Submission creates or updates the fulfillment record.
6. Order moves automatically to `Research`.
7. Operator is assigned.
8. Internal deadline is calculated from package SLA.
9. QA is required before delivery.
10. Delivery triggers feedback + package-specific upsell.

## Shopify product mapping
Maintain three product handles / SKUs mapped to service levels:
- `low-season-audit`
- `booking-growth-plan`
- `low-season-growth-system`

The exact storefront product names and prices can change without changing the operations model.

## Intake implementation options
Preferred implementation order:
1. Shopify form/app or embedded form with webhook support.
2. Tally / Typeform / Fillout connected to automation layer.
3. Custom form only when volume justifies it.

The form must pass at minimum:
- Order ID
- Customer email
- Package
- Property name
- Market / country

## Automated email sequence
### Email 1 — Immediately after payment
Subject concept: `Next step: tell us about your property`
Purpose: explain that work begins after questionnaire completion.

### Email 2 — 24 hours without intake
Purpose: simple reminder and direct questionnaire CTA.

### Email 3 — 72 hours without intake
Purpose: final reminder; clarify that delivery timing begins after complete intake.

### Email 4 — Intake received
Purpose: confirm receipt and set expectation for next stage.

### Email 5 — Delivery
Purpose: deliver output and highlight top 3 actions.

### Email 6 — 3–5 days after delivery
Purpose: collect feedback and present only the most relevant next-level offer.

## Internal automation fields
- order_id
- customer_name
- customer_email
- product_handle
- package_level
- market
- language
- order_date
- intake_status
- intake_received_at
- assigned_operator
- research_status
- qa_status
- delivery_due_at
- delivered_at
- upsell_status

## SLA policy
Do not promise a delivery clock before the intake is complete.

Suggested starting SLAs after complete intake:
- Audit: 3 business days
- Booking Growth Plan: 5 business days
- Growth System: 7 business days

Review these after the first 10 paid orders.

## Internationalization
Use the same workflow globally. Localize only:
- Customer language
- Currency / pricing
- Market terminology
- Destination research
- Competitive benchmarks
- Tax / legal storefront requirements

For US positioning prefer terms such as vacation rental, short-term rental, independent lodging and boutique stay where appropriate instead of relying only on `B&B`.

## Success metrics
Track:
- Checkout → intake completion rate
- Median intake completion time
- Fulfillment hours per order
- QA rejection / revision rate
- Gross margin by package
- Delivery → upsell conversion
- Refund / complaint rate
