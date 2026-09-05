# LowSeasonGrowth — Draft locale + US market implementation

## Theme scope
Changes were implemented on the unpublished Shopify theme `Copia di Low Season Growth - EN IT` (theme GID `gid://shopify/OnlineStoreTheme/206293205334`). The live theme was not modified by the locale code changes.

## Locale persistence fix
A new theme snippet `snippets/locale-link-guard.liquid` was added and rendered from `layout/theme.liquid`.

Purpose: when a non-primary locale such as Italian is active, internal links remain inside the localized path (for example `/it/pages/...`) rather than sending the visitor back to the English canonical route. The guard applies to menu, footer, CTA and dynamically inserted internal links while excluding external URLs and sensitive system paths.

## Country / currency selector
On the draft theme, `sections/header-group.json` was updated to enable the country selector and flag-style country display while retaining the language selector.

Relevant settings:
- `show_country: true`
- `country_selector_style: true`
- `show_language: true`

## United States market
A Shopify Market named `United States` was created and activated for country code `US`.

Currency configuration:
- Base currency: USD
- Local currencies: disabled for this US-only market
- Rounding: enabled

This allows US visitors to be served prices in USD by Shopify rather than hardcoding dollar symbols in theme copy.

## Package consultation model
Current product structure already matches the preferred scalable model and should be preserved unless commercial testing suggests otherwise:
- Low Season Growth Audit — €249 — asynchronous / no call
- Low Season Booking Sprint — €479 — 1 strategy call + 1 review
- Low Season Growth Partner — €990 — 2 strategy calls + 2 review calls

The base package remains highly automatable while calls are reserved for higher-value tiers.

## Next QA
Before publishing the draft theme:
1. Select Italian and open How it works, Packages, About and FAQ; confirm the locale remains Italian.
2. Test the country selector between Italy and United States and confirm EUR/USD display changes.
3. Open `Start Your Low Season Plan` and validate the bilingual post-purchase questionnaire.
4. Add a draft-only Packages template if a `What happens after purchase` section is desired without altering the current live page.
