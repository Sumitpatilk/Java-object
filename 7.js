console.log("using object entries method");

var car ={
    make:"Toyota",
    model:"Camry",
    year:2020,
    color:"blue"
};

var entries =Object.entries(car);
var lastEntry = entries[entries.length-1];
console.log("Last property using entries:",lastEntry[0], lastEntry[1]);
