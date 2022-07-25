const form=document.getElementById("form")
form.addEventListener("submit",(event)=>{
event.preventDefault();
const data=new FormData(form);
const delJson={};
for (const [key,value] of data) {
delJson[key]=value
}
console.log("delJson", delJson)
fetch("http://localhost:12345/api/students",{
    method:"DELETE",
    body:JSON.stringify(delJson)
}).then((res)=>res.text())
.then((res)=>{
    var msg=document.querySelector("#msg")
    msg.innerHTML+=`the student with the id ${delJson.id} has been deleted`
console.log("res", res)  
})

})