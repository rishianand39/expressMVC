const mongoose = require('mongoose');

const batchSchema = mongoose.Schema({
    batch_name: { type: String, required: true },
}, {
    timestamps: true,
    versionKey: false,
});

const Batch = mongoose.model('batch', batchSchema);
module.exports = Batch;