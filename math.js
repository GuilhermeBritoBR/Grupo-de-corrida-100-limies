function pace()  {
    let distancia = document.getElementById("km1button");
    let tempo = document.getElementById("tempo1button");
    let resultado = (distancia.value / (tempo.value*60))*3.6;
    let resultadopace = (60/resultado);
    document.getElementById("resultadokm").innerText = resultado.toFixed(2) +" KM/H";
    document.getElementById("resultadopace").innerText = resultadopace.toFixed(2) +" MIN/H";
}

function calculartempo()   {
    let metros = document.getElementById("metragem");
    let horas = document.getElementById("pacepreciso");
    let fica = (metros.value*horas.value)/1000;
    document.getElementById("tempopreciso").innerText = fica+ " Minutos" ;
}