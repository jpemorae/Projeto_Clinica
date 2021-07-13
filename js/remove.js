//Função para excluir um elemento TR do html

/*

Pode ser escrito desta forma, onde podemos fazer o passo a passo de construção do comando

var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
var alvoEvento = event.target;
var paidoAlvo = alvoEvento.parentNode; // TR =paciente = remover

paidoAlvo.remove();

})
*/

// Pode ser feito desta forma também, ajuda economizar linha de desenvolvimento.


//var pacientes = document.querySelectorAll(".paciente"); - Apaga esta linha

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut")
    
    setTimeout(function(){
   event.target.parentNode.remove();
    
    },500);
 
setTimeout(function(){
alert("O registro deletado com sucesso");

},700)

    

})
