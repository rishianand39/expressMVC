const { connect } = require('./configs/db');
const app = require('./index')
app.listen(6000, async() => {
    try {
        await connect;
    } catch (err) {
        console.log(error)
    }
    console.log("listening on port 6000")
})