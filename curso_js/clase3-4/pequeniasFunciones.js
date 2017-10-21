/*

Crear una función que reciba como argumento nombre y apellido y lo muestre en la consola.

Paso a paso sería:

    Pedir el nombre y guardarlo en una variable firstName.
    Pedir el apellido y guardarlo en un variable lastName.
    Definir una función que reciba dos argumentos, nombre firstName y apellido lastName y que devuelva como resultado un mensaje en consola con los dos argumentos que recibió.
    Llamar a la función que definimos previamente y pasar como parámetros las variables firstName y lastName.
    Chequear el resultado en consola.

*/

var firstName = 'ana';
var lastName = 'alleva';

function pedirNombre (firstName, lastName) {
	console.log('Tu nombre es ' + firstName + ' y tu apellido es ' + lastName);
}

//pedirNombre(firstName,lastName);

// FORMA DOS DE VER LO MISMO

function pedirNombre2 () {
	var firstName = prompt('¿Cual es tu Nombre?', 'Ejemplo: Pepe');
	var lastName = prompt('¿Cual es tu Apellido', 'Ejemplo: Lopez');
	console.log('Tu nombre es ' + firstName + ' y tu apellido es ' + lastName);
}

//pedirNombre2();

/*

Crear una función que reciba como argumento un dia de la semana dayOfTheWeek y devuelve como resultado un string que indica Es un día hábil, Fin de semana o Día incorrecto. Luego pedirle al usuario que ingrese tres veces un día de la semana y por cada uno mostrarle un alerta con el mensaje que devuelve la función.

*/

function dayOfTheWeek() {

	var dia = prompt('Poné un día de la semana', 'Ej. Lunes');
	if (dia === 'Lunes' || dia === 'Martes' || dia === 'Miercoles' || dia === 'jueves' || dia === 'viernes' ) {
		console.log(dia + 'es día habil');
	} else if (dia === 'Sabado' || dia === 'Domingo') {
		console.log(dia + 'es fin de semana');
	} else {
		console.log('Día incorrecto');
	}
}

//dayOfTheWeek();


function dayOfTheWeek2() {

	var dia1 = prompt('Ingresa un día de la semana');

	switch(dia1) {
    case 'Lunes':
    case 'Martes':
    case 'Miercoles':
    case 'Jueves':
    case 'Viernes':
    	console.log('Es día habil');
    	break;
    case 'Sabado':
    case 'Domingo':
        console.log('Es fin de semana');
        break;
    default:
        console.log('dia incorrecto');
        break;
} 
}

//dayOfTheWeek2();
//dayOfTheWeek2();
//dayOfTheWeek2();

// ejercicio 3

/*

Crear un función que reciba como argumento una palabra y devuelva como resultado true si la palabra tiene 6 o más letras y false si tiene menos. Luego pedirle al usuario que ingrese una palabra, si es muy corta se le vuelve a pedir que ingrese otra hasta que ingrese una palabra de 6 letras o más.

*/

function trueFalse(palabra) {
	if (palabra.length >= 6) {
		return true;
	} else {
		return false;
	}
}


function damePalabra() {
	do {
    	var palabra = prompt('dame una palabra de 6 letras');
    	var ok = trueFalse(palabra);	
	}
	while (!ok);
	console.log('La palabra esta bien'); 
}

//damePalabra();

/* CALCULADORA */


//    Se le pedirá que ingrese la operación a realizar Sum, Res, Mul, Div.
 //   Se le pedirán al usuario 2 valores, en caso de elegir la división hay que verificar que el usuario no elija el cero como divisor, si es así se le volverá a pedir el segundo número.
 //   Crear una función que reciba los dos parámetros que ingresó el usuario y la operación elegida, la función tiene que devolver un mensaje en consola con el resultado.
 //   Llamar a la función con los parámetros ingresados por el usuario.


function sum () {
	var value1 = prompt('escribí un número');
	var parsedNumber1 = parseFloat(value1, 10)
	var value2 = prompt('poné otro numero');
	var parsedNumber2 = parseFloat(value2, 10);
	var resultadoSuma = parsedNumber1 + parsedNumber2;
	alert('El resultado de la suma es ' + resultadoSuma);
}

//sum();

function res () {
		var value1 = prompt('escribí un número');
	var parsedNumber1 = parseFloat(value1, 10)
	var value2 = prompt('poné otro numero');
	var parsedNumber2 = parseFloat(value2, 10);
	var resultadoResta = parsedNumber1 - parsedNumber2;
	alert('El resultado de la resta es ' + resultadoResta);	
}

//res();

function mul () {
	var value1 = prompt('escribí un número');
	var parsedNumber1 = parseFloat(value1, 10)
	var value2 = prompt('poné otro numero');
	var parsedNumber2 = parseFloat(value2, 10);
	var resultadoMult = parsedNumber1 * parsedNumber2;
	alert('El resultado de la Multiplicacion es ' + resultadoMult);
}

//mul();

function div () {
	var value1 = prompt('escribí un número');
	var parsedNumber1 = parseFloat(value1, 10)


	do {
		var value2 = prompt('poné otro numero');
	var parsedNumber2 = parseFloat(value2, 10);    		
	}
	while (parsedNumber2 === 0);
	var resultadodiv = parsedNumber1 / parsedNumber2;
	    alert('El resultado de la division es ' + resultadodiv);
}


function elegirOperacion() {
	var operacion = prompt('Elegí una Operacion');
	
	if (operacion === 'suma') {
		sum();
	} else if (operacion === 'resta') {
		res();	
	} else if (operacion === 'multiplicacion') {
		mul();
	} else if (operacion === 'division') {
		div();
	} else {
		console.log('caca');
	}
}

elegirOperacion();