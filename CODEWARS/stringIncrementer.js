function incrementString(strng) {
  const original = strng;
  let extractLetters = strng.match(/(\D+)/);
  let extractZeros = strng.match(/(0+)/);
  let extractNumbers = strng.match(/([1-9]+)/);
  if (!extractZeros && !extractNumbers) {
    const letters = extractLetters[1];
    return letters + "1";
  } else if (!extractLetters && !extractZeros) {
    return (Number(extractNumbers[1]) + 1).toString();
  } else if (!extractLetters) {
    let zeros = extractZeros[1];
    let number = extractNumbers[1];
    const incrementedNumber = (Number(number) + 1).toString();
    if (number.length === incrementedNumber.length) {
      return zeros + incrementedNumber;
    } else {
      zeros = zeros.substring(0, zeros.length - 1);
      return zeros + incrementedNumber;
    }
  } else if (!extractNumbers) {
    const letters = extractLetters[1];
    const zeros = extractZeros[1];
    const lastZero = zeros.charAt(zeros.length - 1);
    const firstZeros = zeros.substring(0, zeros.length - 1);
    return letters + firstZeros + (Number(lastZero) + 1).toString();
  } else if (!extractZeros) {
    const letters = extractLetters[1];
    const number = extractNumbers[1];
    return letters + (Number(number) + 1).toString();
  } else {
    const letters = extractLetters[1];
    let zeros = extractZeros[1];
    const number = extractNumbers[1];
    const incrementedNumber = (Number(number) + 1).toString();
    if (number.length === incrementedNumber.length) {
      return letters + zeros + incrementedNumber;
    } else {
      zeros = zeros.substring(0, zeros.length - 1);
      return letters + zeros + incrementedNumber;
    }
  }
}

console.log(incrementString("099"));
