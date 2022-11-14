// Revisão 
// Variáveis e tipos de dados
// declaração or declaration
var name

// assignment or atribuição de valores
name = "Gabriel"

// que tipo de dado foi colocado na variável

console.log(typeof name)
console.log(name)

// declaração conjunta
// agrupamento de declarações
let age, isHuman

age = 18
isHuman = true

console.log(name, age, isHuman)

// multiplos argumentos na função
// escrita de texto + variáveis

// concatenando valores
console.log('O '+ name +' tem '+ age +' anos.')

//interpolando valores com template literals or template strings
console.log(`o ${name} tem ${age} anos.`)

// Object

const person = {
    name: 'Gabriel',
    age: 23,
    weight: 84.5,
    isAdmin: true
}

console.log(`${person.name} tem ${person.age} anos.`)

// Arrey

const animals = [
    'Lion', 
    'Monkey',
    'Cat'
]

// acesando valores dentro do Arry
console.log(animals[0]) 
console.log(animals.length)

//Arrey de object

const kids = [
    {
        name: 'Bento',
        age: 1
    },
    {
        name: 'Bernardo',
        age: 2
    }
]

console.log(kids)