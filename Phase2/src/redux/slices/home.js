import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    storiesRef: null
}
const home = createSlice({
    name: 'home',
    initialState,
    reducers: {
        SET_REF: (state, action) => {
            state.ref = action.payload;
        }
    }
})

export const { SET_REF } = home.actions;
export default home.reducer;