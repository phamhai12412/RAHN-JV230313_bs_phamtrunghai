//tạo một mảng gồm các số nguyên ngẫu nhiên, số lượng số nguyên đc tạo ra theo ý thích người dùng

function taoarr() {
  let input = +prompt(
    "bạn muốn tạo một mảng ngẫu nhiên gồm bao nhiêu số nguyên:"
  );
  if (input < 1 || !Number.isInteger(input)) {
    alert("bạn mảng của bạn ít nhất phải có 1 số nguyên");
  } else {
    let arr = [];
    for (let i = 0; i < input; i++) {
      arr[i] = Math.floor(Math.random() * 100);
    }
    return arr;
  }
}
//thật toán sắp xếp ko dùng hàm sort:
//khi dùng hàm sort
let arr = taoarr();
console.log(`mảng bạn vừa đc tạo ngẫu nhiên là:${arr}`);
console.log("mảng sau khi được sắp xếp giảm dần bàng hàm sort là:");
console.log(arr.sort((a, b) => b - a));
//thật toán sắp xếp ko dùng hàm sort:
alert("tiếp theo là thuật toán xử lý ko dùng hàm sort");
let a = taoarr();
console.log(`mảng bạn vừa đc tạo ngẫu nhiên là:${a}`);
let trunggian = 0;
for (i = 0; i < a.length - 1; i++) {
  for (let j = i+1; j < a.length; j++) {
    if (a[i] < a[j]) {
      trunggian = a[i];
      a[i] = a[j];
      a[j] = trunggian;
    }
  }
}
console.log("mảng sau khi được sắp xếp giảm dần không sử dụng hàm sort là:", a);
