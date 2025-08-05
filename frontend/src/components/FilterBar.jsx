import React, { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";

function FilterBar() {
  const { filters, setFilters } = useContext(FilterContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <select
        name="status"
        value={filters.status}
        onChange={handleChange}
        className="p-2 border rounded"
      >
        <option value="">All Status</option>
        <option value="success">Success</option>
        <option value="failure">Failure</option>
      </select>

      <input
        name="interfaceName"
        value={filters.interfaceName}
        onChange={handleChange}
        placeholder="Interface Name"
        className="p-2 border rounded"
      />

      <input
        type="date"
        name="startDate"
        value={filters.startDate}
        onChange={handleChange}
        className="p-2 border rounded"
      />
      <input
        type="date"
        name="endDate"
        value={filters.endDate}
        onChange={handleChange}
        className="p-2 border rounded"
      />

      <input
        type="text"
        name="search"
        value={filters.search}
        onChange={handleChange}
        placeholder="Search message"
        className="p-2 border rounded"
      />
    </div>
  );
}

export default FilterBar;
