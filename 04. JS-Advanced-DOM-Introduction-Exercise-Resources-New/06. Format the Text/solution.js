function solve() {
  let text = document.querySelector("textarea").value;  
  let result =  document.querySelector("#output");
 
   let sentences = text.split('.').filter(s => s)

   while(sentences.length > 0)
   {
    let curText = sentences.splice(0,3).join('.') +'.';
    let p = document.createElement('p');
    p.textContent = curText;

    result.appendChild(p);

   }
  
  

}