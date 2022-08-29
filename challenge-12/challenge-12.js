/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
var person = {
    name: 'Giselle',
    lastname: ' Rosa',
    age: 28
}

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log( 'Propriedades de "person":', Object.keys( person) );

/*
Crie um array vazio chamado `books`.
*/
var books = []

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
books.push({name: 'O misterio de sophia', pages:320})
books.push({name: 'O mundo de Alice', pages: 222})
books.push({name: 'Patrick O grande', pages:200})

console.log( '\nLista de livros:'  );

/*
Mostre no console todos os livros.
*/
console.log(books)
/*
Remova o último livro, e mostre-o no console.
*/
console.log( '\nLivro que está sendo removido:' , books.pop());
// O pop remove do array o ultimo elemento.
/*
Mostre no console os livros restantes.
*/
console.log( '\nAgora sobraram somente os livros:', books );

/*
Converta os objetos que ficaram em `books` para strings.
Mostre os livros nesse formato no console:
*/
books = JSON.stringify(books)
console.log( '\nLivros em formato string:' , books);

/*
Converta os livros novamente para objeto.
*/
books = JSON.parse(books)
console.log( '\nAgora os livros são objetos novamente:', books);

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
    // for(var i = 0; books.length > i;  i++){
    //     console.log(books[i].name)
    // }

     for(var i = 0; books.length > i;  i++){
        for(var prop in books[i]){
            console.log(`${prop}: ${books[i][prop]}`)
        }
    }

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName = ['G', 'i', 's', 'e', 'l', 'l', 'e']
console.log( '\nMeu nome é:', myName.join('')) ;

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
// ?

console.log( '\nMeu nome invertido é:', myName.reverse().join('')  );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
// ?

console.log( '\nAgora em ordem alfabética:', myName.sort().join('') );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
// ?
