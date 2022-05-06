function addItem() {
    let ulElem = document.querySelector('main #items');
    console.log(ulElem)
    let text = document.querySelector('#newItemText').value;
    console.log(text)
    let liElem = document.createElement('li');

    liElem.textContent = text;

    ulElem.appendChild(liElem)
}