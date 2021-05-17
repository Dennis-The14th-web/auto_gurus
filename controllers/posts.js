const express = require('express');
const mongoose = require('mongoose');
const Post = require('../models/Post');

const router = express.Router();

module.exports = getPost = async (req, res) => {
    try {
        const postMessages = await Post.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// get post by search

module.exports = createPost = async (req, res) => {
    const post = req.body;
    const newPostMessage =  new Post({ 
        ...post, 
        name: req.userId,
        createdAt: new Date().toISOString()
    });
    try {
        await newPostMessage.save();
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

module.exports = router;