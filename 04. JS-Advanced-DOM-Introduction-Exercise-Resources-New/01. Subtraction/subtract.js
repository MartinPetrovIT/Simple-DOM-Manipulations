function subtract() {

    let firstNum = document.querySelector('#firstNumber');
    let secondNum = document.querySelector('#secondNumber');
    let res = document.querySelector('#result');
    
    res.textContent = Number(firstNum.value) - Number(secondNum.value)
}