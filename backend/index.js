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
app.use(require("./routes/CreateUser"));
app.use( require("./routes/LoginUser"));
app.use( require("./routes/DealerSignUp"));
app.use( require("./routes/DealerLogin"));
app.use( require("./routes/AllVehicle"));



app.get("/",(req,res)=>{
    res.send("hey ajju how are you , this is your zobs website")
})





app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`);
});



