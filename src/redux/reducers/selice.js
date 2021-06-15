import { createSlice } from '@reduxjs/toolkit';


export const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducer: {
        increment:state => state += 1,
    },
});

export const { increment } = counterSlice.actions;
export const selectCout = (state) => state.counter.value;
export default counterSlice.reducer;