const express = require('express');
const mongoose = require('mongoose');
const Post = mongoose.model('Post');
const router = express.Router();


router.get('/getposts', async (req, res) => {
    try {
        const postMessage = await Post.find();
        res.status(200).json(postMessage);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

router.post('/createposts', async(req, res) => {
    const post = req.body;
    const newPostMessage = new Post({
        ...post,
        name: req.userId,
        createdAt: new Date().toISOString()
    });
    try{
        await newPostMessage.save();
        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
        
    
})

module.exports = router;