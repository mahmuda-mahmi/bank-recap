function getInputFieldById(inputId) {
       const inputField = document.getElementById(inputId);
       const inputFieldValueString = inputField.value;
       const inputFieldValue = parseFloat(inputFieldValueString);
       inputField.value = '';
       return inputFieldValue;
}

function getValueById(elementId) {
       const element = document.getElementById(elementId);
       const elementValueString = element.innerText;
       const elementValue = parseFloat(elementValueString);
       return elementValue;
}

function setElementValueById(elementId, newValue) {
       const textElement = document.getElementById(elementId);
       textElement.innerText = newValue;
}




