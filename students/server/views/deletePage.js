var deleteBtn=document.querySelector("#deleteBtn")
var divDelete=document.querySelector("#divDeleteStudent")
deleteBtn.addEventListener("click",deleteStudent)
function deleteStudent(){
    fetch('http://localhost:1404/deleteBtn')
        .then((res)=>{ return res.text()})
        .then((res)=>{
            var studObj=JSON.parse(res);
            console.log(".then ~ studObj", studObj)
            x=studObj[0].id;
            y=studObj[0].name;
            studObj.splice(0,1)
            console.log(".then ~ studObj", studObj)
           
            divDelete.innerHTML+=`<p>You have delete the student with the id ${x} and the name ${y}</p>`

        })
}