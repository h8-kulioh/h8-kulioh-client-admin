export default function CreateQuestion({ setNavigate }) {
  const submitQuestion = (e) => {
    e.preventDefault();
    for (let key in e.target) {
      if (!isNaN(key)) {
      }
    }
    console.log(e.target[0].value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => setNavigate(true)} className="btn">
        Back
      </button>
      <div style={{ marginLeft: "20px", position: "relative" }}>
        <div>
          <h3>Upload your question and Answer</h3>
          <p>Must be format .xlsx</p>
          <form onSubmit={(e) => submitQuestion(e)}>
            <div>
              <label>Question</label>
              <br />
              <input
                type="file"
                accept=".xlsx"
                name="question"
                className="input"
              />
            </div>
            <br />
            <div>
              <label>Answer</label>
              <br />
              <input
                type="file"
                accept=".xlsx"
                name="answer"
                className="input"
              />
            </div>
            <br />
            <button type="submit" className="btn btn-question">
              Upload
            </button>
          </form>
        </div>
      </div>
      <div className="img-header">
        <p>Example format question</p>
        <img src="format/question.png" alt="" />
      </div>
      <div style={{ float: "right" }}>
        <a href="sample/dailyQuestions.xlsx" download>
          Download sample here!
          <i class="bx bxs-download"></i>
        </a>
      </div>
      <div className="answer">
        <p>Example format answer</p>
        <img src="format/answer.png" alt="" />
        <a href="sample/daily Answer.xlsx">Download sample here!</a>
      </div>
    </div>
  );
}
