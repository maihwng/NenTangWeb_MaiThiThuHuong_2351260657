import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import StudentFormModal from "./components/StudentFormModal";

export default function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Nguyễn Văn A",
      msv: "B12345",
      email: "a@example.com",
      phone: "0123456789",
    },
    {
      id: 2,
      name: "Trần Thị B",
      msv: "B54321",
      email: "b@example.com",
      phone: "0987654321",
    },
  ]);


  const [showModal, setShowModal] = useState(false);

  const [editingStudent, setEditingStudent] = useState(null);

  const handleAdd = () => {
    setEditingStudent(null);
    setShowModal(true);
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
    setShowModal(true);
  };

  // Xóa sinh viên
  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa?")) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };


  const handleSave = (student) => {
    if (student.id) {
      // Sửa
      setStudents(students.map((s) => (s.id === student.id ? student : s)));
    } else {
      // Thêm mới
      student.id = Date.now();
      setStudents([...students, student]);
    }
    setShowModal(false);
  };

  return (
    <div className="container mt-4">
      <Header />
      <div class="d-flex justify-content-between align-items-center mb-3 bg-light p-3">
        <div>
          <h2>Quản lý sinh viên</h2>
        </div>
        <div>
          <button className="btn btn-primary mb-3" onClick={handleAdd}>
            Thêm sinh viên
          </button>
        </div>

      </div>
      <StudentTable
        students={students}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <StudentFormModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSave}
        student={editingStudent}
      />
    </div>
  );
}
