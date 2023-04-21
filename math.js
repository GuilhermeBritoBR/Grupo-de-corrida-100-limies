function pace()  {
    let distancia = document.getElementById("km1button");
    let tempo = document.getElementById("tempo1button");
    document.getElementById("resultadokm").innerText = (distancia.value / (tempo.value*60))*3.6;
    
}