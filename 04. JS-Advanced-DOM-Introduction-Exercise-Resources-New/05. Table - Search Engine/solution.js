function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let allTextContent = document.querySelectorAll("tbody tr");
   let searchText = document.querySelector("#searchField");
   console.log(allTextContent)
   console.log(searchText)
    
   function onClick() {
      for(let elem of allTextContent)
      {
        elem.classList.remove('select')
        if(searchText.value && elem.textContent.includes(searchText.value))
         {
            elem.className = 'select'
         }
      }
      searchText.value = ''

   }
}