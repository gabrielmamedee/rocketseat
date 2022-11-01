# Introdução

## O que significa CSS?

* Cascading Style Sheet
* Código para criar estilos no HTML
* HTML é a estrutura, e o CSS é a beleza
* Não é uma linguagem style sheet

## Comentários

* Não irá afetar o seu código
* Ajuda a lembrar blocos de códigos
* deixa dicas para leitura
* Ajuda outros a endender
* Nunca esqueça de fechar um comentário aberto

comentário começa com '/*' e termina com ' */'


## Anatomia

* Selector
* Declaration
* Properties
* Property Value


## Selectors

Conecta um elemento HTML com o CSS

### Tipos

* Global selector ' * '
* Element/Type selector ' h1, h2, p, div '
* ID Selector ' #box, #container '
* Class Selector ' .red, .m-4 '
* Attribute selector, Pseudo-class, Pseudo-element, e outros


## Caixas

* Você irá perceber que (quase) tuso são caixas no CSS
* Posicionamento, tamanhos, espaçamentos, bordas, cores
* Caixa pode ficar ao lado uma da outra, ou acima
* Elementos HTML são caixas


## A Cascata

A escolha do browser de qual regra aplicar, caso haja muitas regras para o mesmo elemento. 

* Seu estilo é lido de cima para baixo.

É levado em consideração 3 fatores

1. Origem do estilo
2. Especificidade
3. Importancia

### Origem do estilo

inline > tag style > tag link

### Especificidade

É um cálculo matemático, onde, cada tipo de seletor e origem do estilo, possuem valores a serem considerados.

* 0 -Universal selector, combinators e negation pseudo-class (:not())
* 1 -Element type selector e pseudo-elements (::before, ::after)
* 10 -Classes e attribute selectors ([type="radio"])
* 100 -ID selector
* 1000 -Inline


## A regra !important

* cuidado, evite o uso
* não é considerado uma boa prática
* quebra o fluxo natural da cascata
