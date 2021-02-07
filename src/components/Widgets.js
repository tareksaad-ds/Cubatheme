import React from "react";
import Nbar from "./Layout/Navbar";
import Sidebar from "./Layout/Sidebar";
import "./Dashboard.css";
import AreaChart from "./Layout/Charts/Charts";
import RadarChart from "./Layout/Charts/RadarChart";

function Widgets() {
  return (
    <div>
      <Nbar />
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-4">
          <AreaChart />
        </div>
        <div className="col-4">
          <RadarChart />
        </div>
      </div>
    </div>
  );
}

export default Widgets;
