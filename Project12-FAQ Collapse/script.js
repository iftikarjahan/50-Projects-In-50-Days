const toggles=document.querySelectorAll('.faq-toggle')
const cross=document.querySelectorAll('.fa-times')
// console.log(toggles);
toggles.forEach(toggle=>{
    toggle.addEventListener('click',(e)=>{
        // removeActives();
        if(e.target)
        toggle.parentNode.classList.toggle('active');
    })
})
function removeActives(){
    toggles.forEach(toggle=>{
        toggle.parentNode.classList.remove('active');
    })
}