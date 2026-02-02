let dem = 0;
let login = false;

while (dem < 3) {
  let u = prompt("Nhap ten:");
  let p = prompt("Nhap mk:");

  if (u == "admin" && p == "12345") {
    alert("Dang nhap dung");
    login = true;
    break;
  } else {
    dem++;
    alert("Sai roi (" + dem + "/3)");
  }
}

if (login == false) {
  alert("Khoa tai khoan");
} else {

  let chon = 0;

  while (chon != 5) {
    chon = Number(prompt(
      "MENU\n" +
      "1. phan loai\n" +
      "2. thiet ke\n" +
      "3. Phi bao tri\n" +
      "4. So may man\n" +
      "5. Thoat"
    ));

    if (chon == 1) {
      let tong = 0;
      let chan = 0;
      let le = 0;

      let so = -1;
      while (so != 0) {
        so = Number(prompt("Nhap so (0 dung):"));
        if (so != 0) {
          tong++;
          if (so % 2 == 0) chan++;
          else le++;
        }
      }

      console.log("Tong: " + tong);
      console.log("Chan: " + chan);
      console.log("Le: " + le);
    }

    else if (chon == 2) {
      let n = Number(prompt("Nhap hang:"));
      let m = Number(prompt("Nhap cot:"));

      for (let i = 1; i <= n; i++) {
        let dong = "";
        for (let j = 1; j <= m; j++) {
          dong = dong + "[" + i + "-" + j + "]";
        }
        console.log(dong);
      }
    }

    else if (chon == 3) {
      let sl = Number(prompt("So luong:"));
      let gia = Number(prompt("Gia:"));
      let nam = Number(prompt("Nam:"));

      for (let i = 1; i <= nam; i++) {
        console.log("Nam " + i + ": " + (sl * gia));
        gia = gia * 1.1;
      }
    }

    else if (chon == 4) {
      let n = Number(prompt("Nhap N:"));
      let kq = "";

      for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 != 0) {
          kq = kq + i + " ";
        }
      }

      alert("So may man: " + kq);
    }

    else if (chon == 5) {
      alert("Thoat");
    }

    else {
      alert("Chon sai roi");
    }
  }
}
