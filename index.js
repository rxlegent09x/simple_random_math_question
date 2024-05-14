const express = require("express");
const cors = require("cors");
const {get_Q} = require("./util");
require('dotenv').config()



const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 999;


app.get("/", (req, res) => {


const srmq = get_Q();

res.json({
    "question":srmq[0],
    "answer":srmq[1],
    status:"true"
});

});

app.listen(PORT,()=>{
    console.log("The App is listening on Server Successfully ! PORT : ",PORT);

});
