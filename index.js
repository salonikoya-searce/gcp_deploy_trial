const dotenv = require('dotenv');
dotenv.config();

var cors = require('cors')

const connectToDatabase=require('./config/db')
connectToDatabase(process.env.MONGO_URI)


const express = require('express');
const app = express();
app.use(cors()) 
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const PORT=process.env.PORT


app.use('/item',require('./routes/itemRoutes'))


app.listen(process.env.PORT,()=>{
    console.log(`Port started: ${PORT}`)
})
