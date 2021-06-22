function race(v1, v2, g) {
    if(v1 >= v2) {
        return null;
    }
    v1perSecond = v1 / 3600;
    v2perSecond = v2 / 3600;
    let position1 = g;
    let position2 = 0;
    time = 0;
    while(position1 > position2) {
        position1 += v1perSecond;
        position2 += v2perSecond;
        time++;
    }
    time--;
    let hours, minutes, seconds;
    if(time < 3600) {
        hours = 0;
        minutes = Math.floor(time / 60);
        seconds = Math.floor(time % 60);
        console.log(hours, minutes, seconds)
    } else if (time > 3600) {
        hours = Math.floor(time / 3600);
        minutes = Math.floor((time - (hours * 3600)) / 60 );
        seconds = Math.floor(time % 60);
    }
    let result = [hours, minutes, seconds];
    return result;


}

console.log(race(80, 100, 40));
