var div=document.querySelector("#welcome");

window.addEventListener('load', () =>{ div.style.color="red"});

// setTimeout(()=>{
//     div.style.fontSize="50px";
//     setTimeout(()=>{
//         div.style.fontStyle="italic";
//         setTimeout(()=>{
//             div.style.color="purple"
//         },5000)
//     },5000)
// },5000)

function p1(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            div.style.fontSize="50px";res()
        },5000);
        
    })
}

function p2(){
    return new Promise((res,rej)=>{
    setTimeout(()=>{
        div.style.fontStyle="italic";res()
     },5000);
     
})}
function p3(){
    return new Promise((res,rej)=>{
    setTimeout(()=>{ 
        div.style.color="purple";res()
    },5000);
    
})}
// p1().then(p2).then(p3)
// window.onload=()=>{p1().then(p2).then(p3)}

 async function changeText(){
  await p1()
  await p2();
  await p3()
}
changeText()