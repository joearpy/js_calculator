//constants
const STATUS_FIRSTNUM = "firstnum",
    STATUS_OPERAND = "operand",
    STATUS_SECONDNUM = "secondnum",
    STATUS_DONE = "done";

//variables
let number1 = null;
let number2 = null;
let operand = null;
let status = STATUS_FIRSTNUM;

//displays
let displayNumber1 = document.getElementById("displayNumber1");
let displayNumber2 = document.getElementById("displayNumber2");
let displayOperand = document.getElementById("displayOperand");

//numbers
let button0 = document.getElementById("button0");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let button6 = document.getElementById("button6");
let button7 = document.getElementById("button7");
let button8 = document.getElementById("button8");
let button9 = document.getElementById("button9");

//commands
let buttonAdd = document.getElementById("buttonAdd");
let buttonMinus = document.getElementById("buttonMinus");
let buttonTimes = document.getElementById("buttonTimes");
let buttonDivide = document.getElementById("buttonDivide");
let buttonEquals = document.getElementById("buttonEquals");

//subscriptions
button0.addEventListener("click", onNumberClick);
button1.addEventListener("click", onNumberClick);
button2.addEventListener("click", onNumberClick);
button3.addEventListener("click", onNumberClick);
button4.addEventListener("click", onNumberClick);
button5.addEventListener("click", onNumberClick);
button6.addEventListener("click", onNumberClick);
button7.addEventListener("click", onNumberClick);
button8.addEventListener("click", onNumberClick);
button9.addEventListener("click", onNumberClick);

buttonAdd.addEventListener("click", onOperandClick);
buttonMinus.addEventListener("click", onOperandClick);
buttonTimes.addEventListener("click", onOperandClick);
buttonDivide.addEventListener("click", onOperandClick);
buttonEquals.addEventListener("click", onOperandClick);

function onNumberClick() {
    let currentButton = this;
    let currentNumber = +currentButton.innerText;

    switch ( status ) {

        case STATUS_FIRSTNUM:
            setNumber1(number1 * 10 + currentNumber);
            break;

        case STATUS_OPERAND:
            setNumber2(number2 * 10 + currentNumber);
            status = STATUS_SECONDNUM;
            break;

        case STATUS_SECONDNUM:
            setNumber2(number2 * 10 + currentNumber);
            status = STATUS_SECONDNUM;
            break;

        case STATUS_DONE:
            statis = STATUS_FIRSTNUM;
            setNumber1(currentNumber);
            break;
    }
}

function onOperandClick() {
    let currentButton = this;
    let currentOperand = currentButton.innerText;

    switch ( status ) {

        case STATUS_FIRSTNUM:
            if(currentOperand == "=") {
                break;
            }
            setOperand(currentOperand);
            status = STATUS_OPERAND;
            break;

        case STATUS_OPERAND:
            if(currentOperand == "=") {
                break;
            }
            setOperand(currentOperand);
            break;

        case STATUS_SECONDNUM:
            let result = eval(number1 + operand + number2);
            result = Math.round(result * 10000) / 10000;
            setNumber1(result);
            setNumber2(null);
            if(currentOperand == "=") {
                status = STATUS_DONE;
                setOperand(null);
            } else {
                status = STATUS_OPERAND;
                setOperand(currentOperand);
            }

            break;

        case STATUS_DONE:
            status = STATUS_OPERAND;
            setOperand(currentOperand);
            break;
    }
}

function setNumber1 (value) {
    number1 = value;
    displayNumber1.innerText = value;
}

function setNumber2 (value) {
    number2 = value;
    displayNumber2.innerText = value;
}

function setOperand (value) {
    operand = value;
    displayOperand.innerText = value;
}