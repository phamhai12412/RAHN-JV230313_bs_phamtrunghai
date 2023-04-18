//tạo một mảng gồm các số nguyên ngẫu nhiên, số lượng số nguyên đc tạo ra theo ý thích người dùng
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
  alert(`mảng bạn vừa đc tạo ngẫu nhiên là:${arr}`);
  let max = arr[0];
  for (let j = 0; j < arr.length; j++) {
    if (max < arr[j]) {
      max = arr[j];
    }
  }
  alert(`mảng vừa đc tạo ngẫu nhiên có số lớn nhất là:${max}`);
  console.log(max);
}
