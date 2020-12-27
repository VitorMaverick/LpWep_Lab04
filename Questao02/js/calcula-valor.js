let num1 = document.querySelector("#primeiroNum");
let num2 = document.querySelector("#segundoNum");
let tResultado = document.querySelector("#resultado");



document
    .querySelector('#form')
    .addEventListener('submit', function(event) {

    event.preventDefault();
    
    function limpa(){
        while(tResultado.firstChild){
            tResultado.removeChild(tResultado.lastChild);
        }
    }
    limpa();
    
   
    function soma(){
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');

        td1.textContent = num1.value + "+" + num2.value;
        td2.textContent = parseFloat(num1.value) + parseFloat(num2.value);

        tr.appendChild(td1);
        tr.appendChild(td2);
        
        tResultado.appendChild(tr);
    }
    soma();

    function produto(){
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');

        td1.textContent = num1.value + "*" + num2.value;
        td2.textContent = parseFloat(num1.value) * parseFloat(num2.value);

        tr.appendChild(td1);
        tr.appendChild(td2);
        
        tResultado.appendChild(tr);
    }
    produto();

    function divisao(){
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');

        td1.textContent = num1.value + "/" + num2.value;
        td2.textContent = parseFloat(num1.value) / parseFloat(num2.value);

        tr.appendChild(td1);
        tr.appendChild(td2);
        
        tResultado.appendChild(tr);
    }
    divisao();

    function resto(){
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');

        td1.textContent = num1.value + "%" + num2.value;
        td2.textContent = parseFloat(num1.value) % parseFloat(num2.value);

        tr.appendChild(td1);
        tr.appendChild(td2);
        
        tResultado.appendChild(tr);
    }
    resto();
    



});