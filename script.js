//THIS IS THE CODE CONNECTING FRONTEND WITH THE EXPRESS SERVER AND SENDING DESIRED STATIC FILE TO THE BROWSER WITH EVERY ROUTE CALLED.


// const express = require("express");
// const app = express();
// const path = require("path");
// const port = 8080;
// app.use(express.static(path.join(__dirname,"public")));   
// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,"public","index.html"));
// });
// app.get("/home",(req,res)=>{
//     res.sendFile(path.join(__dirname,"public","index2.html"));
// })
// app.listen(port,()=>{
//     console.log(`listening at port ${port}`);
// })