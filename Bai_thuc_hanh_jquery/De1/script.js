// script.js
$(document).ready(function () {
  // Load dữ liệu từ file data.js
  function renderTable() {
    let rows = "";
    employeeData.forEach((emp, index) => {
      rows += `
        <tr>
          <td><input type="checkbox"></td>
          <td>${emp.name}</td>
          <td>${emp.email}</td>
          <td>${emp.address}</td>
          <td>${emp.phone}</td>
          <td>
            <i class="bi bi-pencil text-warning"></i>
            <i class="bi bi-trash text-danger ms-2"></i>
          </td>
        </tr>
      `;
    });
    $("#employeeTable").html(rows);
  }

  renderTable();

  // Hiển thị modal khi click Add
  $("#btnAdd").click(function () {
    $("#employeeForm")[0].reset();
    $(".text-danger").text("");
    new bootstrap.Modal($("#employeeModal")).show();
  });

  // Validate form khi submit
  $("#employeeForm").submit(function (e) {
    e.preventDefault();
    let isValid = true;

    const name = $("[name='name']").val().trim();
    const email = $("[name='email']").val().trim();
    const address = $("[name='address']").val().trim();
    const phone = $("[name='phone']").val().trim();

    $(".text-danger").text("");

    if (name === "") {
      $("#errorName").text("Name is required");
      isValid = false;
    }

    if (email === "") {
      $("#errorEmail").text("Email is required");
      isValid = false;
    }

    if (address === "") {
      $("#errorAddress").text("Address is required");
      isValid = false;
    }

    if (!/^0\d{9}$/.test(phone)) {
      $("#errorPhone").text("Phone must start with 0 and be 10 digits");
      isValid = false;
    }

    if (isValid) {
      employeeData.push({ name, email, address, phone });
      renderTable();
      bootstrap.Modal.getInstance(document.getElementById("employeeModal")).hide();
    }
  });
});
