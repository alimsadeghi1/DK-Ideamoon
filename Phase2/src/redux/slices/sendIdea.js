import {createSlice} from "@reduxjs/toolkit";


const sendIdea = createSlice({
    initialState: {
        personnelCode: '',
        fullName: '',
        description: ''
    },
    name: 'sendIdea',
    reducers: {
        SET_PERSONAL: (state, action) => {
            state.personnelCode = action.payload
        },
        SET_FNAME: (state, action) => {
            state.fullName = action.payload
        },
        SET_DESC: (state, action) => {
            state.description = action.payload
        },
    }
})

export const {
    SET_DESC, SET_FNAME, SET_PERSONAL
} = sendIdea.actions;
export default sendIdea.reducer;