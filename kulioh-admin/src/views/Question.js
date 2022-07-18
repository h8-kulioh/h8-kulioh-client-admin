import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateQuestion from "../components/CreateQuestion";
import Sidebar from "../components/Sidebar";
import TableQuestion from "../components/TableQuestion";
import { createQuestion } from "../store/actions";
import * as XLSX from "xlsx";

export default function Question() {
  // const questions = useSelector((state) => state.questions.questions);
  const dispatch = useDispatch();
  const [getNavigate, setNavigate] = useState(true);
  const handleCreateQuestion = (e) => {
    e.preventDefault();
    const files = e.target[0].files;

    if (files.length === 0) {
      alert("Please choose any file...");
      return;
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
    try {
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
        dispatch(createQuestion(result));
      };
    } catch (e) {
      console.error("ERROR", e);
    }
  }
  return (
    <div className="d-flex" id="question">
      <Sidebar />
      {getNavigate ? (
        <TableQuestion setNavigate={setNavigate} />
      ) : (
        <CreateQuestion
          setNavigate={setNavigate}
          handleCreateQuestion={handleCreateQuestion}
        />
      )}
    </div>
  );
}
