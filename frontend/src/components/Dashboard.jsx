import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { FilterContext } from "../../context/FilterContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [summary, setSummary] = useState({ successCount: 0, failureCount: 0 });
  const { filters } = useContext(FilterContext);

  useEffect(() => {
    const queryParams = new URLSearchParams({
      startDate: filters.startDate,
      endDate: filters.endDate
    });

    axios
      .get(`https://hrinterfacemonitor.onrender.com/api/logs/summary?${queryParams}`)
      .then((res) => setSummary(res.data))
      .catch((err) => console.error(err));
  }, [filters.startDate, filters.endDate]);

  const chartData = {
    labels: ["Success", "Failure"],
    datasets: [
      {
        label: "Executions",
        data: [summary.successCount, summary.failureCount],
        backgroundColor: ["#10b981", "#ef4444"]
      }
    ]
  };

  return (
    <div className="w-[50%] bg-white p-4 rounded shadow mb-4">
      <h2 className="text-xl font-semibold mb-2">Execution Summary</h2>
      <Bar data={chartData} />
    </div>
  );
}

export default Dashboard;
