import { configureStore } from "@reduxjs/toolkit";
import  setUserInfoReducer  from "../features/userInfoData/userInfoSlice";

export default configureStore({
    reducer:{
        userInfo: setUserInfoReducer
    }
})