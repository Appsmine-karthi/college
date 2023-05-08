import React, { useRef } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";

export const CreatePlot = () => {
    const ChartRef = useRef(null)
  ChartJS.register(...registerables, zoomPlugin);

  let options = {
    responsive: true,
    plugins: {
      zoom: {
        zoom: {
          wheel: {
            enabled: true // SET SCROOL ZOOM TO TRUE
          }
        },
        pan: {
          enabled: true
        }
      },
      legend: {
        position: "right" ,
        labels: {
          font: {
            size: 16
          }
        }
      },
      title: {
        display: true,
        text: "title",
        font: {
          size: 24
        }
      }
    },
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: "Reports",
          font: {
            size: 16
          }
        },
        ticks: {
          font: {
            size: 16
          }
        }
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: "Events",
          font: {
            size: 16
          }
        },
        ticks: {
          font: {
            size: 16
          }
        }
      }
    }
  };

  const labels = ["2019", "2020", "2021", "2022", "2023"];

  const data = {
    labels,
    datasets: [
      {
        type: "bar",
        label: "Data",
        data: [1, 2, 3, 4, 5],
        backgroundColor: "rgba(255, 99, 132, 0.5)"
      },
      {
        type: "scatter",
        label: "Worst Revenue",
        data: [1, 2, 3, 4, 5],
        backgroundColor: "rgba(70, 0, 235, 0.5)"
      },
      {
        type: "scatter",
        label: "Best Revenue",
        data: [1, 2, 3, 4, 5],
        backgroundColor: "rgba(53, 162, 235, 0.5)"
      }
    ]
  };


  const handleResetZoom = () => {
    if (ChartRef && ChartRef.current) {
      ChartRef.current.resetZoom();
    }
  };

  return (
    <div>
      <Line ref={ChartRef} options={options} data={data} />
      <button onClick={handleResetZoom}>Reset Zoom</button>
    </div>
  );
};
