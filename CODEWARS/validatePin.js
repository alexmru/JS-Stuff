function validatePIN (pin) {
  let regx = /^\d{4}$|^\d{6}$/;
  if (regx.test(pin)) {
    return true;
  } else {
      return false;
  }
}

console.log(validatePIN("1234"))