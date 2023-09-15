"use client";

import {
  loginFailed,
  loginStart,
  loginSuccess,
  registerStart,
  registerSuccess,
  registerFailed,
} from "@/redux/authSlice";
import axios from "@/services/axios.service";

import { toast } from "react-toastify";
export const loginUser = async (userData: any, dispatch: any, router: any) => {
  dispatch(loginStart());

  try {
    const res = await axios.post("/auth/login", userData);
    dispatch(loginSuccess(res.data));
    const accessToken = res.data.accessToken;
    const refreshToken = res.data.refreshToken;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    toast.success(
      `${res.data.info.sex ? "Hello Mr." : "Hello Ms."}  ${
        res.data.info.username
      }`,
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }
    );
    router.push("/");
  } catch (error: any) {
    toast.error(`${error.message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    dispatch(loginFailed());
  }
};

export const registerUser = async (
  userData: any,
  dispatch: any,
  router: any
) => {
  dispatch(registerStart);
  try {
    const res = await axios.post("/auth/register", userData);

    dispatch(registerSuccess);
    toast.success(`Register successfully !! login please `, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    router.push("/auth/login");
  } catch (error: any) {
    toast.error(`${error.message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    dispatch(registerFailed);
  }
};
