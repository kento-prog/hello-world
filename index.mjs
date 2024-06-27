import express from "express";
import http from 'http';

const PORT_NUMBER = 3000;

const app = express();

//app.get('/hello',(req,res)=>{
  //res.send("hello server");
//});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// このヘんにルートパスのコードを書く
let message = "hello";

app.get('/message',(req, res)=>{
  res.status(200).json({message});
});

app.post('/message',(res,req)=>{
  if(req.body.text){
    message = req.body.text;
    res.status(201).json({message});
  }else{
    res.status(401).json({error:"error"});
  }
});

app.delete('/message',(req,res)=>{
  message = "hello";
  res.status(200).json({message});
});
const webServer = http.createServer(app);
webServer.listen(PORT_NUMBER,()=>{
  console.log("web server running PORT:"+PORT_NUMBER);
});
