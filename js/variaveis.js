/*

    #Variáveis

    - Nomes simbólicos para receber algum valor
    - Atalhos de código
    - Identificadores 

    - 3 palavras reservadas para criar uma variável
        - var
        - let 
        - const
    "const" não pode ser alterado o valor apois a primeira atribuição, já o "var" e o "let" podem!
*/

var climajp = "Quente"
climajp = true //boolean
console.log(climajp)
console.log(typeof climajp)

let climasp = "Frio" //string
climasp = -13 //number
console.log(climasp)
console.log(typeof climasp)

const climapolonorte = "sempre frio" 
console.log(climapolonorte)
console.log(typeof climapolonorte)

/*

    #Scope

    - Escopo determina a visibilidade de alguma variável no JS

    # Block statement ou "Declaração de bloco"

            ```js
        // vamos iniciar um bloco
        {
            // aqui dentro é um bloco e posso colocar qualquer código
        }// aqui fechamos o bloco
        ```
    O bloco, também criará um novo escopo. Chamamos de `block-scoped`
*/

{
    let y = 5
    console.log(y)
}

/* 
    Var

    - var é global e poderá funcionar fora de um escopo de bloco
    - hoisting
*/
console.log('> existe x antes do bloco? ', x)

{
    var x = 0
}

console.log('> existe x depois do bloco? ', x)