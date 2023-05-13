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
	let segundos_do_primeiro = Math.floor(pace);
	let segundos_do_segundo = (pace - segundos_do_primeiro)*100;
	let tempo= distancia*((segundos_do_primeiro*60)+(segundos_do_segundo));
	let resultado_bruto= tempo/60,
	minutos_liquido = Math.floor(resultado_bruto),
	segundos_liquido = Math.floor((resultado_bruto-minutos_liquido)*60)/100;
	resultado = minutos_liquido+ segundos_liquido;
	document.getElementById("tempopreciso").innerText= resultado;
}
