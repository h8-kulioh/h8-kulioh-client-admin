import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./views/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        {
          <Route path="/" element={<Dashboard />}>
            <Route path="register-admin" />
          </Route>
        }
      </Routes>
    </div>
  );
}

export default App;
