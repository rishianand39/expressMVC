const express = require('express');
const app = express();
app.use(express.json())
const userController = require('./controllers/user.controller');
const studentController = require('./controllers/student.controller');
const batchController = require('./controllers/batch.controller');
const evaluationController = require('./controllers/evaluation.controller');
const submissionController = require('./controllers/submission.controller');



app.use('/users', userController);
// app.use('/student', studentController);
// app.use('/batch', batchController);
// app.use('/evaluation', evaluationController);
// app.use('/submission', submissionController);



module.exports = app;