const mongoose = require("mongoose")
mongoose
    .connect('mongodb+srv://yoonme:dev-yoonme@cluster0.cvahgwj.mongodb.net/food-ordering', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db