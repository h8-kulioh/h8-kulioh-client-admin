import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Sidebar from "../components/Sidebar";
import { questionDaily } from "../store/actions";
export default function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(questionDaily());
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
