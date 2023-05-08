import React from 'react';
import Chart from 'react-apexcharts'

const Charts = () =>{
//    var  options = {
//         chart: {
//           id: 'apexchart-example'
//         },
//         xaxis: {
//           categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
//         },
//         series: [{
//             name: 'series-1',
//             data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
//           }]
//       }

var options = {
    series: [{
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
  }],
    chart: {
    height: 350,
    type: 'line',
    id: 'areachart-2'
  },
  annotations: {
    yaxis: [{
      y: 8200,
      borderColor: '#00E396',
      label: {
        borderColor: '#00E396',
        style: {
          color: '#fff',
          background: '#00E396',
        },
        text: 'Support',
      }
    }, {
      y: 8600,
      y2: 9000,
      borderColor: '#000',
      fillColor: '#FEB019',
      opacity: 0.2,
      label: {
        borderColor: '#333',
        style: {
          fontSize: '10px',
          color: '#333',
          background: '#FEB019',
        },
        text: 'Y-axis range',
      }
    }],
    xaxis: [{
      x: new Date('23 Nov 1994').getTime(),
      strokeDashArray: 0,
      borderColor: '#775DD0',
      label: {
        borderColor: '#775DD0',
        style: {
          color: '#fff',
          background: '#775DD0',
        },
        text: 'Anno Test',
      }
    }, {
      x: new Date('26 Nov 1995').getTime(),
      x2: new Date('26 Nov 1995').getTime(),
      fillColor: '#B3F7CA',
      opacity: 0.4,
      label: {
        borderColor: '#B3F7CA',
        style: {
          fontSize: '10px',
          color: '#fff',
          background: '#00E396',
        },
        offsetY: -10,
        text: 'X-axis range',
      }
    }],
    points: [{
      x: new Date('26 Nov 1996').getTime(),
      y: 8607.55,
      marker: {
        size: 8,
        fillColor: '#fff',
        strokeColor: 'red',
        radius: 2,
        cssClass: 'apexcharts-custom-class'
      },
      label: {
        borderColor: '#FF4560',
        offsetY: 0,
        style: {
          color: '#fff',
          background: '#FF4560',
        },
  
        text: 'Point Annotation',
      }
    }, {
      x: new Date('01 Dec 1997').getTime(),
      y: 9340.85,
      marker: {
        size: 0
      },
      image: {
        path: '../../assets/images/ico-instagram.png'
      }
    }]
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  grid: {
    padding: {
      right: 30,
      left: 20
    }
  },
  title: {
    text: 'Line with Annotations',
    align: 'left'
  },
  labels:[ '23 Nov 1994', '26 Nov 1995', '26 Nov 1996', '01 Dec 1997'],
  xaxis: {
    type: 'datetime',
  },
  };
  // , '08 Dec 1998', '08 Dec 1999',  '08 Dec 2000' ,  '08 Dec 2001' ,  '08 Dec 2002' ,  '08 Dec 2003',  '08 Dec 2004',  '08 Dec 2005'
    return(<>

<Chart options={options} series={options.series} type="bar" width={500} height={320} />
    </>)


}

export default Charts;