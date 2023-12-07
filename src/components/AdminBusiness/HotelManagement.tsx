"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchListHotel, fetchListHotelByOwner } from "@/redux/hotelSlice";
import ManageHotelCard from "./ManageHotelCard";
import SimpleLoader from "../SimpleLoader";
import Link from "next/link";
export interface IHotelManagementProps {}

export default function HotelManagement(props: IHotelManagementProps) {
  const dispatch = useAppDispatch();
  const listHotel: HotelType[] | any = useAppSelector(
    (state) => state.hotel.listHotels
  );
  useEffect(() => {
    dispatch(fetchListHotelByOwner());
  }, []);
  return (
    <div className="mx-2 w-full">
      {listHotel ? (
        <div>
          <Link
            href={"/businessManage/createHotel"}
            className="w-[200px] block"
          >
            <button className="flex items-center text-sm font-bold hover:text-blue-400 uppercase my-4 text-center gap-2 p-2 ">
              Add new hotel
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </span>
            </button>
          </Link>
          <ul className="w-full grid md:grid-cols-8 md:gap-2 gap-0 ">
            {listHotel?.map((item: HotelType, index: any) => (
              <li key={index} className="col-span-2 w-full">
                <ManageHotelCard hotelData={item} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <SimpleLoader />
        </div>
      )}
    </div>
  );
}
