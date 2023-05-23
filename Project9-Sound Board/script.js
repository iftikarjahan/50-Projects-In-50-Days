const sounds=['afterhours','betOnMe','brief','mockingbird','LaboonKo','miAmor','OffBeat','TumHiHo','Diamond','Dilawara'];

// Now you need to loop through the sound array and create as many buttons as many ids
sounds.forEach(sound=>{
    const btn=document.createElement('button');
    btn.classList.add('btn');
    btn.innerText=sound;
    btn.addEventListener('click',()=>{
        // Before playing the new song, we need to stop the previous song
        stopPrevSong();
        document.getElementById(sound).play();
    })
    document.querySelector('.btns').appendChild(btn);
})
function stopPrevSong(){
    sounds.forEach(sound=>{
        const song=document.getElementById(sound);
        song.pause();
        song.currentTime=0;
    })
}