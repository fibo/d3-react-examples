import { extent as d3ArrayExtent } from 'd3-array'
import {
  scaleLinear as d3ScaleLinear,
  scaleTime as d3ScaleTime
} from 'd3-scale'
import { line as d3Line } from 'd3-shape'

export default function LineChart ({
  color,
  data,
  height,
  selectX,
  selectY,
  width
}) {
  const xScale = d3ScaleTime()
    .domain(d3ArrayExtent(data, selectX))
    .range([0, width])

  const yScale = d3ScaleLinear()
    .domain(d3ArrayExtent(data, selectY))
    .range([height, 0])

  const selectScaledX = d => xScale(selectX(d))
  const selectScaledY = d => yScale(selectY(d))

  const sparkLine = d3Line()
    .x(selectScaledX)
    .y(selectScaledY)

  const linePath = sparkLine(data)

  return (
    <svg
      height={height}
      width={width}
    >
      <g>
        <path
          d={linePath}
          fill='transparent'
          stroke={color}
        />
      </g>
    </svg>
  )
}
