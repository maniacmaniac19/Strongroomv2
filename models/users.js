const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

UsersSchema.methods.hashPassword = (password) =>{
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

UsersSchema.methods.comparePassword = (password, hash) => {
    return bcrypt.compareSync (password, hash)
}

var Users = mongoose.model('Users', UsersSchema);

module.exports = Users;