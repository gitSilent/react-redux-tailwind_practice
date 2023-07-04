import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
    name:"userInfo",
    initialState:{
        info:{
            firstName:"",
            lastName:"",
            age:"",
            country:"",
            city:"",
            img:""
        }
       
    },
    reducers:{
        setUserInfo: (state,action) => {
            state.info = {...action.payload}

            let test = action.payload
            console.log(action.payload);
            console.log(test);
        }
    }

    

})

export const {setUserInfo} = userInfoSlice.actions

export default userInfoSlice.reducer