// Script to validate form and populate table
const form = document.getElementById("addEmployeeForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  event.stopPropagation();
  
  if (form.checkValidity()) {
    console.log("Form is valid, proceed with submission");
    form.reset();
     form.classList.remove("was-validated"); ////
    bootstrap.Modal.getInstance(
      document.getElementById("addEmployeeModal")
    ).hide();
  } else {
    form.classList.add("was-validated");
  }
});

// Function to populate employee table
function populateEmployeeTable() {
  const tbody = document.getElementById("employeeTableBody");
  tbody.innerHTML = ""; // Clear existing rows

//  Assuming 'data' is the array from data.js
  data.forEach((employee, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.email}</td>
            <td>${employee.phone}</td>
            <td>${employee.course}</td>
            <td>
              <button class="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  class="bi bi-pencil-square text-warning"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                  />
                </svg>
              </button>
              <button
                class="btn"
                onclick="return confirm('Bạn có chắc chắn muốn xóa nhân viên này?')"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  class="bi bi-trash text-danger"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
                  />
                  <path
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
                  />
                </svg>
              </button>
            </td>
          `;
    tbody.appendChild(row);
  });

  // Update record count display
  document.getElementById(
    "recordCount"
  ).textContent = `Hiển thị ${data.length}/${data.length} bản ghi`;
}

// Call the function after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", populateEmployeeTable);
