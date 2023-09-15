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
const result = document.getElementById("result");

validateButton.addEventListener("click", () => {
  const inputText = jsonInput.value;
  if (isJSONValid(inputText)) {
    result.textContent = "A JSON érvényes.";
  } else {
    result.textContent = "A JSON érvénytelen.";
  }
});