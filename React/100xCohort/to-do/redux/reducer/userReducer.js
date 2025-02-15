import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialStare: {
        userToken: '',
        loading: false,
        error: null
    },
    reducers: {
        userLogin: (state, actions) => {
            state.userToken = payload.action
        },
        userLogout: (state, actions) => {
            state.userToken = ''
        }
    }
})

export const {
    userLogin,
    userLogout
} = userSlice.actions

export const userReducer = userSlice.reducer;