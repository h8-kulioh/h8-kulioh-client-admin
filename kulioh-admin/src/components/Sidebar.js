import { useState } from "react";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const [get, set] = useState("active");
  return (
    <div id="sidebar" className={get}>
      <div className="logo_content d-flex">
        <div className="logo">
          <i className="bx bxs-book"></i>
          <div className="logo_name">Vinter</div>
        </div>
        <i
          className="bx bx-menu"
          id="btn-sidebar"
          onClick={() => set(get === "active" ? "nonactive" : "active")}
        ></i>
      </div>
      <ul className="nav_list">
        <li>
          <i
            className="bx bx-search"
            onClick={() => set(get === "active" ? "nonactive" : "active")}
          ></i>
          <input type="text" placeholder="Search..." />
          <span className="tooltip">Search</span>
        </li>
        <li>
          <Link to={"/"} href="#">
            <i className="bx bx-grid-alt"></i>
            <span className="links_name">Dashboard</span>
          </Link>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <Link to={"/users"} href="#">
            <i className="bx bx-user"></i>
            <span className="links_name">User</span>
          </Link>
          <span className="tooltip">User</span>
        </li>
        <li>
          <Link to={"/question"} href="#">
            <i className="bx bx-question-mark"></i>
            <span className="links_name">Question</span>
          </Link>
          <span className="tooltip">Question</span>
        </li>
        <li>
          <a>
            <i className="bx bxs-analyse"></i>
            <span className="links_name">Analytics</span>
          </a>
          <span className="tooltip">Analytics</span>
        </li>
        <li>
          <a>
            <i className="bx bx-cog"></i>
            <span className="links_name">Setting</span>
          </a>
          <span className="tooltip">Setting</span>
        </li>
      </ul>
      <div className={get + " profile_content"}>
        <div className="profile">
          <div className="profile_details">
            <img src="kucing.jpg" alt="" />
            <div className="name_job">
              <div className="name">Arizal</div>
              <div className="job">Admin</div>
            </div>
          </div>
          <i className="bx bx-log-out-circle" id="log_out"></i>
        </div>
      </div>
    </div>
  );
}
