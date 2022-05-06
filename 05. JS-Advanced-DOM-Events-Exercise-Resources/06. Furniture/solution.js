function solve() {
  
  let textareas = document.querySelectorAll('textarea');
  let textareaInput = textareas[0]
  let buttons =  document.querySelectorAll('button')
  let generateButton = buttons[0];
  
  let func = () => {
    let arrOfObj = JSON.parse(textareaInput .value)
    for(obj of arrOfObj)
    {
      let tr = document.createElement('tr')
  
      let tdForImg = document.createElement('td')
      let imgEl = document.createElement('img')
      imgEl.src = obj.img
      tdForImg.appendChild(imgEl)
  
      let tdForName = document.createElement('td')
      let nameP = document.createElement('p')
      nameP.textContent = obj.name
      tdForName.appendChild(nameP)
  
      let tdForPrice = document.createElement('td')
      let priceP = document.createElement('p')
      priceP.textContent = obj.price
      tdForPrice.appendChild(priceP)
  
      let tdForDecFactor = document.createElement('td')
      let decFactorP = document.createElement('p')
      decFactorP.textContent = obj.decFactor
      tdForDecFactor.appendChild(decFactorP)
      
      let tdForCheckbox = document.createElement('td')
      let inputEl = document.createElement('input')
      inputEl.type = 'checkbox'
      tdForCheckbox.appendChild(inputEl)
  
      tr.appendChild(tdForImg)
      tr.appendChild(tdForName)
      tr.appendChild(tdForPrice)
      tr.appendChild(tdForDecFactor)
      tr.appendChild(tdForCheckbox)
      document.querySelector('tbody').appendChild(tr)
    }
  
  }
  generateButton.addEventListener('click', func)
  
  
  let buyButton = buttons[1]
  let arrOfNames = [];
  let totalPrice = 0;
  let avgDecFactor = 0;
  let textareaOutput = textareas[1];
  let func2 = () =>{
   let allTr = document.querySelectorAll('tbody tr')
    
   for(tr of allTr)
   {
      if(tr.querySelector('input[type="checkbox"]').checked)
      {
        tr.querySelector('input[type="checkbox"]').checked = false
        let allP = tr.querySelectorAll('p')
        console.log(allP)
        arrOfNames.push(allP[0].textContent)
        totalPrice += Number(allP[1].textContent)
        avgDecFactor += Number(allP[2].textContent)
  
      }
   }
   textareaOutput.value += `Bought furniture: ${arrOfNames.join(', ')} \n` 
   textareaOutput.value += `Total price: ${totalPrice.toFixed(2)}  \n` 
   textareaOutput.value += `Average decoration factor: ${(avgDecFactor / arrOfNames.length)}` 
   arrOfNames =[]
   totalPrice =0
   avgDecFactor = 0
  }
  buyButton.addEventListener('click', func2)
  
  }