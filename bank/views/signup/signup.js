const form=document.querySelector('#form');
form.addEventListener("submit",(event)=>{
event.preventDefault();

const jsonData={};
const formData= new FormData(form)
for (const [key,value] of formData) {
jsonData[key]=value    
}
console.log("jsonData", jsonData)
fetch("http://localhost:9999/api/signup",{
    method : 'POST',
    body : JSON.stringify(jsonData),
    headers:{ "content-type":"application/json"}
})
.then((res)=>res.json())
.then(res=>{console.log(res)
    window.location.href='http://localhost:9999/'})

})