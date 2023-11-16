function isJSONValid(jsonText) {
  try {
    JSON.parse(jsonText);
    return true;
  } catch (error) {
    return false;
  }
}

const jsonInput = document.getElementById("jsonInput");
const validateButton = document.getElementById("validateButton");
const beautifierButton = document.getElementById("beautifierButton");
const result = document.getElementById("result");


let jsonInputValue = ""

validateButton.addEventListener("click", () => {
  const jsonInputValue = jsonInput.value;
  if (isJSONValid(jsonInputValue)) {
    result.textContent = "A JSON érvényes.";
  } else {
    result.textContent = "A JSON érvénytelen.";
  }
});


beautifierButton.addEventListener("click", () => {
  jsonInputValue = jsonInput.value;
  try {
    const data = JSON.parse(jsonInputValue);
    const beautifiedJSON = JSON.stringify(data, null, 2);
    jsonInput.value = beautifiedJSON;
  } catch (error) {
alert("valami nem jó")
  }
});