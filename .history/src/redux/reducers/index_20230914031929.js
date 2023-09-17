import { combineReducers } from "redux";
import userReducer from "./userReducer";
 const rootReducer = combineReducers({
  userState: userReducer,
  article

 })

 export default rootReducer;