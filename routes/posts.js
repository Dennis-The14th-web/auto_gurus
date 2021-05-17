const express = require('express');

const { getPosts, bySearch, createPosts, updatePosts, deletePosts, likePosts} = require('../controllers/posts');

const router = express.Router();
const auth = require('../middleware/auth');

router.get('/search', bySearch);
router.get('/', getPosts);
router.post('/', auth, createPosts);
router.patch('/:id', auth, updatePosts);
router.delete('/:id', auth, deletePosts);
router.patch('/:id/likeposts', auth, likePosts);

module.exports = router;