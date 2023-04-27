function pace()  {
    let distancia = document.getElementById("km1button");
    let horas = document.getElementById("horasbutton");
    let minutos = document.getElementById("minutosbutton");
    let segundos = document.getElementById("segundosbutton");
    let tempo = ((horas.value*60)+minutos.value+(segundos.value/60));
    let resultado = (distancia.value / tempo.value);
    let resultadopace = (60/resultado);
    document.getElementById("resultadokm").innerText = resultado +" KM/H";
    document.getElementById("resultadodopace").innerText = resultadopace.toFixed(2) +" MIN/H";
}

function calculartempo()   {
    let metros = document.getElementById("metragem");
    let horas = document.getElementById("pacepreciso");
    let fica = (metros.value*horas.value)/1000;
    document.getElementById("tempopreciso").innerText = fica+ " Minutos" ;
}