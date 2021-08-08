// import all/(*) constants instances with the alias
import * as actionConstants from '../constants/actionConstants';

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case actionConstants.AUTH_INSTANCE:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

            return { ...state, 
                      authData: action.data, 
                      loading: false, 
                      errors: null 
                    };
        case actionConstants.LOGOUT_INSTANCE:
            localStorage.clear();

            return { ...state, 
                      authData: null, 
                      loading: false, 
                      errors: null 
                    };
        default:
            return state;
    }
};

export default authReducer;