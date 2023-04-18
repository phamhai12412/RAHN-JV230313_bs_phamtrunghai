let thang = +prompt("nhập vào tháng bạn muốn tra");
let nam = +prompt("nhập vào năm bạn muốn tra");
if (thang >= 1 && thang <= 12) {
  switch (thang) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      {
        alert(`tháng và năm bạn vừa nhập có số ngày là:31`);
      }
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      {
        alert(`tháng và năm bạn vừa nhập có số ngày là:30`);
      }
      break;

    case 2: {
      if (nam % 400 == 0 || (nam % 4 == 0 && nam % 100 != 0)) {
        // nam nhuan
        //số ngày 29
        alert(`tháng và năm bạn vừa nhập có số ngày là:29`);
      } else {
        alert(`tháng và năm bạn vừa nhập có số ngày là:28`);
      }
      break;
    }
  }
} else {
  alert("bạn đã nhập sai dữ liệu");
}
