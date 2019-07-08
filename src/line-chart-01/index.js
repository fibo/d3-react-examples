import LineChart from './LineChart.js'

const data = [
  { day: '2019-07-01', downloads: 40 },
  { day: '2019-07-02', downloads: 20 },
  { day: '2019-07-03', downloads: 25 },
  { day: '2019-07-04', downloads: 40 },
  { day: '2019-07-05', downloads: 50 },
  { day: '2019-07-06', downloads: 45 },
  { day: '2019-07-07', downloads: 55 }
]

const selectY = (d) => d.downloads
const selectX = (d) => new Date(d.day)

ReactDOM.render(
  <div>
    <LineChart
      color='red'
      data={data}
      height={400}
      selectX={selectX}
      selectY={selectY}
      width={800}
    />
  </div>,
  document.getElementById('root')
)
