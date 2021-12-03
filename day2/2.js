const fs = require('fs')

fs.readFile('input.txt', 'utf8' , (err, data) => {
    if(err) throw err;
    let array = data.toString().split("\n");
    console.log(array);
    bruh2d(array);
})

function bruh2d(array){
    x = 0;
    y = 0;
    forwardArray = array.filter(direction => direction.match('forward'));
    forwardArray = forwardArray.toString().match(/\d+/g);
    forwardSum = forwardArray.reduce((a, b) => Number(a) + Number(b));
    
    x = forwardSum;

    upArray = array.filter(direction => direction.match('up'));
    upArray = upArray.toString().match(/\d+/g);
    upSum = upArray.reduce((a, b) => Number(a) + Number(b));

    downArray = array.filter(direction => direction.match('down'));
    downArray = downArray.toString().match(/\d+/g);
    downSum = downArray.reduce((a, b) => Number(a) + Number(b));

    y = downSum - upSum;

    console.log("FORWARD ARRAY =======>>>> " + forwardArray);
    console.log("UP ARRAY =======>>>> " + upArray);
    console.log("DOWN ARRAY =======>>>> " + downArray);

    console.log("FORWARD SUM ========>>>> " + forwardSum);
    console.log("UP SUM ========>>>> " + upSum);
    console.log("DOWN SUM ========>>>> " + downSum);

    console.log("MULTIPLICATION VALUE ======>>>>> " + x*y);
}

function bruh3d(array){
    x = 0;
    y = 0;
    z = 0;
    forwardArray = array.filter(direction => direction.match('forward'));
    forwardArray = forwardArray.toString().match(/\d+/g);
    forwardSum = forwardArray.reduce((a, b) => Number(a) + Number(b));
    
    x = forwardSum;

    upArray = array.filter(direction => direction.match('up'));
    upArray = upArray.toString().match(/\d+/g);
    upSum = upArray.reduce((a, b) => Number(a) + Number(b));

    downArray = array.filter(direction => direction.match('down'));
    downArray = downArray.toString().match(/\d+/g);
    downSum = downArray.reduce((a, b) => Number(a) + Number(b));

    y = downSum - upSum;

    console.log("FORWARD ARRAY =======>>>> " + forwardArray);
    console.log("UP ARRAY =======>>>> " + upArray);
    console.log("DOWN ARRAY =======>>>> " + downArray);

    console.log("FORWARD SUM ========>>>> " + forwardSum);
    console.log("UP SUM ========>>>> " + upSum);
    console.log("DOWN SUM ========>>>> " + downSum);

    console.log("MULTIPLICATION VALUE ======>>>>> " + x*y);
}