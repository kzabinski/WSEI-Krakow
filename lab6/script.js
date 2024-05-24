document.addEventListener("DOMContentLoaded", () => {
  // Obsługa kliknięcia przycisku
  const clickButton = document.getElementById("clickButton");
  clickButton.addEventListener("click", () => {
    alert("Przycisk został kliknięty!");
    clickButton.textContent = "Kliknięto!";
  });

  // Obsługa wpisywania tekstu
  const textInput = document.getElementById("textInput");
  textInput.addEventListener("input", () => {
    document.getElementById("myParagraph").innerHTML = textInput.value;
  });

  // Manipulacja kolorem div
  const colorBox = document.querySelector(".color-box");
  colorBox.addEventListener("mouseover", () => {
    colorBox.style.backgroundColor = "green";
  });
  colorBox.addEventListener("mouseout", () => {
    colorBox.style.backgroundColor = "red";
  });
});
