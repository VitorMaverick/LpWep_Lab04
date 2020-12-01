let form = document.querySelector('#form');
let qtd = document.querySelector('#qtd');
let cod = document.querySelector('#cod');

document
    .querySelector('#btnForm')
    .addEventListener('click', function(event) {

    event.preventDefault();

    let valor = document.getElementById(cod.value);
    let total = parseFloat(valor.textContent) * parseFloat(qtd.value);

    document.querySelector('#resultado').innerHTML= "O valor é: " + total;
    console.log(total);

});