function lockedProfile() {
   
   let buttons  = Array.from(document.querySelectorAll('button'))
    
   let func = (e) => {
       
       if(!(e.target.parentNode.children[2].checked))
       {
        console.log(e.target.parentNode.children[10])
        if(e.target.parentNode.children[10].textContent === 'Show more')
        { 
            e.target.parentNode.children[10].textContent = 'Hide it'
            e.target.parentNode.children[9].style.display = 'block'
        }
        else if(e.target.parentNode.children[10].textContent === 'Hide it')
        {
            e.target.parentNode.children[10].textContent = 'Show more'
            e.target.parentNode.children[9].style.display = 'none'
        }
    }
       
   }
   buttons.forEach( x => x.addEventListener('click', func))



}