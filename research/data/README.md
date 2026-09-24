# Low Season Growth Research Data Dictionary

This folder contains compact CSV files used in Low Season Growth public research notes.

Official research hub: https://lowseasongrowth.com/pages/research  
Methodology: https://lowseasongrowth.com/pages/research-methodology  
Citation guidance: https://lowseasongrowth.com/pages/cite-low-season-growth

## research-note-01-seasonality-gap.csv

Purpose: document selected country examples used in **LSG Research Note 01 — European Tourism Seasonality 2026**.

Columns:

| Column | Meaning |
|---|---|
| `country` | Country name |
| `two_busiest_months_share_pct` | Share of annual tourist-accommodation nights recorded in the country's two busiest months, percent |
| `two_slowest_months_share_pct` | Share of annual tourist-accommodation nights recorded in the country's two slowest months, percent |
| `lsg_peak_to_trough_gap_pp` | LSG descriptive calculation: busiest-month share minus slowest-month share, percentage points |
| `source_year` | Reference year of the source data |
| `source` | Source institution |

The LSG Peak-to-Trough Concentration Gap is an LSG-created descriptive metric. It is **not** an official Eurostat indicator.

## research-note-02-international-demand.csv

Purpose: document the headline source figures and LSG calculations used in **LSG Research Note 02 — International Tourism Demand in Europe 2026**.

Columns:

| Column | Meaning |
|---|---|
| `metric` | Human-readable metric name |
| `period` | Reference period |
| `value` | Numeric value |
| `unit` | Unit of measurement |
| `source` | Either the source institution or an explicit LSG calculation from source data |

Rows labelled `LSG calculation from Eurostat` are derived calculations and should not be represented as official Eurostat indicators.

## research-note-03-caribbean-low-season.csv

Purpose: document the source figures and Low Season Growth descriptive calculations used in **LSG Research Note 03 — Caribbean Low Season 2026**.

Columns:

| Column | Meaning |
|---|---|
| `metric` | Human-readable metric name |
| `period` | Reference period |
| `value` | Numeric value |
| `unit` | Unit of measurement |
| `source` | Source institution or explicit LSG calculation |
| `classification` | Distinguishes official source figures from LSG descriptive calculations |

Rows labelled `LSG descriptive calculation` are derived from published CHTA / Amadeus figures and should not be represented as official indicators from those institutions.

## research-note-04-japan-demand.csv

Purpose: document the source figures and Low Season Growth descriptive calculations used in **LSG Research Note 04 — Japan Tourism 2026**.

Columns:

| Column | Meaning |
|---|---|
| `metric` | Human-readable metric name |
| `period` | Reference period |
| `value` | Numeric value |
| `unit` | Unit of measurement |
| `source` | JNTO, Japan Tourism Agency or an explicit LSG calculation |
| `classification` | Distinguishes official source figures from LSG descriptive calculations |

The file intentionally keeps JNTO border-arrival statistics separate from Japan Tourism Agency accommodation statistics.

## Reuse and citation

When reusing figures, cite the underlying official source where appropriate and identify any LSG-created calculation as an LSG calculation. Suggested citations are provided in the individual research-note documentation and on the official citation page.

These files are descriptive research resources, not forecasts, investment advice, or property-level revenue-management benchmarks.
