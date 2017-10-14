//Crear un array con todos los dias de la semana

var semana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

for (var i = 0; i <= semana.length-1; i++) {
	var dia = semana[i]  
	if (dia !== 'Sabado' || dia !== 'Domingo') {
		console.log(dia + ' entre semana')
	} else {
		console.log(dia + ' Es fin de semana')
	}
}