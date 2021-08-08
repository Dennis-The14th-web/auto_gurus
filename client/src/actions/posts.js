// import all/(*) constants instances with the alias
import * as actionConstants from '../constants/actionConstants';
import * as api from '../api/index.js';

export const getPost = id => async dispatch => {
    try {
        dispatch({ type: actionConstants.START_LOADING_INSTANCE });
        const { data } = await api.fetchPost(id);
        dispatch(
                    { 
                        type: actionConstants.FETCH_POST_INSTANCE,
                        payload: { post: data }
                    
                    }
                );
        dispatch({ type: actionConstants.END_LOADING_INSTANCE})
    } catch (err) {
        console.log(err);
    }
};

export const getPosts = page => async dispatch => {
    try {
        dispatch({ type: actionConstants.START_LOADING_INSTANCE});
        const { data: { data, currentPage, numberOfPages } } = await api.fetchPosts(page);
        dispatch(
                   {
                       type: actionConstants.FETCH_ALL_INSTANCE,
                       patload: { data, currentPage, numberOfPages }
                   }
                );
    } catch (err) {
        console.log(err);
    }
};

export const getPostsBySrch = srchQuery => dispatch => {
    try {
        dispatch({ type: actionConstants.START_LOADING_INSTANCE });
        const { data: { data } } = await api.fetchPostsBySrch(srchQuery);
        dispatch(
                   {
                       type: actionConstants.FETCH_BY_SEARCH_INSTANCE,
                       payload: { data }
                   }
                );
        dispatch({ type: actionConstants.END_LOADING_INSTANCE });
    } catch (err) {
        console.log(err);
    }
};

export const createPost = ( post, history ) => async dispatch => {
    try {
        dispatch({ type: actionConstants.START_LOADING_INSTANCE });
        const { data } = await api.createPost(post);
        history.push('/posts');
        dispatch(
                   {
                       type: actionConstants.CREATE_INSTANCE,
                       patload: data
                   }
                );
        dispatch({ type: actionConstants.END_LOADING_INSTANCE });
    } catch (err) {
        console.log(err);
    }
};

export const updatePost = (id, post) => async dispatch => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch(
                  {
                      type: actionConstants.UPDATE_INSTANCE,
                      payload: data
                  }
                );
    } catch (err) {
        console.log(err);
    }
};

export const deletePost = id => async dispatch => {
    try {
        await api.deletePost(id);
        dispatch(
                   {
                       type: actionConstants.DELETE_INSTANCE,
                       payload: data
                   }
                )
    } catch (err) {
        console.log(err);
    }
};

export const likePost = id => async dispatch => {
    const user = JSON.parse(localStorage.getItem('profile'));
    try {
        const { data } = await api.likePost(id, user?.token);
        dispatch(
                   {
                       type: actionConstants.LIKE_INSTANCE,
                       payload: data
                   }
                )
    } catch (err) {
        console.log(err);
    }
};