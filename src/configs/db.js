const mongoose = require('mongoose');

const connect = mongoose.connect(
    'mongodb+srv://rishianand:1234@cluster0.nweui.mongodb.net/expressmvc?retryWrites=true&w=majority'
);

module.exports = connect;