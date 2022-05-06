function addItem() {
    let text = document.querySelector('#newItemText')
    let value = document.querySelector('#newItemValue')
    let dropdown = document.querySelector('#menu')

    let option = document.createElement('option')

    option.value = value.value
    option.textContent = text.value

    dropdown.appendChild(option)

    text.value = ''
    value.value = ''
}