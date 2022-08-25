const fs=require('fs');
const bcrypt=require('bcrypt');
const path=require("path");
const dataDir=path.join(__dirname,"/../data");

 async function login(userObj){
    const currentUser=JSON.parse(fs.readFileSync(dataDir+'/users.json'))
for (let i = 0; i < currentUser.length; i++) {
    const element = currentUser[i];    
    if(userObj.username===element.username){
        const compare= await bcrypt.compare(userObj.password,element.password);
           
            if(compare){
                return true
            }
           
    }
    
     
}
return false 
}

module.exports={login}