document.getElementById("btnTinhLuong").addEventListener("click", e => {
    e.preventDefault();
    let maNV = document.getElementById("maNV").value;
    let tenNV = document.getElementById("hoTen").value;
    let chucVu = document.getElementById("chucVu").value;
    let heSo = document.getElementById("heSo").value;
    let luongCB = document.getElementById("luongCB").value;

    let nv = new NhanVien(maNV, tenNV, chucVu, heSo, luongCB);
    document.getElementById("info-list").innerHTML = `
        <ul>
            <li>Mã nhân viên: ${nv.maNV}</li>
            <li>Tên nhân viên: ${nv.hoTen}</li>
            <li>Chức vụ: ${nv.chucVu}</li>
            <li>Tổng lương: ${new Intl.NumberFormat('vi-VN').format(nv.tongLuong)}</li>
        </ul>
    `;
});