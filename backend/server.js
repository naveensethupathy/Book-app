const { log } = require('console');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const axios = require('axios');
const cors = require('cors');
const connectDB = require('./config/db')
const port = process.env.PORT || 4000
const path = require('path')

connectDB()

const app = express()
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, 'build')))
  
//     app.get('*', (req, res) =>
//       res.sendFile(path.resolve(__dirname,'../', 'frontend', 'build', 'index.html'))
//     )
// }
// else{
//     app.get('/',(req,res)=>{
//         res.send("Api is running");
//     })
// }
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/books',require('./routes/bookroutes'))
app.use('/api/words',require('./routes/wordroutes'))
console.log(path.join(__dirname, '/frontend/build'));


app.listen(port, ()=> console.log(`Server running on port ${port}`));