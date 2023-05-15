function randomInteger(min,max) {
    let rand = min - 0.5 + Math.random()* (max - min +1);
    return Math.floor(rand);
}
alert(randomInteger(1,3));