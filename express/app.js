const express = require('express');
const app= express();
const port =3000

app.use((req,res)=>{
    console.log("hello from the use middleware");
    res.send("hello from server")
    
})
app.listen(port,()=>{
    console.log(`server started at port :${port}`);
})