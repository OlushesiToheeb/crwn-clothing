import {
    GOOGLE_SIGN_IN_SUCCESS,
    EMAIL_SIGN_SUCCESS,
    GOOGLE_SIGN_IN_FAILURE,
    EMAIL_SIGN_FAILURE,
} from './actions';

const initialState = {
    currentUser: null,
    error: null,
};
const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GOOGLE_SIGN_IN_SUCCESS:
        case EMAIL_SIGN_SUCCESS:
            return {
                ...state,
                currentUser: payload,
                error: null,
            };
        case GOOGLE_SIGN_IN_FAILURE:
        case EMAIL_SIGN_FAILURE:
            return {
                ...state,
                error: payload,
            };
        default:
            return state;
    }
};

export default userReducer;
