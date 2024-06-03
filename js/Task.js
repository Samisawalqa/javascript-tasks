console.log("Task 1")
let cash = 1000;
let current = 500;
let ratio = cash / current;
console.log("ratio is: " + ratio);

let rev = 1000;
let exp = 500;
let netIncome = rev - exp;
console.log("Net income: " + netIncome);

let liab = 1000;
let equ = 500;
let totalAssets = liab + equ;
console.log("Total assets is:" + totalAssets);

console.log("Net income is: " + 1000 * 500);

console.log("Average: " + (7 + 9 + 2) / 3);

console.log("Discount: " + (150 - 150 * 30 / 100));

console.log("Age limit: " + (20 > 18 && 20 < 30));

console.log("Exponential is: " + (Math.pow(2, 3)));

console.log("Remainder: " + (10 % 4))



console.log("Task 2")

console.log(typeof (100));
console.log(typeof (73.9));
console.log(typeof (NaN));
console.log(typeof ("Water"));
console.log(typeof (false));
console.log(typeof (9 != 11));
console.log("Orange" + "e");
console.log("Orange" - "s");
console.log("4" + "8");
console.log("name" + "3");
console.log(82 * "word");
console.log(1 + "hello");
console.log("hello" + 1);
console.log(1 + true);
console.log("hello" + true);
console.log(typeof (Infinity));
console.log(1 == '1');
console.log(1 === '1');


console.log("Task 3")

let wto = "Welcome to Orange";

console.log(wto.toUpperCase());
console.log(wto.toUpperCase().substring(8, 10));
console.log(wto.replace("to", "from"));
console.log(wto.toLowerCase());
console.log(wto.length);
console.log(wto.slice(0, 11) + '"' + wto.slice(11) + '"');
console.log(wto + " Jordan");



console.log("Task 4")
console.log('alert("Welcome")')

alert("Welcome")


console.log("Task 5")
console.log("50 declaration")


var myName = "sami";
var myAge = 2024 - 1998;
var grociry = ["tomato", "milk", "orange juice"]
var sport = {
    soccer: "100 hours",
    swim: "40 hours",
    jugging: "64 hours",
}
var animels = ["cat", "dog", "bird", "lion", "whale"];




console.log("Task 6");

console.log("scope differences between (let) and (var)");
var a;
let b;

var c;
let d;


function testScoped() {
    var a = "var1";
    let b = "let1";

    if (myAge > 18) {
        var c = "var2";
        let d = "let2";
        console.log(a, b, c, d);
    }

    console.log(a, b, c, d);
}
testScoped()
console.log(a, b, c, d);


console.log("Task 7");

var p = 125;
var k = 200;

console.log("1.	Arithmetic Operations");
console.log(k + p);
console.log(k - p);
console.log(k * p);
console.log(k / p);
console.log(k % p);
console.log("2.	Comparison Operations:");
console.log(k > p);
console.log(k < p);
console.log(k == p);
console.log(k != p);
console.log(k >= p);
console.log(k <= p);
console.log("3.	Logical Operations:");
var x = true
var y = false
console.log("AND(&&)" + x && y);
console.log("OR(||)" + x && y);
console.log("NOT(!)" + " x is true but with (!) its: " + !x + ". y is true but with (!) its: " + !y);
console.log("4.	Assignment Operations:");
var v = 10;
console.log(v += 5);
console.log(v -= 5);
console.log(v *= 2);


console.log("Task 8");

let html = document.getElementById("innerhtml").innerHTML;

console.log(html);

document.write("Hello World!");
window.alert("Hello World!");
console.log("Hellow World!") 