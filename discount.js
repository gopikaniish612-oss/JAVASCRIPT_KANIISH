var amount = 10000;

if (amount < 5000) {
    console.log("no discount");
    console.log(amount);
} else if (amount >= 5000 && amount <= 10000) {
    console.log("10% discount");
    var afterdiscount = amount - amount * 0.10;
    console.log(afterdiscount);
} else if (amount >= 10000 && amount <= 20000) {
    console.log("15% discount");
    var afterdisc
 discount = amount - amount * 0.15;
    console.log(afterdiscount);
} else if (amount >= 20000) {
    console.log("20% discount");
    var afterdiscount = amount - amount * 0.20;
    console.log(afterdiscount);
}
