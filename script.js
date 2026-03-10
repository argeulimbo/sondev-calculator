let display = document.getElementById('display');
let numeroAtual = display.value;
let numeroAnterior;
let operadorAtual = '';

function limpar() {
    document.getElementById('display').value = '';
}

function numeroDigitado(numero) {
    display.value += numero;
}

function operadorDigitado(operador) {
    numeroAtual = display.value;
    if (numeroAtual == '') {
        return;
    }
    var ultimo = numeroAtual.charAt(numeroAtual.length - 1);
    if (ultimo == "+" || ultimo == "-" || ultimo == "*" || ultimo == "/") {
        return;
    }

    if (operadorAtual != '') {
        calcular();
    }

    numeroAnterior = Number(numeroAtual);
    operadorAtual = operador;

    display.value = numeroAtual + operador;
}

function deletar() {
    numeroAtual = display.value;
    display.value = numeroAtual.substring(0, numeroAtual.length - 1);
}

function calcular() {
    var expressao = display.value;
    var partes = expressao.split(operadorAtual);

    if (expressao == '') {
        limpar();
    }

    numeroAnterior = Number(partes[0]);
    numeroAtual = Number(partes[1]);

    let resultado;

    switch (operadorAtual) {
        case '+':
            resultado = numeroAnterior + numeroAtual;
            break;
        
        case '-':
            resultado = numeroAnterior - numeroAtual;
            break;
        
        case '*':
            resultado = numeroAnterior * numeroAtual;
            break;
        case '/':
            resultado = numeroAnterior / numeroAtual;
            break;
        
        default:
            return;
    }

    display.value = resultado;
    numeroAnterior = resultado;
}