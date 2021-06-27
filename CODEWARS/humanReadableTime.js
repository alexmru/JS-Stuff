function humanReadable(seconds) {
    let totalHours = (Math.floor(seconds / 3600)).toString();
    let remainingSeconds = seconds % 3600;
    let totalMinutes = (Math.floor(remainingSeconds / 60)).toString();
    let totalSeconds = (remainingSeconds % 60).toString();
    totalHours.length === 1 ? totalHours = "0"+totalHours : totalHours;
    totalMinutes.length === 1 ? totalMinutes = '0' + totalMinutes : totalMinutes;
    totalSeconds.length === 1 ? totalSeconds = '0' + totalSeconds : totalSeconds;
    return `${totalHours}:${totalMinutes}:${totalSeconds}`;
}


console.log(humanReadable(86400));

/// SAU varianta prin care creem o functie pentru a nu mai folosi 3 IF-uri

// function humanReadable(seconds) {
//     var hours = parseInt( seconds / 3600 ) ;
//     var minutes = parseInt( seconds / 60 ) % 60;
//     var seconds = seconds % 60;
    
//     var pad = function(val){
//       return val < 10 ?"0"+val:val;
//     }
    
//     return pad(hours) + ":" +pad(minutes) + ":" + pad(seconds);
//     }