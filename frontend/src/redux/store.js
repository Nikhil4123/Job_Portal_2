/* eslint-disable no-unused-vars */
import { configureStore, createSlice } from '@reduxjs/toolkit';
import authSlice from './authSlice';

const store  = configureStore({
    reducer:{
        auth:authSlice
    }
});
export default store;