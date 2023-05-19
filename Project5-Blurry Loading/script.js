const loadText=document.querySelector('.loading-text');
const bg=document.querySelector('.bg');
let load=0;
const int=setInterval(blurring,30);
function blurring(){
    load++;
    if(load>99){
        clearInterval(int);
    }
    // console.log(load);
    loadText.innerText=`${load}%`;
    loadText.style.opacity=mapRange(load,0,100,0,1);
    bg.style.filter=`blur(${mapRange(load,0,100,30,0)}px)`;
}

function mapRange(value, oldMin, oldMax, newMin, newMax) {
    return ((value - oldMin) * (newMax - newMin)) / (oldMax - oldMin) + newMin;
}
// const val=mapRange(45,1,100,0,1);
// console.log(val);