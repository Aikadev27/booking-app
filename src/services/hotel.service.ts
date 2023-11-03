"use client";

import axios from "@/services/axios.service";
import { toast } from "react-toastify";
export const fetchAllHotel = async () => {
  try {
    const res = await axios.get("/hotel/get-all-hotels");
    const ListHotel: HotelType[] = res.data;
    console.log("du lieu tra ve tu backend", ListHotel);

    return ListHotel;
  } catch (error) {
    throw error;
  }
};

export const searchHotelsByName = async (nameHotel: string) => {
  try {
    const res = await axios.get(`/hotel/search/${nameHotel}`);
    const listHotel: HotelType[] = res.data;
    return listHotel;
  } catch (error) {
    throw error;
  }
};

export const searchHotelsByCity = async (city: string) => {
  try {
    const res = await axios.get(`/hotel/get-by-city/${city}`);
    const data: HotelType[] = res.data;
    return data;
  } catch (error) {
    throw error;
  }
};
export const searchHotelsByRating = async (rate: number) => {
  try {
    const res = await axios.get(`/hotel/search/${rate}`);
    const data: HotelType[] = res.data;
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteOneHotel = async (hotelId: string) => {
  try {
    const res = await axios.delete(`/hotel/delete-by-id/${hotelId}`);
    const message = res.data.message;
    toast.success(`${message}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  } catch (error) {
    throw error;
  }
};

export const fetchHotelInfo = async (hotelId: string) => {
  try {
    const res = await axios.get(`/hotel/get-by-id/${hotelId}`);
    const data: HotelType = res.data;
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateHotelInfo = async (formData: any, hotelId: string) => {
  try {
    const res = await axios.patch(`/hotel/update-by-id/${hotelId}`, formData);
    toast.success(`${res.data.message}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  } catch (error) {
    throw error;
  }
};

export const createHotel = async (createFormData: any) => {
  try {
    const res = await axios.post(`/hotel/create-hotel`, createFormData);
    toast.success(`create success`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    console.log(res.data);
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
