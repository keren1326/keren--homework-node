
var form=document.querySelector("#form");
form.addEventListener("submit",(event)=>{
event.preventDefault();
console.log("hi form update")
const data=new FormData(form);
const upData={};
for (const [key,value] of data) {
    upData[key]=value;
}
console.log("upData", upData)
fetch("http://localhost:12345/api/students",{
    method:"PUT",
    body: JSON.stringify(upData)
})
.then((res)=>res.text())
.then((res)=>{
    var msg=document.querySelector("#msg")
    msg.innerHTML+=`the student with the id ${upData.id} updated succesfully `
    console.log('res',res);
    
})


})