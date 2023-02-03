const calsTips = function (bill) {
    return bill >= 50 & bill <= 300 ? bill * 0.15 : bill * 0.20;
}

const bills = [10, 240, 380];
const result = [calsTips(bills[0]), calsTips(bills[1]), calsTips(bills[2])];
console.log(bills, result);
