const express = require('express');
const app = express();
const path=require('path')
const viewsDir=path.join(__dirname+"/../views");
const signup=require('../api/signup');
const login=require("../api/login");
const tokenApi=require('../api/token');
const addMoney=require('../api/addMoney');
const takeOutMoney=require('../api/takeOutMoney');
const showAmount=require('../api/showAmount');
const deleteAccount=require('../api/deleteAccount')


const cookieParser = require('cookie-parser');


app.use(express.json())
app.use(cookieParser()) 

app.use("/login",express.static(viewsDir+"/login"));
app.use("/signup",express.static(viewsDir+"/signup"));
app.use("/actions",express.static(viewsDir+"/actions"));
app.use("/",express.static(viewsDir+"/home"));

app.get("/",(req,res)=>{
    res.sendFile(viewsDir+"/home/home.html")
});
app.get("/login",(req,res)=>{
    res.sendFile(viewsDir+"/login/login.html")
});
app.get("/signup",(req,res)=>{
    res.sendFile(viewsDir+"/signup/signup.html")
});

app.post('/api/signup',(req,res)=>{
    const userObj=req.body
signup.signUp(userObj)
})
app.post('/api/login',async(req,res)=>{
const userObj=req.body;
 const result = await login.login(userObj)
 console.log("result", result)
 if(result===true){
    const token= tokenApi.createToken(userObj.username)
    console.log("token", token)
   res.cookie('loginRes',{token:token})
   res.send({msg:'login sucessful'})
 }
else{res.send({msg:'login unsucessful'})}

})
app.get("/actions",(req,res)=>{
    const cookies=req.cookies;
    if(cookies["loginRes"]){
        const token=cookies['loginRes'].token;
        const verifyResult=tokenApi.verifyToken(token)
        if(verifyResult){
            res.sendFile(viewsDir+"/actions/actions.html")
        return
        }
    }
    else{
        res.redirect(302,'/signup')
        console.log('bad token')
    }
    return
    

})
app.post("/api/addMoney",(req,res)=>{
    const formObj=req.body;
    const cookies=req.cookies;
    const token=cookies['loginRes'].token;
  const result= addMoney.addMoney(token,formObj);
   if(result){  res.send({msg:'amount updated succesfully'})}
else{res.send({msg:'amount cannot be updated'})}
})
app.post("/api/takeOutMoney",(req,res)=>{
    const formObj=req.body;
    const cookies=req.cookies;
    const token=cookies['loginRes'].token;
  const result= takeOutMoney.takeOutMoney(token,formObj)
  console.log("result", result)
  if(result){  res.send({msg:'amount updated succesfully'})}
  else{res.send({msg:'amount cannot be updated '})}

})
app.get("/api/showAmount",(req,res)=>{
    const cookies=req.cookies;
    const token=cookies['loginRes'].token;
  const result= showAmount.showAmount(token)
  console.log("result", result)
  res.send(JSON.stringify({msg:` the amount on your account is ${result}`}))

})
app.post("/api/deleteAccount",async(req,res)=>{
    const formObj=req.body;
    console.log("formObj", formObj)
    const cookies=req.cookies;
    const token=cookies['loginRes'].token;
  const result=  await deleteAccount.deleteAccount(token ,formObj)
  console.log("result", result)
  if(result){  res.send(JSON.stringify({msg:` account updated successfully`}))
}
  else {res.send(JSON.stringify({msg:` wrong authetification `}))}

})

const PORT=9999;
app.listen(PORT,()=>{ console.log(`server listen on port ${PORT}`)})