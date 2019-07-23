// Ported from https://github.com/jasondavies/d3-cloud/blob/master/examples/browserify.js
import cloud from 'd3-cloud'
import { select as d3Select } from 'd3-selection'
import randomColor from 'randomcolor'

const { useEffect, useRef } = React

export default function CloudWords ({
  height,
  width,
  words
}) {
  const gRef = useRef(null)

  function draw (wordsData) {
    const g = d3Select(ReactDOM.findDOMNode(gRef.current))

    g
      .selectAll('text')
      .data(wordsData)
      .enter()
      .append('text')
      .style('font-size', (d) => `${d.size}px`)
      .attr('fill', () => randomColor({ luminosity: 'dark' }))
      .attr('text-anchor', 'middle')
      .attr('transform', ({ rotate, x, y }) => (
        `translate(${x},${y}) rotate(${rotate})`
      ))
      .text((d) => d.text)
  }

  useEffect(() => {
    const layout = cloud()
      .size([ width, height ])
      .words(words)
      .padding(5)
      .rotate(() => (~~(Math.random() * 2) * 90))
      .fontSize((d) => d.size)
      .on('end', draw)

    layout.start()
  })

  return (
    <svg
      height={height}
      width={width}
    >
      <g
        ref={gRef}
        transform={`translate(${width / 2}, ${height / 2})`}
      />
    </svg>
  )
}
