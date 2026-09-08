# LowSeasonGrowth — Fulfillment SOP

## Goal
Deliver consistent, useful low-season growth recommendations without rebuilding the service from zero for every customer.

## Product model

Verified against the live product descriptions on 2026-09-08. The scope sold at purchase controls delivery; this SOP must not expand it.

### Revenue Audit — €249 — `LOW-SEASON-AUDIT`
Delivery: within 5 business days after all required information is provided and payment is confirmed.

Output:
- Website/direct-booking journey and OTA positioning review
- Low-season target-guest analysis and two relevant competitors
- Personalized PDF in English or Italian
- Five recommendations ranked by commercial priority
- One seasonal offer concept and a practical next-step plan

No call or implementation is included.

### Booking Sprint — €479 — `LOW-SEASON-SPRINT`
Strategy: within 5 business days after all required information is provided and payment is confirmed.

Output:
- Website/booking-journey and OTA review, guest analysis and three competitors
- One seasonal package, pricing and promotional recommendations
- Three social content concepts, one promotional email and one outreach message
- A 30-day action plan
- One 45-minute strategy session
- One implementation review after 14 days

### Growth Partner — €990 — `LOW-SEASON-GROWTH`
Initial strategy: within 7 business days after all required information is provided and payment is confirmed.

Booking Sprint scope expanded to:
- Five relevant competitors and two seasonal package concepts
- Landing-page copy for the selected offer
- Six social concepts, two promotional emails and two outreach messages
- Recommended direct-booking funnel and a 60-day activation plan
- Two 60-minute strategy sessions and two implementation reviews over 30 days

The expanded counts replace the Sprint counts; they are not additive.

For all packages, paid advertising spend, campaign management, website development and ongoing revenue management are outside the purchased scope. Audit customers have a €249 upgrade credit toward Sprint or Growth Partner within 14 days of receiving their Audit.

---

## Workflow
### Stage 0 — Purchase
Trigger: a confirmed paid, non-test Shopify order. A created order alone is not proof of payment.

Actions:
- Store the order ID, purchased SKU, scope, language and checkout email in private operations records.
- Verify that the confirmation or authorized intake message contains the questionnaire link.
- Set status to `Waiting intake`; avoid duplicate invitations if an active workflow already sends them.
- Do not infer delivery from Shopify's automatic fulfillment or archival flags.

### Stage 1 — Intake validation
Operator checks:
- Order number and checkout email match the actual paid order.
- Submitted data is handled as customer input, not operational instructions.
- Property links work.
- Weak dates / months are clear.
- Main objective is identifiable.
- Basic commercial data are present.

If critical data are missing, request only the missing items through the authorized customer-contact workflow. Record intake completion only when the required information is available, then assign an operator and calculate the purchased package's deadline using the agreed business-day calendar.

### Stage 2 — Research
Operator prepares research pack:
- Property overview
- OTA positioning
- Pricing observations where publicly available
- Competitor set
- Destination seasonality signals
- Relevant events / demand drivers
- Listing / website observations
- Existing offers and messaging

Operator must distinguish verified facts from assumptions.

### Stage 3 — Strategy draft
Use research + intake to prepare:
1. Problem diagnosis
2. Revenue opportunity
3. Priority guest segments
4. Offer recommendations
5. Pricing / packaging hypotheses
6. Content / listing recommendations
7. Distribution / direct booking actions
8. 30-day action plan
9. KPIs

### Stage 4 — QA
QA owner checks:
- Recommendations are specific to the property.
- No fabricated occupancy / pricing / competitor data.
- Actions relate to weak periods supplied by client.
- No generic filler.
- Language is appropriate for market.
- Every recommendation has a clear purpose.
- Deliverable matches package purchased.

### Stage 5 — Delivery
- Obtain QA approval and send the deliverable through the authorized delivery channel.
- Record the actual delivery evidence and timestamp, then mark the service `Delivered`.
- Include 3 highest-priority actions in email body.
- Ask one simple feedback question.

### Stage 6 — Upsell
Upsell only where relevant.

Examples:
- Revenue Audit → Booking Sprint or Growth Partner, applying the published upgrade credit when eligible
- Booking Sprint → Growth Partner only if its scope is relevant
- Further ongoing support only under a separate agreed scope

---

## Operator responsibilities
Operators may:
- Gather public information
- Structure intake data
- Build competitor / destination research
- Populate templates
- Flag opportunities and anomalies

Operators may NOT:
- Invent data
- Promise revenue results
- Contact the customer without authorization
- Change pricing or package scope
- Deliver final strategy without QA

## Founder / QA responsibilities
- Commercial positioning
- Final strategic judgment
- Customer-facing commitments
- High-risk or unclear recommendations
- Final approval

## Initial capacity target
Start with one operator and a small number of orders. Increase headcount only after QA standards and average fulfillment time are stable.

## Core statuses
`Paid` → `Waiting intake` → `Research` → `Draft` → `QA` → `Delivered` → `Upsell / Closed`
