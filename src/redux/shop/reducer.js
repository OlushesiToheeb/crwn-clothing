import SHOP_DATA from './shopData';

import { UPDATE_COLLECTION } from './actionTypes';

const initialState = {
    collections: SHOP_DATA,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case UPDATE_COLLECTION:
            return {
                ...state,
                collections: payload,
            };
        default:
            return state;
    }
};

export default reducer;
