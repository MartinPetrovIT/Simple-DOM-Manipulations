function focused() {
    let body = document.querySelector('body')
    
   let focuseElement = (event) =>{
        if(event.target.nodeName == 'INPUT')
        {
            event.target.parentNode.classList.add("focused");
        }
        else{
            document.querySelectorAll('div div').forEach(x => x.parentNode.classList.remove("focused"))
        }
    }
    
    let unfocuseElement = (event) => {
     let inputs = document.querySelectorAll('div div input')
     for (let input of inputs) {
         if(input != event.target)
         {
                input.parentNode.classList.remove("focused")
         }
        }
    }
   
        body.addEventListener('click',focuseElement);
        body.addEventListener('click', unfocuseElement);
    


}