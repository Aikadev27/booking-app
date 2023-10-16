"use client";
import axios from "@/services/axios.service";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
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
