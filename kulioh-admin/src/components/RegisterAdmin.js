import { useState } from "react";

export default function RegisterAdmin({ setNavigate }) {
  const [type, setType] = useState("password");
  const handleRegister = (a) => {
    a.preventDefault();
  };
  return (
    <div style={{ width: "80%" }} id="register">
      <div style={{ width: "80%", margin: "auto", marginTop: "20px" }}>
        <button className="btn" onClick={() => setNavigate(true)}>
          Back
        </button>
        <form style={{ width: "50%" }} onSubmit={(a) => handleRegister(a)}>
          <div>
            <label className="form-label">Email</label>
            <input type="text" className="form-control" />
          </div>
          <div>
            <label className="form-label">Password</label>
            <div className="d-flex" style={{ alignItems: "center" }}>
              <input
                type={type}
                className="form-control"
                style={{ marginRight: "18px" }}
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
          <div>
            <label className="form-label">Name</label>
            <input type="text" className="form-control" />
          </div>
          <div style={{ marginTop: "10px" }}>
            <button
              type="submit"
              className="btn btn-success"
              style={{ width: "100%" }}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
