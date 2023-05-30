const counters=document.querySelectorAll('.counter');

counters.forEach(counter=>{
    counter.innerText='0';
    // Now we need to update the counter and that would be done by a function
    const updateCounter=()=>{
        const target=+counter.getAttribute('data-target');
        const s=+counter.innerText;

        const increment=target/200;

        if(s<target){
            counter.innerText=`${Math.ceil(s+increment)}`;
            setTimeout(updateCounter,1);
        }
        else{
            counter.innerText=target;
        }

    }
    updateCounter();
})