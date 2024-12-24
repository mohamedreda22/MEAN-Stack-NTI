const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: mongoose.Schema.Types.ObjectId, // reference to the userType collection
        ref: 'usertypes', // name of the collection
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('user', userSchema);