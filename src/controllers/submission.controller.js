const express = require('express');

const router = express.Router();
const Submission = require('../models/submission.model');

router.get('', async(req, res) => {
    try {
        const submissions = await Submission.find()
            .populate({ path: 'student_id' })
            .populate({ path: 'evaluation_id' })
            .lean()
            .exec();
        return res.status(200).send(submissions);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

router.post('', async(req, res) => {
    try {
        const submissions = await Submission.create(req.body);
        return res.status(200).send(submissions);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});
module.exports = router;