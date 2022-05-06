function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');
 
    const func = (e) =>  {
        let position = e.offsetX / (e.target.clientWidth - 1);
        let percentage = Math.trunc(position * 100);   
        resultElement.textContent = `${percentage}%`;
    }
    gradientElement.addEventListener('mousemove',func);
  
 
}