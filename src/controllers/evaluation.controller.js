const express = require('express');

const router = express.Router();
const Evaluation = require('../models/evaluation.model');

router.get('', async(req, res) => {
    try {
        const evaluations = await Evaluation.find()
            .populate({ path: "instructor", "firstName": 0, "lastName": 1 })
            .populate({ path: "batch_id" })
            .lean().exec();
        return res.status(200).send(evaluations);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});

router.post('', async(req, res) => {
    try {
        const evaluations = await Evaluation.create(req.body);
        return res.status(200).send(evaluations);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});
module.exports = router;