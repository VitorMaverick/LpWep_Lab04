let data = document.querySelector("#data");


document
    .querySelector('#form')
    .addEventListener('submit', function(event) {

    event.preventDefault();
    
    let dataString = data.value;
    let dia = dataString.split('-')[0];
    let mes = dataString.split('-')[1];
    let ano = dataString.split('-')[2];
    console.log(data.value);
    console.log(dataString);
    console.log(dia + " " + mes + " " + ano);
    



});

