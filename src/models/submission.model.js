const mongoose = require('mongoose');

const submissionSchema = mongoose.Schema({
    evaluation_id: { type: String, required: true },
    student_id: { type: String, required: true },
    marks: { type: Number, required: true },
}, {
    timestamps: true,
    versionkey: false,
});

const Submission = mongoose.model('submission', submissionSchema);
module.exports = Submission;