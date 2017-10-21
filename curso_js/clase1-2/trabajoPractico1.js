/* ============= TRABAJO PRACTICO JAVASCRIPT ============= */

// Debería poder ingresar un día de la semana

var diaDeSemana

diaDeSemana = prompt('Ingrese un día de la semana:', 'Por Ejemplo: Lunes')

var diaDeSemanaIngresado = diaDeSemana

alert('El día que elegiste es: ' + diaDeSemanaIngresado)

// Debera poder compararlo con todos los dias de la semana
//Debera evaluar si es un dia de semana y fin de semana mediante un mensaje similar a 'El dia es habil' sino 'El dia es fin de semana';
//En caso de cnontrar el dia utilizar la sentencia break y terminar el for

var arraySemana = []

arraySemana = [Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo]


for (var i = 0; i <= semana.length-1; i++) {
	var dia = semana[i]  
	if (dia !== 'Sabado' || dia !== 'Domingo') {
		console.log(dia + ' entre semana')
	} else {
		console.log(dia + ' Es fin de semana')
	}
}
