import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAdmin, registerAdmin } from "../store/actions";
import axios from "axios";
import Swal from "sweetalert2";
import { urlAdmin } from "../store/actions/actionType";

export default function RegisterAdmin({ page }) {
  const [type, setType] = useState("password");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dataUserAdmin, setDataUserAdmin] = useState({
    email: "",
    password: "",
    name: "",
  });
  const changeData = (e) => {
    setDataUserAdmin({ ...dataUserAdmin, [e.target.name]: e.target.value });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    if (page === "Register") {
      dispatch(registerAdmin(dataUserAdmin));
    } else {
      loginAdmin(dataUserAdmin);
    }
  };

  async function loginAdmin(obj) {
    try {
      const res = await axios.post(urlAdmin + "/login", obj);
      localStorage.setItem("access_token", res.data.access_token);
      Swal.fire({
        icon: "success",
        title: "Success login",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    } catch (error) {
      console.log("ERROR : ", error);
      Swal.fire({
        icon: "error",
        title: "failed login",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
  return (
    <div id="register">
      <div
        style={{ width: "80%", margin: "auto", marginTop: "20px" }}
        className="register-box"
      >
        {page === "Login" ? (
          <div className="img-box">
            <img src="logo/VINTER.png" alt="logo" />
          </div>
        ) : (
          <h3 style={{ textAlign: "center" }}>{page}</h3>
        )}
        <form onSubmit={(e) => handleRegister(e)}>
          {page === "Register" ? (
            <div>
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={changeData}
              />
            </div>
          ) : (
            ""
          )}

          <div>
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={changeData}
            />
          </div>
          <div>
            <label className="form-label">Password</label>
            <div className="password-box" style={{ alignItems: "center" }}>
              <input
                type={type}
                className="form-control password"
                name="password"
                onChange={changeData}
              />
              {type === "password" ? (
                <a
                  href=""
                  onClick={(a) => (a.preventDefault(), setType("text"))}
                  className="eye"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#57575a"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-eye"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </a>
              ) : (
                <a
                  href=""
                  onClick={(a) => (a.preventDefault(), setType("password"))}
                  className="eye"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#57575a"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-eye-off"
                  >
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                </a>
              )}
            </div>
          </div>
          {/* {page === "Login" ? (
            <div>
              <input type="checkbox" className="checkbox" /> Remember Me
            </div>
          ) : (
            ""
          )} */}
          <br />
          <div style={{ marginTop: "10px" }} className="btn-box">
            <button type="submit" className="btn" style={{ width: "100%" }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
