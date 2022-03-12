const express = require('express');
const app = express();

const userController = require('./models/user.model');
const batchController = require('./models/batch.model');
const evalutionController = require('./models/evaluation.model');
const studentController = require('./models/student.model');
const submissionController = require('./models/submission.model');



app.use('/users', userController);
app.use('/student', studentController);
app.use('/batch', batchController);
app.use('/evaluation', evalutionController);
app.use('/submission', submissionController);

module.exports = app;