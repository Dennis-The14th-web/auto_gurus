import { AUTH_INSTANCE } from '../constants/actionConstants';
// import all/(*) api calls as an alias
import * as api from '../api/index.js';

export const signin = (formData, router) => async dispatch => {
    try {
        const { data } = await api.signIn(formData);
        dispatch({ type: AUTH_INSTANCE, data});
        router.push('/posts');
    } catch (err) {
        console.log(err);
    }
};

export const signup = (formData, router) => async dispatch => {
    try {
        const { data } = await api.signUp(formData);
        dispatch({ type: AUTH_INSTANCE, data});
        router.push('/');
    } catch (err) {
        console.log(err);
    }
};

export const signinquery = (formData, router) => async dispatch => {
    try {
        const { data } = await api.signInQuery(formData);
        dispatch({ type: AUTH_INSTANCE, data});
        router.push(`/user/signin/${data}`);
    } catch (err) {
        console.log(err);
    }
}