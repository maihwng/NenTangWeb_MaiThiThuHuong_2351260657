import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function StudentFormModal({ show, onClose, onSave, student }) {
  const [formData, setFormData] = useState({
    name: "",
    msv: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (student) {
      setFormData({ ...student });
    } else {
      setFormData({ name: "", msv: "", email: "", phone: "" });
    }
    setErrors({});
  }, [student]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.msv.trim()) {
      newErrors.msv = "Mã sinh viên không được để trống";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Họ và tên không được để trống";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email không được để trống";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Email không hợp lệ";
      }
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Số điện thoại không được để trống";
    } else {
      const phoneRegex = /^0\d{9}$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = "Số điện thoại phải là 10 số và bắt đầu bằng số 0";
      }
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    onSave(formData);

    // Nếu là thêm mới thì reset form để nhập tiếp
    if (!student) {
      setFormData({ name: "", msv: "", email: "", phone: "" });
    }
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{student ? "Sửa sinh viên" : "Thêm sinh viên"}</Modal.Title>
      </Modal.Header>
      <Form noValidate onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="msv">
            <Form.Label>Mã sinh viên</Form.Label>
            <Form.Control
              type="text"
              name="msv"
              value={formData.msv}
              onChange={handleChange}
              isInvalid={!!errors.msv}
            />
            <Form.Control.Feedback type="invalid">
              {errors.msv}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Họ và tên</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Điện thoại</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              isInvalid={!!errors.phone}
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone}
            </Form.Control.Feedback>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Đóng
          </Button>
          <Button variant="primary" type="submit">
            {student ? "Lưu" : "Thêm"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
