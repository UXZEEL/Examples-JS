function whoPay(names) {
    names = ["Ilya", "Jenny", "Pam", "Angela", "Jason", "Lara"];
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to buy lunch today!"
}


whoPay();
