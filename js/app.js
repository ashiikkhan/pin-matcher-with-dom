function generatePin() {
  const randomPin = Math.round(Math.random() * 10000);
  return randomPin;
}
function getPin() {
  const pin = generatePin();
  const stringifyPin = pin.toString();
  if (stringifyPin.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}
const pinGenerateBtn = document.getElementById('pin-generate-btn');
pinGenerateBtn.addEventListener('click', function () {
  const pin = getPin();
  const displayEl = document.getElementById('display-pin');
  displayEl.value = pin;
});
