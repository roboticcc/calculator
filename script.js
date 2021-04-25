let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');

//кнопки операций

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

document.getElementById('sum_btn').addEventListener('click', function () {
    lastOperand = inputWindow.value;
    operation = 'sum';
    inputWindow.value = '';
})

document.getElementById('subt_btn').addEventListener("click", function (){
    lastOperand = inputWindow.value;
    operation = 'subt';
    inputWindow.value = '';
})

document.getElementById('mult_btn').addEventListener("click", function (){
    lastOperand = inputWindow.value;
    operation = 'mult';
    inputWindow.value = '';
})

document.getElementById('div_btn').addEventListener("click", function (){
    lastOperand = inputWindow.value;
    operation = 'div';
    inputWindow.value = '';
})

document.getElementById('exp_btn').addEventListener("click", function (){
    lastOperand = inputWindow.value;
    operation = 'exp';
    inputWindow.value = '';
})

document.getElementById('sqrt_btn').addEventListener("click", function (){
    lastOperand = inputWindow.value;
    operation = 'sqrt';
    inputWindow.value = '';
})

//кнопки с цифрами

document.getElementById('num_1').addEventListener('click', function (){
    inputWindow.value += 1;
})

document.getElementById('num_2').addEventListener('click', function (){
    inputWindow.value += 2;
})

document.getElementById('num_3').addEventListener('click', function (){
    inputWindow.value += 3;
})

document.getElementById('num_4').addEventListener('click', function (){
    inputWindow.value += 4;
})

document.getElementById('num_5').addEventListener('click', function (){
    inputWindow.value += 5;
})

document.getElementById('num_6').addEventListener('click', function (){
    inputWindow.value += 6;
})

document.getElementById('num_7').addEventListener('click', function (){
    inputWindow.value += 7;
})

document.getElementById('num_8').addEventListener('click', function (){
    inputWindow.value += 8;
})

document.getElementById('num_9').addEventListener('click', function (){
    inputWindow.value += 9;
})

document.getElementById('num_0').addEventListener('click', function (){
    inputWindow.value += 0;
})

//основная логика

document.getElementById('calc-btn').addEventListener('click', function () {
    if (operation === 'sum'){
        const result = parseInt(lastOperand) + parseInt(inputWindow.value);
        operation = null;
        lastOperand = null;
        inputWindow.value = result;
    }
    if (operation === 'subt'){
        const result = parseInt(lastOperand) - parseInt(inputWindow.value);
        operation = null;
        lastOperand = null;
        inputWindow.value = result;
    }
    if (operation === 'mult'){
        const result = parseInt(lastOperand) * parseInt(inputWindow.value);
        operation = null;
        lastOperand = null;
        inputWindow.value = result;
    }
    if (operation === 'div'){
        const result = parseInt(lastOperand) / parseInt(inputWindow.value);
        operation = null;
        lastOperand = null;
        inputWindow.value = result;
    }
    if (operation === 'exp'){
        const result = parseInt(lastOperand) ** parseInt(inputWindow.value);
        operation = null;
        lastOperand = null;
        inputWindow.value = result;
    }
    if (operation === 'sqrt'){
        const result = Math.sqrt(inputWindow.value);
        operation = null;
        lastOperand = null;
        inputWindow.value = result;
    }
})


