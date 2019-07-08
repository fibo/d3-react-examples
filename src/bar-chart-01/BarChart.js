import { select as d3Select } from 'd3-selection'

const { useEffect, useRef } = React

export default function BarChart ({
  barWidth,
  data,
  height,
  width
}) {
  const svgRef = useRef(null)

  useEffect(() => {
    const svg = d3Select(ReactDOM.findDOMNode(svgRef.current))

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * (barWidth + 5))
      .attr('y', (d, i) => height - 10 * d)
      .attr('width', barWidth)
      .attr('height', (d, i) => d * 10)
      .attr('fill', 'green')
  })

  return (
    <svg ref={svgRef}
      height={height}
      width={width}
    />
  )
}
