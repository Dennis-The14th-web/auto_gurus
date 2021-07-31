// const { response } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const Post = require('../models/post.js');
let router = express.Router();



const getPosts = async (req, res) => {
    try {
        const postMessage = await Post.find();
        res.status(200).json(postMessage);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


const bySearch = async (req, res) => {
    const { srchQuery } = req.query;
    try{
        const carName = new RegExp(srchQuery, "i");
        const posts = await Post.find({ carName });
        res.json({ data: posts });
    } catch (error){
        res.status(404).json({ message: error.message });
    }
}


const createPosts = async (req, res) => {
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
        
}


const updatePosts =  async (req, res) => {
    const { id } = req.params;
    const { carName, message, name, selectedFile, model } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const updatedPost = { name, carName, message, model, selectedFile, _id: id};
    await Post.findByIdAndUpdate(id, updatedPost, { new: true });
    res.json(updatedPost);
}


const deletePosts =  async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that ID");
    await Post.findByIdAndRemove(id);
    res.json({ message: "Post has been successfully deleted"})
}


const likePosts =  async (req, res) => {
    const { id } = req.params;
    if(!req.userId) {
        return res.json({ message: "Not authenticated"});
    };
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that ID");
    const post = await Post.findById(id);
    const index = post.likes.findIndex((id) => id === String(req.userId));
    if (index === -1) {
        post.likes.push(req.userId);
    } else {
        post.likes = post.likes.filter((id) => id !== String(req.userId));
    }
    const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true});
    res.json(updatedPost);
}

router = {getPosts, bySearch, createPosts, updatePosts, deletePosts, likePosts};

module.exports = router;