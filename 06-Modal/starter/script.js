'use strict';


// let btns=document.querySelectorAll('.show-model');
// console.log(btns);

for(var i=1;i<=3;i++){
    document.querySelector("body > button:nth-child("+i+")").addEventListener('click',showWindow)
}
// document.querySelector("body > button:nth-child(1)").addEventListener('click',showWindow)

// document.querySelectorAll('.show-modal').addEventListener('click',showWindow)

document.querySelector('.overlay').addEventListener('click',closeWindow)

document.querySelector("body > div.modal > button").addEventListener('click',closeWindow)

function closeWindow(){
    let modaldom=document.querySelector('.modal');
    let overlaydom=document.querySelector('.overlay');
    modaldom.classList.add('hidden');
    overlaydom.classList.add('hidden');
}

function showWindow(){
    let modaldom=document.querySelector('.modal');
    let overlaydom=document.querySelector('.overlay');
    modaldom.classList.remove('hidden');
    overlaydom.classList.remove('hidden');
}