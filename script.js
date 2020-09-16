var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");

// display.textContent = 0;
// for(var i=0;i<buttons.length;i++)
// {
//     console.log(buttons[i]);
// }

var operand1 = 0;
var operand2 = null;
var operator = null;

function isOperator(value) {
    return value == "+" || value == "-" || value == "*" || value == "/" || value == "&" || value == "|" || value == "^" || value == "<<" || value == ">>";
}
function isUniaryOperator(value) {
    return value == "~"||value == "++"||value == "--";
}
function fibo(n) 
{ 
    var a = 0, b = 1, c, i; 
    if( n == 0) 
        return a; 
    for(i = 2; i <= n; i++) 
    { 
       c = a + b; 
       a = b; 
       b = c; 
    } 
    return b; 
}

// console.log(2&3);
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {

        var value = this.getAttribute('data-value');
        var text = display.textContent.trim();

        if (isOperator(value)) {
            operator = value;
            operand1 = parseFloat(text);
            display.textContent = "";
        }else if (isUniaryOperator(value)) {
            operand1 = parseInt(text);
            operator = value;
            // console.log(operator + ' ' + operand1 );
            if(operator == "~")
                operand1 = eval(operator + ' ' + operand1);
            else if(operator == "++")
                operand1 = 1+operand1;
            else if(operator == "++")
                operand1 = 1+operand1;
            else if(operator == "--")
                operand1 = operand1-1;  
            display.textContent = operand1;
        } else if (value == "ac") {
            display.textContent = "";
        } else if (value == "sign") {
            operand1 = parseFloat(text);
            operand1 = -1 * operand1;
            display.textContent = operand1;
        } else if (value == ".") {
            if (text.length && !text.includes('.')) {
                display.textContent = text + '.';
            }
        } else if (value == "%") {
            operand1 = parseFloat(text);
            operand1 = operand1 / 100;
            display.textContent = operand1;
        } else if(value == "fact") {
            operand1 = parseInt(text);
            operand1 = factorial(operand1);
            display.textContent = operand1;
        } else if(value == "fibo") {
            operand1 = parseInt(text);
            operand1 = fibo(operand1);
            display.textContent = operand1;
        } else if(value == "=") {
            operand2 = parseFloat(text);
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);
            
            if (result) {
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        } else {
            display.textContent += value;
        }
    });
}
