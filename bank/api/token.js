const jwt=require('jsonwebtoken')
const SECRET="my secret";


function createToken(username){
 const token = jwt.sign({msg:'hi token',username:username},SECRET,{expiresIn:"1h"})

return token

} 
function verifyToken(token){
    try {
        const decodedToken=jwt.verify(token,SECRET)
        if(decodedToken){
             return true
          }
        else{return false}
    }
     catch (error) {
    console.log("error", error)
        return false  
    } 
}
module.exports={createToken,verifyToken}