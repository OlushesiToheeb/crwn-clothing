import {
    FECTH_COLLECTIONS_START,
    FECTH_COLLECTIONS_SUCCESS,
    FECTH_COLLECTIONS_FAILURE,
} from './actionTypes';

const initialState = {
    collections: null,
    isFetching: false,
    errorMessage: undefined,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FECTH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true,
            };
        case FECTH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: payload,
            };
        case FECTH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: payload,
            };
        default:
            return state;
    }
};

export default reducer;
