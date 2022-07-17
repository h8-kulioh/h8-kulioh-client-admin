export default function TableUser({ setNavigate }) {
  return (
    <div style={{ width: "80%" }}>
      <table
        class="table"
        style={{ width: "85%", margin: "auto", marginTop: "20px" }}
      >
        <thead>
          <h3>List User</h3>
          <button
            className="btn btn-success"
            style={{ width: "300px", marginBottom: "20px" }}
            onClick={() => setNavigate(false)}
          >
            Register Admin
          </button>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
