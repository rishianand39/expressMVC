const { connect } = require('./configs/db');
const app = require('./index')
app.listen(7600, async() => {
    try {
        await connect;
    } catch (err) {
        console.log(err)
    }
    console.log("listening on port 7600")
})