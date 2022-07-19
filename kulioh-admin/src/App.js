import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import User from "./views/User";
import Question from "./views/Question";
import Login from "./views/Login";
function App() {
  return (
    <div className="App">
      <Routes>
        {<Route path="/login" element={<Login />} />}
        {<Route path="/" element={<Dashboard />} />}
        {<Route path="/users" element={<User />} />}
        {<Route path="/question" element={<Question />} />}
      </Routes>
    </div>
  );
}

export default App;
