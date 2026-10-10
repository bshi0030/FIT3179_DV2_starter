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

## Section 1 completed
The starter now includes:
- Chart 1 — overall monthly household spending
- Chart 2 — annual category heatmap (2013–2025)
- Chart 3 — interactive category ranking / bump chart (2013–2025)
- Chart 4 — discretionary vs non-discretionary spending

Note: 2012 starts in July and 2026 currently ends in July, so the annual category charts deliberately use full years 2013–2025.

## Map rendering fix
The Australia maps now use an explicit Mercator centre/scale and a GeoJSON ring orientation compatible with Vega/D3. This fixes the previous issue where Australia appeared tiny in the lower-right corner and the map background was incorrectly filled.

## Map fix v2
The previous version incorrectly reversed the GeoJSON exterior ring orientation.
Vega/D3 then interpreted the polygons as their complements, which caused the
large filled rectangle / missing basemap. This version restores the original
GeoJSON orientation and keeps an explicit Australia-centred Mercator projection.

## Map fix v3
The GeoJSON contained inconsistent polygon ring direction for Vega/D3.
All exterior state rings are now clockwise and interior holes counter-clockwise.
The map projection is also back to automatic fitting, so Australia fills the available chart area without being cropped.
