const express = require('express')
const app = express()
const mongoose = require("mongoose");
const cors = require('cors');

mongoose.connect('mongodb+srv://proyectoweb:proyecto123321@cluster0.exzs0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

app.listen(process.env.PORT || 3000, () => console.log("Listen on port 3000"))

app.use(cors())
app.use('/user', require('./routes/user.routes'))