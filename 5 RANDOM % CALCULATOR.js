var nameYou = prompt("Your Name");
var nameHer = prompt ("Their name");

var n = Math.random() * 100;
n = Math.floor(n) + 1;

if (n > 70) {
alert(nameYou + " + " + nameHer + ": " + "Your love has " + n + " % " + "ONE" );
}

if (n > 30 && n <= 70) {
alert(nameYou + " + " + nameHer + ": " + "Your love has " + n + " % " + "TWO" );
}

if (n <= 30) {
alert(nameYou + " + " + nameHer + ": " + "Your love has " + n + " % " + "THREE" );
}
