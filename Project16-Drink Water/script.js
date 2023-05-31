const smallCups=document.querySelectorAll('.cup-small');
const remained=document.getElementById('remained');
const litersRem=document.querySelector('.liters');
const percentage=document.getElementById('percentage');


updateBigCup();
smallCups.forEach((cup,idx)=>{
    cup.addEventListener('click',()=>highlightCups(idx));
})

function highlightCups(idx){
    if(smallCups[idx].classList.contains('full') && !smallCups[idx+1].classList.contains('full')){
        idx--;
    }
    // This function would highlight cups upto the idx
    smallCups.forEach((cup,idx2)=>{
        if(idx2<=idx){
            cup.classList.add('full');
        }
        else{
            cup.classList.remove('full');
        }
    })
    updateBigCup();
}

function updateBigCup(){
    /*
    ->We need to figure out how much portion of the big cup is filled depending on the no of small cups
    */ 
   const cupsFilled=document.querySelectorAll('.cup-small.full').length;
   const totalCups=smallCups.length;
   const  percentageFilled=(cupsFilled/totalCups)*100;
   const litersRemaining=2 -((cupsFilled*250)/1000);
   const percentOfHeight=(cupsFilled/totalCups)*330;

    //Now we need to do the changes in the UI
    if(cupsFilled===0){
        percentage.style.height=0;
        percentage.style.visibility='hidden';
    }
    else{
        percentage.style.visibility='visible';
        percentage.style.height=`${percentOfHeight}px`;
        percentage.innerText=`${percentageFilled}%`;  
    }

    if(cupsFilled===totalCups){
        remained.style.visibility='hidden';
        remained.style.height=0;
    }
    else{
        remained.style.visibility='visible';
        litersRem.innerText=`${litersRemaining}L`;
    }
      


}