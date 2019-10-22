'use strict'
function repeat(fn, n){
    for(i = 0; i < n; i++){
        fn();
}
}
function hello(){
    console.log('Hello world');
}
function goodbye(){
    console.log('Goodbye world');
}


function filter(arr, fn) {
    const newArray = [];
    for(i= 0; i < arr.length; i++){
        if(fn(arr[i]) === true){
            newArray.push(arr[i]);
        }
    }
 return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];
// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES


function hazardWarningCreator(typeOfWarning){
    let warningCounter = 0;
    return function(location){
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
    }
    }
    const rocksWarning = hazardWarningCreator('Rocks on the Road');
    const landSlide = hazardWarningCreator("Landslide");
    const tornadoes = hazardWarningCreator("Huge Tornadoes");
    rocksWarning("Main Street and Grim Street");
    landSlide("Dirt Road and Soggy Canyon");
    tornadoes("Windy Street and Barebones Road");