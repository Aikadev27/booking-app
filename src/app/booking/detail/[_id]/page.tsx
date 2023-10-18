"use client";
import { fetchBookingInfoData } from "@/services/booking.service";
import { useEffect, useState } from "react";
import Link from "next/link";
import SimpleLoader from "@/components/SimpleLoader";
export interface IBookingDetailProps {
  params: any;
}

export default function BookingDetail(props: IBookingDetailProps) {
  const bookingId: string = props.params._id;
  const [bookingInfo, setBookingInfo] = useState<BookingInfoType>();

  // cần xử lí checkIn và checkOut về dạng string

  // fetch Data
  useEffect(() => {
    async function fetchData(bookingId: string) {
      const data = await fetchBookingInfoData(bookingId);
      data.checkInDate = new Date(data.checkInDate);
      data.checkOutDate = new Date(data.checkOutDate);

      setBookingInfo(data);
    }
    fetchData(bookingId);
  }, [bookingId]);

  return (
    <div className="h-screen bg-none flex justify-center md:items-center md:bg-[url('https://wallpapers.com/images/hd/doodle-glowing-artwork-vhu5ts3hs8bxyq5a.jpg')] ">
      {bookingInfo ? (
        <div
          data-aos="fade-up"
          className="md:bg-white md:opacity-95 rounded-xl w-full h-fit mt-[64px] md:mt-0 mb-[64px] md:mb-0 md:w-[70%] md:h-[80%] md:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] md:grid md:grid-rows-6 md:p-2"
        >
          <div className="md:row-span-5">
            <h1 className="text-center text-sm md:text-base text-deep-orange-700 uppercase font-bold  mb-4">
              Detailed room information
            </h1>
            <div className="mx-2">
              <div className="grid grid-cols-2 py-2 md:grid-cols-8 border-b border-gray-100">
                <h1 className=" text-start ml-5 md:col-span-3 uppercase font-semibold text-sm md:text-[14px] text-indigo-600">
                  Customer name
                </h1>
                <p className="text-center md:col-span-5 text-base font-bold text-gray-800 md:text-left">
                  {bookingInfo.customer.username}
                </p>
              </div>
              <div className="grid grid-cols-2 py-4 md:grid-cols-8 border-b border-gray-100">
                <h1 className=" text-start ml-5 md:col-span-3 uppercase font-semibold text-sm md:text-[14px] text-indigo-600">
                  Customer email
                </h1>
                <p className="text-center md:col-span-5 text-base font-bold text-gray-800 md:text-left">
                  {bookingInfo.customer.email}
                </p>
              </div>
              <div className="grid grid-cols-2 py-4 md:grid-cols-8 border-b border-gray-100">
                <h1 className=" text-start ml-5 md:col-span-3 uppercase font-semibold text-sm md:text-[14px] text-indigo-600">
                  address
                </h1>
                <p className="text-center md:col-span-5 text-base font-bold text-gray-800 md:text-left">
                  {bookingInfo.customer.address}
                </p>
              </div>
              <div className="grid grid-cols-2 py-4 md:grid-cols-8 border-b border-gray-100">
                <h1 className=" text-start ml-5 md:col-span-3 uppercase font-semibold text-sm md:text-[14px] text-indigo-600">
                  phone number
                </h1>
                <p className="text-center md:col-span-5 text-base font-bold text-gray-800 md:text-left">
                  {bookingInfo.customer.phoneNumber}
                </p>
              </div>
              <div className="grid grid-cols-2 py-4 md:grid-cols-8 border-b border-gray-100">
                <h1 className=" text-start ml-5 md:col-span-3 uppercase font-semibold text-sm md:text-[14px] text-indigo-600">
                  room number
                </h1>
                <p className="text-center md:col-span-5 text-base font-bold text-gray-800 md:text-left">
                  {bookingInfo.room.roomNumber}
                </p>
              </div>
              <div className="grid grid-cols-2 py-4 md:grid-cols-8 border-b border-gray-100">
                <h1 className=" text-start ml-5 md:col-span-3 uppercase font-semibold text-sm md:text-[14px] text-indigo-600">
                  room type
                </h1>
                <p className="text-center md:col-span-5 text-base font-bold text-gray-800 md:text-left">
                  {bookingInfo.room.roomType}
                </p>
              </div>
              <div className="grid grid-cols-2 py-4 md:grid-cols-8 border-b border-gray-100">
                <h1 className=" text-start ml-5 md:col-span-3 uppercase font-semibold text-sm md:text-[14px] text-indigo-600">
                  price per night
                </h1>
                <p className="text-center md:col-span-5 text-base font-bold text-gray-800 md:text-left">
                  {bookingInfo.room.pricePerNight}$
                </p>
              </div>
              <div className="grid grid-cols-2 py-4 md:grid-cols-8 border-b border-gray-100">
                <h1 className=" text-start ml-5 md:col-span-3 uppercase font-semibold text-sm md:text-[14px] text-indigo-600">
                  number of people
                </h1>
                <p className="text-center md:col-span-5 text-base font-bold text-gray-800 md:text-left">
                  {bookingInfo.userQuantity}
                </p>
              </div>
              <div className="grid grid-cols-2 py-4 md:grid-cols-8 border-b border-gray-100">
                <h1 className=" text-start ml-5 md:col-span-3 uppercase font-semibold text-sm md:text-[14px] text-indigo-600">
                  check in date
                </h1>
                <p className="text-center md:col-span-5 text-base font-bold text-gray-800 md:text-left">
                  {bookingInfo.checkInDate.toDateString()}
                </p>
              </div>
              <div className="grid grid-cols-2 py-4 md:grid-cols-8 border-b border-gray-100">
                <h1 className=" text-start ml-5 md:col-span-3 uppercase font-semibold text-sm md:text-[14px] text-indigo-600">
                  check out date
                </h1>
                <p className="text-center md:col-span-5 text-base font-bold text-gray-800 md:text-left">
                  {bookingInfo.checkOutDate.toDateString()}
                </p>
              </div>
            </div>
          </div>
          <div className="md:row-span-1 flex items-center md:justify-center gap-20">
            <Link href={`/`}>
              <button className="h-[40px] text-white font-bold hover:bg-orange-600 md:max-h-10 break-words absolute bottom-3 left-3 md:relative text-[12px] bg-orange-400 rounded-md p-1 w-[100px] ">
                home
              </button>
            </Link>
            <Link href={`/booking/history`}>
              <button className="h-[40px] text-white font-bold hover:bg-blue-600 md:max-h-10 break-words absolute bottom-3 right-3 md:relative text-[12px] bg-blue-400 rounded-md p-1 w-[100px]">
                view booking history
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <SimpleLoader />
        </div>
      )}
    </div>
  );
}
