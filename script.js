const btnSumar = document.getElementById('btnSum');
const btnRestar = document.getElementById('btnRes');
const btnMultiplicar = document.getElementById('btnMul');
const btnDividir = document.getElementById('btnDiv');

const resul = document.getElementById('txt3');

btnSumar.addEventListener('click', ()=>{
    const num1 = document.getElementById('txt1').value;
    const num2 = document.getElementById('txt2').value;
    let res = parseFloat(num1) + parseFloat(num2);
    console.log(res);
    resul.setAttribute('value', res);
});

btnRestar.addEventListener('click', ()=>{
    const num1 = document.getElementById('txt1').value;
    const num2 = document.getElementById('txt2').value;
    let res = parseFloat(num1) - parseFloat(num2);
    console.log(res);
    resul.setAttribute('value', res);
});

btnMultiplicar.addEventListener('click', ()=>{
    const num1 = document.getElementById('txt1').value;
    const num2 = document.getElementById('txt2').value;
    let res = parseFloat(num1) * parseFloat(num2);
    console.log(res);
    resul.setAttribute('value', res);
});

btnDividir.addEventListener('click', ()=>{
    const num1 = document.getElementById('txt1').value;
    const num2 = document.getElementById('txt2').value;
    let res = parseFloat(num1) / parseFloat(num2);
    console.log(res);
    resul.setAttribute('value', res);
});