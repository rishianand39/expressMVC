const express = require('express');

const router = express.Router();
const Users = require('../models/user.model')


router.get("", async(req, res) => {
    try {
        const user = Users.find().lean().exec();
        return res.status(500).send(user)
    } catch (err) {
        return res.status(500).send(err.message)
    }
});
module.exports = router;