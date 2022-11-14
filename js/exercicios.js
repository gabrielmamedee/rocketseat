// 1. Declare uma variável de nome weight

let weight 

// 2. que tipo de dado é a variável acima?
console.log(typeof weight)
//tipo undefined

/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean
*/

let name, age, stars, isSubscribed

name = "Alicia"
age = 24
stars = 13.8
isSubscribed = false

console.log(name, age, stars, isSubscribed)

/*
    4. A variável student abaixo é de que tipo de dados?
    Object type
    4.1 Atribua a ela as mesmas propriedade e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weight> kg.

*/

let student = {
    name : "Gabriel",
    age : 23,
    stars : 18.8,
    weight: 84.9,
    isSubscribed : true
}

console.log(`${student.name} de idade ${student.age} pesa ${student.weight}`)

/*
    5. Declare uma variável do tipo Array, de nome students e atribbua a ela nenhum valor, ou seja, somente o Array vazio
*/

let students = []

/*
    6. Reatribua valor para a variável acima, colocando dentro dela o object student da questão 4. (not copy and past the object, mas usar o objeto criado e insert it in the Array)
*/

students = [
    student
]
console.log(students)

/*
    7. Coloque no console o valor da posição zero do Array acima 
*/

console.log(students[0])

/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/

let student2 = {
    name : "Alicia",
    age : 24,
    stars : 13.8,
    weight: 56.3,
    isSubscribed : false
}

students[1] = student2


console.log(students)