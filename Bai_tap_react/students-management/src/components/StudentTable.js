export default function StudentTable({ students, onEdit, onDelete }) {
  return (
    <table className="table table-bordered">
      <thead className="table-dark">
        <tr>
          <th>MSV</th>
          <th>Họ và tên</th>
          <th>Email</th>
          <th>Điện thoại</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {students.length === 0 && (
          <tr>
            <td colSpan="5" className="text-center">Chưa có sinh viên nào</td>
          </tr>
        )}
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.msv}</td>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.phone}</td>
            <td>
              <button
                className="btn btn-sm btn-warning me-2"
                onClick={() => onEdit(student)}
              >
                Sửa
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => onDelete(student.id)}
              >
                Xóa
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
