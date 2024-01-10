const mongoose = require('mongoose')
const  wordSchema = mongoose.Schema({
    
    bookname:{
        type:String,
        required:[true, 'please add a text value']
    },
    word:{
        type:String,
        required:[true, 'please add a text value']
    },
    meaning:{
        type:String,
        
    },
},
{
    timestamps: true
})

module.exports = mongoose.model('word',wordSchema)