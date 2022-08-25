const fs=require('fs');
const path=require("path");
const dataDir=path.join(__dirname,"/../data");
const jwt=require('jsonwebtoken')
const SECRET="my secret";


 async function addMoney(token , userObj){
    const currentuser=JSON.parse(fs.readFileSync(dataDir+"/users.json"));
    const decodedToken=jwt.verify(token,SECRET)

    for (let i = 0; i < currentuser.length; i++) {
        const element = currentuser[i];
  if(decodedToken.username===element.username){
    
    const newAmount= element.amount +=parseInt(userObj.amount)  ;
    fs.writeFileSync(dataDir+"/users.json", JSON.stringify(currentuser),);
    return true

  }

    }
}

module.exports={addMoney}