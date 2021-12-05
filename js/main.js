/***
 *  Quy đổi Tiền tệ USD sang VNĐ
 *  Mô Hình Khối
 * 
 * Khối 1
 * Quy đổi tiền tệ USD sang tiền VNĐ
 * 
 * Khối 2
 * B1: Tạo biến , gán giá trị 
 * B2: quy đổi 1 USD = 23.500VNĐ
 * 
 * Khối 3
 * Giá tiền USD=1
 * giá tiền VNĐ=23.500
 */

 
 

 function quydoi(){
    var usD = Number(document.getElementById("inpUSD").value);
    var vnD = 23500 ;
    var quyDoi = usD * vnD ;
    var thanhTien = 0 ;
    

    if(quyDoi > 0 ){
        thanhTien = usD * vnD
    }else{
        alert("số lượng không hợp lệ ");

    }
    document.getElementById("txtdoiDuoc").innerHTML = "<span style='font-size:15px;'>Đổi thành công: </span>"   +(new Intl.NumberFormat('vn-VN', { maximumSignificantDigits: 3 }).format(quyDoi))+ "VND";
 }

 

                    // Tính Chu vi , Diện tích
/***
 *  Bài tập: tính chu vi hình chữ nhật 
 * 
 *  Mô Hình Khối 
 * Khối 1:
 *  Chiều dài hình chữ nhật : chieudai
 *  Chiều rộng hình chữ nhật : chieurong
 * Khối 2:
 *  B1: tạo biến và gán giá trị 
 *  B2: tính chu vi hình chữ nhật 
 *      Diện tích= chiều dài * chiều rộng 
 *      Chu vi = (chiều dài + chiều rộng) *2
 *  Khối 3:
 *  Chu vi hình chữ nhật (m)
 *  Diện tích hình chữ nhật (m2)
 */

 function chuVi(){
     var chieuDai = Number(document.getElementById("inpchieuDai").value);
     var chieuRong = Number(document.getElementById("inpchieuRong").value);
     
     var chuVi = (chieuDai+chieuRong) *2 ;
      var tinhchuVi = 0 ; 
    if (chuVi >0 ){
        tinhchuVi = (chieuDai+chieuRong) * 2 ;
    }
    document.getElementById("tinhDuoc").innerHTML = "<span style='font-size:15px;'>Chu vi là : </span>" +(chuVi)+"m2" ;
 }
 function dienTich(){
    var chieuDai = Number(document.getElementById("inpchieuDai").value);
    var chieuRong = Number(document.getElementById("inpchieuRong").value);
    
    var dienTich = (chieuDai*chieuRong) ;
    var tinhdienTich = 0 ;
    if (dienTich > 0) {
        tinhdienTich = (chieuDai*chieuRong) ;
    }
    document.getElementById("tinhDuoc").innerHTML = "<span style='font-size:15px;'>Diện tích là : </span>" +(dienTich)+"m" ;
 }

                // Tính 2 ký số 
/***
 *  Bài tập : Tính tổng 2 ký số 
 *  Mô Hình khối 
 * Khối 1 : input
 *  number (Số có 2 chữ số )
 * khối 2 : content
 *  B1: tạo biến , gán giá trị 
 *    hc ( hàng chục )
 *    dv ( hàng đơn vị)
 *  B2: 
 *  -lấy số  trong phép chia number/10
 *     hc = Math.floor(number/10)
 *  
 *  -Lấy phần dư hàng đơn vị number%10
 *      dv = number%10
 * Khối 3 : output
 *  Tổng 2 chữ số của number
 * 
 *  96 ==> 9 + 6 = 15
 *   
 *  
 */

function ocTong(){
    var num = Number(document.getElementById("inpNumber").value);

    var hangChuc = Math.floor(num / 10) ;
    var hangdonVi = num % 10 ;
    
    
        var tong2so = hangChuc + hangdonVi ;
    
    document.getElementById("pTong").innerHTML = "<span style='font-size:15px;'>Tổng của 2 số là : </span>" +(tong2so);
    
}