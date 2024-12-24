const mongoose = require('mongoose');

const connnectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mvc1', {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connnectDB;