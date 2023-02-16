const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors')
const axios = require("axios");

const app = express();
dotenv.config({path: path.join(__dirname,"./.env")});
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan('dev'))
app.use(cors({
    origin:"*"
}))  

app.get('/sendToMachine', async (req, res, next)=>{
    await axios.post({
        
    })  
})


app.post("/", (req, res, next)=>{
    console.log(req.body);
    res.status(200).json({
        status:"success",
        message: "recieved"
    })
})
app.post('/CreateNewOrder', (req, res, next)=>{
    console.log(req.body);
    res.status(200).json({
        status:"success",
        message: "recieved"
    })
})
const port = process.env.PORT || 9001;

app.listen(port, ()=>{
    console.log(`server is up and running on port ${port}`);
})

 