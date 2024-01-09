const mongoose = require('mongoose')
const  bookSchema = mongoose.Schema({
    
    bookname:{
        type:String,
        required:[true, 'please add a text value']
    }
},{
    timestamps: true
})

module.exports = mongoose.model('book',bookSchema)