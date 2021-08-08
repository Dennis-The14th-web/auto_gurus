// import all/(*) constants instances with the alias
import * as actionConstants from '../constants/actionConstants';

export default (posts = { isLoading: true, posts: [] }, action) => {
    switch (action.type) {
        case actionConstants.START_LOADING_INSTANCE:
            return { ...posts, isLoading: true };

        case actionConstants.END_LOADING_INSTANCE:
            return { ...posts, isLoading: true };

        case actionConstants.FETCH_ALL_INSTANCE:
            return {
                        ...posts,
                        posts: action.payload.data,
                        currentPage: action.payload.currentPage,
                        numberOfPages: action.payload.numberOfPages
                   };

        case actionConstants.FETCH_BY_SEARCH_INSTANCE:
            return { ...posts, posts: action.payload.data };

        case actionConstants.FETCH_POST_INSTANCE:
            return { ...posts, posts: action.payload.post };
        
        case actionConstants.LIKE_INSTANCE:
            return { 
                        ...posts, 
                        posts: posts.posts.map( post => (
                            post.id === action.payload._id ? action.payload : post
                            )) 
                    };

        case actionConstants.CREATE_INSTANCE:
            return { ...posts, posts: [ ...posts.posts, action.payload] };

        case actionConstants.UPDATE_INSTANCE:
            return { 
                        ...posts, 
                        posts: posts.posts.map( post => (
                            post.id === action.payload._id ? action.payload: post
                            )) 
                   };

        case actionConstants.DELETE_INSTANCE:
            return { 
                        ...posts, 
                        posts: posts.posts.filter( post => post._id !== action.payload) 
                   };

        default:
            return { ...posts, posts };
    }
};