import { useSelector } from "react-redux";
import "./table.css";
import Swal from "sweetalert2";
export default function Table({ type, changeDate, findQuestion }) {
  const daily = useSelector((state) => state.questionsDaily.questionsDaily);
  const weekly = useSelector((state) => state.questionWeekly.questionsWeekly);
  return (
    <div className="table-box">
      <div className="title">
        <p>List Question {type}</p>
        {type === "Weekly" ? (
          <form onSubmit={(e) => findQuestion(e)}>
            <input type="date" onChange={changeDate} />
            <button type="sumbit">
              <i className="bx bx-search"></i>{" "}
            </button>
          </form>
        ) : (
          ""
        )}
      </div>
      <table className="table" style={{ margin: "auto", marginRight: "10px" }}>
        <thead>
          <tr>
            <th scope="col">Subject</th>
            <th scope="col">Question</th>
            <th scope="col">Created</th>
          </tr>
        </thead>
        <tbody>
          {type === "Daily" ? (
            daily.map((el, i) => (
              <tr key={i}>
                <th scope="row">{el.subject}</th>
                <td>
                  {el.question.length > 100
                    ? el.question.slice(0, 100) + "..."
                    : el.question}
                </td>
                <td>{el.createdAt}</td>
              </tr>
            ))
          ) : weekly.length > 0 ? (
            weekly.map((el, i) => (
              <tr key={i}>
                <th scope="row">{el.subject}</th>
                <td>
                  {el.question.length > 100
                    ? el.question.slice(0, 100) + "..."
                    : el.question}
                </td>
                <td>{el.createdAt}</td>
              </tr>
            ))
          ) : (
            <div className="not_found">
              <h5>EMPTY</h5>
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
}
