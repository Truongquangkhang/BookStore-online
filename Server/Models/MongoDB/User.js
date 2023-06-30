const mongoose = require('mongoose')
const Account = require('../MongoDB/Account')

const UserSchema = new mongoose.Schema({
    name: String,
    role: {type: String, default: 'user'},
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    }
})

module.exports = mongoose.model('User',UserSchema)

