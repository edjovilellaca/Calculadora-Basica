const campo1 = document.getElementById('txt1');
const campo2 = document.getElementById('txt2');
const resul = document.getElementById('txt3');

const btnSumar = document.getElementById('btnSum');
const btnRestar = document.getElementById('btnRes');
const btnMultiplicar = document.getElementById('btnMul');
const btnDividir = document.getElementById('btnDiv');

let num1 = parseFloat(campo1.value);
let num2 = parseFloat(campo2.innerText);

btnSumar.addEventListener('click', ()=>{
    let res = num1 + num2;
    console.log(num1);
    console.log(num2);
    console.log(res);
    resul.innerText = res;
});

btnRestar.addEventListener('click', ()=>{
    let res = num1 - num2;
    resul.innerText = res;
});

btnMultiplicar.addEventListener('click', ()=>{
    let res = num1 * num2;
    resul.innerText = res;
});

btnDividir.addEventListener('click', ()=>{
    let res = num1 / num2;
    resul.innerText = res;
});