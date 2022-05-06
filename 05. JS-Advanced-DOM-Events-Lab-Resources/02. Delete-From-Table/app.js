function deleteByEmail() {
    let emailsElements = document.querySelectorAll('tbody tr td:nth-of-type(2)');
    let input = document.querySelector('[name="email"]');
    let result = document.querySelector('#result')
    emailsElements =  Array.from(emailsElements)
    let e = emailsElements.find(x => x.textContent == input.value);
       if(e)
       {
           e.parentNode.remove();
           result.textContent = "Deleted.";
       }
       else{
        result.textContent = "Not found.";
       }

}