import Link from "next/link";
import * as React from "react";

export interface IHistoryModelProps {
  historyData: BookingHistoryType;
}

export default function HistoryModel(props: IHistoryModelProps) {
  const history = props.historyData;
  const checkIn = new Date(history.checkInDate);
  const checkOut = new Date(history.checkOutDate);
  return (
    <div className="w-full bg-gray-300 p-2 m-2 rounded-md">
      <div>
        <div className="grid grid-cols-8 my-2">
          <p className="col-span-2 text-[12px] md:text-sm text-light-blue-700 font-bold">
            <span className="text-gray-800 font-semibold mr-3">Customer: </span>
            {history.customer.username}
          </p>
          <p className="col-span-2 text-[12px] md:text-sm text-light-blue-700 font-bold">
            <span className="text-gray-800 font-semibold mr-3">
              People Quantity:{" "}
            </span>
            {history.userQuantity}
          </p>
          <p className="col-span-2 text-[12px] md:text-sm text-light-blue-700 font-bold">
            <span className="text-gray-800 font-semibold mr-3">Check In: </span>
            {checkIn.toDateString()}
          </p>
          <p className="col-span-2 text-[12px] md:text-sm text-light-blue-700 font-bold">
            <span className="text-gray-800 font-semibold mr-3">Check In: </span>
            {checkOut.toDateString()}
          </p>
        </div>
        <div className="grid grid-cols-8 my-2">
          <p className="col-span-2 text-[12px] md:text-sm text-light-blue-700 font-bold">
            <span className="text-gray-800 font-semibold mr-3">
              Room Number:{" "}
            </span>
            {history.room.roomNumber}
          </p>
          <p className="col-span-2 text-[12px] md:text-sm text-light-blue-700 font-bold">
            <span className="text-gray-800 font-semibold mr-3">
              Room Type:{" "}
            </span>
            {history.room.roomType}
          </p>
          <p className="col-span-2 text-[12px] md:text-sm text-light-blue-700 font-bold">
            <span className="text-gray-800 font-semibold mr-3">
              Price/Night:{" "}
            </span>
            {history.room.pricePerNight}
          </p>
          <p className="col-span-2 text-[12px] md:text-sm text-light-blue-700 font-bold">
            <span className="text-gray-800 font-semibold mr-3">Floor: </span>
            {history.room.floor}
          </p>
        </div>
      </div>
      <div className="text-right mt-4">
        <Link href={`/booking/detail/${history._id}`}>
          <button className="bg-blue-800 hover:bg-orange-800 px-2 py-1 text-white rounded">
            detail
          </button>
        </Link>
      </div>
    </div>
  );
}
