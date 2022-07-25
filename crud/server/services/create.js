const fs=require("fs");
//const path=require("path");
//const studPath=path.join(__dirname+"/./data/students.json");
const read=require("./read")

function create(newStudent){
const students= JSON.parse(read());//faire parse car ma fonction rend un string !
newStudId=parseInt(newStudent.id)
// console.log("students", students)
// console.log("newStudent", newStudent)
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    console.log("element", element)
   
    console.log("newStudId", newStudId)
    if(element.id ===newStudId){
        
        throw new Error(`this id  already exists`)
        }
   }    
students.push(newStudent)

// console.log("students", students)
fs.writeFileSync("./data/students.json",JSON.stringify(students));
return "student stored ok"
}
module.exports=create

