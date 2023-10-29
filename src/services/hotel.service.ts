"use client";

import axios from "@/services/axios.service";

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
