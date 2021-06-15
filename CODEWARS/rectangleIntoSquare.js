function sqInRect(lng, wdth){
  let area = lng * wdth;
  let big;
  let small;
  if(lng > wdth) {
    big = lng;
    small = wdth;
  } else if(wdth > lng) {
      big = wdth;
      small = lng;
  }
  arrayOfSquares = [];
  while (area > big && area > small) {
      arrayOfSquares.push(small);
      area = area - Math.pow(small, 2);

  }

}