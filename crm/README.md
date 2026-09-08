# LowSeasonGrowth CRM

CRM commerciale **esclusivamente LowSeasonGrowth**. Smart Creator mantiene il proprio CRM nel repo `vincenzoproto/smart-stay-creator`; GuestFlow resta separato.

## Struttura

- `LEADS.csv` — pipeline clienti/prospect LSG.
- `../PARTNER_TRACKER.csv` — recruitment e attività di setter, closer e full-cycle partner.
- `DEALS.csv` — incassi, rimborsi, revenue eleggibile e commissioni delle vendite reali.
- `OPERATING_SYSTEM.md` — regole operative, stati, ownership e separazione tra business.
- `ACTIVITY_LOG_*.md` — storico operativo; non è il database corrente.

## Pipeline cliente ufficiale

`lead` → `contacted` → `replied` → `qualified` → `call_scheduled` → `proposal_sent` → `payment_pending` → `paid` → `onboarding` → `delivery` → `upsell`

Usare `lost` quando l'opportunità è chiusa. Non usare `paid` senza verifica dell'incasso.

## Regola obbligatoria

Ogni nuovo contatto, invio realmente effettuato, risposta, follow-up, cambio di stato, proposta, pagamento o variazione importante va aggiornato **contestualmente** nel CRM.

Per i thread email, conservare `thread_sender` e `thread_id` quando disponibili: non cambiare casella nello stesso thread senza motivo operativo esplicito.

Per modello partner, commissioni e offerte standard fare riferimento a `../PARTNER_PROGRAM.md`. Per le regole complete leggere `OPERATING_SYSTEM.md`.
