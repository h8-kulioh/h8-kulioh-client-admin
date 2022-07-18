export default function Table({ type }) {
  return (
    <div>
      <p>List Question {type}</p>
      <table
        className="table"
        style={{ width: "85%", margin: "auto", marginRight: "50px" }}
      >
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
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
