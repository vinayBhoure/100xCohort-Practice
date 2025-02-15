import { configureStore } from '@reduxjs/toolkit';
import userApi from './api/userApi';
import { userReducer } from './reducer/userReducer';

const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => {
       return getDefaultMiddleware().concat(userApi.middleware)
    }
});

export default store;