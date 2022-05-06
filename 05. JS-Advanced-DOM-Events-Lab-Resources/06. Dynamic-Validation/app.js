function validate() {
   let global = document.querySelector('html')
   const emailRegex = '^[a-z]+[@][a-z]+[.][a-z]+$'
  let func = () => {
      let inputEmail = document.querySelector('#email');
      
      if(inputEmail.value.match(emailRegex))
      {
          inputEmail.className ='';
    }
    else{
          inputEmail.className ='error';     
      }

    
  }

  global.addEventListener('click', func)
}