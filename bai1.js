let tienVay = Number(prompt("Nhập số tiền vay (VNĐ): "));
let laiSuat = Number(prompt("Nhập lãi suất hàng năm (%): "));
let soNam = Number(prompt("Nhập số năm vay (n): "));

let tienLai = tienVay * (laiSuat / 100) * soNam;
let tongTien = tienVay + tienLai;

alert("Tổng số tiền phải trả sau " + soNam + " năm là: " + tongTien);
