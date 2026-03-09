let display = document.getElementById("display");
let valorInput = "";
let operadorAtual = "";

function numeroDigitado(valor) {
    valorInput += valor;
    display.textContent = valorInput;
}

function operadorDigitado(operador) {
    if(valorInput === "" && operadorAtual !== ".") return 
        valorInput += operadorAtual;
        display.textContent = valorInput;
    
}