const form=document.querySelector("#form");
var loginStatus=document.querySelector("#loginStatus");


form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const jsonData={}
    const formData=new FormData(form);
    for (const [key,value] of formData) {
        jsonData[key]=value    
        }
    fetch("http://localhost:9999/api/login",{
        method:'POST',
        body : JSON.stringify(jsonData),
        headers:{ "content-type":"application/json"}
    })
    .then((res)=>res.json())
    .then(res=> {
        console.log(res)
    loginStatus.innerHTML+=`${JSON.stringify(res.msg)}`})
})