'use strict'
// function repeat(fn, n){
//     for(i = 0; i < n; i++){
//         fn();
// }
// }
// function hello(){
//     console.log('Hello world');
// }
// function goodbye(){
//     console.log('Goodbye world');
// }


// function filter(arr, fn) {
//     const newArray = [];
//     for(i= 0; i < arr.length; i++){
//         if(fn(arr[i]) === true){
//             newArray.push(arr[i]);
//         }
//     }
//  return newArray;
// }

// // DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// // First we setup an array of strings we plan to filter:
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];
// // We use your `filter` function here, capturing a new array into `filteredNames`
// // comprised of names that only begin with 'R'
// const filteredNames = filter(myNames, function(name) {
//     // This is known as a "predicate function" - it's a function that 
//     // only returns a boolean
//     return name[0] === 'R';
// });

// console.log(filteredNames) // => ['Rich', 'Ray']
// // <---- DO NOT EDIT BETWEEN THESE LINES


// function hazardWarningCreator(typeOfWarning){
//     let warningCounter = 0;
//     return function(location){
//         warningCounter++;
//         console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
//         console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
//     }
//     }
//     const rocksWarning = hazardWarningCreator('Rocks on the Road');
//     const landSlide = hazardWarningCreator("Landslide");
//     const tornadoes = hazardWarningCreator("Huge Tornadoes");
//     rocksWarning("Main Street and Grim Street");
//     landSlide("Dirt Road and Soggy Canyon");
//     tornadoes("Windy Street and Barebones Road");

    // let turtleMoves = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
    // let newMoves = turtleMoves.filter(function(list){ 
    //     return list[0] >= 0 && list[1] >= 0;});
    // console.table(newMoves);
    // let totalMoves = newMoves.map(function(pair){
    //     return pair[0] + pair[1];
    // });
    // console.log(totalMoves);
    // let eachMoves = totalMoves.forEach(function(step){
    //      return 
    // });
    // console.log(eachMoves);

   
    const oldString = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
    let newArray = oldString.split(' ');
    newArray.reduce(function(word){
        if(word.length === 3){
            return acummulator + ' ';
        }else{
            return accumulator + word[word.length -1].toUpperCase;
        }
    })