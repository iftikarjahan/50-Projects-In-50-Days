const labels=document.querySelectorAll('label');
// console.log(labels);
// Now we need to convert the words in an individual span
labels.forEach(label=>{
    label.innerHTML=label.innerText.split('').map((letter,idx)=>`<span style="transition-delay:${idx*50}ms">${letter}</span>`).join('');
})
console.log(10);