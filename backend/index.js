const express=require('express');
const connectDb = require('./db');
const port=4000;
const app= express();

const cors = require('cors');
app.use(cors({
    origin: '*',
    credentials: true, 
  }));
  
// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ limit: '10mb', extended: true }));

 
app.use(express.json());

app.use( require("./Routes/Auth"));
app.use( require("./Routes/Deal"));




app.get("/",(req,res)=>{
    res.send("hey ajju how are you , this is your zobs website")
})





app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`);
});



