function create(words) {
  
   let mainDiv = document.querySelector('#content')
   for(let i = 0; i < words.length; i++)
   {
        let div = document.createElement('div');
        let p = document.createElement('p');
        p.textContent = words[i];
        p.style.display = 'none'
        div.addEventListener('click', (e) => {
          e.target.children[0].style.display ='inline';
        })
        div.appendChild(p)
         mainDiv.appendChild(div);
   }
}