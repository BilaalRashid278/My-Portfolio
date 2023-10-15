import { createSlice } from "@reduxjs/toolkit";

const RotateIconSlice = createSlice({
  name: 'rotate',
  initialState: 'rotate',
  reducers: {
    changeIconsClass: (state) => {
      if (state == 'rotate') {
        return state = 'secondRotate'
      } else {
        return state = 'rotate'
      }
    }
  }
});

const MenuHidden = createSlice({
  name: 'menubarhidden',
  initialState: 'hidden',
  reducers: {
    changeHidden: (state) => {
      if (state == 'hidden') {
        return state = 'block'
      } else {
        return state = 'hidden'
      }
    }
  }
});
const AddProject = createSlice({
  name: 'AddProject',
  initialState: 'hidden',
  reducers: {
    AddProjectHidden: (state) => {
      if (state == 'hidden') {
        return state = 'block'
      } else {
        return state = 'hidden'
      }
    }
  }
});

const AddProjectReducer = AddProject.reducer
const RotateSliceReducer = RotateIconSlice.reducer
const MenuHiddenReducer = MenuHidden.reducer
export const {changeHidden} = MenuHidden.actions
export const { changeIconsClass } = RotateIconSlice.actions
export const {AddProjectHidden} = AddProject.actions
export  {RotateSliceReducer,MenuHiddenReducer,AddProjectReducer};