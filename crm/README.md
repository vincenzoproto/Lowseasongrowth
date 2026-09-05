# LowSeasonGrowth CRM

CRM commerciale dedicato esclusivamente a LowSeasonGrowth. Non inserire lead o attività del progetto Smart Creator.

## Pipeline

1. Lead
2. Contacted
3. Interested
4. Call Scheduled
5. Proposal Sent
6. Paid
7. Onboarding
8. Delivery
9. Upsell
10. Lost

## Regole operative

- Ogni nuovo prospect va inserito in `LEADS.csv` prima o contestualmente al primo contatto.
- Aggiornare `last_contact` dopo ogni interazione.
- Ogni opportunità aperta deve avere `next_follow_up` quando applicabile.
- Inserire in `deal_value_eur` il valore potenziale della vendita.
- Usare `notes` per obiezioni, esigenze della struttura e prossima azione.
- Smart Creator mantiene il proprio CRM separato.

## Campi principali

`lead_id`, `property_name`, `contact_name`, `role`, `email`, `phone`, `city`, `country`, `website`, `lead_source`, `package`, `deal_value_eur`, `status`, `last_contact`, `next_follow_up`, `owner`, `notes`.
