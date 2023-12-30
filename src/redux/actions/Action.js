export const SET = (item) => {
  return {
    type: "SET_PRODUCT",
    payload: item,
  };
};

//remove items
export const SELECT = (id) => {
  return {
    type: "SELECTED_PRODUCT",
    payload: id,
  };
};

//remove Individual Item
export const REMOVE = (id) => {
  return {
    type: "REMOVE_PRODUCT",
    payload: id,
  };
};
