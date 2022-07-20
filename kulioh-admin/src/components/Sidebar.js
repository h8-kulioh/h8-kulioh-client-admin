import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Sidebar() {
  const [get, set] = useState("active");
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div id="sidebar" className={get}>
      <div className="logo_content d-flex">
        <div className="logo">
          <img src="/logo/VINTER.png" alt="" />
          <div className="logo_name"> Vinter</div>
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
          <a>
            <i className="bx bx-grid-alt"></i>
            <span className="links_name">Dashboard</span>
          </a>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <Link to={"/users"} href="#">
            <i className="bx bx-user"></i>
            <span className="links_name">Register Admin</span>
          </Link>
          <span className="tooltip">Register Admin</span>
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
          <a href="" onClick={(e) => handleLogout(e)}>
            <i className="bx bx-log-out-circle" id="log_out"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
