const jokeBtn=document.getElementById('jokeBtn');
const joke=document.getElementById('joke');
jokeBtn.addEventListener('click',getJoke);

// Using async await
async function getJoke(){
    const config={
        headers:{
            Accept:'application/json',
        }
    }

    const res=await fetch('https://icanhazdadjoke.com/',config);
    const data=await res.json();
    joke.innerHTML=data.joke;
}

// Using fetch
// function getJoke(){
//     const config={
//         headers:{
//             Accept:'application/json',
//         }, 
//     }

//     fetch('https://icanhazdadjoke.com/',config)
//     .then(res=>res.json())
//     .then(data=>{
//         joke.innerHTML=data.joke;
//     })
// }

