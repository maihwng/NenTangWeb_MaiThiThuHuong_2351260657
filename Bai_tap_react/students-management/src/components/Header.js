export default function Header() {
  return (
    <div class= "d-flex justify-content-between rounded shadow-lg p-3 mb-3" >
      <div class="d-flex align-items-center">
        <h1>TLU </h1>
        <h4 class="text-secondary px-3">Trang chủ</h4>
        <h4>Quản lý sinh viên</h4>
      </div>
      <div class="d-flex align-items-center">
        <input type="text" placeholder="Nhap noi dung tim kiem" class="rounded "/>
        <button class="btn btn-outline-primary ms-2 me-3">Tìm kiếm</button>
      </div>
    </div>
  );
}
