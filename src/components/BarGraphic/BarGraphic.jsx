import { React, useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import "./BarGraphic.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

function BarGraphic({ login, followers, error, onError }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const data = {
    labels: login,
    datasets: [
      {
        label: "Followers",
        backgroundColor: "#1D4AFF",
        borderColor: "#FFFFFF",
        borderWidth: 1,
        hoverBackgroundColor: "#112b94",
        hoverBorderColor: "#efefefe4",
        data: followers,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div className="bar__container">
      {error && onError()}
      <Bar data={data} options={options} />
    </div>
  );
}

export { BarGraphic };
