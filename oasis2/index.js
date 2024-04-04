const convertBtn = document.getElementById("convert-btn");
const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");
const celsiusOutput = document.getElementById("celsius-output");
const fahrenheitOutput = document.getElementById("fahrenheit-output");
const kelvinOutput = document.getElementById("kelvin-output");

convertBtn.addEventListener("click", function() {
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const kelvin = parseFloat(kelvinInput.value);

    if (!isNaN(celsius)) {
        fahrenheitInput.value = (celsius * 9/5) + 32;
        kelvinInput.value = celsius + 273.15;
    } else if (!isNaN(fahrenheit)) {
        celsiusInput.value = (fahrenheit - 32) * 5/9;
        kelvinInput.value = (fahrenheit - 32) * 5/9 + 273.15;
    } else if (!isNaN(kelvin)) {
        celsiusInput.value = kelvin - 273.15;
        fahrenheitInput.value = (kelvin - 273.15