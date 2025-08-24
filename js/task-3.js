const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");
nameInput.addEventListener("input", (event) => {
  const clearValue = event.currentTarget.value.trim();
  if (clearValue === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = clearValue;
  }
});
