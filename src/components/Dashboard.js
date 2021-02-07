import React from "react";
import Nbar from "./Layout/Navbar";
import Sidebar from "./Layout/Sidebar";
import "./Dashboard.css";
import LineChart from "./Layout/Charts/LineChart";
import BarChart from "./Layout/Charts/LineData";

function Dashboard() {
  return (
    <div>
      <Nbar />
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-4">
          <LineChart />
        </div>
        <div className="col-4">
          <BarChart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
