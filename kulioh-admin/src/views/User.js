import { useState } from "react";
import RegisterAdmin from "../components/RegisterAdmin";
import Sidebar from "../components/Sidebar";
import TableUser from "../components/TableUser";

export default function User() {
  const [getNavigate, setNavigate] = useState(true);
  return (
    <div className="d-flex">
      <Sidebar />
      <div id="user">
        <RegisterAdmin setNavigate={setNavigate} page={"Register"} />
      </div>
    </div>
  );
}
