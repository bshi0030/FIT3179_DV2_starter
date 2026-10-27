# The Australian Shopping Shift

**FIT3179 Data Visualisation 2 | Semester 2, 2026**  
**Author:** Bilal Shiji  
**Live visualisation:** https://bshi0030.github.io/FIT3179_DV2_starter/

## Overview

*The Australian Shopping Shift* is a single-page, interactive data story about how Australian shopping patterns differ across time, place, product categories and generations. It examines household spending, online shopping and second-hand purchasing, using Australian Bureau of Statistics (ABS) data and the Australia Post eCommerce Report 2026.

The story is arranged in four sections:

1. **A changing wallet:** Household spending over time and shifts in spending categories.
2. **Shopping moves online:** State-by-state growth, per-resident online spending and local shopping hotspots.
3. **Your lifestyle shapes your cart:** Online product categories and generational behaviour.
4. **Value has a new meaning:** Participation in, and preferences for, second-hand shopping.

The primary audience is a general reader interested in Australian consumer behaviour. The page uses short narrative explanations and interactive tooltips rather than assuming specialist statistical knowledge.

## Visualisations: Why and How

| # | Chart / idiom | WHY — question or insight | HOW — visual encoding and interaction |
|---|---|---|---|
| 1 | **Household spending trend — line chart** | How has spending changed since 2012, after accounting for inflation? | Time is encoded on the horizontal axis and monthly household expenditure on the vertical axis. ABS quarterly CPI is used to express the default series in 2025 dollars; a dropdown allows comparison with nominal expenditure. A rule/text annotation highlights the sharp 2020 disruption. |
| 2 | **Category share change — heatmap** | Which household spending categories have gained or lost share since 2013? | Rows represent spending categories, columns show years and diverging colour encodes percentage-point change in each category's share relative to 2013. Hover details provide the specific values. |
| 3 | **Category rankings — bump chart** | Have the relative rankings of spending categories changed over time? | Annual rank is plotted vertically (rank 1 highest) and year horizontally, with a separate connected path for each category. Interactive highlighting helps the reader follow a selected category. Complete years 2013–2025 are used. |
| 4 | **Needs and wants — multi-line chart** | How has the balance of discretionary versus non-discretionary household spending shifted? | Two time-series lines compare each category's percentage share of household spending rather than nominal-dollar totals. Tooltips support precise readings. |
| 5 | **State online-spending growth — choropleth map** | Where did online expenditure grow fastest in 2025? | State and territory polygons are coloured by year-on-year online-spending growth, using geographic location plus a sequential colour scale. |
| 6 | **Online spending per resident — proportional-symbol map** | Which states have relatively high online spending after accounting for population size? | Circles positioned on an Australian state map are sized by online expenditure per resident, calculated from 2025 online expenditure divided by June 2025 estimated resident population. Tooltips also retain total spending. This is spending **per resident**, not per online shopper. |
| 7 | **Online-shopping hotspots — geographic point map** | Which localities feature among the highest-volume, highest-per-capita or fastest-growing shopping hotspots? | Points locate Australia Post's named postcodes/localities on a map. Symbol categories identify the different hotspot definitions; positions are approximate locality centres, not individual purchases or parcel deliveries. |
| 8 | **Online cart categories — treemap** | Which product categories account for the most online expenditure, and are the largest also the fastest-growing? | Rectangle **area** encodes 2025 online spending, while a sequential teal scale encodes year-on-year growth. Short labels fit within narrow rectangles and full details are available on hover. |
| 9 | **Generational shopping profiles — heatmap** | How do generations differ in online shopping frequency, channel share, total spending and basket size? | Each row represents a generation and each column a different metric. The cell label retains the original value; colour is normalised **within each metric** for comparison and is not a common scale across unlike units. |
| 10 | **Online vs in-store by generation — 100% stacked bar chart** | Does online shopping dominate spending for any generation? | Each generation has one full-length bar divided into online and in-store percentage shares, enabling direct comparison of composition. |
| 11 | **Second-hand participation — waffle chart** | How common is second-hand purchasing among Australian consumers? | A 100-square grid highlights 46 squares for the reported 46% of Australians who buy second-hand items annually. The squares are a representation of a percentage, **not individual survey responses**. |
| 12 | **Second-hand product interests — horizontal bar chart** | Which types of second-hand items attract the most interest? | Horizontal bar length encodes the percentage interested in each category. Categories are not mutually exclusive: respondents could select more than one. |

Maps 5, 6 and 7 are three distinct geographic idioms. The full page contains 12 charts, including heatmaps, a bump chart, maps, a treemap and a waffle chart alongside simpler comparative charts.

## Data sources and processing

- **Australian Bureau of Statistics — Monthly Household Spending Indicator.** Monthly Australia-wide spending and household spending by category, including discretionary/non-discretionary series. The source files were converted to lightweight CSV files for Vega/Vega-Lite. Source: https://www.abs.gov.au/statistics/economy/finance/monthly-household-spending-indicator
- **Australian Bureau of Statistics — Consumer Price Index, Australia (Table 17, All Groups CPI).** Quarterly Australia-wide CPI, used to adjust the household spending series to 2025 dollars. Source: https://www.abs.gov.au/statistics/economy/price-indexes-and-inflation/consumer-price-index-australia
- **Australian Bureau of Statistics — National, state and territory population.** June 2025 estimated resident population used as the denominator for state online spending per resident. Source: https://www.abs.gov.au/statistics/people/population/national-state-and-territory-population
- **Australia Post — eCommerce Report 2026.** Published 2025 statistics on online expenditure by state and category, online shopping across generations, local hotspots and second-hand consumer behaviour. Source: https://auspost.com.au/business/ecommerce/ecommerce-report

**Data interpretation notes:**

- CPI-adjusted spending uses the corresponding quarter's Australia-wide All Groups CPI and a 2025 annual-average index as the base. Because the source CPI series ends in June 2026, June-quarter CPI is carried forward for the July 2026 spending point; this is explicitly labelled on the chart. This is an inflation-adjusted expenditure series, not a per-person or physical-volume measure.
- Monthly ABS expenditure begins in July 2012 and currently ends in July 2026. Annual category rankings use complete calendar years **2013–2025**, excluding incomplete endpoint years.
- The category-share heatmap reports **percentage-point changes in spending share**, not growth rates in the dollar value of spending.
- The Australia Post figures use several underlying data sources and survey methods. Figures from different measures should not be interpreted as interchangeable, and separate datasets are compared rather than presented as individual-level causal relationships.
- Population-adjusted state expenditure reflects an estimated spending total per resident, not spending per customer or a measure of buying propensity.
- Source information is shown alongside the visualisations. The repository also includes processed CSVs and human-readable Vega/Vega-Lite chart specifications.

## Technology and structure

- HTML and CSS for the single-page narrative, typography and responsive layout.
- JavaScript and **Vega / Vega-Lite** for all data visualisations, embedded using Vega-Embed.
- CSV and GeoJSON files for lightweight data delivery.
- GitHub Pages for public hosting.

Typical repository structure:

```text
index.html
css/
  style.css
js/
  main.js
charts/
  chart01_*.vg.json
  ...
  chart12_*.vg.json
data/
  *.csv
  *.geojson
README.md
```

## Run locally

Opening `index.html` directly from the filesystem can prevent CSV/JSON data from loading. Serve the project using a local web server instead.

**VS Code:** Open the repository folder, install the **Live Server** extension, then right-click `index.html` and choose **Open with Live Server**.

**Terminal alternative:**

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000/.

## AI use and authorship

Generative AI (ChatGPT) was used to assist with project planning, code development and debugging, data-preparation guidance, chart-design feedback, and editing the explanatory text. The author reviewed and tested the outputs, checked numerical claims against the stated sources, and made the final decisions about visualisation design and content. This disclosure should be read alongside any institution-specific AI acknowledgement required by Monash.

**Author:** Bilal Shiji  
**Year:** 2026
