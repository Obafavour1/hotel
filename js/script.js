const items = document.querySelector('.items');
const openMenu = document.querySelector('.openmenu');
const closeMenu = document.querySelector('.close');


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
    items.style.display = 'flex';
    items.style.top = '0';
}

function close(){
    items.style.top = '-100%';
}
