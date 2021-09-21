function bmiCalculator (weight, height) {
    var bmi = Math.round (weight / (Math.pow(height, 2)));
    return bmi;
}

if (bmi < 18.5) {
    alert("Your BMI is " + bmi + ", so you are underweight");
}

if (bmi > 18.5 && bmi <= 24.9) {
    alert("Your BMI is " + bmi + ", so you have a normal weight");
}

if (bmi > 24.9) {
    alert("Your BMI is " + bmi + ", so you are overweight");
}

var bmi = bmiCalculator (99, 1.88);
