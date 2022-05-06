function solve() {
   let allAddButtons = Array.from(document.querySelectorAll('.add-product'))
   let checkoutButton = document.querySelector('.checkout')
   let textarea = document.querySelector('textarea')
   let sum = 0;
   let set = new Set()

   let func = (e) => {
      let productPrice = Number(e.target.parentNode.parentNode.querySelector('.product-line-price').textContent)
      let productName = e.target.parentNode.parentNode.querySelector('.product-details .product-title').textContent
      set.add(productName)
      sum += productPrice
      textarea.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n` 
   }
   let func2 = () => {
      textarea.textContent += `You bought ${Array.from(set).join(', ')} for ${sum.toFixed(2)}.`

      allAddButtons.forEach(x => x.disabled = true)
      checkoutButton.disabled = true
   }
   checkoutButton.addEventListener('click',func2 )
   allAddButtons.forEach(x => x.addEventListener('click',func ))
}