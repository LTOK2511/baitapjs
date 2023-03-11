//BÀI TẬP 1: TÍNH LƯƠNG NHÂN VIÊN
//input
const LUONG_1NGAY = 100000;
let tongLuong = (soNgaylam) => {
    let luong = LUONG_1NGAY * soNgaylam
    console.log('Tổng lương =', luong)
    document.getElementById('BT1').innerHTML = luong
}
tongLuong(17)
tongLuong(15)


//BÀI TẬP 2: TÍNH GIÁ TRỊ TRUNG BÌNH 5 SỐ
let trungBinh = (a, b, c, d, e) => {
    let giatri = (a + b + c + d + e)/5
    console.log('Giá trị trung bình =', giatri)
    document.getElementById('BT2').innerHTML = giatri
}
trungBinh(1, 2, 3, 4, 5)
trungBinh(2, 4, 6, 8, 10)


//BÀI TẬP 3: QUY ĐỔI TIỀN
const VND = 23500;
let quyDoi = (USD) => {
    let result = VND * USD
    console.log('Số tiền quy đổi là:', result, 'đồng')
    document.getElementById('BT3').innerHTML = result
}
quyDoi(4)


//BÀI TẬP 4: TÍNH CHU VI VÀ DIỆN TÍCH
let kichThuoc = (dai, rong) => {
    let chuvi = (dai + rong) * 2
    let dientich = dai * rong
    console.log('Chu vi hình chữ nhật là:', chuvi, 'cm')
    console.log('Diện tích hình chữ nhật là:', dientich, 'cm')
    document.getElementById('Chuvi').innerHTML = chuvi
    document.getElementById('Dientich').innerHTML = dientich
}
kichThuoc(4, 6)

//BÀI TẬP 5: TÍNH TỔNG 2 KÝ SỐ
let so = (a) => {
    let hangTram = Math.floor(a /100)
    let hangChuc = Math.floor((a % 100)/10)
    let hangDonVi = (a % 100)%10
    let tongKySo = hangTram + hangChuc + hangDonVi
    console.log('Số cần tính là:', a)
    console.log('Số hàng trăm là:', hangTram)
    console.log('Số hàng chục là', hangChuc)
    console.log('Số hàng đơn vị là', hangDonVi)
    console.log('Tổng ký số là:', tongKySo)
    document.getElementById('hangTram').innerHTML = hangTram
    document.getElementById('hangChuc').innerHTML = hangChuc
    document.getElementById('hangDonVi').innerHTML = hangDonVi
    document.getElementById('tongKySo').innerHTML = tongKySo
}
so(289)