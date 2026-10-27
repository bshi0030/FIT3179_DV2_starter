const embedOptions = {
  actions: false,
  renderer: 'svg'
};

vegaEmbed('#chart01', 'charts/chart01_spending_trend.vg.json', embedOptions).catch(console.error);
vegaEmbed('#chart02', 'charts/chart02_category_heatmap.vg.json', embedOptions).catch(console.error);
vegaEmbed('#chart03', 'charts/chart03_category_bump.vg.json', embedOptions).catch(console.error);
vegaEmbed('#chart04', 'charts/chart04_wants_needs.vg.json', embedOptions).catch(console.error);
vegaEmbed('#chart05',  'charts/chart05_state_growth_map.vg.json', embedOptions).catch(console.error);
vegaEmbed('#chart06', 'charts/chart06_state_symbol_map.vg.json', embedOptions).catch(console.error);
vegaEmbed('#chart07', 'charts/chart07_hotspots_map.vg.json', embedOptions).catch(console.error);
vegaEmbed('#chart08', 'charts/chart08_online_categories_treemap.vg.json', embedOptions).catch(console.error);
vegaEmbed('#chart09', 'charts/chart09_generation_profiles.vg.json', embedOptions).catch(console.error);
vegaEmbed('#chart10', 'charts/chart10_channel_by_generation.vg.json', embedOptions).catch(console.error);

vegaEmbed('#chart11', 'charts/chart11_secondhand_waffle.vg.json', embedOptions).catch(console.error);
vegaEmbed('#chart12', 'charts/chart12_secondhand_categories.vg.json', embedOptions).catch(console.error);
