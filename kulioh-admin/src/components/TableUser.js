export default function TableUser({ setNavigate }) {
  return (
    <div style={{ width: "80%" }}>
      <div style={{ margin: "20px" }}>
        <h3>List User</h3>
        <button
          className="btn btn-success"
          style={{ width: "300px", marginBottom: "20px" }}
          onClick={() => setNavigate(false)}
        >
          Register Admin
        </button>
      </div>
      <table
        class="table"
        style={{ width: "85%", margin: "auto", marginTop: "20px" }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Admin</td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
