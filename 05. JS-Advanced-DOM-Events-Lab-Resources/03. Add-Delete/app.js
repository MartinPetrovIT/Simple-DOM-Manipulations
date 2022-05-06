function addItem() {
    let text = document.querySelector('#newItemText');
    let ul = document.querySelector('#items');

    const deleteFunc = (e) => {e.target.parentNode.remove()}
    
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.href = "#";

    a.addEventListener('click', deleteFunc )
    a.textContent = '[Delete]'
    li.textContent = text.value;
    li.appendChild(a);

    ul.appendChild(li);


}