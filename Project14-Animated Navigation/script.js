const nav=document.getElementById('nav');
const btn=document.querySelector('.icon');

btn.addEventListener('click',()=>{
    nav.classList.toggle('active');
})