const container=document.querySelector('.container');
const left=document.querySelector('.left');
const right=document.querySelector('.right');


left.addEventListener('mouseenter',()=>{
    container.classList.add('spread-left');
})
left.addEventListener('mouseleave',()=>{
    container.classList.remove('spread-left');
})
right.addEventListener('mouseenter',()=>{
    container.classList.add('spread-right');
})
right.addEventListener('mouseleave',()=>{
    container.classList.remove('spread-right');
})


