"use client";

import { useEffect, useState } from "react";
import axios from "@/services/axios.service";
import Loader from "@/components/Loader";
import FullLayout from "@/layouts/FullLayout/FullLayout";
import Link from "next/link";
import RoomsList from "@/components/Rooms/Rooms";
import Reviews from "@/components/ReviewsOfHotel/Reviews";
import { createReview } from "@/services/hotel.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGlobe,
  faHouse,
  faLocation,
  faLocationDot,
  faMailBulk,
  faPhone,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
// fa icon
// import Wrap from "@/layouts/Wrap";
export interface IDetailProps {
  params: any;
}

export default function Detail(props: IDetailProps) {
  const [hotel, setHotel] = useState<HotelDetail>();
  const hotelId = props.params.id;
  const [editComment, setEditComment] = useState<boolean>(false);
  const [comment, setComment] = useState<string>("");
  const [rate, setRate] = useState<number>(5);
  async function fetchHotelData(hotelId: string) {
    const res = await axios.get(`/hotel/get-by-id/${hotelId}`);
    const data = res.data;
    setHotel(data);
  }

  useEffect(() => {
    fetchHotelData(hotelId);
  }, [hotelId]);

  const handleCreateReview = async (hotelId: string) => {
    const reviewForm = {
      rating: rate,
      comment: comment,
    };
    //  call api to post review here
    createReview(reviewForm, hotelId);
  };

  return (
    <FullLayout>
      <div className="container md:mx-auto ml-1 mr-1">
        {hotel ? (
          <div className="mt-[70px]">
            <div className="grid grid-cols-10">
              <div className="col-span-4">
                {/* main img */}
                <div data-aos="fade-up">
                  <img
                    data-aos="fade-up"
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
                        data-aos="fade-up"
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
              <div data-aos="fade-up" className="col-span-6 relative ">
                <div className="mx-2 md:mx-4">
                  <div className="flex my-1 md:my-3 gap-2 md:gap-6 items-center">
                    <FontAwesomeIcon icon={faHouse} className="text-blue-700" />
                    <p className="text-base md:text-2xl text-gray-800 font-bold uppercase font-custom1">
                      {hotel.nameHotel}
                    </p>
                  </div>
                  <div className="flex my-1 md:my-3 gap-2 md:gap-6 items-center">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="text-blue-700"
                    />
                    <p className="text-sm md:text-xl text-gray-800 capitalize font-custom1">
                      {hotel.location.city},{hotel.location.district},
                      {hotel.location.street}
                    </p>
                  </div>
                  <div className="flex my-1 md:my-3 gap-2 md:gap-6 items-center">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-blue-700"
                    />
                    <p className="text-sm md:text-xl text-gray-800 font-custom1">
                      {hotel.emailHotel}
                    </p>
                  </div>
                  <div className="flex my-1 md:my-3 gap-2 md:gap-6 items-center">
                    <FontAwesomeIcon icon={faPhone} className="text-blue-700" />
                    <p className="text-sm md:text-xl text-gray-800 font-custom1">
                      {hotel.servicePhoneNumber}
                    </p>
                  </div>
                  <div className="flex my-1 md:my-3 gap-2 md:gap-6 items-center">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-700"
                    />
                    <p className="text-sm md:text-xl text-gray-800 font-custom1">
                      {hotel.averageRating}
                    </p>
                  </div>
                  <div className="flex my-1 md:my-3 gap-2 md:gap-6 items-center">
                    <FontAwesomeIcon icon={faGlobe} className="text-blue-700" />
                    <p className="text-sm md:text-xl text-gray-800 font-custom1">
                      {hotel.rateCount}
                    </p>
                  </div>
                </div>
                <div className="top-3/4 absolute mx-2 md:mx-4">
                  <p className="text-sm md:text-base text-teal-800 font-custom1">
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
              <div data-aos="fade-up" className="grid grid-cols-8 ">
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
            <div
              data-aos="fade-up"
              className="mt-4 border-t border-gray-300 border-solid"
            >
              <h1 className="capitalize text-gray-900 font-semibold text-sm md:text-base md:mt-4">
                Explore nearby locations
              </h1>
              <div className="grid grid-cols-11">
                <div className="col-span-9 flex justify-between">
                  <ul className="col-span-3 ">
                    <li className="text-sm text-gray-700 my-2">
                      {hotel.location.city} Tourist
                    </li>
                    <li className="text-sm text-gray-700 my-2">
                      {hotel.location.city} Market
                    </li>
                  </ul>
                  <ul className="col-span-3 ">
                    <li className="text-sm text-gray-700 my-2">
                      {hotel.location.city} Museum
                    </li>
                    <li className="text-sm text-gray-700 my-2">
                      Mekong Delta {hotel.location.city}
                    </li>
                  </ul>
                  <ul className="col-span-3 ">
                    <li className="text-sm text-gray-700 my-2">
                      {hotel.location.city} ( វត្ត មុនីរង្សី) Pagoda
                    </li>
                    <li className="text-sm text-gray-700 my-2">
                      {hotel.location.city} Love bridge
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
            {/* reviews here*/}
            <p className="text-center font-bold text-sm text-orange-800 md:text-2xl py-2 tracking-wider">
              10 Latest Of Reviews
            </p>
            <Reviews hotelId={hotelId} />

            <div className="mx-5 md:mx-14 mt-4">
              <div className="flex justify-end gap-2 items-center mx-2 my-2">
                <label
                  htmlFor="rateRange"
                  className="text-sm text-gray-800 font-semibold"
                >
                  Select Rating Levels For {hotel.nameHotel}
                </label>
                <select
                  className=" text-[12px] md:text-xl px-4 text-center appearance-none border-gray-500 border rounded-sm text-black font-bold"
                  name="rateRange"
                  id="rateRange"
                  onChange={(e) => setRate(Number(e.target.value))}
                >
                  <option value={5}>5</option>
                  <option value={4}>4</option>
                  <option value={3}>3</option>
                  <option value={2}>2</option>
                  <option value={1}>1</option>
                </select>
                <FontAwesomeIcon icon={faStar} className="text-orange-400" />
              </div>
              <textarea
                name="comment"
                id="comment"
                className=" block w-full text-sm  border border-gray-300 p-2 focus:border-blue-600 outline-none"
                placeholder="Write your comment"
                rows={5}
                onFocus={() => setEditComment(true)}
                onBlur={() => setEditComment(false)}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <div className=" flex  justify-end gap-2  mx-5 md:mx-14 my-2 md:my-4">
                <button
                  onClick={() => handleCreateReview(hotelId)}
                  className={`text-[12px] md:text-sm font-bold p-2 rounded-sm  ${
                    editComment
                      ? "bg-blue-400 cursor-pointer hover:bg-orange-400 hover:text-white"
                      : "bg-gray-400 cursor-not-allowed"
                  }  transition-all ease-in-out duration-150`}
                >
                  Post Comment
                </button>
                <button className="text-[12px] md:text-sm font-bold p-2 rounded-sm hover:text-white bg-gray-400 hover:bg-gray-600 transition-all ease-in-out duration-150">
                  Cancel
                </button>
              </div>
              {/* rate */}
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
