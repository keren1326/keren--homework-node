const fs=require('fs');

function update(num ,key , value ){
    const cart=fs.readFileSync("./cart/cart.json","utf-8")
    const objCart=JSON.parse(cart);
    
    if(key=="name"){
        objCart[num].name= `${value}`;
    }
    if(key=="id"){
        objCart[num].id= `${value}`;
    }
    if(key=="price"){
        objCart[num].price= `${value}`;
    }

    fs.writeFileSync('./cart/cart.json', JSON.stringify(objCart))
    console.log(objCart);
}
module.exports=update