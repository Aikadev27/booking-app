"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchListHotel } from "@/redux/hotelSlice";
import ManageHotelCard from "./ManageHotelCard";
import SimpleLoader from "../SimpleLoader";
export interface IHotelManagementProps {}

export default function HotelManagement(props: IHotelManagementProps) {
  const dispatch = useAppDispatch();
  const listHotel: HotelType[] | any = useAppSelector(
    (state) => state.hotel.listHotels
  );
  useEffect(() => {
    dispatch(fetchListHotel());
  }, []);
  return (
    <div>
      {listHotel ? (
        <div>
          <ul className="w-full grid md:grid-cols-8 md:gap-2">
            {listHotel?.map((item: HotelType, index: any) => (
              <li key={index} className="col-span-2">
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
