const fs=require('fs');
const read=require('./read');
var found=false

 function update(objToUpdate){
 console.log("objToUpdate", objToUpdate)

const currentStudent=JSON.parse(read());
console.log("currentStudent", currentStudent)

parseInt(objToUpdate.id)
for (let i = 0; i < currentStudent.length; i++) {
    const element = currentStudent[i];
if(element.id===objToUpdate.id){
    found=true
    console.log("hi")
    if(objToUpdate.name.length>0){element.name=objToUpdate.name;}
    if(objToUpdate.age.length>0){element.age=objToUpdate.age;}
    if(objToUpdate.gradeAvg.length>0){element.gradeAvg=objToUpdate.gradeAvg;}
}
   if(found=false){
    throw new Error ('this id does not exist!')
   } 
}
console.log("currentStudent", currentStudent)
fs.writeFileSync("./data/students.json",JSON.stringify(currentStudent));

return "student updated";
 }
 module.exports=update