"use client";
import HotelModal from "@/components/HotelModal/page";
import Loader from "@/components/Loader";
import FullLayout from "@/layouts/FullLayout/FullLayout";

import {
  fetchAllHotel,
  searchHotelsByCity,
  searchHotelsByName,
  searchHotelsByRating,
} from "@/services/hotel.service";

import { useEffect, useState } from "react";

export interface IHotelProps {}

export default function Hotel(props: IHotelProps) {
  const [listHotel, setListHotel] = useState<HotelType[]>();
  const [city, setCity] = useState<string>();
  const [inputSearch, setInputSearch] = useState<string>("");
  useEffect(() => {
    async function getListHotel() {
      const data = await fetchAllHotel();
      setListHotel(data);
    }
    getListHotel();
  }, []);

  // search hotel from input
  const handleSearch = async () => {
    // call api here
    const nameHotel = encodeURIComponent(inputSearch);
    console.log(nameHotel);

    const res = await searchHotelsByName(nameHotel);
    // set data to listHotel
    setListHotel(res);
    //  set FilterCondition
  };
  // search hotel from city
  const handleSelectCity = async (e: any) => {
    const city = e.target.value;
    setCity(city);
    if (city === "") {
      location.reload();
    }
    const res = await searchHotelsByCity(city);
    setListHotel(res);
  };
  // search hotel with rating
  const handleSelectRating = async (e: any) => {
    if (e.target.value === "") {
      location.reload();
    }
    const res = await searchHotelsByRating(parseInt(e.target.value));
    setListHotel(res);
  };

  return (
    <FullLayout>
      <div className="min-h-screen mt-[80px]">
        <div className="md:container md:mx-auto md:grid md:grid-cols-4 md:gap-2 py-4">
          <div className="md:col-span-2 flex justify-center items-center gap-3">
            <input
              placeholder="Type name hotel here ...."
              onChange={(e) => setInputSearch(e.target.value)}
              type="text"
              value={inputSearch}
              className="outline-double focus:outline-none focus:ring focus:border-blue-500 md:w-full w-2/3  px-2 py-1 rounded-sm text-[12px] md:text-sm text-gray-700 capitalize "
            />
          </div>
          <div className="flex md:col-span-1 md:justify-end gap-3 items-center justify-center mt-4 md:mt-0">
            <div>
              <select
                value={city}
                onChange={handleSelectCity}
                className="outline-double px-2 py-1 text-[12px] md:text-sm text-gray-800 capitalize"
                id=""
              >
                <option className="text-center " value="">
                  Filter by city
                </option>
                <option className="text-center" value="Cần Thơ">
                  Can Tho
                </option>
                <option className="text-center" value="Đà Nẵng">
                  Da Nang
                </option>
                <option className="text-center" value="Vũng Tàu">
                  Vung Tau
                </option>
                <option className="text-center" value="Đà Lạt">
                  Da Lat
                </option>
                <option className="text-center" value="Nha Trang">
                  Nha Trang
                </option>
              </select>
            </div>
            <div>
              <select
                onChange={handleSelectRating}
                className="outline-double px-2 py-1 text-[12px] md:text-sm text-gray-800"
                id=""
              >
                <option className="text-center" value="">
                  Filter by rating
                </option>
                <option className="text-center" value="1">
                  From 1 Star
                </option>
                <option className="text-center" value="2">
                  From 2 Star
                </option>
                <option className="text-center" value="3">
                  From 3 Star
                </option>
                <option className="text-center" value="4">
                  From 4 Star
                </option>
                <option className="text-center" value="5">
                  From 5 Star
                </option>
              </select>
            </div>
          </div>
          <div className="flex justify-center items-center md:block my-3 md:my-0">
            <button
              onClick={handleSearch}
              className="px-2 py-1 text-center text-[12px] md:text-sm text-gray-200 bg-light-blue-800 hover:bg-orange-800 rounded md:float-right md:w-[50%] font-bold w-[30%]"
            >
              Search
            </button>
          </div>
        </div>
        <div>
          {listHotel ? (
            <div className="container mx-auto">
              <ul className="grid grid-cols-6 xl:grid-cols-10">
                {listHotel.map((hotel: HotelType, index: any) => (
                  <li
                    data-aos="fade-up"
                    key={index}
                    className="col-span-3 mx-1 my-5 rounded-xl  p-1 md:col-span-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  transition ease-in-out  hover:bg-gray-300  hover:translate-y-1"
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
      </div>
    </FullLayout>
  );
}
