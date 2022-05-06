function extractText() {
  let elements =  document.querySelector('ul');
  let area = document.getElementById("result");

  area.textContent = elements.textContent;
}