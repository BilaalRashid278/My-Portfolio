import { configureStore } from "@reduxjs/toolkit";
import {RotateSliceReducer,MenuHiddenReducer,AddProjectReducer} from '../features/reducer'
const store =  configureStore({
    reducer : {
        RotateIconSlice : RotateSliceReducer,
        MenuHidden : MenuHiddenReducer,
        AddProject : AddProjectReducer
    }
});

export default store