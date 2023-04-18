//nhập vào chuỗi kí tự
let n = prompt("mời bạn nhập vào chuỗi kí tự");
//sử lý loại bỏ khoảng trắng 2 đầu
n = n.trim();
// console.log(n);
let a = [];
a = n.split(" ");
// console.log(a);
//tạo mảng mới loại bỏ khoảng trắng dư ở giữa
let b = [];
for (let i = 0; i < a.length; i++) {
  if (a[i] != "") {
    b.push(a[i]);
  }
}
// console.log(b);
//viét hoa chữ đầu
for (i = 0; i < b.length; i++) {
  b[i] = b[i][0].toUpperCase() + b[i].slice(1).toLowerCase();
  //   console.log(b[i]);
}
let kq = b.join(" ");
console.log("chuỗi sau khi đã thực hiện đã được chuẩn hóa:", kq);
