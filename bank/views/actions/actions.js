const addMoneyForm=document.querySelector('#addForm');
const addMoneyResult=document.querySelector('#addMoneyResult');

const takeMoneyForm=document.querySelector('#takeMoneyForm');
const takeOutResult=document.querySelector('#takeOutResult');

// const deleteBtn=document.querySelector('#deleteBtn');
const deleteForm=document.querySelector('#deleteForm');
const deleteAccount=document.querySelector('#deleteAccount');

const showAmount=document.querySelector('#showAmount');
const showBtn=document.querySelector('#showBtn');

addMoneyForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    
    const jsonData={}
    const formData=new FormData(addMoneyForm);
    for (const [key,value] of formData) {
        jsonData[key]=value    
        }
 fetch("http://localhost:9999/api/addMoney", {
        method:'POST',
        body : JSON.stringify(jsonData),
        headers:{ "content-type":"application/json"}
    })
    .then((res)=>res.json())
    .then(res=> {
        console.log(res)
     addMoneyResult.innerHTML+=`${JSON.stringify(res.msg)}`
 })
})


takeMoneyForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    
    const jsonData={}
    const formData=new FormData(takeMoneyForm);
    for (const [key,value] of formData) {
        jsonData[key]=value    
        }
 fetch("http://localhost:9999/api/takeOutMoney", {
        method:'POST',
        body : JSON.stringify(jsonData),
        headers:{ "content-type":"application/json"}
    })
    .then((res)=>res.json())
    .then(res=> {
        console.log(res)
     takeOutResult.innerHTML+=`${JSON.stringify(res.msg)}`
 })
})

showBtn.addEventListener('click',()=>{

 fetch("http://localhost:9999/api/showAmount")
    .then((res)=>res.json())
    .then(res=> {
        console.log(res)
        showAmount.innerHTML+=`${JSON.stringify(res.msg)}`
 })})

 deleteForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    
    const jsonData={}
    const formData=new FormData(deleteForm);
    for (const [key,value] of formData) {
        jsonData[key]=value    
        }
 fetch("http://localhost:9999/api/deleteAccount", {
        method:'POST',
        body : JSON.stringify(jsonData),
        headers:{ "content-type":"application/json"}
    })
    .then((res)=>res.json())
    .then(res=> {
        console.log(res)
     deleteAccount.innerHTML+=`${JSON.stringify(res.msg)}`
 })
})