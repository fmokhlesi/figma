var data = anychart.data.set([
    ['planting trees', 41],
    ['cleanlines program', 35],
    ['helping people', 10],
    ['animal safty', 10],
    ['feeding the poor', 6],
    
  ]);
  // create a pie chart with the data
var chart = anychart.pie(data)
// set the chart radius making a donut chart
chart.innerRadius('45%');
chart.title('')
chart.container('container');
chart.draw();

var palette = anychart.palettes.distinctColors();
  
// set the colors according to the brands
palette.items([
  { color: '#bef3c0' },
  { color: '#ac94f1' },
  { color: '#fff0ca' },
  { color: '#f9cf64' },
  { color: '#f38fbf' },

]);

// apply the donut chart color palette
chart.palette(palette);
