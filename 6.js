console.log("Using object keys method");

var car = {
    make :"Toyoto",
    model: "Camry",
    year : 2020,
    color:"blue"
};
var keys = Object.keys(car);
var lastkey = keys[keys.length-1];
console.log("Last property using keys: ",lastkey,car[lastkey]);