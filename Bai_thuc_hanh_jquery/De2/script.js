function validateForm(event) {
  event.preventDefault();

  let isValid = true;

  const khachHang = $("#khachHang");
  const nhanVien = $("#nhanVien");
  const soTien = $("#soTien");

  // Xóa lỗi cũ
  $("#khachHangError").text("");
  $("#nhanVienError").text("");
  $("#soTienError").text("");

  // Kiểm tra KH
  if ($.trim(khachHang.val()) === "") {
    $("#khachHangError").text("Vui lòng nhập tên khách hàng.");
    isValid = false;
  } else if ($.trim(khachHang.val()).length > 30) {
    $("#khachHangError").text("Tên khách hàng không được quá 30 ký tự.");
    isValid = false;
  }

  // Kiểm tra NV
  if ($.trim(nhanVien.val()) === "") {
    $("#nhanVienError").text("Vui lòng nhập tên nhân viên.");
    isValid = false;
  } else if ($.trim(nhanVien.val()).length > 30) {
    $("#nhanVienError").text("Tên nhân viên không được quá 30 ký tự.");
    isValid = false;
  }

  // Kiểm tra số tiền
  const soTienVal = soTien.val();
  if (soTienVal === "") {
    $("#soTienError").text("Vui lòng nhập số tiền.");
    isValid = false;
  } else if (parseFloat(soTienVal) <= 0) {
    $("#soTienError").text("Số tiền phải lớn hơn 0.");
    isValid = false;
  }

  // Nếu hợp lệ thì xử lý
  if (isValid) {
    alert("Dữ liệu hợp lệ. Bạn có thể xử lý tiếp theo tại đây.");

    const modalEl = $("#addTransactionModal")[0];
    const modal = bootstrap.Modal.getInstance(modalEl);
    modal.hide();

    $("#transactionForm")[0].reset();
  }

  return false;
}
