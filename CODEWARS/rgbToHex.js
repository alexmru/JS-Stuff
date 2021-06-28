function rgb(r, g, b){
    function colorToHex(color) {
        if(color > 255) {
            color = 255;
        }
        if(color < 0) {
            color = 0;
        }
        let hex = color.toString(16);
        return hex.length === 1 ? '0' + hex : hex 
    }

    return (colorToHex(r) + colorToHex(g) + colorToHex(b)).toUpperCase();

}

console.log(rgb(0, 0, -20));