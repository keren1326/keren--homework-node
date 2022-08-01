const fs=require('fs');
const http=require("http");
const path = require('path');
const viewsDir=path.join(__dirname+"/./views");
const read=require("./services/read");
const create=require("./services/create");
const remove=require('./services/delete');
const update=require('./services/update')

const server =http.createServer(async(req,res)=>{
    const method=req.method;
    const url=req.url;
    switch (url) {
        case "/":
            fs.createReadStream(viewsDir+"/class/class.html").pipe(res)
            break;
        case "/class.js":
                fs.createReadStream(viewsDir+"/class/class.js").pipe(res)
            break;
        case "/class.css":
                fs.createReadStream(viewsDir+"/class/class.css").pipe(res)
            break;
         
        case "/addStudent":
            fs.createReadStream(viewsDir+"/addStudents/addStudent.html").pipe(res)
            break;
        case "/addStudent.css":
              fs.createReadStream(viewsDir+"/addStudents/addStudent.css").pipe(res)
              break;
        case "/addStudent.js":
            fs.createReadStream(viewsDir+"/addStudents/addStudent.js").pipe(res)
          break;
        case "/deleteStudent":
            fs.createReadStream(viewsDir+"/deleteStudent/deleteStudent.html").pipe(res)
          break;
        case "/deleteStudent.js":
            fs.createReadStream(viewsDir+"/deleteStudent/deleteStudent.js").pipe(res)
          break;
        case "/deleteStudent.css":
            fs.createReadStream(viewsDir+"/deleteStudent/deleteStudent.css").pipe(res)
          break;
        case "/update":
            fs.createReadStream(viewsDir+"/update/update.html").pipe(res)
          break;
        case "/updateStudent.js":
            fs.createReadStream(viewsDir+"/update/updateStudent.js").pipe(res)
          break;
        case "/update.css":
            fs.createReadStream(viewsDir+"/update/update.css").pipe(res)
          break;
        case "/api/students":
            switch (method) {
                case "POST":
                  const buffers=[];
                  for await (const chunk of req){
                    buffers.push(chunk)
                  }
                  //all chunk are here
                  const newStudent=JSON.parse(Buffer.concat(buffers).toString()) //faire parse car ca rend tt en string !
                  const createStud=create(newStudent)
                  res.end(createStud)
                    break;
                case "GET":
                    const students=read()
                    res.end(students)
                    break;
               case "DELETE":
                const bufferD=[];
                  for await (const chunk of req){
                    bufferD.push(chunk)
                  }
                  const deleteStudent=JSON.parse(Buffer.concat(bufferD).toString()) 
                  console.log("deleteStudent", deleteStudent)
                  const id=deleteStudent.id;
                  if(!id){
                    console.log("cannot delete without id")
                    res.end("cannot delete without id")
                  }
                  const delStud=remove(id)
                  res.end(delStud)
                        break;
               case "PUT":
                    const updateBuffer=[];
                             for await (const chunk of req){
                               updateBuffer.push(chunk)
                             }
                             const updateStudent=JSON.parse(Buffer.concat(updateBuffer).toString()) 
                             console.log("updateStudent", updateStudent)
                             const upId=updateStudent.id
                             if(!upId){
                              console.log("cannot update without id")
                              res.end("cannot update without id")
                            }
                             const upStud=update(updateStudent)
                             res.end(upStud)
                     break;
          
                default:
                    break;
            }
       default: 
       const notFound=fs.readFileSync(viewsDir+"/404/404.html")
       res.end(notFound)
            break;
    }
})

const PORT=12345
server.listen(PORT)
console.log("server listening on port 12345")