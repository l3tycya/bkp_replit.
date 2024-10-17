//IDENTIFICAR ELEMENTOS HTML//
const menu = document.querySelector('.menu');
const vermelho = document.querySelector('#vermelho');
const verde = document.querySelector('#verde');
const azul = document.querySelector('#azul');
const amarelo = document.querySelector('#amarelo');
const box = document.querySelector('.box');
const texto = document.querySelector('#texto');

//MANIPULAR ESSE ELEMENTOS
vermelho.addEventListener('click', function() {
  box.style.backgroundColor = '#eb1414';
  texto.style.color = '#ffff';
})
verde.addEventListener('click', function() {
  box.style.backgroundColor = '#11ff00';
  texto.style.color = '#ffff';
})
azul.addEventListener('click', function() {
  box.style.backgroundColor = '#66d9db';
  texto.style.color = '#ffff';
})
amarelo.addEventListener('click', function() {
  box.style.backgroundColor = '#fbff00';
  texto.style.color = '#ffff';
})



