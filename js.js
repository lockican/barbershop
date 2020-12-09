btn = document.getElementById('menu_user');
user = document.querySelector('.user_block');
closeLog = document.querySelector('.close');
closeMap = document.querySelector('.close-map');
mapBtn = document.querySelector('.button--map')
map = document.querySelector('.map')
 
btn.addEventListener('click',  ()=>{
    event.preventDefault();
    user.classList.add('actived')
})

closeLog.addEventListener('click', ()=>{
    event.preventDefault();
    user.classList.remove('actived')
})

mapBtn.addEventListener('click',  ()=>{
    event.preventDefault();
    map.classList.add('actived')
})

closeMap.addEventListener('click', ()=>{
    event.preventDefault();
    map.classList.remove('actived')
})