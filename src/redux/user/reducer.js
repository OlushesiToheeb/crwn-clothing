import { SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from './actions';

const initialState = {
    currentUser: null,
    error: null,
};
const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: payload,
                error: null,
            };
        case SIGN_IN_FAILURE:
            return {
                ...state,
                error: payload,
            };
        default:
            return state;
    }
};

export default userReducer;
