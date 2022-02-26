const mongoose = require("mongoose");
const express = require("express");
const env = require("dotenv");
const userRoutes = require("./route/user");
const userData = require("./userdata/userdata");
const User = require("./model/userdetail");
const cors = require("cors");

env.config();
mongoose.connect(process.env.DATABASE);
const PORT = process.env.PORT
app = express();

app.use(express.json());

app.use(cors())
app.get("/push",async(req,res)=>{
    const data = await User.insertMany(userData);
    res.json(data);
})

// app.post("/form/users/:id", async(req,res)=>{
//     console.log(req.body);
//     res.json({
//         status:"ok"
//     });
// })

app.use("/users",userRoutes)
app.use("/form",userRoutes)

app.listen(5000,console.log(`server is running at Port :-${PORT}`));