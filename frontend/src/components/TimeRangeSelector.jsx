import React, { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";

const TimeRangeSelector = () => {
  const { setFilters } = useContext(FilterContext);

  const now = new Date();
  const timeOptions = {
    "last-hour": {
      startDate: new Date(now.getTime() - 60 * 60 * 1000),
      endDate: now
    },
    "last-24h": {
      startDate: new Date(now.getTime() - 24 * 60 * 60 * 1000),
      endDate: now
    },
    "last-week": {
      startDate: new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000),
      endDate: now
    },
    "last-month": {
      startDate: new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000),
      endDate: now
    }
  };

  const handleSelect = (e) => {
    const value = e.target.value;

    if (timeOptions[value]) {
      const { startDate, endDate } = timeOptions[value];
      setFilters((prev) => ({
        ...prev,
        startDate: startDate.toISOString().slice(0, 10),
        endDate: endDate.toISOString().slice(0, 10)
      }));
    }
  };

  return (
    <select onChange={handleSelect} className="ml-auto mb-4 p-2 border rounded">
      <option value="">Time Range</option>
      <option value="last-hour">Last Hour</option>
      <option value="last-24h">Last 24 Hours</option>
      <option value="last-week">Last Week</option>
      <option value="last-month">Last Month</option>
    </select>
  );
};

export default TimeRangeSelector;
