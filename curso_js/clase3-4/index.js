// Los parametros que ingreso al llamar la funcion los convierte en variables dentro de la funcion y como los recibe en orden value1 va a ser el primer valor y value2 el segundo. Puede tener el nombre que quiera.

//Parseo el numero en base 10 para que no sea decimal.


console.log('EJEMPLO 1')

//Declaro la funcion

function sum(value1,value2) {
	var parsedValue1 = parseFloat(value1, 10);
	var parsedValue2 = parseFloat(value2,10);
	var result = parsedValue1 + parsedValue2;
	return result;
	// console.log(value1 + value2);
}

//Llamo a la funcion y le asigno dos parametros.

var result1 = sum(1,2);
var result2 = sum(3,4);

console.log(result1);
console.log(result2);

console.log('EJEMPLO 2')

showMessage(' Diego');
showMessage(' Pepe');
showMessage(' Ana');

function showMessage(firstName) {
	console.log('hola' + firstName + ' como estas?');
}

// guardar funcion dentro de una variable

var APPNAME = 'MY APP';

function showFirstName() {
	//local scope
	var pepe = function(firstName) {
		console.log('Hola' + firstName);
	}
	return pepe;
}

var result = showFirstName();
result('juan');

// funcion auto invocada

;(function showMessage() {
	console.log('hola!')
})()

