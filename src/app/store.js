import { configureStore } from "@reduxjs/toolkit";
import {RotateSliceReducer,MenuHiddenReducer} from '../features/reducer'
const store =  configureStore({
    reducer : {
        RotateIconSlice : RotateSliceReducer,
        MenuHidden : MenuHiddenReducer
    }
});

export default store