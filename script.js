let display = document.getElementById('display');

function limpar() {
    display.value = '';
}

function numeroDigitado(numero) {
    display.value += numero;
}

function operadorDigitado(operador) {
    var currentDisplay = display.value;
    if (currentDisplay == '') {
        return;
    }
    let last = currentDisplay[currentDisplay.length - 1];    

    // Trava pra repetição de operadores
    if (last == '+' || last == '-' || last == '*' || last == '/' || last == '.') {
        return;
    }
    display.value += operador;
}

/* function calcular() {
    let expressao = display.value;
    let numeros = expressao.split(/[\+\-\*\/]/);
    let operadores = expressao.split(/[0-9]+/).filter(op => op != "");

    let resultado = parseFloat(numeros[0]);

    for (let i=0; i < operadores.length; i++) {
        let numero = parseFloat(numeros[i + 1]);

        // Adição
        if (operadores[i] == '+') {
            resultado += numero;
        }

        // Subtração
        if (operadores[i] == '-') {
            resultado -= numero;
        }

        // Multiplicação
        if (operadores[i] == '*') {
            resultado *= numero;
        }

        // Divisão
        if (operadores[i] == '/') {
            resultado /= numero;
        }
    }
    display.value = resultado;
}
*/

function calcular() {
    let expressao = display.value;
    let numeros = expressao.split(/[\+\-\*\/]/).map(Number);
    let operadores = expressao.split(/[0-9]+/).filter(op => op != "");

    for (let i=0; i < operadores.length; i++) {
        if (operadores[i] == '*' || operadores[i] == '/') {
            let resultado; 
            if (operadores[i] == '*') {
                if (numeros[i + 1] == 0) {
                    display.value = 0;   // Instanciar manualmente o resultado de X * 0 = 0
                    return;
                }
                resultado = numeros[i] * numeros[i + i];
            }
            if (operadores[i] == '/') {
                if (numeros[i +1] == 0) {
                    display.value = 'Erro';
                    return;
                }
                resultado = numeros[i] / numeros[i + 1];
            }

            numeros.splice(i, 2, resultado);
            operadores.splice(i, 1);
            i --;
        }
    }
    let resultadoFinal = numeros[0];
    for (let i=0; i<operadores.length; i++) {
        if (operadores[i] == '+') {
            resultadoFinal += numeros[i + 1];
        }
        if (operadores[i] == '-') {
            resultadoFinal -= numeros[i + 1];
        }
    }
    display.value = resultadoFinal;
}

function apagar() {
    let currentDisplay = display.value;
    display.value = currentDisplay.substring(0, currentDisplay.length -1);
}