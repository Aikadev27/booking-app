"use client";
import axios from "@/services/axios.service";
import { toast } from "react-toastify";

export const fetchListUserByRole = async (role: string) => {
  try {
    const res = await axios.get(`/user/get-by-user-role/${role}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteOneUser = async (userId: string) => {
  try {
    const res = await axios.delete(`/user/delete-user-by-id/${userId}`);
    const message = res.data.message;
    toast.success(`${message} `, {
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
    }, 2000);
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
  }
};
