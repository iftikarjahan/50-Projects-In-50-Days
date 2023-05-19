const boxes=document.querySelectorAll('.box');
window.addEventListener('scroll',checkBoxes);

function checkBoxes(){
    console.log(window.innerHeight);

    /*
    ->If the top coordinates of any element is less than the height of the screen, then the 
    boxes must display them
    */ 
    const triggerBottom=window.innerHeight/5 * 4;
    boxes.forEach((box)=>{
        const rect=box.getBoundingClientRect();
        // if(rect.top===0){
        //     box.classList.remove('show');
        // }
        if(rect.top<triggerBottom){
            box.classList.add('show');
        }
        else{
            box.classList.remove('show');
        }
    })
    
}