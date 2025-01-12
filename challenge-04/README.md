# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = (a) => {
if(a) { return true} return false
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy` = NaN, null, undefined, '', "" ou 0.
isTruthy(null)
isTruthy(undefined)
isTruthy(NaN)
isTruthy('')
isTruthy(0)
isTruthy(-0)
isTruthy("")
isTruthy (!true)


/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy({})
isTruthy([])
isTruthy(10)
isTruthy([1,2])
isTruthy({a:1, b:2})
isTruthy(()=>{})
isTruthy(10 + 10)
isTruthy('algo')
isTruthy (!!true)
isTruthy(!undefined)


/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
marca: 'Toyota',
modelo: 'Corolla',
placa: 'XLR0S45',
ano: 2022,
cor: 'Cinza',
quantasPortas: 4,
assentos: 5,
quantidadePessoas: 2
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = (cor) => { carro.cor = cor }

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = () => carro.cor

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = () => carro.modelo

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = () => carro.marca

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MODELO] da [MARCA]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = () => `Esse carro é um ${carro.modelo} da ${carro.marca}`

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.chegaMais = (addPessoas) => {
  var total = addPessoas + carro.quantidadePessoas
  var vagas = carro.assentos - carro.quantidadePessoas 
  var qtdpessoas = 'pessoas'
  
  if( vagas === 1) {
    qtdpessoas = 'pessoa'
   }
  if(total <= carro.assentos) {
    var quantidadeTotal = carro.quantidadePessoas += addPessoas
    return `Já temos ${quantidadeTotal} pessoas no carro!`
    } 
   if( carro.quantidadePessoas  === carro.assentos){
    return "O carro já está lotado!"
   } 
   if(total > carro.assentos) {
    return `Só cabem mais ${vagas} ${qtdpessoas}!`
   }
    
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.cor || carro.obterCor()

// Mude a cor do carro para vermelho.
carro.mudarCor('vermelho')

// E agora, qual a cor do carro?
carro.cor || carro.obterCor()


// Mude a cor do carro para verde musgo.
carro.mudarCor('verde musgo')

// E agora, qual a cor do carro?
carro.cor || carro.obterCor()

// Qual a marca e modelo do carro?
carro.obterMarcaModelo()

// Adicione 2 pessoas no carro.
carro.chegaMais(2)
//'Já temos 4 pessoas no carro!'

// Adicione mais 4 pessoas no carro.
carro.chegaMais(4)
//'Só cabem mais 1 pessoa!'

// Faça o carro encher.
carro.chegaMais(1)

// Tire 4 pessoas do carro.
carro.chegaMais(-4)

// Adicione 10 pessoas no carro.
carro.chegaMais(10)


// Quantas pessoas temos no carro?
carro.quantidadePessoas

```
