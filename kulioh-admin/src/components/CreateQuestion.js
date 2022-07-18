export default function CreateQuestion({ setNavigate, handleCreateQuestion }) {
  return (
    <div id="create-question">
      <div
        style={{ marginLeft: "20px", position: "relative" }}
        className="col-4"
      >
        <a
          href=""
          className="back"
          onClick={(a) => (a.preventDefault(), setNavigate(true))}
        >
          <i class="bx bxs-left-arrow-square"></i>
          Back
        </a>
        <div>
          <h3>Upload your question and Answer</h3>
          <p>Must be format .xlsx</p>
          <form onSubmit={(e) => handleCreateQuestion(e)}>
            <div>
              <label>Input your question and answer</label>
              <br />
              <input
                type="file"
                accept=".xlsx"
                name="question"
                className="input"
              />
            </div>
            <br />
            <br />
            <button type="submit" className="btn btn-question">
              Upload
            </button>
          </form>
        </div>
      </div>
      <div className="img-header col-8" style={{ textAlign: "center" }}>
        <p>Example format question</p>
        <img src="format/weeklyQuestion.png" alt="" />
        <br />
        <a href="sample/weeklyQuestion.xlsx" download>
          Download sample here!
          <i className="bx bxs-download"></i>
        </a>
      </div>
    </div>
  );
}
