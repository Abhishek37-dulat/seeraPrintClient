import reducers from "./redux/reducers/main";
import { createStore } from "redux";

const store = createStore(reducers, {});

export default store;
