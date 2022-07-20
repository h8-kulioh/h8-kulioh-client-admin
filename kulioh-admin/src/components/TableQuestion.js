import { useState } from "react";
import { useDispatch } from "react-redux";
import { questionWeekly } from "../store/actions";
import Table from "./Table";
import "./tableQuestion.css";

export default function TableQuestion({ questions, setNavigate }) {
  const [date, setDate] = useState("");
  const [nav, setNav] = useState(true);
  const dispatch = useDispatch();
  const changeDate = (e) => {
    setDate(e.target.value);
  };
  const findQuestion = (e) => {
    e.preventDefault();
    dispatch(questionWeekly(date));
  };
  return (
    <div>
      <div style={{ width: "80%" }} className="table-question">
        <div style={{ margin: "10px" }}>
          <button
            onClick={() => setNavigate(false)}
            className="btn btn-question"
            style={{ width: "300px" }}
          >
            Create Question and Answer
          </button>
          <br />
          <br />
          <div className="button">
            <button onClick={(e) => (e.preventDefault(), setNav(true))}>
              Daily
            </button>
            <button onClick={(e) => (e.preventDefault(), setNav(false))}>
              Weekly
            </button>
          </div>
          <br />
        </div>
        {nav ? (
          <div>
            <Table type={"Daily"} />
          </div>
        ) : (
          <div>
            <Table
              type={"Weekly"}
              changeDate={changeDate}
              findQuestion={findQuestion}
            />
          </div>
        )}
      </div>
    </div>
  );
}
