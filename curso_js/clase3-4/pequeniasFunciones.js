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

pedirNombre(firstName,lastName);

// FORMA DOS DE VER LO MISMO

function pedirNombre2 () {
	var firstName = prompt('¿Cual es tu Nombre?', 'Ejemplo: Pepe');
	var lastName = prompt('¿Cual es tu Apellido', 'Ejemplo: Lopez');
	console.log('Tu nombre es ' + firstName + ' y tu apellido es ' + lastName);
}

pedirNombre2();

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

dayOfTheWeek();


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

dayOfTheWeek2();
dayOfTheWeek2();
dayOfTheWeek2();

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

damePalabra();
