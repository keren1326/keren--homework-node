const fs=require("fs");
const path=require("path");
//const studPath=path.join(__dirname+"/./data/students.json");

function read(){
const students=fs.readFileSync("./data/students.json","utf-8")
return students
}
module.exports=read

