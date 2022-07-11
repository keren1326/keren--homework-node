const http=require("http")
const fs=require('fs');
const server = http.createServer((req,res)=>{
const method=req.method;
const url=req.url
console.log("server ~ url", url)

switch (url) {
    case "/":
        const mainPage=fs.readFileSync("./views/mainPage.html")
        res.end(mainPage)
        break;
    case "/mainPage.js":
            const mainPageJs=fs.readFileSync("./views/mainPage.js");
            res.end(mainPageJs)
        break;
    case "/showBtn":
                const showBtn=fs.readFileSync("../data/students.json");
            res.end(showBtn)
        break;
    case "/mainPage.css":
                const mainPageCss=fs.readFileSync("./views/mainPage.css");
            res.end(mainPageCss)
        break;
            
    case "/deletePage.html":
                const deletePage=fs.readFileSync("./views/deletePage.html");
            res.end(deletePage)
        break;
    case "/deletePage.js":
       
                const deletePageJs=fs.readFileSync("./views/deletePage.js");

            res.end(deletePageJs)
        break;
    case "/deleteBtn":
            const deleteBtn=fs.readFileSync("../data/students.json");
            res.end(deleteBtn)
    break;




    default:const pageNotFound=fs.readFileSync("./views/404.html")  
    res.end(pageNotFound)
         break;
}


})
    const PORT=1404
server.listen(PORT)
console.log("server listening on port 1404")