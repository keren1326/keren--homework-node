var btn=document.querySelector("#btn");
var studDiv=document.querySelector("#studDiv");
var tbody=document.querySelector("#tbody")
btn.addEventListener("click",()=>{
    fetch("http://localhost:12345/api/students")
    .then((res)=>res.text())
    .then(res=>{
        console.log('res',res)
       const x= JSON.parse(res);
       // studDiv.innerHTML+=`${res}`

        for (let i = 0; i < x.length; i++) {
            const element =x[i];
            console.log("element", element)
            studDiv.style.display="block"
            tbody.innerHTML+=`
            
    <tr>
      <th scope="row">${element.id}</th>
      <td>${element.name}</td>
      <td>${element.age}</td>
      <td>${element.gradeAvg}</td>
    </tr>
    
  `


            
        }
    })
})