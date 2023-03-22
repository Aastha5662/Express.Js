const express=require('express');
const app=express();
const path =require('path')
const indexRoute=require('./routes/routes.js')
const studentRoute=require('./routes/studentRoutes')
const userRoutes=require('./routes/userRoutes')



app.use('/',indexRoute);
app.use('/student',studentRoute);
app.use('/user',userRoutes);

//for error handling
app.use('*',(req,res,next)=>{
  


res.status(404 )
let error_page=path.join(__dirname,"/pages/error.html")
res.sendFile(error_page)
});




module.exports=app;