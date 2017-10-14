// Pedir nombre mediante prompt y disparar un alert con algun texto mas

var nombre

nombre = prompt('Cual es tu nombre?', 'ej. Juan')
alert('Tu nombre es ' + nombre)

var message = 'Tu nombre es' + nombre

//Pedir un numero y sumarlo a otro que este en una variable

var numero
var num2 = 5

numero = prompt('dame un numero: ', 'ej. 4')

numeroParseado = parseInt(numero,10);

alert('Tu numero es ' + (numeroParseado + num2))

//Pedir un numeor y restarlo a otro que este en una variable

var num
var num3 = 5

num = prompt('dame otro numero: ', 'ej: 5')
numeroParseado2 = parseInt(num,10);
alert('tu numero es ' + (numeroParseado2 - num3))

//Pedir un numero, luego otro y ambos sumarlos

var _numero
var _numero2

_numero = prompt('dame un numero')
numeroParseado3 = parseInt(_numero,10);

_numero2 = prompt('dame otro numero')
numeroParseado4 = parseInt(_numero2,10);

var resta = numeroParseado3 - numeroParseado4

alert('la resta es' + resta)

