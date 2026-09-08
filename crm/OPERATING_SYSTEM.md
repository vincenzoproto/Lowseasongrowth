# LowSeasonGrowth CRM — Operating System

_Last aligned: 8 September 2026_

This CRM belongs only to LowSeasonGrowth. Smart Creator and GuestFlow use separate repositories, offers, contacts and pipelines. A property may exist in more than one business only when it has been independently qualified for that business; do not copy status, consent, offers or email-thread metadata across projects.

## Canonical datasets

### `crm/LEADS.csv` — customer pipeline
One row per LowSeasonGrowth property/opportunity. This is the source of truth for outreach, qualification, next actions and current commercial status.

### `PARTNER_TRACKER.csv` — partner network
One row per recruited or prospective setter, closer or full-cycle sales partner. Keep recruitment state, role, commission rate and partner follow-up here. Existing rows are preserved.

### `crm/DEALS.csv` — closed/paid economics
Create a row only when a real commercial opportunity exists and a deal ID can be assigned. Amounts collected and commissions belong here. A proposal, checkout link or verbal interest is not a payment.

## Customer pipeline

Use exactly one current `status` in `crm/LEADS.csv`:

1. `lead` — identified, not yet contacted.
2. `contacted` — first outreach actually sent.
3. `replied` — prospect replied; interest not yet established.
4. `qualified` — pain/fit and decision-maker are sufficiently clear.
5. `call_scheduled` — call/date actually agreed.
6. `proposal_sent` — a specific offer/price was actually sent.
7. `payment_pending` — prospect agreed to pay or checkout is pending; no money collected yet.
8. `paid` — payment actually collected and verified.
9. `onboarding` — intake/fulfilment started.
10. `delivery` — service is being delivered.
11. `upsell` — customer is active and another service is being discussed.
12. `lost` — declined, no fit, unresponsive after final follow-up or otherwise closed.

Never advance a lead because an action is merely planned. `paid` requires verified collected revenue.

## Required operational fields

For every open customer opportunity keep, when known: `partner_id`, `partner_role`, `package`, `deal_value_eur`, `priority`, `qualification_score`, `last_contact`, `next_follow_up`, `follow_up_mode`, `thread_sender`, `thread_id`, `owner` and `notes`.

Dates use `YYYY-MM-DD`. Use `follow_up_mode=paused` when the correct next action is to wait rather than chase. Set `opt_out=yes` after a clear request not to be contacted and do not schedule further outreach.

`thread_sender` records the mailbox already used in that conversation. It is a reminder only; it does not change Gmail automatically. Preserve the same sender and thread when replying.

## Partner attribution

Partner roles follow `PARTNER_PROGRAM.md`:

- setter — 10% standard commission on eligible collected revenue;
- closer — 15%;
- full-cycle — 25%.

Do not stack roles on the same deal unless explicitly approved before the sale. `partner_id` should match `PARTNER_TRACKER.csv`. Lead ownership lasts 30 days from the last documented commercial activity unless manually reassigned.

Commission is not earned from quoted value. It is calculated only on eligible net customer revenue actually collected and remaining valid after refunds/chargebacks, according to the partner programme.

## Commercial offers

Current standard references in `PARTNER_PROGRAM.md` are:

- Low-Season Revenue Audit — €249;
- Low-Season Booking Sprint — €479;
- Low-Season Growth Partner — €990.

These are standard references, not evidence that a specific lead received or accepted one. Preserve any earlier bespoke proposal already sent to a prospect; do not overwrite history merely because the standard offer changed.

## Update rule — mandatory

After every materially completed action, update the CRM in the same workflow:

- new prospect → add before or at first contact;
- email/DM actually sent → update `status`, `last_contact`, thread metadata and next action;
- reply received → record what the prospect actually said and update status conservatively;
- call booked → use `call_scheduled` only when date/time is agreed;
- proposal sent → record package and real amount sent;
- payment verified → create/update `crm/DEALS.csv`, set collected amount, then mark `paid`;
- refund/chargeback → update deal economics and commission eligibility;
- clear refusal/opt-out → close or pause appropriately and stop outreach.

A draft is not an outreach. A scheduled task is not a completed follow-up. A checkout link is not an incasso.

## Priority view

When choosing what to do next, work in this order:

1. replies needing an answer;
2. calls/proposals already in progress;
3. payment-pending opportunities;
4. follow-ups due today or overdue;
5. qualified leads without a next action;
6. new targeted outreach;
7. partner recruitment/follow-up.

This order is operational guidance, not an automated process.

## Data-quality rules

- Never invent a contact, decision-maker, reply, payment, commission or call.
- Do not use Smart Creator data as evidence for LowSeasonGrowth.
- Do not put passwords, private tokens or unnecessary personal data in this public repository.
- Avoid storing private phone numbers unless genuinely necessary and appropriate for the business record.
- Keep bounced/invalid addresses marked and do not retry until corrected.
- Keep historical notes; append corrections instead of rewriting facts silently.

## Separation map

| Business | Repository | CRM purpose |
|---|---|---|
| Smart Creator | `vincenzoproto/smart-stay-creator` | Hotels + creators + hospitality content production |
| LowSeasonGrowth | `vincenzoproto/Lowseasongrowth` | Low-season customers + sales partners + deals/commissions |
| GuestFlow | separate project/repository | Guest-flow product and customers; never mix here |

This file defines the current LowSeasonGrowth CRM operating rules. Older activity logs remain historical evidence and are not deleted.
