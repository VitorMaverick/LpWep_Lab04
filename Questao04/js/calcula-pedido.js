let bebidas = document.querySelectorAll(".bebidas");
let comidas = document.querySelectorAll(".comidas");

let resultado = document.querySelector('#js-resultado')

function limpaFormulario() {
    
    for(i=0; bebidas.length > i; i++){
        if(bebidas[i].checked == true){
            bebidas[i].checked = false;
        }
        if(comidas[i].checked == true){
            comidas[i].checked = false;
        }

    }
}

document
    .querySelector('#form')
    .addEventListener('submit', function(event) {

    event.preventDefault();


    let nomeBebida;
    let valorBebida;
    let nomesComidas = "";
    let valorComida = 0;
    let valorTotal =0;

    for(i=0; bebidas.length > i; i++){
        if(bebidas[i].checked == true){
            nomeBebida = bebidas[i].name;
            valorBebida = bebidas[i].value
        }
        if(comidas[i].checked == true){
            nomesComidas = nomesComidas + " | " + comidas[i].name;
            valorComida = valorComida + parseFloat(comidas[i].value);
        }

    }   

    valorTotal = valorComida + parseFloat(valorBebida);

    resultado.innerHTML = nomeBebida + " " + valorBebida + " " +  " " + valorTotal + nomesComidas;
    
    limpaFormulario();

});

