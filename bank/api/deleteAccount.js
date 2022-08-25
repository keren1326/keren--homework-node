const fs=require('fs');
const path=require("path");
const dataDir=path.join(__dirname,"/../data");
const jwt=require('jsonwebtoken')
const SECRET="my secret";
const bcrypt=require('bcrypt');


 async function deleteAccount(token , userObj){
    const currentuser=JSON.parse(fs.readFileSync(dataDir+"/users.json"));
    const decodedToken=jwt.verify(token,SECRET)

    for (let i = 0; i < currentuser.length; i++) {
        const element = currentuser[i];
  if(decodedToken.username===element.username){
    const compare= await bcrypt.compare(userObj.authentification,element.confirmation);
    console.log("compare", compare)
    if(compare){ 
      
  
         currentuser.splice(i,1) ;
        fs.writeFileSync(dataDir+"/users.json", JSON.stringify(currentuser),);
        return true
      }
   
 }
 else{return false} 
 
 }
}

module.exports={deleteAccount}