let dataAux = document.querySelector("#js-data");
let resultado = document.querySelector('#js-resultado')


document
    .querySelector('#form')
    .addEventListener('submit', function(event) {

    event.preventDefault();
    
    let dataString = dataAux.value;
    let ano = dataString.split('-')[0];
    let mesAux = dataString.split('-')[1];
    let dia = dataString.split('-')[2];
    console.log(dataAux.value);
    console.log(dataString);
    console.log(dia + " " + mesAux + " " + ano);
    
    var arrayMeses=new Array(" de Janeiro de "," de Fevereiro de "," de Março de ","de Abril de ","de Maio de ","de Junho de","de Julho de ","de Agosto de ","de Setembro de "," de Outubro de "," de Novembro de "," de Dezembro de ")
    
    let data = ano + "-" + mesAux + "-" + dia; 
    var dataInfo = new Date(data);
    var mes = dataInfo.getMonth();

    resultado.textContent = dia + " " + arrayMeses[mes] + " " + ano;
    

});

