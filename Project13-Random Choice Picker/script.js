const tagsEl=document.getElementById('tags');
const textArea=document.getElementById('textarea');

textArea.focus();

textArea.addEventListener('keyup',(e)=>{
    createTags(e.target.value);
    if(e.key==='Enter'){
        setTimeout(()=>{
            e.target.value='';
        },10)
        randomSelect(); //this function would select a tag randomly
    }
})

function randomSelect(){
    const times=30;

    // This is doing the work of highlighting and unhighlighting the tag after every 100ms
    const interval=setInterval(()=>{
        const randomTag=pickRandomTag();
        hilightTag(randomTag);
        setTimeout(()=>{
            unhighlightTag(randomTag);
        },100);
    },100)

    // Now we need to stop at a random tag
    setTimeout(()=>{
        clearInterval(interval);
        setTimeout(()=>{
            const randomTag=pickRandomTag();
            hilightTag(randomTag);
        },100)

    },times*100)
}
function pickRandomTag(){
    const tags=document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}
function hilightTag(tag){
    tag.classList.add('highlight');
}
function unhighlightTag(tag){
    tag.classList.remove('highlight');
}
function createTags(input){
    const tags=input.split(',').filter(tag=>tag.trim()!=='').map(tag=>tag.trim());
    console.log(tags);

    tagsEl.innerHTML='';
    tags.forEach(tag => {
        const tagEl=document.createElement('span');
        tagEl.innerText=tag;
        tagEl.classList.add('tag');
        tagsEl.appendChild(tagEl);
    });

}