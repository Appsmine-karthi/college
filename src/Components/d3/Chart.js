import React, { Component } from 'react';
import { render } from 'react-dom';
import { scaleLinear, scaleBand } from 'd3-scale';
import XYAxis from './XYaxis';
import Line from './Line';
import { line, curveMonotoneX } from 'd3-shape';
import { extent } from 'd3-array';
import { transition } from 'd3-transition';

class Chart extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: '1994', value: 30 },
        { name: '1995', value: 10 },
        { name: '1996', value: 50 },
        { name: '1997', value: 20 },
        { name: '1998', value: 80 },
        { name: '1999', value: 30 },
        { name: '2000', value: 0 },
        { name: '2001', value: 20 },
        { name: '2002', value: 100 },
        { name: '2003', value: 55 },
        { name: '2004', value: 60 },
        { name: '2005', value: 80 },
      ],
    }
  }
  // randomData = (e) => {
  //   e.preventDefault();
  //   this.setState((prevState) => {
  //     const data = prevState.data.map(d => ({
  //       name: d.name,
  //       value: Math.floor((Math.random() * 100) + 1)
  //     }))
  //     return {
  //       data
  //     }
  //   })
  // }
  render() {
    const { data } = this.state;
    const parentWidth = 500;

    const margins = {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    };

    const width = parentWidth - margins.left - margins.right;
    const height = 200 - margins.top - margins.bottom;

    const ticks = 5;
    const t = transition().duration(1000);

    const xScale = scaleBand()
      .domain(data.map(d => d.name))
      .rangeRound([0, width]).padding(0.1);

    const yScale = scaleLinear()
      .domain(extent(data, d => d.value))
      .range([height, 0])
      .nice();

    const lineGenerator = line()
      .x(d => xScale(d.name))
      .y(d => yScale(d.value))
      .curve(curveMonotoneX);

    return (
      <div>
        {/* <button onClick={this.randomData}>Randomize data</button> */}
        <svg
          className="lineChartSvg"
          width={width + margins.left + margins.right}
          height={height + margins.top + margins.bottom}
        >
          <g transform={`translate(${margins.left}, ${margins.top})`}>
            <XYAxis {...{ xScale, yScale, height, ticks, t }} />
            <Line data={data} xScale={xScale} yScale={yScale} lineGenerator={lineGenerator} width={width} height={height} />
          </g>
        </svg>
      </div>
    );
  }
}

export default Chart;
