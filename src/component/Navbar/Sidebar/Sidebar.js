import React from "react";
import {
  Calendar,
  File,
  MessageSquare,
  Home,
  BarChart2,
  Settings,
  LogOut,
} from "react-feather";
import "./sidebar.css";

const Sidebar = ({handleLogout}) => {
  return (
    <div class="sidenav">
      <h2>.taskez</h2>
      <ul>
        <li>
          <a href="#">
            <Home /> Overview
          </a>
        </li>
        <li>
          <a href="#">
            <BarChart2 /> Stats
          </a>
        </li>
        <li>
          <a href="#">
            <File /> Projects
          </a>
        </li>
        <li>
          <a href="#">
            <MessageSquare /> Chat
          </a>
        </li>
        <li>
          <a href="#">
            <Calendar /> Calender
          </a>
        </li>
      </ul>
      <div className="log">
        <li>
          <a href="#">
            <Settings /> Settings
          </a>
        </li>
        <li>
          <a href="#" onClick={handleLogout}>
            <LogOut /> LogOut
          </a>
        </li>
      </div>
    </div>
  );
}

export default Sidebar;