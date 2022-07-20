import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import User from "./views/User";
import Question from "./views/Question";
import Login from "./views/Login";
import Protected from "./protected/protect";
function App() {
  return (
    <div className="App">
      <Routes>
        {<Route path="/login" element={<Login />} />}
        {
          <Route
            path="/"
            element={
              <Protected>
                <Question />
              </Protected>
            }
          />
        }
        {
          <Route
            path="/users"
            element={
              <Protected>
                <User />
              </Protected>
            }
          />
        }
        {
          <Route
            path="/question"
            element={
              <Protected>
                <Question />
              </Protected>
            }
          />
        }
      </Routes>
    </div>
  );
}

export default App;
