import express from 'express';
const app = express();
const dotenv=require("dotenv");
//const mySecret = process.env['PORT'];
const PORT=3737;
app.get('/', (req, res)=>{
  res.send(`Node is running on PORT ${process.env.PORT}`);
});

app.listen(PORT, ()=>{
  console.log(`Your server is running on ${PORT}`);
})