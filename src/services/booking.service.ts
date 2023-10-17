"use client";
import axios from "@/services/axios.service";

export const fetchBookingInfoData = async (bookingId: any) => {
  try {
    const res = await axios.get(`/booking/get-bookingInfo-by-id/${bookingId}`);
    console.log("get booking information", res.data);
    const data: BookingInfoType = res.data;

    return data;
  } catch (error: any) {
    console.log(error);

    throw error.message;
  }
};
