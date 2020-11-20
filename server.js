const express = require('express');
const path= require('path');
const sendMail=require('./mail');

const App=express();

//data parsing
App.use(express.urlencoded({
    extended:false
}));
App.use(express.json());
//email,name,subject,description,
App.post('/email',(req,res)=>{
    const{email,subject,description,name} =req.body;
    
    sendMail(email,name,subject,description,function(err,data){
        if(err){
            res.status(500).json({message:'internal error'})
        }else{
            res.json({message:'message sent!!!!'});
        }
    });
    res.json({message:"message recieved!!!!"})
});

//rendering html and static file
App.use('/static',express.static('public'))

App.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'/index.html'));
});


App.listen(3000, console.log("the server is up and running"))