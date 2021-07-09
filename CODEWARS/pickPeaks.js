function pickPeaks(arr) {
  let result = {
    pos: [],
    peaks: [],
  };

  for (i = 1; i < arr.length - 1; i++) {
    const refference = arr[i];
    const checkForSame = arr.slice(i).filter(x => x !== refference);
    if(checkForSame.length == 0) {
        break;
    }
    if (arr[i - 1] <= arr[i] && arr[i] >= arr[i + 1] && arr[i] !== arr[i - 1]) {
      result.pos.push(i);
      result.peaks.push(arr[i]);
    }
  }
  return result;
}

console.log(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2]));


// NETERMINATA - LA ANUMITE PLATOURI , 
// NU DETECTEAZA PEAK-UL CORECT , ENUNTUL PROBLEMEI NU ESTE FOARTE CLAR IN CEEA CE PRIVESTE 
// MODUL IN CARE ESTE CALCULAT UN PEAK
