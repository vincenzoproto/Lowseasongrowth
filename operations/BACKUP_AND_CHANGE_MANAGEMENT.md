# LowSeasonGrowth — Backup & Change Management

## Purpose
Protect the LowSeasonGrowth storefront, commercial data and operating documentation from accidental loss while keeping Shopify as the live commerce system and GitHub as the operational source of truth for reconstructible assets.

## System boundaries
- Shopify is the live system for storefront, products, checkout, orders, customers, pages, menus, translations and theme configuration.
- GitHub repository `vincenzoproto/Lowseasongrowth` stores operating documentation, CRM files, partner program, sales process, reusable copy/code and backup records.
- Smart Creator remains a separate project and its data must never be mixed into LowSeasonGrowth backups, CRM or sales operations.

## Core rule
Never make structural changes to the live Shopify theme without first creating a duplicate of the current live theme. Structural changes include homepage layout, header, footer layout, Liquid code, JSON templates, sections, snippets, global CSS/JS and theme settings. Small catalog/content edits such as a product image, copy change, page copy or menu link can be changed directly when the underlying resource is independent of theme files.

## Before a structural change
1. Record the date, reason and intended change.
2. Duplicate the current live Shopify theme and name it `LSG Backup YYYY-MM-DD`.
3. Make theme-file changes only on an unpublished duplicate.
4. Preview desktop and mobile, English and Italian, product pages, cart and checkout entry points.
5. Publish only after verification.
6. Keep the previous live theme unpublished as the immediate rollback version.

## Shopify data protection
### Products
Keep title, handle, description, price, SKU, media references, SEO copy and EN/IT translations documented or exportable. Do not delete products when a temporary removal is enough; archive/unpublish instead when recovery may be needed.

### Pages and navigation
Keep all important page handles stable. If a handle must change, create a redirect. Record important navigation changes in GitHub when they affect the commercial journey.

### Customers and orders
Shopify remains the authoritative system. Never copy full customer/order personal data into the public GitHub repository. Periodic Shopify exports, when needed, must be stored privately outside this public repo.

### Images and files
Use Shopify-hosted media for live storefront assets. Retain original source assets separately when an image is important to the brand or product presentation.

## Backup cadence
- Before every structural theme change: duplicate the live theme.
- Weekly while the store is being actively developed: review products, pages, menus, translations and checkout-critical settings.
- Monthly: export products and any other non-sensitive catalog data useful for recovery; store customer/order exports only in a private location.
- After every major launch or redesign: keep a named rollback theme and update the GitHub operations documentation.

## Recovery priorities
1. Restore the last known-good Shopify theme if the storefront layout breaks.
2. Restore product/page/navigation content from Shopify history, exports or GitHub documentation.
3. Verify domain, languages, payment settings and checkout.
4. Verify products and prices.
5. Verify Search Console sitemap/indexing only after storefront recovery.

## Current commercial structure
LowSeasonGrowth currently sells three consulting packages and operates a separate Sales Partner program. Sales Partner recruiting belongs to LowSeasonGrowth only. Commission logic and partner tracking remain in `PARTNER_PROGRAM.md` and `PARTNER_TRACKER.csv`.

## Change log rule
For every meaningful storefront change, record: date, resource changed, previous state if relevant, new state, reason, and rollback method. Keep the log concise and operational.
