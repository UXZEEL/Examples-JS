function add(num1, num2) {
    return num1 + num2;
}

function multi(num1, num2) {
    return num1 * num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}


// Вывод функции
calculator(45, 51, multi);
