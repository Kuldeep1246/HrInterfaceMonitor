import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FilterContext } from "../../context/FilterContext";

function LogsTable() {
  const [logs, setLogs] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 50;
  const { filters } = useContext(FilterContext);

  useEffect(() => {
    const queryParams = new URLSearchParams({
      page,
      limit,
      ...filters
    });

    axios
      .get(`http://localhost:5000/api/logs?${queryParams.toString()}`)
      .then((res) => {
        setLogs(res.data.logs);
        setTotal(res.data.total);
      })
      .catch(() => toast.error("Failed to load logs"));
  }, [page, filters]);

  return (
    <div className="bg-white rounded shadow p-4">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="text-left py-2">Interface Name</th>
            <th className="text-left py-2">Integration Key</th>
            <th className="text-left py-2">Status</th>
            <th className="text-left py-2">Message</th>
            <th className="text-left py-2">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, idx) => (
            <tr key={idx} className="border-t">
              <td className="py-2">{log.interfaceName}</td>
              <td className="py-2 text-xs text-gray-500">
                {log.integrationKey}
              </td>
              <td
                className={`py-2 font-bold ${
                  log.status === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {log.status}
              </td>
              <td className="py-2 text-sm">{log.message}</td>
              <td className="py-2 text-sm">
                {new Date(log.timestamp).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-4 py-2">Page {page}</span>
        <button
          onClick={() => setPage((p) => (p * limit < total ? p + 1 : p))}
          disabled={page * limit >= total}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default LogsTable;
