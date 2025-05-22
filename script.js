
const temperatureInput = document.getElementById('temperature');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');


function toggleButtonState() {
  convertBtn.disabled = !(temperatureInput.value && fromUnit.value && toUnit.value);
}

temperatureInput.addEventListener('input', toggleButtonState);
fromUnit.addEventListener('change', toggleButtonState);
toUnit.addEventListener('change', toggleButtonState);


function convertTemperature(value, from, to) {
  if (from === to) return value;

  let celsius;

  
  if (from === "Fahrenheit") {
    celsius = (value - 32) * (5 / 9);
  } else if (from === "Kelvin") {
    celsius = value - 273.15;
  } else {
    celsius = value;
  }

  
  if (to === "Fahrenheit") {
    return celsius * 9 / 5 + 32;
  } else if (to === "Kelvin") {
    return celsius + 273.15;
  } else {
    return celsius;
  }
}


convertBtn.addEventListener('click', () => {
  const temp = parseFloat(temperatureInput.value);
  const from = fromUnit.value;
  const to = toUnit.value;

  const converted = convertTemperature(temp, from, to);
  resultDiv.textContent = `${temp} ${from} is ${converted.toFixed(2)} ${to}`;
});