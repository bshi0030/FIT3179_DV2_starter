# FIT3179 DV2 — The Australian Shopping Shift

## What is already done
- Cleaned ABS total household spending data (2012–Jul 2026)
- Cleaned ABS category spending data in long format
- Annual category totals + ranks for the future bump chart
- Australia Post 2026 CSVs for state spend, categories, generations, regional behaviour, second-hand shopping and hotspots
- Starter single-page website
- Vega-Lite Chart 1: Australian household spending trend

## Run locally
Do NOT double-click index.html because browsers may block CSV/JSON loading from local files.

In VS Code:
1. Open this folder.
2. Install the **Live Server** extension if you do not already have it.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

Alternative from a terminal:
`python -m http.server 8000`
then open `http://localhost:8000`.

## Next coding order
1. Chart 2 — category heatmap (`abs_category_spending.csv`)
2. Chart 3 — category ranking/bump chart (`abs_category_annual.csv`)
3. Chart 4 — discretionary vs non-discretionary (`abs_total_spending.csv`)
4. Three map idioms
5. eCommerce category + generational + second-hand charts
6. Storytelling, annotations, sources and GitHub Pages deployment

## Important data note
2026 ABS observations currently run only to July, so annual comparisons should either:
- compare full years through 2025, or
- explicitly label 2026 as Jan–Jul only.
