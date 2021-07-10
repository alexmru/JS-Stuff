function cakes(recipe, available) {
    if(Object.keys(recipe).length > Object.keys(available).length) {
        return 0;
    }
    let recipeArray =[];
    Object.keys(recipe).forEach((x, index) => {
        let values = Object.values(recipe);
        recipeArray.push([x, values[index]])
    });
    let availableArray =[];
    Object.keys(available).forEach((x, index) => {
        let values = Object.values(available);
        availableArray.push([x, values[index]])
    });
    let times = [];
    for(i=0; i< availableArray.length; i++) {
        let item = availableArray[i][0];
        let availableQty = availableArray[i][1];
        if(Object.keys(recipe).includes(item)){
            let recipeItem = recipeArray.filter(x => x.includes(item))[0];
            let recipeQty = recipeItem[1];
            let cookingTimes = Math.floor(availableQty / recipeQty);
            if(cookingTimes > 0) {
                times.push(cookingTimes);
            } else {
                return 0;
            }
        }
    }
    return Math.min(...times);
  }

  console.log(cakes({apples:3,flour:300,sugar:150,milk:100,oil:100}, {sugar:500,flour:2000,milk:2000,apples:15,oil:20}))