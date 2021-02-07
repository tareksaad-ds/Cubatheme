import React from "react";
import InfiniteCalendar from "react-infinite-calendar";
import "react-infinite-calendar/styles.css";
import Nbar from "../Navbar";
import Sidebar from "../Sidebar";

function Calender() {
  return (
    <div>
      <Nbar />
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <InfiniteCalendar
            width={920}
            height={600}
            theme={{
              selectionColor: "rgb(146, 118, 255)",
              textColor: {
                default: "#333",
                active: "#FFF",
              },
              weekdayColor: "rgb(146, 118, 255)",
              headerColor: "rgb(127, 95, 251)",
              floatingNav: {
                background: "rgba(81, 67, 138, 0.96)",
                color: "#FFF",
                chevron: "#FFA726",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Calender;
