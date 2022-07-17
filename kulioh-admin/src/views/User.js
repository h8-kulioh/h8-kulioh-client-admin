import { useState } from "react";
import RegisterAdmin from "../components/RegisterAdmin";
import Sidebar from "../components/Sidebar";
import TableUser from "../components/TableUser";

export default function User() {
  const [getNavigate, setNavigate] = useState(true);
  return (
    <div className="d-flex">
      <Sidebar />
      {getNavigate ? (
        <TableUser setNavigate={setNavigate} />
      ) : (
        <RegisterAdmin setNavigate={setNavigate} />
      )}
    </div>
  );
}
