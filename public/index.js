const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
function dropMenu(){
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }
    else{
        menu.classList.add('hidden');
    }
};