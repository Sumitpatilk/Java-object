console.log("remove duplicates from arry of object");

var student =[
    {  id:1, name:'John Doe'},
    {  id:2, name:'Jane Smith'},
    {  id:1, name:'John Doe'},
    {  id:3, name:'Samuel Green'},
    {  id:2, name:'Jane Smith'},
];

function removeDuplicate(array) {
    return array.filter((student, index, self)=>
    index == self.findIndex((t) =>(
        t.id == student.id && t.name == student.name
    ))
 );
}
var uniqueStudent = removeDuplicate(student);
console.table(uniqueStudent);
