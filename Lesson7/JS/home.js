// alert('hello developer in first lesson')

// biến
// * quy tắc đặt tên
// * các kiểu đặt tên: NguyenHuynhDuc ; nguyenHuynhDuc
// * javascript phân biệt hoa thường => N != n

// cú pháp khai báo: 
// <datatype> <name_vari> ;
// <datatype> <name_vari> = <value>;
// str = "developer";
// number: int, float, ...
// string: 
// array, object
// tự định nghĩa: var
var x = 5; // => x có kiểu dữ liệu là số 
var y = "100"; // => y có kiểu dữ liệu là chuỗi 

// Các phép toán với biến
// + - * / %
// *) lưu ý với phép +: 
//      "dev"  +  "java"  = "devjava"
//      1 + 1 = 2
//      1 + "1" = "11"
//      10 + "dev"  = "10dev"

// các phép so sánh: > <  >= <= == ===
// ==   :  chỉ so sánh giá trị    ==>>  100 == "100" : true
// ===  :  ss giá trị + datatype  ==>>  100 === "100" : false

console.log("giá trị của y là: ", y);
console.log("giá trị của x là: ", x);
console.log("giá trị của x là: " + x);


// cấu trúc điều kiện: if else ; switch case
// *) if - else
// phân loại: if thiếu, if đầy đủ, if lồng
if(x == y){
    // thân if
    console.log("giá trị của x trùng với y đều bằng ", y);
} else{
    console.log("x = " + x + " khác so với y = " + y);
}

// biện luận số nghiệm của phương trình bậc nhất 1 ẩn 
// có dạng a*x + b = 0 với mọi a; log ra màn hình số nghiệm của pt
// var a = 5;
// var b = 10;

// a = 0 => 0*x + b = 0 => b = 0  ==> vô số nghiệm
//                          b != 0 ==> vô  nghiệm
// a!= 0 => a*x + b = 0 => x = -b/a  ==> có 1 nghiệm

var a=1;
var b =2;
var c=1;
// debugger;
if(a == 0){
    if(b == 0){
        console.log("phương trình có vô số nghiệm");
    }else{
        console.log("phương trình có vô nghiệm");
    }
}else{
    console.log("phương trình có 1 nghiệm là: x = ", -b/a);
}

// BTVN1: biện luận số nghiệm của phương trình bậc hai 1 ẩn 
// có dạng a*x^2 + b*x +c = 0 với mọi a, b, c; log ra màn hình số nghiệm của pt

var delta = b*2 - 4*a*c;
if(delta <0)
{
    console.log("Phương trình vô nghiệm");
        
} 
if(delta=0)
    {
        console.log("Phương trình có nghiệm kép : "+ -b/(2*a));
    }else{
        console.log("Phương trình có nghiệm X1 :" + ((-b)-Math.sqrt(delta))/(2*a) +" và  X2:" +((-b)+Math.sqrt(delta))/(2*a) );
    }


// vòng lặp: for ; while
// cú pháp: 
// for( khởi tạo biến đếm ; điều kiện ; hành động){
//      ... thân for: các câu lệnh JS
//}
// b1: khởi tạo biến đếm
// b2: kiểm tra điều kiện
//      true: 2.1 thực thi thân for
//            2.2 thực thi hành động
//            2.3 quay lại đầu b2
//      false: dừng vòng lặp
console.log(1)
console.log(2)
console.log(3)
console.log(4)
for(let i = 1; i <= 10; i++){
    console.log(i);
    // if(i == 4) return;
}

// log ra màn hình f12 tất cả các số lẻ từ 0 => 15
for(let i = 0; i <= 15; i++){
   if( i%2 != 0) console.log(i);  
}   

// log ra màn hình f12 tất cả các số chia hết cho 5 trong tập hợp [1 ; 100] 
for(let i = 1; i <= 100; i++){
    if( i%5 == 0) console.log(i);  
 } 

 // 1 3 8 9 150 84 8452 545 

 // mảng: array
 // khái niệm:  tập hợp các phần tử vd [1 , 2 , 3, "dev", "java"]
 //             mỗi phần tử đc đánh 1 giá trị index tương ứng bắt đầu từ 0 => lenght - 1
 // khai báo: 2 cách 
 var array2 = [1 , 2 , 3 , 4 , 5 , 6 , "dev"];
 // cách sử dụng - các tương tác: 
 array2[3];


// log ra màn hình f12 tất cả các số chẵn trong array2

for(let i = 0; i <= array2.length - 1; i++){
    if( array2[i] % 2 == 0) 
        console.log(array2[i]);  
 } 

 var arr = [1 , 5, 9 ,100, 55, 88, 99, 66 ,7, 4];
// log ra màn hình f12 tất cả các phần tử thỏa mãn điều kiện có giá trị nhỏ hơn 100
for(let i = 0; i < arr.length; i++){
    if( arr[i] < 80) 
        console.log("phần tử thứ " + i + " có giá trị là " + arr[i] + " nhỏ hơn 80");  
 } 

 var array = [1 , 5, 9 ,100, 55, 88, 99, 66 ,7, 4, 8 , 99, 77, 88, 77, 55, 11, 22, 66];
 //BTVN2: log ra màn hình số lần xuất hiện của phần tử có giá trị là 66
 // > phần tử 66 có 2 lần xuất hiện
 var dem =0;
for(let i=0;i<array.length;i++)
{
    if(array[i]==66)
        {
            dem++;
        }
        
}
console.log("Phần tử 66 có lần xuất hiện là :"+dem);

  //BTVN3: log ra màn hình số lần xuất hiện của mỗi phần tử có giá trị khác nhau 
 // > phần tử có giá trị là 1 xuất hiện 1 lần
 //  > phần tử có giá trị là 5 xuất hiện 1 lần
 // > phần tử có giá trị là 55 xuất hiện 2 lần
 var size=0;
 var countOccurrences = {};
 for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (countOccurrences[element] === undefined) {
      countOccurrences[element] = 1;
    } else {
      countOccurrences[element]++;
    }
  }
  
  // Log ra màn hình số lần xuất hiện của mỗi phần tử
  for (var key in countOccurrences) {
    console.log("Phần tử " + key + " xuất hiện " + countOccurrences[key] + " lần");
  }

