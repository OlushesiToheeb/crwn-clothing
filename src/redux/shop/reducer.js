import SHOP_DATA from './shopData';

const initialState = {
  collections: SHOP_DATA,
};

const reducer = (state = initialState, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default reducer;
