/*
var nombre = ['juan', 1, false, null]

console.log('hola ' + nombre[0]) //accede a los elementos que están en determinada posición dentro del array

console.log(nombre.length - 1) //te calcula primero la cantidad de elementos del array y como devuelve un numero puedo hacer una operacion matematica.



// en este caso los : es como el igual . le va asignar al elemento de la izquierda el valor de la derecha.
var persona = {
	nombre: 'laura',
	apellido: 'lopez',
	edad: 26,
	mayorDeEdad: true,
	hijos: [

		{
			nombre: 'clara',
			apellido: 'lopez'
		},
		{
			nombre: 'andres',
			apellido: 'lopez'
		}

	],

	direccion: {
		calle: 'gaona',
		altura: '234'
	}
}

var nombre ='clara'
var apellido ='perez'
var edad = 30

var hijos = persona.hijos

console.log(hijos[1].nombre) //podes con . acceder a una propiedad de ese objeto. ACCEDO AL ARRAY, POSICION TAL, Y .NOMBRE PARA ACCEDER A LA KEY

//console.log(persona['nombre'])

// console.log('Hola ' + nombre + ' ' + apellido + ' tu edad es: ' + edad + ' años')

var numero

numero = prompt('ingrese un numero: ')

numeroParseado = parseInt(numero,10); // para que no te tome como string el numero del prompt

var suma = numeroParseado + 2
alert('el numero elegido es: ' + suma)

*/
/*
var contraseniaGuarda = '1234'
var contraseniaUsuario = prompt('ingresa una contraseña: ')
var resultado = contraseniaGuarda !== contraseniaUsuario
*/

/*

var obj1 = {
	nombre: 'carlos'
}
var obj2 = {
	nombre: 'carlos'
}

var resultado = obj1.nombre === obj2.nombre //asi objeto.nombre apuntan los dos a comparar strings que son iguales.

console.log(resultado)

*/
/*
var edad1 = 15
var edad2 = 18

var resultado = edad1 <= edad2

console.log(resultado)

*/
/*
var booleano1 = 'pepe' === 'pepe'
var booleano2 = true

var resultado = booleano1 && booleano2

console.log(resultado)
*/

/*
var booleano1 = true

var caso1 = false
var caso2 = !!0
var caso3 = undefined
var caso4 = null
var caso5 = ' '
var caso6 = {}


var negacion = !!booleano1 //de esta manera con !! convierto en un booleano algo

console.log(negacion) // te cambia si era true te lo pone en false

*/

/*
var tecla = prompt('ingrese la tecla de la luz')

if (tecla === 'on') {
	console.log('la luz esta encendida')
} else if (tecla === 'off') {
		console.log('la luz esta apagada')
} else {
	console.log('Ingreso otra cosa')
}
*/
/*
var resutadoFutbol = prompt('resultado')	

switch (resutadoFutbol) {
	case 'gano':
	console.log('se te asigna 3 puntos')
	console.log('gracias por participar')
	break
	case 'perdio':
	console.log('se te asigna 0 puntos')
	console.log('gracias por participar')
	break
	case 'empato':
	console.log('Se le asignan 1 puntos')
	console.log('gracias por participar')
	break
	default: 
	console.log('eligio un mal resultado')
	break
}
*/
/*
var numeros = 10

for (var i = 0; i <= numeros; i++) {
	console.log(i)
}

*/
/*
var nombres = [{nombre:'diego'}, {nombre:'adrian'}]

for (var i = 0; i < nombres.length; i++) {
	var nombre = nombres[i].nombre
 	if (nombre !== 'adrian') {
 		console.log(nombre + ' es alumno')
 	}
}

*/

/*

var numeros = 10
var i = 0


while (i < 10) {
	console.log(i)
	i++ //condicion de corte
}
*/

/*
var i = 10

do {
	console.log(i)
	i++
} while (i < 10)
*/