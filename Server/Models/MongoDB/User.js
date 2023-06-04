const mongoose = require('mongoose')
const Account = require('../MongoDB/Account')

const UserSchema = new mongoose.Schema({
    name: String,
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    }
})

module.exports = mongoose.model('User',UserSchema)

