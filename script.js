const campo1 = document.getElementById('campo1');
const campo2 = document.getElementById('campo2');
const resul = document.getElementById('resultado');

const btnSumar = document.getElementById('btnSum');
const btnRestar = document.getElementById('btnRes');
const btnMultiplicar = document.getElementById('btnMul');
const btnDividir = document.getElementById('btnDiv');

let num1 = parseFloat(campo1.innerText);
let num2 = parseFloat(campo2.innerText);

btnSumar.addEventListener('click', ()=>{
    let res = num1 + num2;
    resul.innerText(res);
});

btnRestar.addEventListener('click', ()=>{
    let res = num1 - num2;
    resul.innerText(res);
});

btnMultiplicar.addEventListener('click', ()=>{
    let res = num1 * num2;
    resul.innerText(res);
});

btnDividir.addEventListener('click', ()=>{
    let res = num1 / num2;
    resul.innerText(res);
});