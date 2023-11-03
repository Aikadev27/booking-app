"use client";
import { deleteOneHotel } from "@/services/hotel.service";
import Link from "next/link";
import {} from "react";
export interface IManageHotelCardProps {
  hotelData: HotelType;
}

export default function ManageHotelCard(props: IManageHotelCardProps) {
  const hotel = props.hotelData;
  const handleDeleteHotel = (hotelId: string, nameHotel: any) => {
    const confirmed = window.confirm(
      `Bạn có chắc chắn muốn xóa khách sạn  ${nameHotel} này ?`
    );
    if (confirmed) {
      deleteOneHotel(hotelId);
      location.reload();
    }
  };
  return (
    <div
      className="pb-3 pt-1 px-1 bg-white m-1 rounded shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] min-h-[400px]"
      data-aos="fade-up"
    >
      <div>
        <img
          src={`${hotel.featuredImageUrl[0]}`}
          alt="Hotel Image"
          className="max-h-[200px] w-full object-cover rounded min-h-[200px]"
        />
      </div>
      <div className="ml-1">
        <h1 className="text-center my-1 text-light-blue-700 font-semibold">
          {hotel.nameHotel}
        </h1>
        <h1>Email: {hotel.emailHotel}</h1>
        <h1>City: {hotel.location.city}</h1>
        <h1>Phone: {hotel.servicePhoneNumber}</h1>
        <h1>Rate: {hotel.averageRating} ⭐</h1>
        <h1>Total reviews: {hotel.rateCount}</h1>
      </div>
      <div className="flex justify-between gap-4 items-center">
        <div>
          <Link href={`businessManage/rooms/${hotel._id}`}>
            <button className="py-1 px-1 bg-green-600 rounded text-sm text-white hover:bg-green-300">
              Manage Rooms
            </button>
          </Link>
        </div>
        <div className="flex gap-4 ">
          <Link href={`/businessManage/${hotel._id}`}>
            <button className="px-2 py-1 rounded bg-yellow-800 hover:bg-yellow-500">
              Edit
            </button>
          </Link>
          <button
            className="px-2 py-1 bg-red-800 text-white rounded hover:bg-red-500"
            onClick={() => handleDeleteHotel(hotel._id, hotel.nameHotel)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
