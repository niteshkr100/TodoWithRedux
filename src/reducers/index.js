import todoReducers from "./todoRedux";
import { combineReducers } from "redux";


//combined reducer always take object as parameter and no. of reduced can write inside it.
const rootReducer = combineReducers({
    todoReducers
});

export default rootReducer;