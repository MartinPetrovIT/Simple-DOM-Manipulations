function elementsIterator(items) {
  for (let item of items) {
      shadowDomCheck(item)
  }
}

function shadowDomCheck(element) {
  if (element.shadowRoot) {
      if (element.shadowRoot.childNodes) {
          for (i = 0; i < element.shadowRoot.querySelectorAll("ing-button").length; i++) {
              if (element.shadowRoot.querySelectorAll("ing-button")[i].textContent.includes("Pomiń")) {
                  element.shadowRoot.querySelectorAll("ing-button")[i].click();
                  listShadowElements.push(element.shadowRoot.querySelectorAll("ing-button")[i]);
              }
          }
          elementsIterator(element.shadowRoot.childNodes);
      };
  }
  if (element.childNodes) {
      elementsIterator(element.childNodes);   
  }
}

var listShadowElements = [];
function a()
{
try {
  elementsIterator(document.querySelectorAll(".global-overlays"));
  return listShadowElements;
} catch (e) {
  return e;
}
}