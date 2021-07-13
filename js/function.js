
/*Alterar titulo*/
var titulo = document.querySelector('.container')
titulo.textContent = 'Morais Medical Assist';

/*Calculo

Quando operação “OU”, ex:
	Se valor = 1 OU valor = 2 então:
Usar ||, ex: 
if (peso <= 0 || peso >= 300)
____________________________________
Para funções de E, ex, se valor 1 E valor 2, então usar &&:
if (alturaEhValida && pesoEhValido)

_______________________________________
document.querySelectorAll(".paciente")
Traz para o Javascript a informação que esta dentro do HTML, para ser utilizavel recomenda-se usar uma variavel
O All traz todos os valores ao inves de filtrar pela classe.

já o queryselector traz especificamente.

*/



var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdNome = paciente.querySelector(".info-nome")
    var nome = tdNome.textContent;


    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso); // vai apresentar True ou false
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {

        alert('O peso inserido no ' + nome + ' é inválido')

        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Ajuste Aqui";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        alert('A altura inserida no ' + nome + ' é inválido')
        console.log("Ajuste Aqui");
        alturaEhValida = false;
        tdImc.textContent = "Ajuste Aqui";
        paciente.classList.add("paciente-invalido");

    }

    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura)
        tdImc.textContent = imc;
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso <= 500) {
        return true
    } else {
        return false
    }
}


function validaAltura(altura) {
    if (altura > 0 && altura <= 3.00) {
        return true
    } else {
        return false
    }
}


function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura)
    return imc.toFixed(2);
}







