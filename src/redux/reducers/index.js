import { combineReducers } from "redux";
import { authReducer } from "./authReducers";
import { videosReducer } from "./videosReducer";

export default combineReducers({ 
  videos: videosReducer,
  auth: authReducer,
});
