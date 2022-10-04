const txtnumero1 = document.getElementById("numero1");
const txtnumero2 = document.getElementById("numero2");
const txtSigno = document.getElementById("signos");
const botonCalcular = document.getElementById("boton");
const presultado = document.getElementById("resultado");
const botonAC = document.getElementById("AC");

// enlace de las Funciones con los Botones html;
botonCalcular.addEventListener('click', calcular);
botonAC.addEventListener('click',clean);

// --- Funciones ---;
function clean() {
    txtnumero1.value = "";
    txtnumero2.value = "";
    txtSigno.value = "";
    presultado.innerText = ""; 
}

function calcular() {
    const signo = txtSigno.value;
    const num1 = parseFloat(txtnumero1.value);
    const num2 = parseFloat(txtnumero2.value);

    if ((signo == "+" || signo == "-" || signo == "/" || signo == "*") 
        && !isNaN(num1) && !isNaN(num2)) {

        let resultado;

        switch(signo){
            case "+":
                resultado = num1 + num2;
                break;
            case "-":
                resultado = num1 - num2;
                break;
            case "*":
                resultado = num1 * num2;
                break;
            case "/":
                resultado = num1 / num2;
                break;
        }
        presultado.style = "color: #000000";
        presultado.innerText = "= " +resultado;
    } else{
        presultado.style = "color: #FF0040";
        presultado.innerText = "¡Calculo Imposible!";
    }
}