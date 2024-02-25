var a = +prompt("maths marks");
var b = +prompt("islamiyat marks");
var c = +prompt("urdu marks");
var d = +prompt("english marks");
var e = +prompt("biology marks");

var total = a + b + c + d + e;
var per = total / 500 * 100;

console.log(per);

if (per >= 90) {
	console.log("A Grade")
}
else if (per >= 80) {
	console.log("B Grade")
} 
else if (per >= 70) {
	console.log("C Grade")
} 
else if (per >= 60) {
	console.log("D Grade")
} 
else if (per >= 50) {
	console.log("E Grade")
} 
else {
	console.log("FAIL")
}

