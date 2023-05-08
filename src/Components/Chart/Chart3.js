import React from 'react';
import Chart from 'react-apexcharts'

const Charts = () =>{
    let datas = [
        {
            "attributes": {
                "type": "AggregateResult"
            },
            "expr0": 25937961.52,
            "expr1": 1,
            "expr2": 2020
        },
        {
            "attributes": {
                "type": "AggregateResult"
            },
            "expr0": 4092447.85,
            "expr1": 3,
            "expr2": 2020
        },
        {
            "attributes": {
                "type": "AggregateResult"
            },
            "expr0": 18509414.84,
            "expr1": 6,
            "expr2": 2019
        },
        {
            "attributes": {
                "type": "AggregateResult"
            },
            "expr0": 13572118.12,
            "expr1": 10,
            "expr2": 2019
        }]
    var option = {
          
        series: [{
          name: 'XYZ MOTORS',
          data: datas
        }],
        options: {
          chart: {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
              type: 'x',
              enabled: true,
              autoScaleYaxis: true
            },
            toolbar: {
              autoSelected: 'zoom'
            }
          },
          dataLabels: {
            enabled: false
          },
          markers: {
            size: 0,
          },
          title: {
            text: 'Stock Price Movement',
            align: 'left'
          },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 0.5,
              opacityTo: 0,
              stops: [0, 90, 100]
            },
          },
          yaxis: {
            labels: {
              formatter: function (val) {
                return (val / 1000000).toFixed(0);
              },
            },
            title: {
              text: 'Price'
            },
          },
          xaxis: {
            type: 'datetime',
          },
          tooltip: {
            shared: false,
            y: {
              formatter: function (val) {
                return (val / 1000000).toFixed(0)
              }
            }
          }
        },
      
      
      };    
      
    return(<>

<Chart options={option} series={option.series} type="bar" width={500} height={320} />
    </>)


}

export default Charts;