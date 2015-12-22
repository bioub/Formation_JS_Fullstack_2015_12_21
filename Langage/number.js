

var nb = 2;
console.log(typeof nb + ' : ' + nb); // number

var nb = 2 / 0;
console.log(typeof nb + ' : ' + nb); // number
console.log(isFinite(nb)); // number

var nb = undefined + undefined;
console.log(isNaN(nb)); // number