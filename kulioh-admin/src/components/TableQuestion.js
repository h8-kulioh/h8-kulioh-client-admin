export default function TableQuestion({ questions, setNavigate }) {
  return (
    <div style={{ width: "80%" }}>
      <div style={{ margin: "50px" }}>
        <button
          onClick={() => setNavigate(false)}
          className="btn btn-success"
          style={{ width: "300px" }}
        >
          Create Question and Answer
        </button>
        <br />
        <br />
        <p>List table question weekly</p>
      </div>
      <table class="table" style={{ width: "85%", margin: "auto" }}>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Question</th>
            <th scope="col">Answer</th>
            <th scope="col">Created</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
