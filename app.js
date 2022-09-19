const express = require('express')
require('dotenv').config()
const userRoutes = require('./routes/user')

const mongoose = require('mongoose')

const app = express()

mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err));


app.use("/api", userRoutes)

const port = process.env.PORT || 8000

app.listen(port, () =>{
    console.log(`Server is running  on ${port}`)
})

