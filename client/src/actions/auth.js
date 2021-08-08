const { AUTH_INSTANCE } = require("../constants/actionConstants")
// import all/(*) api calls as an alias
import * as api from '../api/index.js';

export const signin = (signInData, router) => async (dispatch) => {
    try {
        const { data } = await api.signIn(signInData);
        dispatch({ type: AUTH_INSTANCE, data});
        router.push('/');
    } catch (err) {
        console.log(err);
    }
};

export const signup = (signUpData, router) => async (dispatch) => {
    try {
        const { data } = await api.signUp(signUpData);
        dispatch({ type: AUTH_INSTANCE, data});
        router.push('/');
    } catch (err) {
        console.log(err);
    }
};