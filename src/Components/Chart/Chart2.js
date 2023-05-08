import { Line } from 'react-chartjs-2'

import 'chartjs-adapter-date-fns'
import { de, enGB, ja } from 'date-fns/locale'

import dynamic from 'next/dynamic'
import 'chart.js/auto'
import { useRouter } from 'next/router'
import { Chart } from 'chart.js'

// import zoomPlugin from 'chartjs-plugin-zoom';
const zoomPlugin = dynamic(() => import('chartjs-plugin-zoom'), {
  ssr: false,
})
Chart.register(zoomPlugin);

const PortfolioPriceLineDual = ({
  title,
  data,
  unit,
  axesOptions,
  showLegend = true,
}) => {
  const totalDuration = 5000
  const delayBetweenPoints = totalDuration / data.datasets[0].data.length
  // const animation =
  const { locale } = useRouter()
  let format
  switch (locale) {
    case 'de-DE':
      format = de
      break
    case 'en-US':
      format = enGB

      break
    case 'ja-JP':
      format = ja

      break
    default:
      break
  }

  return (
    <Line
      data={data}
      options={{
        responsive: true,
        // maintainAspectRatio: true,
        // aspectRatio: 16 / 9,
        resizeDelay: 5,
        animation: {
          x: {
            type: 'number',
            easing: 'linear',
            duration: delayBetweenPoints,
            from: NaN, // the point is initially skipped
            delay: (ctx) => {
              if (ctx.type !== 'data' || ctx.xStarted) {
                return 0
              }
              ctx.xStarted = true
              return ctx.index * delayBetweenPoints
            },
          },
          y: {
            type: 'number',
            easing: 'linear',
            duration: delayBetweenPoints,
            from: (ctx) => {
              return ctx.index === 0
                ? ctx.chart.scales.y.getPixelForValue(100)
                : ctx.chart
                    .getDatasetMeta(ctx.datasetIndex)
                    .data[ctx.index - 1].getProps(['y'], true).y
            },
            delay: (ctx) => {
              if (ctx.type !== 'data' || ctx.yStarted) {
                return 0
              }
              ctx.yStarted = true
              return ctx.index * delayBetweenPoints
            },
          },
          y1: {
            type: 'number',
            easing: 'linear',
            duration: delayBetweenPoints,
            from: (ctx) => {
              return ctx.index === 0
                ? ctx.chart.scales.y.getPixelForValue(100)
                : ctx.chart
                    .getDatasetMeta(ctx.datasetIndex)
                    .data[ctx.index - 1].getProps(['y'], true).y
            },
            delay: (ctx) => {
              if (ctx.type !== 'data' || ctx.yStarted) {
                return 0
              }
              ctx.yStarted = true
              return ctx.index * delayBetweenPoints
            },
          },
        },
        interaction: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          x: {
            type: 'time',

            time: {
              unit: 'year',
              displayFormats: {
                quarter: 'yyyy',
              },
              tooltipFormat: 'MMMM yyyy',
            },
            adapters: {
              date: {
                locale: format,
              },
            },
            ticks: {
              align: 'start',
              color: '#122a42',
              font: {
                size: 14,
                weight: 'bold',
              },
            },
            grid: {
              display: true,
              drawBorder: false,
              drawOnChartArea: true,
              drawTicks: true,
            },
          },
          y: {
            type: 'logarithmic',

            grid: {
              display: true,
              drawBorder: false,
              drawOnChartArea: true,
              drawTicks: true,
            },
            ticks: {
              color: '#122a42',
              align: 'end',
              font: {
                size: 10,
                weight: 'normal',
              },
              // Include a dollar sign in the ticks
              // stepSize: 1000,
              callback: function (value) {
                // callback: function (value, index, ticks) {
                return `${new Intl.NumberFormat(locale, axesOptions).format(
                  value
                )}`
              },
            },
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',

            // grid line settings
            grid: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
            ticks: {
              color: '#122a42',
              align: 'end',
              font: {
                size: 10,
                weight: 'normal',
              },
              // Include a dollar sign in the ticks
              // stepSize: 1000,
              callback: function (value) {
                // callback: function (value, index, ticks) {
                return `${new Intl.NumberFormat(locale, axesOptions).format(
                  value
                )}`
              },
            },
          },
        },
        zoom: {
          enabled: true,
          mode: 'x',
        },
        pan: {
          enabled: true,
          mode: 'x',
        },
        plugins: {
          zoom: {
            enabled: true,
            mode: 'x',
          },
          pan: {
            enabled: true,
            mode: 'x',
          },
          // zoom: {
          //   zoom: {
          //     wheel: {
          //       enabled: true,
          //     },
          //     pinch: {
          //       enabled: true,
          //     },
          //     mode: 'x',
          //   },
          // },
          title: {
            display: true,
            color: '#151C30',
            font: {
              size: 26,
              weight: 'bold',
              style: 'normal',
            },
            padding: {
              bottom: 10,
            },
            text: `${title}`,
          },
          tooltip: {
            enabled: true,
            backgroundColor: '#122a42',
            itemSort: function (a, b) {
              return b.raw - a.raw
            },
            callbacks: {
              label: function (context) {
                let label = context.dataset.label || ''

                if (label) {
                  label += ': '
                }
                if (context.parsed.y !== null) {
                  label += `${new Intl.NumberFormat(locale, axesOptions).format(
                    context.parsed.y
                  )} ${unit}`
                }
                return label
              },
            },
          },
          legend: {
            position: 'bottom',
            labels: {
              // This more specific font property overrides the global property
              color: '#151C30',
              font: {
                size: 12,
                weight: 'light',
              },
            },
          },
        },
      }}
    />
  )
}

export default PortfolioPriceLineDual