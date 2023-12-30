import { actionType } from "../constants/ProductConstants";

export const setProducts = (setproducts) => {
  return {
    type: actionType.SET_PRODUCT,
    payload: setproducts,
  };
};

export const selectedProducts = (selectedproducts) => {
  return {
    type: actionType.SELECTED_PRODUCT,
    payload: selectedproducts,
  };
};
