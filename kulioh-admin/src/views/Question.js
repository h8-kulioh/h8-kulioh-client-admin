import { useState } from "react";
import { useSelector } from "react-redux";
import CreateQuestion from "../components/CreateQuestion";
import Sidebar from "../components/Sidebar";
import TableQuestion from "../components/TableQuestion";

export default function Question() {
  const questions = useSelector((state) => state.questions.questions);
  const [getNavigate, setNavigate] = useState(true);
  return (
    <div className="d-flex" id="question">
      <Sidebar />
      {getNavigate ? (
        <TableQuestion questions={questions} setNavigate={setNavigate} />
      ) : (
        <CreateQuestion setNavigate={setNavigate} />
      )}
    </div>
  );
}
