const mongoose = require('mongoose')
const  bookSchema = mongoose.Schema({
    
    bookname:{
        type:String,
        required:[true, 'please add a text value']
    },
    author:{
        type:String,
    },
    isbn:{
        type:String,
    },
    cover:{
        type:String

    }
    

},{
    timestamps: true
})

module.exports = mongoose.model('book',bookSchema)