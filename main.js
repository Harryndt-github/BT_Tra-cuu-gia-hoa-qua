
let hoaQua = document.getElementById('hoaQua'),
btn = document.getElementById('btn'),
display = document.getElementById('p1');

let price2 = '20000 VNĐ/kg',
price3 = '30000 VNĐ/kg',
price4 = '40000 VNĐ/kg',
price5 = '50000 VNĐ/kg';


btn.onclick = function check() {
switch (hoaQua.value) {
    case 'Ổi':
    case 'Dưa Hấu':
        display.innerHTML = price2;
        break;

    case 'Táo':
    case 'Xoài':
        display.innerHTML = price3;
        break;

    case 'Cam':
    case 'Chôm Chôm':
        display.innerHTML = price4;
        break;

    case 'Măng Cụt':
        display.innerHTML = price5;
}
}