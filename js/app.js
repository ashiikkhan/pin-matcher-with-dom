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
// deligattion:
const calculator = document.getElementById('calculator');
calculator.addEventListener('click', function (event) {
  const number = event.target.innerText;
  const typedNumberField = document.getElementById('number-field');
  const previousTypedNumber = typedNumberField.value;
  if (isNaN(number)) {
    if (number === 'C') {
      typedNumberField.value = '';
    } else if (number === '<') {
      const digits = previousTypedNumber.split('');
      digits.pop();
      const remainningDigits = digits.join('');
      typedNumberField.value = remainningDigits;
    }
  } else {
    const newTypedNumber = previousTypedNumber + number;
    typedNumberField.value = newTypedNumber;
  }
});
// pin match

const verifyBtn = document.getElementById('verify-pin');
verifyBtn.addEventListener('click', function () {
  const generatedPin = document.getElementById('display-pin').value;
  const typedPin = document.getElementById('number-field').value;

  const incorrectPinMessage = document.getElementById('incorrect-pin');
  const correctPinMessage = document.getElementById('correct-pin');
  if (generatedPin === typedPin) {
    correctPinMessage.style.display = 'block';
    incorrectPinMessage.style.display = 'none';
  } else {
    incorrectPinMessage.style.display = 'block';
    correctPinMessage.style.display = 'none';
  }
});
// refresh button :
document.getElementById('refresh-btn').addEventListener('click', function () {
  document.getElementById('display-pin').value = '';
  document.getElementById('number-field').value = '';
  document.getElementById('correct-pin').style.display = 'none';
  document.getElementById('incorrect-pin').style.display = 'none';
});
