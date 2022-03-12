const mongoose = require('mongoose');

const evaluationSchema = mongoose.Schema({
    date_of_evaluation: { type: String, required: true },
    instructor: { type: String, required: true },
    batch_id: { type: String, required: true }
}, {
    timestamps: true,
    versionkey: false,
});

const Evaluation = mongoose.model('evaluation', evaluationSchema);
module.exports = Evaluation;