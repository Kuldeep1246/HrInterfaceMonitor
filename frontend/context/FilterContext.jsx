import { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    status: "",
    interfaceName: "",
    startDate: "",
    endDate: "",
    search: ""
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};
