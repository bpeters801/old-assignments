const form = document.calculator

document.getElementById("submitAdd").addEventListener("click", addition);
document.getElementById("submitSubtract").addEventListener("click", subtract);
document.getElementById("submitMultiply").addEventListener("click", multiply);

function addition (e) {
    e.preventDefault();

    const addOne = form.add1.value;
    const addTwo = form.add2.value;
    const sum = parseInt (addOne) + parseInt (addTwo);

    form.add1.value = "";
    form.add2.value = "";

    const newH1 = document.createElement('p');
    newH1.textContent = ("Add = ") + sum;
    document.getElementsByTagName("body")[0].append(newH1)
}

function subtract (e) {
    e.preventDefault();

    const subOne = form.sub1.value;
    const subTwo = form.sub2.value;
    const result = parseInt (subOne) - parseInt (subTwo);

    form.sub1.value = "";
    form.sub2.value = "";

    const newH1 = document.createElement('p');
    newH1.textContent = ("Subtract = ") + result;
    document.getElementsByTagName("body")[0].append(newH1)
}

function multiply (e) {
    e.preventDefault();

    const multiplyOne = form.mult1.value;
    const multiplyTwo = form.mult2.value;
    const answer = parseInt (multiplyOne) * parseInt (multiplyTwo);

    form.mult1.value = "";
    form.mult2.value = "";

    const newH1 = document.createElement('p');
    newH1.textContent = ("Multiply = ") + answer;
    document.getElementsByTagName("body")[0].append(newH1)
}

