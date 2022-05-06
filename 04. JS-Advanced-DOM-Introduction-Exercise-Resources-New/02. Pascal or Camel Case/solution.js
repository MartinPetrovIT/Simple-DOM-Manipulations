function solve() {
  let text =document.querySelector('#text');

  let caseType =  document.querySelector('#naming-convention'); 

  let result = document.querySelector('#result')
  if(caseType.value == 'Camel Case')
  {
    text.value =  text.value.split(" ");

    text.value = text.value.forEach(x => x[0].toUpperCase());
     
     
     console.log(text.value)


     

  }
  else if(caseType.value == 'Pascal Case')
  {
    result.textContent = text.value.split(" ").forEach(element => {
      element[0].toUpperCase()
    })  
    
  }

  else{
    result.textContent = "Error!"
  }
}
