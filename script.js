function changeJustifyContent() {
  const selectedValue = document.getElementById("justify-content").value;
  document.getElementById("flex-container").style.justifyContent =
    selectedValue;
}
