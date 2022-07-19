import { useState } from "react";
import RegisterAdmin from "../components/RegisterAdmin";

export default function Login() {
  const [type, setType] = useState("password");
  return (
    <div id="login">
      <RegisterAdmin page={"Login"} />
    </div>
  );
}
