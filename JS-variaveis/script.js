/ LOCALIZAR ELEMENTOS DO HTML
// CRIAR: EMAIL / TELEFONE / IDADE / SEXO
const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const idade = document.getElementById('idade');
const sexo = document.getElementById('sexo');

// CRIAR VARIÁVEIS
const novoNome = "Luna"
const novoSobrenome = "Wesley"
const novoEmail = "luna.wesley.com"
const novoTelefone = "41 9999-3434"
const novaIdade = "25"
const novoSexo = "F"

// ATRIBUIR VALORES AO HTML COM OS VALORES
// DAS NOSSAS VARIÁVEIS (innerText/innerHTML)
nome.innerText = novoNome
sobrenome.innerText = novoSobrenome
email.innerText = novoEmail
telefone.innerText = novoTelefone
idade.innerText = novaIdade
sexo.innerText = novoSexo