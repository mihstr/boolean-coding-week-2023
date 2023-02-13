// Creating a function
function sayHello() {
    console.log('Hello, world!')
}

// function doesn't run until we tell it to run, "call" it
sayHello()
sayHello()
sayHello()

function greet(name) {
    console.log(`Hello, ${name}!`)
}

greet('Nathan')
greet('Ed')
greet('Patrick')


// --
// Returning a value
function sum(num1, num2) {
    return num1 + num2
}

sum(10, 5) // nothing displayed in console
console.log(sum(3, 7))

const result = sum(2318, 917)
console.log(result)


// --
// Passing a variable to a parameter
function product(num1, num2) {
    return num1 * num2
}

const favouriteNumber = 3

const result2 = product(10, favouriteNumber)

console.log(result2)


// --
// Calling a function in a for loop
const names = ['Nathan', 'Ed', 'Patrick', 'Lewis']

for (let i = 0; i < names.length; i++) {
    greet(names[i])
}

// Append the array
names.push("John")
// Delete element from the array
names.pop

function makeUppercase(name) {
    return name.toUpperCase()
}

// Uppercase all elements in names array
const upperNames = names.map(makeUppercase)

function checkChars(name) {
    return name.length > 500
}

// Če vsaj 1 element v array names izpolnjuje pogoj
const checkCharsS = name.some(checkChars)

// Če vsi elementi v array names izpolnjujejo pogoj
const checkCharsE = names.every(checkChars)

// --
// Passing a callback function
function constructGreeting(name) {
    return `Hello, ${name}! How are you?`
}

function displayMessage(messageBuilder, name) {

    // const message = messageBuilder('Nathan')
    const message = messageBuilder(name)
    console.log(message)

}

displayMessage(constructGreeting, 'Nathan')