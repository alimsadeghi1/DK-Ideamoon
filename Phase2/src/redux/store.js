import {configureStore} from "@reduxjs/toolkit";
import homeSlider from './slices/home'
import sendIdea from "./slices/sendIdea";
import challengeSlice from "./slices/challengeSlice";

export const store = configureStore({
    reducer: {
        homeSlider: homeSlider,
        sendIdea: sendIdea,
        challenge: challengeSlice
    }
})
