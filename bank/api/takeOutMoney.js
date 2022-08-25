const fs=require('fs');
const path=require("path");
const dataDir=path.join(__dirname,"/../data");
const jwt=require('jsonwebtoken')
const SECRET="my secret";


function takeOutMoney(token , userObj){
    const currentuser=JSON.parse(fs.readFileSync(dataDir+"/users.json"));
    const decodedToken=jwt.verify(token,SECRET)

    for (let i = 0; i < currentuser.length; i++) {
        const element = currentuser[i];
  if(decodedToken.username===element.username){
    if(parseInt(userObj.amount)<=element.amount){

        const newAmount= element.amount -=parseInt(userObj.amount)  ;
        fs.writeFileSync(dataDir+"/users.json", JSON.stringify(currentuser),);

        return true
       }
      else{return "you can't take out more than you have in account"}

  }
     
    }
}
module.exports={takeOutMoney}