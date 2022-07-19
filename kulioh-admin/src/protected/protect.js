import { Navigate } from "react-router-dom";
export default function Protected(props) {
  const accessToken = localStorage.getItem("accessToken");
  const role = localStorage.getItem("role");
  if (!accessToken || role !== "Admin") {
    return <Navigate to={"/login"} />;
  }
  return props.children;
}
