const fs=require('fs');
function create(id,name,price){
    const cart=fs.readFileSync("./cart/cart.json","utf-8")
    const objCart=JSON.parse(cart);
    objCart.push({id:`${id}`, name:`${name}`, price: `${price}`});
    fs.writeFileSync('./cart/cart.json', JSON.stringify(objCart))
    console.log("cart",cart);
}
module.exports=create