import { createSlice } from "@reduxjs/toolkit"

const userState ={
    localId:'',
    token:'',
    isLoggedIn : false,
}

const userReducer = createSlice({
    name:'user',
    initialState:userState,
    reducers:{
        tokenUpdater(state,action){
            state.token = action.payload
        },
        loggedInUpdater(state){
            state.isLoggedIn = ! state.isLoggedIn
        },
        localIdUpdater(state, action){
            state.localId = action.payload
        }
    }
})

export const  userAction = userReducer.actions
export default userReducer.reducer