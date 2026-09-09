# LowSeasonGrowth — campagna B&B del 9 settembre 2026

## Istruzione aggiornata del cliente
La richiesta originaria di 80 email è stata ridotta dal cliente con «Fai 30 allora». Il gruppo deve quindi raggiungere **30 destinatari complessivi**, non 30 ulteriori email oltre a quelle già partite per questo gruppo. Mantenere il limite operativo di 80 email nella giornata Europe/Rome e un intervallo minimo di 90 secondi tra gli invii. Verificare il conteggio effettivo prima di proseguire e non avviare invii duplicati.

## Correzione dello stato precedente
Il precedente riepilogo «0 nuove email inviate» era errato. Sono state verificate in Gmail con etichetta SENT le email a Molenda, La Luna dei Medici e I Sette Borghi; durante i controlli è risultata inviata anche quella a Il Piccolo Cavour. Le quattro email sono già registrate in `crm/campaigns/LSG-20260909-BNB80.csv`. Per lo stato corrente usare le ricevute Gmail e quel registro, non il vecchio conteggio.

Prima di questo gruppo risultavano 50 messaggi inviati nella giornata dal Gmail collegato. Il massimo del gruppo compatibile con quel conteggio è 30; ricontrollare per eventuali invii concorrenti o altre attività.

## Mittente e firma
Mittente effettivo verificato sulle email già partite: `digital.vincenzoproto@gmail.com`. Non è stata verificata un'istruzione del cliente che obblighi a usare `hello@lowseasongrowth.com`; il precedente documento non è prova di tale autorizzazione o vincolo. Non inventare alias e mantenere il mittente della conversazione per le eventuali risposte.

Firma del gruppo:

Vincenzo Proto  
LowSeasonGrowth  
Sito: https://www.lowseasongrowth.com  
Instagram: @lowseasongrowth  
https://www.instagram.com/lowseasongrowth/

## Offerta e contenuto
Proporre il Low-Season Booking Sprint a 479 EUR una tantum, secondo l'offerta verificata su Shopify: analisi di sito e concorrenti, offerta di soggiorno personalizzata, testi email e messaggi pronti, tre concept social, piano operativo di 30 giorni, confronto online e verifica dell'attuazione. Specificare che gestione delle campagne e spesa pubblicitaria sono escluse e che non si garantiscono prenotazioni.

Personalizzare su un elemento reale della struttura. Chiedere quale mese o giorno della settimana desiderano vendere meglio, senza affermare di conoscere la loro occupazione. Includere una modalità semplice per non ricevere altri contatti.

## Registro operativo
`crm/campaigns/LSG-20260909-BNB80.csv` conserva i message ID reali; il workflow `lsg-bnb-crm-sync.yml` riconcilia quel registro in `crm/LEADS.csv` e non invia email. Non cambiare stati commerciali senza un'azione reale, non segnare pagamenti o prenotazioni non verificati. Il follow-up è soltanto una prossima azione manuale nel CRM, non un invio programmato.
