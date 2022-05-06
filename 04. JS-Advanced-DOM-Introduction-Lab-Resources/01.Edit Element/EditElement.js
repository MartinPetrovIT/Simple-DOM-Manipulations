function editElement(element, replaced, replacer) {
    while(element.textContent.includes(replaced)){
        element.textContent = element.textContent.replace(replaced, replacer)
    }
}
