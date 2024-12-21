const express = require('express');
const app= express();
const port =3000
const aboutRouter = require("./aboutRouter");
const productRouter = require('./productRouter');

// app.use((req,res,next)=>{
//     next();
//     res.send("<h1>hello from server</h1>")
// })

// app.use('/about',(req,res)=>{
//     if(req.method ==='GET'){   
//          res.send("<p>hello form abo..ut route!!</p>")
// }else if (req.method ==="POST"){    
//     res.send("<p>hello form con**tact route!!</p>")

// }
// })

// app.use('/home',(req,res)=>{
//     res.send("<p>hello form h===ome route!!</p>")
// })

// app.use((req,res)=>{
//     if(req.url === '/about'){
//         res.send("<p>hello form about route!!</p>")
//     }else if(req.url==="/contact"){
//         res.send("<h5>hello form contact!!</h5>")
//     }else{
//         res.send("<h1>hellddo from server</h1>")
//     }
    
// })


// app.get('/about',(req,res)=>{
//     res.send("<h1>hello world!! GET</h1>")
// })
// app.post('/about',(req,res)=>{
//     res.send("<h1>hello world!! POST</h1>")
// })
// app.use('/',(req,res)=>{
//     res.send("Root route")
// });
// 
// use is a middleware that use to tell the server that I will use Json
app.use(express.json());
app.use("/uploads", express.static("./uploads"));

app.use("/about",aboutRouter);
app.use("/products",productRouter);
app.listen(port,()=>{
    console.log(`server started at port: ${port}`);
})
