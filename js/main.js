vegaEmbed('#chart01', 'charts/chart01_spending_trend.vg.json', {
  actions: false,
  renderer: 'svg'
}).catch(console.error);
