import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { fetchQuestion } from "../store/actions";
import { useDispatch } from "react-redux";
export default function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuestion());
  }, []);
  return (
    <div className="d-flex">
      <Sidebar />
      <h1>Dashboard</h1>
      {/* <div className="home_content">
        <div className="text"></div>
      </div> */}
    </div>
  );
}
