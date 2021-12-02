const fs = require('fs')

fs.readFile('input.txt', 'utf8' , (err, data) => {
    if(err) throw err;
    let array = data.toString().split("\n");
    console.log(array);
    //compareTwo(array);
    compareSum(array);
})

//Puzzle 1
//Answer 1553
function compareTwo(array){
    increased = 0;
    decreased = 0;
    counter = 0;
    for(i=0; i < array.length + 1; i++){
        if(array[i+1] > array[i]){
            //console.log(array[i+1] + " is larger than " + array[i] + " =====>>>> INCREASED");
            increased++;
        } else {
            //console.log(array[i+1] + " is smaller than " + array[i] + " =====>>>> DECREASED");
            decreased++;
        }
        counter++;
    }
    console.log("INCREASED TOTAL ========>>>>> " + increased);
    console.log("DECREASED TOTAL ========>>>>> " + decreased);
}

//Puzzle 2
//Answer 1597
function compareSum(array){
    increased = 0;
    decreased = 0;
    counter = 0;
    for(i=0; i < array.length + 1; i++){
        if((Number(array[i+1]) + Number(array[i+2]) + Number(array[i+3])) > (Number(array[i]) + Number(array[i+1]) + Number(array[i+2]))){
            //console.log((Number(array[i+1]) + Number(array[i+2]) + Number(array[i+3])) + " is larger than " + (Number(array[i]) + Number(array[i+1]) + Number(array[i+2])) + " =====>>>> INCREASED");
            increased++;
        } else {
            //console.log((Number(array[i+1]) + Number(array[i+2]) + Number(array[i+3])) + " is smaller than " + (Number(array[i]) + Number(array[i+1]) + Number(array[i+2])) + " =====>>>> DECREASED");
            decreased++;
        }
        counter++;
    }
    console.log("INCREASED TOTAL ========>>>>> " + increased);
    console.log("DECREASED TOTAL ========>>>>> " + decreased);
}