const display = document.querySelector('.display');
const allclear = document.getElementById('allclear');
const invertsign = document.getElementById('invertsign');
const percentage = document.getElementById('percentage');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const substract = document.getElementById('substract');
const add = document.getElementById('add');
const equals = document.getElementById('equals');
const point = document.getElementById('point');

const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');


let expression = '0';
let displayexpression = '0';

//Numbers//

zero.addEventListener('click', () => {
    expression = expression + '0';
    displayexpression = displayexpression + '0';
    expression = zeroObliterator(expression);
    displayexpression = zeroObliterator(displayexpression);
    display.textContent = displayexpression;
});

one.addEventListener('click', () => {
    expression = expression + '1';
    displayexpression = displayexpression + '1';
    expression = zeroObliterator(expression);
    displayexpression = zeroObliterator(displayexpression);
    display.textContent = displayexpression;
});

two.addEventListener('click', () => {
    expression = expression + '2';
    displayexpression = displayexpression + '2';
    expression = zeroObliterator(expression);
    displayexpression = zeroObliterator(displayexpression);
    display.textContent = displayexpression;
});

three.addEventListener('click', () => {
    expression = expression + '3';
    displayexpression = displayexpression + '3';
    expression = zeroObliterator(expression);
    displayexpression = zeroObliterator(displayexpression);
    display.textContent = displayexpression;
});

four.addEventListener('click', () => {
    expression = expression + '4';
    displayexpression = displayexpression + '4';
    expression = zeroObliterator(expression);
    displayexpression = zeroObliterator(displayexpression);
    display.textContent = displayexpression;
});

five.addEventListener('click', () => {
    expression = expression + '5';
    displayexpression = displayexpression + '5';
    expression = zeroObliterator(expression);
    displayexpression = zeroObliterator(displayexpression);
    display.textContent = displayexpression;
});

six.addEventListener('click', () => {
    expression = expression + '6';
    displayexpression = displayexpression + '6';
    expression = zeroObliterator(expression);
    displayexpression = zeroObliterator(displayexpression);
    display.textContent = displayexpression;
});

seven.addEventListener('click', () => {
    expression = expression + '7';
    displayexpression = displayexpression + '7';
    expression = zeroObliterator(expression);
    displayexpression = zeroObliterator(displayexpression);
    display.textContent = displayexpression;
});

eight.addEventListener('click', () => {
    expression = expression + '8';
    displayexpression = displayexpression + '8';
    expression = zeroObliterator(expression);
    displayexpression = zeroObliterator(displayexpression);
    display.textContent = displayexpression;
});

nine.addEventListener('click', () => {
    expression = expression + '9';
    displayexpression = displayexpression + '9';
    expression = zeroObliterator(expression);
    displayexpression = zeroObliterator(displayexpression);
    display.textContent = displayexpression;
});





//Functions//

add.addEventListener('click', () => {
    expression = expression + '+';
    displayexpression = displayexpression + '+';
    display.textContent = displayexpression;
});

substract.addEventListener('click', () => {
    expression = expression + '-';
    displayexpression = displayexpression + '-';
    display.textContent = displayexpression;
});

multiply.addEventListener('click', () => {
    expression = expression + '*';
    displayexpression = displayexpression + ' x ';
    display.textContent = displayexpression;
});

divide.addEventListener('click', () => {
    expression = expression + '/';
    displayexpression = displayexpression + '÷';
    display.textContent = displayexpression;
});

percentage.addEventListener('click', () => {
    expression = expression + '/100';
    displayexpression = displayexpression + '%';
    display.textContent = displayexpression;
});

invertsign.addEventListener('click', () => {
    expression = expression + '*(-1)';
    displayexpression = displayexpression + ' x (-1)';
    display.textContent = displayexpression;
});

point.addEventListener('click', () => {
    expression = expression + '.';
    displayexpression = displayexpression + '.';
    display.textContent = displayexpression;
});





//Equals//
equals.addEventListener('click', () => {
    display.textContent = eval(expression);
    expression = display.textContent;
    displayexpression = display.textContent;

    console.log(expression + "   " + typeof (expression));  //Remove after debug
});


//Actions//

allclear.addEventListener('click', () => {
    window.location.reload();
});
