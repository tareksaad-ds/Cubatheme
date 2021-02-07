import React from "react";
import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
} from "react-pro-sidebar";
import {
  FiHome,
  FiAirplay,
  FiLayout,
  FiBox,
  FiGitPullRequest,
  FiMonitor,
} from "react-icons/fi";
import "./Layout.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <ProSidebar>
        <SidebarHeader id="General">
          <h6>General</h6>
          <p>Dashboards,Widgets & Layout.</p>
        </SidebarHeader>
        <Menu iconShape="square">
          <SubMenu title="Dashboards" icon={<FiHome />}>
            <MenuItem>
              <Link to="/dashboard">Defualt</Link>
            </MenuItem>
            <MenuItem>Ecommerce</MenuItem>
          </SubMenu>
          <SubMenu title="Widgets" icon={<FiAirplay />}>
            <MenuItem>
              <Link to="/dashboard/charts">Defualt</Link>
            </MenuItem>
            <MenuItem>Charts</MenuItem>
          </SubMenu>
          <SubMenu title="Page Layout" icon={<FiLayout />}>
            <MenuItem>
              <Link to="/calender">Calender</Link>
            </MenuItem>
            <MenuItem>RTL</MenuItem>
            <MenuItem>Dark Layout</MenuItem>
            <MenuItem>Hide NavScroll</MenuItem>
            <MenuItem>Footer Light </MenuItem>
            <MenuItem>Footer Dark</MenuItem>
          </SubMenu>
        </Menu>
        <SidebarHeader id="App">
          <h6>Applications</h6>
          <p>Ready to use Apps.</p>
        </SidebarHeader>
        <Menu iconShape="square">
          <SubMenu title="Project" icon={<FiBox />}>
            <MenuItem>Project List</MenuItem>
            <MenuItem>Create New</MenuItem>
          </SubMenu>
          <MenuItem icon={<FiGitPullRequest />}>File Manager</MenuItem>
          <MenuItem icon={<FiMonitor />}>Kanban Board</MenuItem>
        </Menu>
      </ProSidebar>{" "}
    </div>
  );
}

export default Sidebar;
