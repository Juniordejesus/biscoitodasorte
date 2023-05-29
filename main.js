const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const btn1 = document.querySelector('.btn1');
const img1 = document.querySelector(".img1");



img1.addEventListener('click', function()
{
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
})

btn1.addEventListener('click', function(){
screen1.classList.toggle("hide")
screen2.classList.toggle("hide")
})