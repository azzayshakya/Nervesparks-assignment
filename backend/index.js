const express = require('express');
const app = express();
const port = 4000;



const cors = require('cors');

app.use(cors({
  origin: '*',
  credentials: true, 
}));

app.get('/', (req, res) => {
  res.send(`Ajay Your app listening on port ${port}`);
});

app.use(express.json());
// app.use("/api/", require("./Routes/CreateUser"));


app.listen(port, () => {
  console.log(`Your app listening on port ${port}`);
});
