var car = {
    make:"Toyota",
    model:"Camry",
    year:2020,
    color:"blue"
};
function getObjectLength(value) {
    return Object.keys(value).length;
}
console.log("Length of the car object: "+ getObjectLength(car));