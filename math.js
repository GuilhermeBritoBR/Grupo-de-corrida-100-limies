function pace()  {
    let km = document.getElementById("km1button");
    let horas = document.getElementById("horasbutton");
    let minutos = document.getElementById("minutosbutton");
    let segundos = document.getElementById("segundosbutton");
    let resultadoporkm = ((horas.value*60)+(minutos.value)+(segundos.value/60))/(km.value*10);
    document.getElementById("resultadokm").innerText = resultadoporkm + " Min/KM" ;
}

