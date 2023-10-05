"use client";

import { useEffect, useState } from "react";
import axios from "@/services/axios.service";
import Loader from "@/components/Loader";
import FullLayout from "@/layouts/FullLayout/FullLayout";

import Link from "next/link";
import RoomsList from "@/components/Rooms/Rooms";
export interface IDetailProps {
  params: any;
}

export default function Detail(props: IDetailProps) {
  const [hotel, setHotel] = useState<HotelDetail>();

  const hotelId = props.params.id;
  useEffect(() => {
    async function fetchHotelData(hotelId: string) {
      const res = await axios.get(`/hotel/get-by-id/${hotelId}`);
      const data = res.data;
      setHotel(data);
    }
    fetchHotelData(hotelId);
  }, [hotelId]);

  return (
    <FullLayout>
      <div className="container md:mx-auto ml-1 mr-1">
        {hotel ? (
          <div className="mt-[70px]">
            <div className="grid grid-cols-10">
              <div className="col-span-4">
                {/* main img */}
                <div>
                  <img
                    src={hotel.featuredImageUrl[0]}
                    alt="main image"
                    className="h-[150px] md:h-[300px] w-full object-cover rounded-sm"
                  />
                </div>
                {/* list img */}
                <div className="overflow-x-auto">
                  <ul className="flex flex-nowrap gap-2">
                    {hotel.featuredImageUrl.map((img, index) => (
                      <li
                        key={index}
                        className="h-[60px] md:h-[150px] w-[50%] md:w-[30%] my-3"
                      >
                        <img
                          src={img}
                          alt=""
                          className="object-cover cursor-pointer w-full h-full rounded-lg"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-span-6 relative ">
                <div className="mx-2 md:mx-4">
                  <div className="flex my-1 md:my-3 gap-2 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                        color="gray"
                      >
                        <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
                        <path
                          fillRule="evenodd"
                          d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <h2 className="text-base md:text-xl text-gray-800 font-bold uppercase">
                      {hotel.nameHotel}
                    </h2>
                  </div>
                  <div className="flex my-1 md:my-3 gap-2 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                        color="gray"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </span>
                    <p className="text-sm md:text-xl text-gray-800 capitalize">
                      {hotel.location.city},{hotel.location.district},
                      {hotel.location.street}
                    </p>
                  </div>
                  <div className="flex my-1 md:my-3 gap-2 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                        color="gray"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </span>
                    <p className="text-sm md:text-xl text-gray-800">
                      {hotel.emailHotel}
                    </p>
                  </div>
                  <div className="flex my-1 md:my-3 gap-2 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                        color="gray"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </span>
                    <p className="text-sm md:text-xl text-gray-800">
                      {hotel.servicePhoneNumber}
                    </p>
                  </div>
                  <div className="flex my-1 md:my-3 gap-2 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="true"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 fill-yellow-500"
                        color="yellow"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </span>
                    <p className="text-sm md:text-xl text-gray-800">
                      {hotel.averageRating}
                    </p>
                  </div>
                  <div className="flex my-1 md:my-3 gap-2 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                        />
                      </svg>
                    </span>
                    <p className="text-sm md:text-xl text-gray-800">
                      {hotel.rateCount}
                    </p>
                  </div>
                </div>
                <div className="top-3/4 absolute mx-2 md:mx-4">
                  <p className="text-sm md:text-base text-gray-500">
                    {hotel.desc}
                  </p>
                </div>
              </div>
              <div className="hidden md:block col-span-3 md:col-span-1 md:col-end-11">
                <Link
                  href={"#rooms"}
                  className="p-1 md:p-2 bg-green-800 block text-center rounded-xl text-white text-sm hover:bg-green-400"
                >
                  See available rooms
                </Link>
              </div>
            </div>
            <div className="mt-4 border-t border-gray-300 border-solid">
              <h1 className="capitalize text-gray-900 font-semibold text-sm md:text-base md:mt-4">
                hotel amenities
              </h1>
              <div className="grid grid-cols-8 ">
                <ul className="col-span-2 mr-2 ml-2 p-1">
                  <li className="flex mr-2 mt-2 md:mt-4 text-gray-500 gap-1 md:gap-2 text-sm break-words">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                        color="gray"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                        />
                      </svg>
                    </span>
                    Restaurant
                  </li>
                  <li className="flex mr-2 mt-2 md:mt-4 text-gray-500 gap-1 md:gap-2 text-sm break-words">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                        color="gray"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                        />
                      </svg>
                    </span>
                    Conference room
                  </li>
                </ul>
                <ul className="col-span-2 mr-2 ml-2 p-1">
                  <li className="flex mr-2 mt-2 md:mt-4 text-gray-500 gap-1 md:gap-2 text-sm break-words">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                        color="gray"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                        />
                      </svg>
                    </span>
                    Bar
                  </li>
                  <li className="flex mr-2 mt-2 md:mt-4 text-gray-500 gap-1 md:gap-2 text-sm break-words">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                        color="gray"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                        />
                      </svg>
                    </span>
                    Wifi
                  </li>
                </ul>
                <ul className="col-span-2 mr-2 ml-2 p-1">
                  <li className="flex mr-2 mt-2 md:mt-4 text-gray-500 gap-1 md:gap-2 text-sm break-words">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                        color="gray"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                        />
                      </svg>
                    </span>
                    Pool
                  </li>
                  <li className="flex mr-2 mt-2 md:mt-4 text-gray-500 gap-1 md:gap-2 text-sm break-words">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                        color="gray"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                        />
                      </svg>
                    </span>
                    Air-conditioner
                  </li>
                </ul>
                <ul className="col-span-2 mr-2 ml-2 p-1">
                  <li className="flex mr-2 mt-2 md:mt-4 text-gray-500 gap-1 md:gap-2 text-sm break-words">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                        color="gray"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                        />
                      </svg>
                    </span>
                    Gym
                  </li>
                  <li className="flex mr-2 mt-2 md:mt-4 text-gray-500 gap-1 md:gap-2 text-sm break-words">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                        color="gray"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                        />
                      </svg>
                    </span>
                    Non-smoking rooms
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4 border-t border-gray-300 border-solid">
              <h1 className="capitalize text-gray-900 font-semibold text-sm md:text-base md:mt-4">
                Explore nearby locations
              </h1>
              <div className="grid grid-cols-11">
                <div className="col-span-9 flex justify-between">
                  <ul className="col-span-3 ">
                    <li className="text-sm text-gray-700 my-2">
                      Can Tho Tourist
                    </li>
                    <li className="text-sm text-gray-700 my-2">
                      Can Tho Market
                    </li>
                  </ul>
                  <ul className="col-span-3 ">
                    <li className="text-sm text-gray-700 my-2">
                      Can Tho Museum
                    </li>
                    <li className="text-sm text-gray-700 my-2">
                      Mekong Delta CanTho
                    </li>
                  </ul>
                  <ul className="col-span-3 ">
                    <li className="text-sm text-gray-700 my-2">
                      Khmer Can Tho ( វត្ត មុនីរង្សី) Pagoda
                    </li>
                    <li className="text-sm text-gray-700 my-2">
                      Can Tho Love bridge
                    </li>
                  </ul>
                </div>
                <div className="col-span-2">
                  <Link
                    href={
                      "https://www.google.com/maps/@9.7822248,105.5502399,12z?hl=vi-VN&entry=ttu"
                    }
                  >
                    <img
                      className="w-full h-full"
                      src="https://data.vietnambooking.com/business/hotel/svg/common/icon_map.svg"
                      alt="map google"
                    />
                  </Link>
                </div>
              </div>
            </div>
            {/* rooms */}

            <div id="rooms">
              <RoomsList rooms={hotel.rooms} />
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </FullLayout>
  );
}
