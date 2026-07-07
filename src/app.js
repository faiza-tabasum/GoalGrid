const express= require("express");
const app= express();
// app.get("/", (req, res)=> {
//     res.send("CareerFlow API is running");
// });
app.use(express.json());
module.exports=app;