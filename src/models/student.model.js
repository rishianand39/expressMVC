const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    roll_id: { type: String, required: true },
    current_batch: { type: String, required: true }
}, {
    timestamps: true,
    versionkey: false,
});

const Student = mongoose.model('student', studentSchema);
module.exports = Student;