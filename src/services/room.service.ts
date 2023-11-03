"use client";
import axios from "@/services/axios.service";
import { toast } from "react-toastify";
export const makeReservationRoom = async (
  reserveForm: any,
  roomId: string,
  router: any
) => {
  try {
    const res = await axios.post(
      `/booking/reserve-room-id/${roomId}`,
      reserveForm
    );
    toast.success(`${res.data.message} `, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    console.log("du lieu tra ve", res.data);
    const id = res.data.bookingInfo._id;
    console.log(id);
    router.push(`/booking/detail/${id}`);
  } catch (error: any) {
    console.log(error);
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

export const fetchRoomById = async (roomId: string) => {
  try {
    const res = await axios.get(`hotel/room/get-room-by-id/${roomId}`);
    const data = res.data;
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateRoom = async (roomId: string, formData: any) => {
  try {
    const res = await axios.patch(
      `/hotel/room/update-room-by-id/${roomId}`,
      formData
    );
    toast.success(`${res.data.message} `, {
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

export const createNewRoom = async (hotelId: string, formData: any) => {
  try {
    const res = await axios.post(
      `/hotel/room/create-room-by-hotel-id/${hotelId}`,
      formData
    );
    toast.success(`${res.data.message} `, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
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

export const deleteRoom = async (id: string) => {
  try {
    const res = await axios.delete(`/hotel/room/deleteRoomById/${id}`);

    toast.success(`${res.data.message} `, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
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
