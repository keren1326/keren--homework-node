const fs=require('fs');
//const path =require('path');
//const cartPath=path.join(__dirname+"/../cart/cart.json")
function read(){
    
   // cart=fs.readFileSync(cartPath,"utf-8")
   const cart=fs.readFileSync("./cart/cart.json","utf-8")
   const objCart=JSON.parse(cart);
   console.log("cart",cart);
  // objCart.push({id:123, name:"milk ", price: 5});
  // fs.writeFileSync('./cart/cart.json', JSON.stringify(objCart));
}

module.exports=read