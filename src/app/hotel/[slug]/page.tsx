"use client";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchHotelsByCity } from "@/redux/hotelSlice";
import HotelModal from "@/components/HotelModal/page";
import Loader from "@/components/Loader";
import FullLayout from "@/layouts/FullLayout/FullLayout";

export interface IHotelByCityProps {
  params: any;
}
interface CityImages {
  [key: string]: string;
}

const cityImage: CityImages = {
  "Cần Thơ":
    "https://media.vneconomy.vn/images/upload/2022/03/02/anh-thanh-pho-2-16355899477761013957557.jpg",
  "Vũng Tàu":
    "https://nld.mediacdn.vn/291774122806476800/2021/9/21/z2781481815673bcaa949d3dc23aa2ccc49e55980e4e93-1632229779349784256288.jpg",
  "Đà Lạt":
    "https://static.vinwonders.com/production/dia-diem-du-lich-da-lat-1.jpg",
  "Nha Trang":
    "https://www.vietfuntravel.com.vn/image/data/Blog/DiaDiem/hinh-anh-cac-dia-diem-du-lich-nha-trang/hinh-anh-cac-dia-diem-du-lich-nha-trang-14.jpg",
  "Đà Nẵng":
    "https://divui.com/blog/wp-content/uploads/2018/02/lich-trinh-du-lich-da-nang-hoi-an-3ngay-2-dem-5-1024x678.jpg",
};

export default function HotelByCity(props: IHotelByCityProps) {
  const dispatch = useAppDispatch();
  const location = props.params.slug;
  // from store
  const listHotel: any = useAppSelector(
    (state) => state.hotel.HotelsByCity.listHotels
  );
  const iFetching: boolean = useAppSelector(
    (state) => state.hotel.HotelsByCity.isFetching
  );
  // handle source image
  const city = decodeURIComponent(props.params.slug);
  const cityImg = cityImage[city];
  const defaultSrc = "";
  const imageSrc = cityImg || defaultSrc;
  // call api

  useEffect(() => {
    dispatch(fetchHotelsByCity(location));
  }, [location]);

  return (
    <FullLayout>
      <div className="container mx-auto md:h-screen mt-[64px] ">
        {listHotel ? (
          <div>
            <div>
              <img
                data-aos="fade-down"
                src={imageSrc}
                alt={location}
                className="w-full h-[300px] object-cover hidden md:block rounded-md "
              />
            </div>
            <div>
              <h1
                data-aos="fade-right"
                className="mt-0 md:mt-[24px] text-center md:text-left "
              >
                <span className="border-b-[2px] border-solid border-gray-600 text-base md:text-2xl font-bold text-gray-700">
                  {city} City's Hotels
                </span>
              </h1>
              <ul className="grid grid-cols-6 xl:grid-cols-10">
                {listHotel.map((hotel: HotelType, index: any) => (
                  <li
                    data-aos="fade-up"
                    key={index}
                    className="col-span-3 mx-1 my-5 rounded-xl p-1 xl:col-span-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition ease-in-out hover:bg-gray-300 hover:translate-y-1"
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
          </div>
        ) : iFetching ? (
          <div>
            <Loader />
          </div>
        ) : (
          <div className="text-center">pleas wait</div>
        )}
      </div>
    </FullLayout>
  );
}
