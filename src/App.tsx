import React from "react";
import "./App.css";
import JobManager from "./components/JobManager.tsx";

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Hire Hatch</h1>
      <JobManager />
    </div>
  );
};

export default App;
