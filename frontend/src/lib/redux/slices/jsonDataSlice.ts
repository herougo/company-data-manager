import { createSlice } from '@reduxjs/toolkit';
import initialJsonData from '../../../data/initialJsonData.json';

export const jsonDataSlice = createSlice({
    name: 'jsonData',
    initialState: JSON.stringify(initialJsonData),
    reducers: {
        replace: (_state, action) => {
            return action.payload;
        },
    },
});

export const { replace } = jsonDataSlice.actions

export default jsonDataSlice.reducer