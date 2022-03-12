const mongoose = require('mongoose');

const evaluationSchema = mongoose.Schema({
    date_of_evaluation: { type: String, required: true },
    batch_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'batches',
        required: true,
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    }
}, {
    timestamps: true,
    versionKey: false,
});

const Evaluation = mongoose.model('evaluation', evaluationSchema);
module.exports = Evaluation;