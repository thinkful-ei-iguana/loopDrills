function max(numbers){
    let currentMax = numbers[0];
    while (currentMax < numbers.length){
        let i = 0;
        currentMax++;
        if(numbers[i] > currentMax){
    currentMax = numbers[i];
}
}
return currentMax;
}
function min(numbers){
    let currentMin = numbers[0];
    while (currentMin < numbers.length){
        let i = 0;
        currentMin++;
    if (numbers[i] <= currentMin){
     numbers[i] = currentMin;
}
}
return currentMin;
}
console.log(min([4, 5, 6]));