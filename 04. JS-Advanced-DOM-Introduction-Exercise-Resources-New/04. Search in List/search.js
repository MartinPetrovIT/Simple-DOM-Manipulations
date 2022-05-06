function search() {
   let towns = Array.from(document.querySelectorAll("ul li"));
   let search = document.querySelector("#searchText");
   let result = document.querySelector("#result");
   let counter = 0;
   for(let i= 0; i< towns.length; i++)
   {
      let town = towns[i].textContent.toLowerCase();

     if(town.includes(search.value.toLowerCase()) && search.value)
     {
        towns[i].style.fontWeight = 'bold'
        towns[i].style.textDecoration = "underline"
        counter++;
     }   
     else{
      towns[i].style.fontWeight = 'normal'
      towns[i].style.textDecoration = "none"
     }
   }
    result.textContent = `${counter} matches found`

}
