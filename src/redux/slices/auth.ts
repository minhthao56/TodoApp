import {createSlice} from '@reduxjs/toolkit';

interface IinitialStateAuth {
  isLogined: boolean;
}

const initialState = {
  isLogined: false,
} as IinitialStateAuth;

const changeViewReducer = createSlice({
  name: 'anth',
  initialState: initialState,
  reducers: {
    doLogin(state) {
      return {
        ...state,
        isLogined: true,
      };
    },
    doLogout(state) {
      return {
        ...state,
        isLogined: false,
      };
    },
  },
});

const {actions, reducer} = changeViewReducer;
export const {doLogin, doLogout} = actions;
export default reducer;
