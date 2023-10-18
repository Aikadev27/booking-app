"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchListHotel } from "@/redux/hotelSlice";
import { useEffect } from "react";
import HotelModal from "../HotelModal/page";
import Loader from "../Loader";

export interface IListHotelProps {}

export default function ListHotel(props: IListHotelProps) {
  const listHotel: any = useAppSelector((state) => state.hotel.listHotels);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchListHotel());
  }, []);

  return (
    <div>
      {listHotel ? (
        <div>
          <h1 className="text-center xl:text-left text-base uppercase xl:text-2xl font-bold text-black xl:ml-5">
            Outstanding
          </h1>
          <ul className="grid grid-cols-6 xl:grid-cols-12">
            {listHotel.slice(0, 12).map((hotel: HotelType, index: any) => (
              <li
                data-aos="fade-up"
                key={index}
                className="col-span-3 mx-1 my-5 rounded-xl  p-1 xl:col-span-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  transition ease-in-out  hover:bg-gray-300  hover:translate-y-1"
              >
                <HotelModal
                  imageUrl={hotel.featuredImageUrl[0]}
                  desc={hotel.desc}
                  location={hotel.location.city}
                  nameHotel={hotel.nameHotel}
                  rateCount={hotel.rateCount}
                  averageRating={hotel.averageRating}
                  id={hotel._id}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
