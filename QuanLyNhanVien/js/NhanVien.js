class NhanVien {
    constructor(maNV, hoTen, chucVu, heSo, luongCB) {
        this.maNV = maNV;
        this.hoTen = hoTen;
        this.chucVu = chucVu;
        this.heSo = heSo;
        this.luongCB = luongCB;
        this.tongLuong = this.luongCB * this.heSo;
    }
}