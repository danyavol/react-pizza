import prods from "./prods";
import auth from "./auth";
import basket from "./basket";
import alert from "./alert";

import {combineReducers} from "redux";

const reducers = combineReducers({
    prods, auth, basket, alert
})

export default reducers;
