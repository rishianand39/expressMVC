const mongoose = require('mongoose');

const submissionSchema = mongoose.Schema({
    evaluation_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'evaluation',
        required: true,
    },
    student_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    marks: { type: Number, required: true },
}, {
    timestamps: true,
    versionKey: false,
});

const Submission = mongoose.model('submission', submissionSchema);
module.exports = Submission;