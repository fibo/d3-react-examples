import BarChart from './BarChart.js'

const data = [ 12, 5, 6, 6, 9, 10 ]

ReactDOM.render(
  <div>
    <BarChart
      barWidth={60}
      data={data}
      height={300}
      width={400}
    />
  </div>,
  document.getElementById('root')
)
