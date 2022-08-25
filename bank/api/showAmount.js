const fs=require('fs');
const path=require("path");
const dataDir=path.join(__dirname,"/../data");
const jwt=require('jsonwebtoken')
const SECRET="my secret";


function showAmount(token){
    const currentuser=JSON.parse(fs.readFileSync(dataDir+"/users.json"));
    const decodedToken=jwt.verify(token,SECRET)

    for (let i = 0; i < currentuser.length; i++) {
        const element = currentuser[i];
  if(decodedToken.username===element.username){
    const Amount= element.amount;
    return Amount
  }   
    }
}

module.exports={showAmount}