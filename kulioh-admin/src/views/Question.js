import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateQuestion from "../components/CreateQuestion";
import Sidebar from "../components/Sidebar";
import TableQuestion from "../components/TableQuestion";
import { createQuestion, questionDaily } from "../store/actions";
import * as XLSX from "xlsx";
import Swal from "sweetalert2";

export default function Question() {
  const questionsDaily = useSelector(
    (state) => state.questionsDaily.questionsDaily
  );
  const [releaseDate, setReleaseDate] = useState({
    releaseDate: "",
  });
  const dispatch = useDispatch();
  const [getNavigate, setNavigate] = useState(true);

  const changeDate = (e) => {
    setReleaseDate({ ...releaseDate, [e.target.name]: e.target.value });
  };
  const handleCreateQuestion = (e) => {
    e.preventDefault();
    const files = e.target[0].files;
    const date = e.target[1].value;
    setReleaseDate({ ...releaseDate, releaseDate: date });
    if (!date) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please input release date!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    if (files.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please input file!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    let filename = files[0].name;
    let extension = filename.substring(filename.lastIndexOf(".")).toUpperCase();
    if (extension === ".XLS" || extension === ".XLSX") {
      excelFileToJSON(files[0]);
    } else {
      alert("Please select a valid excel file.");
    }
  };
  function excelFileToJSON(file) {
    let reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = function (e) {
      let data = e.target.result;
      let workbook = XLSX.read(data, {
        type: "binary",
      });
      let result = {};
      workbook.SheetNames.forEach(function (sheetName) {
        let roa = XLSX.utils.sheet_to_row_object_array(
          workbook.Sheets[sheetName]
        );
        if (roa.length > 0) {
          result[sheetName] = roa;
        }
      });
      dispatch(createQuestion(result, releaseDate));
      Swal.fire({
        icon: "success",
        title: "Success Input",
        showConfirmButton: false,
        timer: 1500,
      });
    };
  }
  useEffect(() => {
    dispatch(questionDaily());
  }, []);
  return (
    <div className="d-flex" id="question">
      <Sidebar />
      {getNavigate ? (
        <TableQuestion setNavigate={setNavigate} data={questionsDaily} />
      ) : (
        <CreateQuestion
          setNavigate={setNavigate}
          handleCreateQuestion={handleCreateQuestion}
          change={changeDate}
        />
      )}
    </div>
  );
}
