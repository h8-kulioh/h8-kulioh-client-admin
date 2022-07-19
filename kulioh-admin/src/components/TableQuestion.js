import Table from "./Table";

export default function TableQuestion({ questions, setNavigate }) {
  return (
    <div className="container">
      <div style={{ width: "80%" }} className="table-question">
        <div style={{ margin: "10px" }}>
          <button
            onClick={() => setNavigate(false)}
            className="btn"
            style={{ width: "300px" }}
          >
            Create Question and Answer
          </button>
          <br />
          <br />
        </div>
        <div className="d-flex">
          <Table type={"Daily"} />
          <Table type={"Weekly"} />
        </div>
      </div>
    </div>
  );
}
