const teste = document.getElementById('teste')
var pointCount = 3142;
var i, r;

var x = [];
var y = [];
var z = [];
var c = [];

for(i = 0; i < pointCount; i++)
 {
     r = i * (pointCount - i);
     x.push(r * Math.cos(i / 30));
     y.push(r * Math.sin(i / 30));
     z.push(i);
     c.push(i)
 }
const data = [
    {
    type: 'scatter3d',
    mode: 'lines',
    x: x,
    y: y,
    z: z,
    opacity: 0.7,
    line: {
      width: 10,
      color: c,
      colorscale: 'Viridis'}
   }]
Plotly.newPlot(teste, data);