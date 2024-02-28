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
        label: "Deposit",
        fill: false,
        borderColor: "#6941C6",
        tension: 0.5,
        data: [24, 5, 16, 12, 10],
      },
      {
        label: "Withdraw",
        fill: false,
        tension: 0.5,
        borderColor: "#101828",
        data: [4, 8, 2, 18, 24],
      },
    ],
  };

  const options = {
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
        <Line data={data} options={options} />
      </div>
    </div>
  );
};
