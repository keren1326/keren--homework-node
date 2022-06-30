// const data= Buffer.from("hello world")
// console.log('data' ,data)

 const fs=require("fs");
//  const he=fs.readFileSync("he.js" , 'utf-8')
 const he=fs.readFileSync("he.js" ,{encoding:'utf-8'} )
 console.log("he",he);


fs.writeFileSync('./newFile',"hello new file")