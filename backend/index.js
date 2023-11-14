const express=require("express");
const app=express();
let port=8080;
app.use(express.urlencoded({extended: true}));
app.use(express. json())

app.get("/register",(req,res)=>{
res.send("standard get response");
})
app.post("/register",(req,res)=>{
    //to print on server whatever data is sent through request body
    console.log(req.body);
    res.send("standard post response")
})
app.listen( port,() =>
{
    console.log(`app is listening on port ${port}`);
});