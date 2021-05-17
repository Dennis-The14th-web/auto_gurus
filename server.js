const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;


mongoose.connect("mongodb://localhost/autoGurus", 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on("connected", () => {
    console.log("connected to localhost db");
})
mongoose.connection.on("error", (err) => {
    console.log("error connecting", err)
})

app.listen(PORT, () => console.log("Server is running on port: ", PORT));