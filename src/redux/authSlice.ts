import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      user: null,
      error: false,
      isFetching: false,
      isAuthenticated: false,
    },
    register: {
      isError: false,
      isFetching: false,
      isSuccess: false,
    },
  },
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.login.user));
      state.login.isAuthenticated = true;

      state.login.error = false;
    },
    loginFailed: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
      state.login.isAuthenticated = false;
    },
    setUserData: (state, action) => {
      state.login.user = action.payload;
    },
    logOut: (state) => {
      state.login.isAuthenticated = false;
    },
    registerStart: (state) => {
      state.register.isFetching = true;
    },
    registerSuccess: (state) => {
      state.register.isFetching = false;
      state.register.isSuccess = true;
      state.register.isError = false;
    },
    registerFailed: (state) => {
      state.register.isFetching = false;
      state.register.isSuccess = false;
      state.register.isError = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailed,
  registerStart,
  registerSuccess,
  registerFailed,
  setUserData,
  logOut,
} = authSlice.actions;
export default authSlice.reducer;
