function jadenCasing(str) {
    let strArray = str.split(' ');
    let jadenArray = strArray.map(n => n.charAt(0).toUpperCase() + n.slice(1));
    return jadenArray.join(' ');
}

console.log(jadenCasing("Ana are mere!"));