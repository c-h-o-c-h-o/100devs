//DOM GETTER

const result =document.getElementById('result');
const n1 =document.getElementById('n1');
const n2 =document.getElementById('n2');
const add =document.getElementById('add');
const subtract =document.getElementById('subtract')
const multiply=document.getElementById('multiply')
const divide =document.getElementById('divide')
const reset =document.getElementById('reset')

//FUNCTIONS

function plus () {
   result.innerText =Number(n1.value) + Number(n2.value)
}

function minus () {
   result.innerText =Number(n1.value) - Number(n2.value)
}

function times () {
   result.innerText =Number(n1.value) * Number(n2.value)
}

function div () {
   result.innerText =Number(n1.value) / Number(n2.value)
}

function zero () {
    result.innerText = '';
    n1.value = 0;
    n2.value = 0;
 }

 //EVENT HANDLERS

 add.addEventListener('click',plus)
subtract.addEventListener('click',minus)
multiply.addEventListener('click',times)
divide.addEventListener('click',div)
reset.addEventListener('click',zero)