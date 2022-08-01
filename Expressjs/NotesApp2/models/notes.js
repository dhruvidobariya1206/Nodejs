const mongoose = require('mongoose')

var userDataSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: 'users'
    },
    file_name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("Notes", userDataSchema)