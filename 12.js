console.log("convert an object to array");

const obj= {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
};

const entries=Object.entries(obj);
console.table(entries);

console.log("======================================");
console.log('convert an obj to array ');

const entrie=Object.keys(obj).map(key => [key, obj[key]]);
console.log(entrie);

