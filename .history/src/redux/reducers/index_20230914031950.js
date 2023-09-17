import { combineReducers } from "redux";
import userReducer from "./userReducer";
import articleReducer from "./articleReducer";
 const rootReducer = combineReducers({
  userState: userReducer,
  articlesState:articleReducer,

 })

 export default rootReducer;