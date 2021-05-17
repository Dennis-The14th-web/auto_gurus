const mongoose = require('mongoose');
// const {ObjectId} = mongoose.Schema.Types

const postSchema = mongoose.Schema({
    carName: String,
    message: String,
    name: String,
    service: String,
    model: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

mongoose.model('Post', postSchema);
