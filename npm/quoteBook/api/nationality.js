const fs=require('fs')
const axios = require('axios')
  async function nationality (command,fname){
    
// Make a request for a user with a given ID
 await axios.get(`https://api.nationalize.io/?${command}=${fname}`)
//  .then((res)=>res.json())
.then(res=>{
console.log("res", res.data)

    
})
  
}




module.exports=nationality