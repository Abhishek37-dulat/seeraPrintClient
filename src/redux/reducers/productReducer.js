import * as actionType from "../constants/ProductConstants";

const initialState = {
  setproducts: [],
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_PRODUCT:
      return { ...state };

    default:
      return state;
  }
};
