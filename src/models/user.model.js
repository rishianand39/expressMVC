const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    type: { type: String, required: true },
}, {
    timestamps: true,
    versionKey: false,
});

const User = mongoose.model("user", userSchema);
module.exports = User;