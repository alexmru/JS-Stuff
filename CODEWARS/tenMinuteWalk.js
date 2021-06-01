function isValidWalk(walk) {
    console.log(walk);
    if(walk.length !== 10) {
        return false;
    }
    let tenWalk = walk.map(x => {
        switch(x) {
            case 'n':
                return 1;
                break;
            case 's':
                return -1;
                break;
            case 'w':
                return 2;
                break;
            case 'e':
                return -2;
                break;
        }
    }).reduce((a, b) => a + b);
    return tenWalk === 0 ? true : false;
  }

console.log(isValidWalk(['n', 's', 'e', 'w', 's', 's', 'n', 'e', 'w', 'n']));