function toggle() {
    let element = document.querySelector("div .button")
    console.log(element)
    let extra = document.querySelector("#extra");
    console.log(extra)
   console.log(extra.display)
    if( extra.style.display === "block")
    {
        element.textContent = "More"
        
        extra.style.display = "none";
    }
    else
    {
        element.textContent = "Less"
        
        extra.style.display = "block";
        
    }
}