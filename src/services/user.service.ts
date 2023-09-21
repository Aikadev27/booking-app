"use client";

import axios from "@/services/axios.service";
import { toast } from "react-toastify";

export const fetchUserData = async (userId: string) => {
  try {
    const res = await axios.get(`/user/get-by-id/${userId}`);
    // console.log(res.data);

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const updateInfo = async (userId: string, formData: any) => {
  try {
    const res = await axios.patch(`/user/update-user/${userId}`, formData);
    toast.success(`Update successfully `, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    setTimeout(() => {
      window.location.reload();
    }, 3000);
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
    throw error;
  }
};
