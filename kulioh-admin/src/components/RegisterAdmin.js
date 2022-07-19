import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerAdmin } from "../store/actions";

export default function RegisterAdmin({ setNavigate, page }) {
  const [type, setType] = useState("password");
  const dispatch = useDispatch();
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
    }
  };
  return (
    <div id="register">
      <div style={{ width: "80%", margin: "auto", marginTop: "20px" }}>
        {page === "Register" ? (
          <a
            href="#"
            onClick={(a) => (a.preventDefault(), setNavigate(true))}
            className="btn-back"
          >
            <i class="bx bxs-left-arrow-square"></i>
            Back
          </a>
        ) : (
          ""
        )}
        <h3 style={{ textAlign: "center" }}>{page}</h3>
        <form onSubmit={(a) => handleRegister(a)}>
          <div>
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={changeData}
            />
          </div>
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
            <div className="d-flex" style={{ alignItems: "center" }}>
              <input
                type={type}
                className="form-control"
                style={{ marginRight: "18px" }}
                name="password"
                onChange={changeData}
              />
              {type === "password" ? (
                <a
                  href=""
                  onClick={(a) => (a.preventDefault(), setType("text"))}
                  className="eye"
                >
                  <i class="bx bx-show-alt"> Show</i>
                </a>
              ) : (
                <a
                  href=""
                  onClick={(a) => (a.preventDefault(), setType("password"))}
                  className="eye"
                >
                  <i class="bx bx-hide"> Hide</i>
                </a>
              )}
            </div>
          </div>
          <div style={{ marginTop: "10px" }}>
            <button type="submit" className="btn" style={{ width: "100%" }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
