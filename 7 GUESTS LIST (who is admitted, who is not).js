var guestList = ["Ilya", "Jenny", "Pam", "Angela", "Jason", "Lara", ];

var guestName = prompt("What is Your name?");

if (guestList.includes(guestName)) {
    alert("Welcome!");
} else {
    alert("No, maybe next time");
}
