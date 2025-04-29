import { configureStore } from '@reduxjs/toolkit';
import jsonDataReducer from './slices/jsonDataSlice';

export default configureStore({
    reducer: {
        jsonData: jsonDataReducer,
    },
});