const fs=require('fs');
const read=require("./read");
var found=false

function remove(id){
const currentStudent=JSON.parse(read());

console.log("currentStudent", currentStudent)
 parseInt(id);
console.log("deleteInput", id)

 for (let i = 0; i < currentStudent.length; i++) {
    const element = currentStudent[i];
    // console.log("element.id", element.id)
    if(element.id===id){
        found=true
        var indexToDelete=currentStudent.indexOf(element)
        console.log("indexToDelete", indexToDelete)
        currentStudent.splice(indexToDelete,1)
        console.log("currentStudent", currentStudent)
        
    }
    
 }
 if(found==false){
    
    throw new Error ("this id does not exist ! ")
}
fs.writeFileSync("./data/students.json", JSON.stringify(currentStudent))
}
module.exports=remove