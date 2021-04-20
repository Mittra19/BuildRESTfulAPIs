import express from 'express';
const dotenv =require("dotenv");

const app = express();
const PORT=3003;
app.get('/', (req, res)=>{
  res.send(`Node is running on PORT ${process.env.PORT}`);
});

app.listen(PORT, ()=>{
  console.log(`Your server is running on ${PORT}`);
})