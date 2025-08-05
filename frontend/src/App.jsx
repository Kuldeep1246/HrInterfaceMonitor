import React from 'react'
import Dashboard from './components/Dashboard'
import LogsTable from './components/LogsTable'
import FilterBar from './components/FilterBar'
import { ToastContainer } from 'react-toastify'
import TimeRangeSelector from './components/TimeRangeSelector'


function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Interface Monitoring Dashboard</h1>
        <TimeRangeSelector />
      </div>
      <Dashboard />
      <FilterBar />
      <LogsTable />
      <ToastContainer />
    </div>
  );
}

export default App