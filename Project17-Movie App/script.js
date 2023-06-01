const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const form=document.getElementById('form');
const serch=document.querySelector('.search');
const main=document.getElementById('main');

getMovies(API_URL);
async function getMovies(url){
    main.innerHTML='';
    const res=await fetch(url);
    const data=await res.json();
    console.log(data.results);
    showMovies(data.results);
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const searchItem=serch.value;
    if(searchItem && searchItem!==''){
        getMovies(SEARCH_API + searchItem); 
        serch.value='';
    }
    else{
        window.location.reload();
    }
})

// Adding Movies To DOM
/*
->The argument in the function is the movies array whose information needs to be displayed in the DOM
*/ 
function showMovies(movies){
    movies.forEach(movie=>{
        // In order to extract certain properties, we need to destructure the object we are getting
        const {title,poster_path,vote_average,overview}=movie;
        const individualMovie=document.createElement('div');
        individualMovie.classList.add('movie');
        individualMovie.innerHTML=
        `
        <img
          src="${IMG_PATH+poster_path}"
        />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${returnClass(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>${overview}</h3>
        </div>
        `
        main.appendChild(individualMovie);
    })
}
function returnClass(vote){
    if(vote>=8){
        return 'green';
    }
    else if(vote>=5){
        return 'orange';
    }
    else{
        return 'red';
    }
}