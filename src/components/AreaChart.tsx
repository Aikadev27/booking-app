"use client";
import { faker } from "@faker-js/faker";
import { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
import { Line } from "react-chartjs-2";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Views of hotels by city",
    },
  },
};

const labels = ["Can Tho", "Vung Tau", "Da Nang", "Nha Trang", "Da Lat"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Views",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 2000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
export interface IAreaChartProps {}

export default function AreaChart(props: IAreaChartProps) {
  return <Line options={options} data={data} />;
}
