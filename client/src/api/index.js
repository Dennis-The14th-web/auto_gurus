import axios from 'axios';

const API = '/posts';

axios.interceptors.request.use(req => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})

export const fetchPost = id => axios.get(`${API}/${id}`);
export const fetchPosts = page => axios.get(`${API}?page=${page}`);
export const fetchPostsBySrch = srchQuery => axios.get(`${API}/search?searchQuery=${srchQuery}`);
export const createPost = newPost => axios.post(`${API}`, newPost);
export const likePost = id => axios.patch(`${API}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${API}/${id}`, updatedPost);
export const deletePost = id => axios.delete(`${API}/${id}`);

// Authentication call
export const signIn = signInData => axios.post('/user/signin', signInData);
export const signUp = signUpData => axios.post('/user/signup', signUpData);