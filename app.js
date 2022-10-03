let openMe = document.querySelector('.open');
let closeMe = document.querySelector('.close');
let nav = document.querySelector('.nav');

openMe.addEventListener('click', openClick)
function openClick() {
    nav.classList.remove('hidden')
}
closeMe.addEventListener('click', closeClick) 
function closeClick () {
    nav.classList.add('hidden')
}