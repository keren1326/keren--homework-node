var form = document.querySelector("#form");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const jsonData={};
    const formData=new FormData(form)
for (const [key,value] of formData) {
// console.log("value", value)
// console.log(" key", key)
jsonData[key]=value    
}
console.log("form.addEventListener ~ jsonData", jsonData)
fetch("http://localhost:12345/api/students",{
    method:"POST",
    body:JSON.stringify(jsonData)
})
.then((res)=>res.text())
.then(res=>{
    var msg=document.querySelector("#msg")
    msg.innerHTML+=`the student with the id ${jsonData.id} and name ${jsonData.name} added succesfully `
console.log("form.addEventListener ~ res", res)
    
})
})