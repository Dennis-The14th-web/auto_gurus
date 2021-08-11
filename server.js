const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const postRoutes = require('./routes/posts.js');
const userRoutes = require('./routes/user.js');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect("mongodb://localhost/autoGurus_db", 
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
mongoose.set('useFindAndModify', false);

app.use('/posts', postRoutes);
app.use('/user', userRoutes);


app.listen(PORT, () => 
console.log("Server is running on port: ", PORT));