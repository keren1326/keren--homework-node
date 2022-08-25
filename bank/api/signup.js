const fs=require('fs');
const bcrypt=require('bcrypt');
const path=require("path");
const dataDir=path.join(__dirname,"/../data");
var amount=0;


 async function signUp(userObj){

const currentUser=JSON.parse(fs.readFileSync(dataDir+'/users.json'))
const plainPassword=userObj.password;
const plainConfCode=userObj.confirmation;

const hashed= await bcrypt.hash(plainPassword,10);
const hashedConf=await bcrypt.hash(plainConfCode,10);

userObj.password=hashed;
userObj.confirmation=hashedConf;


userObj['amount']=amount+500;
currentUser.push(userObj);

fs.writeFileSync(dataDir+"/users.json", JSON.stringify(currentUser))

return


}

module.exports={signUp}
