function pace()  {
    let km = parseFloat(document.getElementById("km1button").value);
    let horas = parseFloat(document.getElementById("horasbutton").value);
    let minutos = parseFloat(document.getElementById("minutosbutton").value);
    let segundos = parseFloat(document.getElementById("segundosbutton").value);
    let tempo = horas * 60 + minutos + segundos / 60,
		pace = tempo / km,
		paceMinutos = Math.floor(pace),
		paceSegundos = Math.round((pace - paceMinutos) * 60);

	if(paceSegundos < 10) {
		paceSegundos = "0" + paceSegundos;
	}

	document.getElementById("resultadokm").innerText= paceMinutos + ":" + paceSegundos  + " Min/KM";    
}

function calculartempo()   {
	let distancia= parseFloat(document.getElementById("metragem").value);
	let pace= parseFloat(document.getElementById("pacepreciso").value);
	let tempo= distancia*pace;
	if(tempo >= 60){
		tempo= tempo/60 + " Horas";
	}else{
		tempo= tempo + " Minutos";
	}
	
	document.getElementById("tempopreciso").innerText= tempo;
}
