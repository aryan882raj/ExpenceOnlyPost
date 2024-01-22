const path = require('path');
const cors = require('cors');
const express = require('express');

const ExpRoutes = require('./routes/expRoutes'); 
const sequelize = require('./util/database');

const app = express();
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));
app.use(ExpRoutes);

// app.get("/userpost",(req,res,next)=>{
//     res.send("get request--------------------")
// })

sequelize
// .sync({force:true})
.sync()
.then(result=>{
    app.listen(5500,()=>{
        console.log("server running");
    });
})
.catch(err=>console.log(err));