// See original code here: http://bl.ocks.org/alansmithy/e984477a741bc56db5a5
import { select as d3Select } from 'd3-selection'
import { transition as d3Transition } from 'd3-transition'

const { useEffect, useRef, useState } = React

// Two different data arrays.
const data = [
  [30, 35, 45, 55, 70],
  [50, 55, 45, 35, 20, 25, 25, 40]
]

export default function Example ({
  lineLength,
  xBuffer,
  yBuffer
}) {
  const svgRef = useRef(null)

  const [ dataIndex, setDataIndex ] = useState({ current: 0, previous: 1 })

  // See this reference about how to mimic componentDidMount with useEffect:
  // https://stackoverflow.com/a/55409573/1217468
  // Actually I reverted the logic (i.e. the booleans).

  const [ componentDidMount, setComponentDidMount ] = useState(true)
  useEffect(() => setComponentDidMount(false), [])

  const toggleData = () => {
    if (dataIndex.current === 0) {
      setDataIndex({ current: 1, previous: 0 })
    }

    if (dataIndex.current === 1) {
      setDataIndex({ current: 0, previous: 1 })
    }
  }

  useEffect(() => {
    const svg = d3Select(ReactDOM.findDOMNode(svgRef.current))
    const currentData = data[dataIndex.current]
    const previousData = data[dataIndex.previous]

    const currentSpacing = lineLength / currentData.length
    const previousSpacing = lineLength / previousData.length

    if (componentDidMount) {
      // Create axis line.
      svg.append('line')
        .attr('x1', xBuffer)
        .attr('y1', yBuffer)
        .attr('x1', xBuffer + lineLength)
        .attr('y2', yBuffer)

      svg.selectAll('circle')
        .data(currentData)
        .enter()
        .append('circle')
        .attr('cx', (d, i) => xBuffer + i * currentSpacing)
        .attr('cy', yBuffer)
        .attr('r', (d) => d)
    } else {
      // Remove previous circles.
      svg.selectAll('circle').remove()

      // Create new circles needed.
      svg.selectAll('circle')
        .data(currentData)
        .enter()
        .append('circle')
        .attr('r', 0) // Radius starts from zero, then it is animated.
        .attr('cx', (d, i) => xBuffer + i * previousSpacing)
        .attr('cy', yBuffer)
        .transition(d3Transition().duration(500))
        .attr('cx', (d, i) => xBuffer + i * currentSpacing)
        .attr('r', (d) => d)
    }
  }, [componentDidMount, dataIndex, lineLength, xBuffer, yBuffer])

  return (
    <div>
      <svg ref={svgRef} />

      <button onClick={toggleData}>change data</button>
    </div>
  )
}
