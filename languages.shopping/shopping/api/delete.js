const fs=require('fs');

function remove(num){
    const cart=fs.readFileSync("./cart/cart.json","utf-8")
    const objCart=JSON.parse(cart);
    objCart.splice(num);
    fs.writeFileSync('./cart/cart.json', JSON.stringify(objCart))
    console.log(objCart);
}
module.exports=remove