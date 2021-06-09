function towerBuilder(nFloors) {
  let star = '*';
  let stars =[];
  let starCount = 1; 
  for(i=1;i<=nFloors;i++){
    stars.push(star.repeat(starCount));
    starCount += 2;
  }
  let maxLength = stars[stars.length-1].length;
  let space = ' ';
  let result = [];
  for(i=0; i<stars.length; i++) {
    let spaceCount = space.repeat((maxLength - stars[i].length) / 2);
    let item = spaceCount + stars[i] + spaceCount;
    result.push(item);
  }
  return result;
}

console.log(towerBuilder(6));