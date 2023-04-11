import { createSlice } from "@reduxjs/toolkit"

const userState ={
    localId:'',
    token:'',
    isLoggedIn : false,
    mailDataRecived:[],
    mailDataSent:[],
    toggle:false
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
        mailDataRecivedUpdater(state,action){
            state.mailDataRecived=action.payload
        },
        mailDataSentUpdater(state, action){
            state.mailDataSent = action.payload
        },
        toggleUpdater(state){
            state.toggle=!state.toggle
        }
    }
})

export const  userAction = userReducer.actions
export default userReducer.reducer