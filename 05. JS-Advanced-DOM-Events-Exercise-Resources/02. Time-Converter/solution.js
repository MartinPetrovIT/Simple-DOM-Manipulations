function attachEventsListeners() {
 
    let buttons = document.querySelectorAll('input[type="button"]');
 
    for (let button of buttons) {
        button.addEventListener("click", convert);
    }
 
    function convert(e) {
 
        let type = e.target.parentNode.children[1].id;
        let value = Number(e.target.parentNode.children[1].value);
 
        let seconds = 0;
 
        switch (type) {
            case"days":
                seconds = value * 24 * 60 * 60;
                break;
            case"hours":
                seconds = value * 60 * 60;
                break;
            case"minutes":
                seconds = value * 60;
                break;
            case"seconds":
                seconds = value;
                break;
        }
 
        let minutes = seconds / 60;
        let hours = minutes / 60;
        let days = hours / 24;
 
        document.querySelector("#days").value = days;
        document.querySelector("#hours").value = hours;
        document.querySelector("#minutes").value = minutes;
        document.querySelector("#seconds").value = seconds;
    }
}