import { createSlice } from "@reduxjs/toolkit"

const userState ={
    localId:'',
    token:'',
    isLoggedIn : false,
    mailData:[]
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
        },
        mailDataUpdater(state,action){
            state.mailData=action.payload
        }
    }
})

export const  userAction = userReducer.actions
export default userReducer.reducer