"use client";

import axios from "@/services/axios.service";

export const fetchUserData = async (userId: string) => {
  try {
    const res = await axios.get(`/user/get-by-id/${userId}`);
    // console.log(res.data);

    return res.data;
  } catch (error) {
    throw error;
  }
};
