const bcrypt = require('bcrypt');

exports.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
}

exports.comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
}

exports.isMatch = async (password, hash) => {
    return await bcrypt.compare(password, hash);
}

