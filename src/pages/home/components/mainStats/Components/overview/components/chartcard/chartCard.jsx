import React from "react";
import "./chartCard.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const ChartCard = () => {
  const data = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        label: "Monthly Sales",
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        data: [24, 5, 16, 25, 10],
      },
      {
        label: "Monthly Sales",
        fill: false,
        borderColor: "rgba(105, 65, 198, 1)",
        data: [4, 8, 12, 18, 24],
      },
    ],
  };

  const options = {
    drawTicks: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart-section">
      <div className="chart-card">
        <div className="chart-title">Revenue</div>
        <Line display={false} data={data} options={options} />
      </div>
    </div>
  );
};
