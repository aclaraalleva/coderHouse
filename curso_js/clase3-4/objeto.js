var user = {
	firstName: 'Juan',
	age:29
}

var user2 = user

console.log(user.firstName)
console.log(user2.firstName)

user.firstName = 'Pablo'

//this: donde estoy parado para contextos de objetos.

