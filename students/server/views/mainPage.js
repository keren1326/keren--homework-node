var main=document.querySelector("#students")
var showBtn=document.querySelector("#showStudBtn");

showBtn.addEventListener("click",createHtml)

function createHtml(arr){
    var toappend="";

    fetch('http://localhost:1404/showBtn')
        .then((res)=>{ return res.text()})
        .then((res)=>{
            var studObj=JSON.parse(res);
            console.log( "response from server",studObj)
            main.innerHTML+=`<table id="studentsTable" class="table">  <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
          </tr></table>`
            var table=document.querySelector("#studentsTable")
            studObj.forEach(makeTable);
function makeTable(x){
    toappend+=`<tr>
    <td>${x.id}</td>
    <td>${x.name}</td>
    <td>${x.age}</td>
    <td>${x.grade}</td>
    </tr>`
}
table.innerHTML+=toappend
        })


}