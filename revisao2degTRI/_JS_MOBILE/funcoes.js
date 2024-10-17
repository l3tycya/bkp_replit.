/**
 *FUNÇÕES SÃO BLOCOS QUE PODEM SER REUTILIZADOS
 *FUNÇÕES PODEM OU NÃO RECEBER PARÂMETROS
 *FUNÇÕẼS PODEM RETORNAR VALORES OU NÃO
 *FUNÇÕES PODEM SER ANôNIMAS
 */
//DECLARACAO DE FUNÇÃO
function diz0la() {
  alert('0la');
}
function olapessoa(nome) {
  alert('Olá,' + nome)
}
const nome = 'sirius'
const sobrenome = 'black'
const idade = 15

function dadosPessoa() {
  const dados = nome + sobrenome + idade
  console.log(dados)
}
//INVOCAÇÃO DE FUNÇÃO
diz0la()
olapessoa('harry')
dadosPessoa()

