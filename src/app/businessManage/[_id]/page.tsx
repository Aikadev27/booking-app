"use client";
import SimpleLoader from "@/components/SimpleLoader";
import { fetchHotelInfo, updateHotelInfo } from "@/services/hotel.service";
import Link from "next/link";
import { useEffect, useState } from "react";
export interface IEditHotelProps {
  params: any;
}

export default function EditHotel(props: IEditHotelProps) {
  const id = props.params._id;
  const [hotel, setHotel] = useState<HotelType>();
  const [nameHotel, setNameHotel] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [city, setCity] = useState<string>();
  const [district, setDistrict] = useState<string>();
  const [subAdd, setSubAdd] = useState<string>();
  const [street, setStreet] = useState<string>();
  const [decs, setDecs] = useState<string>();
  const [number, setNumber] = useState<string>();
  useEffect(() => {
    async function fetchOneHotel(hotelId: string) {
      const res = await fetchHotelInfo(hotelId);
      setHotel(res);
    }
    fetchOneHotel(props.params._id);
  }, []);

  const handleUpdateHotel = async (e: any) => {
    e.preventDefault();
    const formData = {
      nameHotel: nameHotel,
      emailHotel: email,
      servicePhoneNumber: number,
      desc: decs,
      city: city,
      district: district,
      street: street,
      subAddress: subAdd,
    };
    updateHotelInfo(formData, id);
  };
  return (
    <div className="bg-[url('https://wallpapers.com/images/hd/doodle-glowing-artwork-vhu5ts3hs8bxyq5a.jpg')]">
      <div className="container mx-auto h-screen flex justify-center items-center ">
        {hotel ? (
          <div className="w-[80%]  bg-teal-900 pb-4">
            <div>
              <img
                src={hotel.featuredImageUrl[0]}
                alt=""
                className="h-[300px] w-full object-cover"
              />
            </div>
            <form className="mt-3" onSubmit={handleUpdateHotel}>
              <div className="flex gap-3 mx-2 my-2">
                <label className="p-1 text-sm font-bold w-[200px] text-white">
                  Name Hotel
                </label>
                <input
                  type="text"
                  onChange={(e) => setNameHotel(e.target.value)}
                  defaultValue={`${hotel.nameHotel}`}
                  className="flex-1 px-1 py-1 text-sm rounded"
                />
              </div>
              <div className="flex gap-3 mx-2 my-2">
                <label className="p-1 text-sm font-bold w-[200px] text-white">
                  Email
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  defaultValue={`${hotel.emailHotel}`}
                  className="flex-1 px-1 py-1 text-sm rounded"
                />
              </div>
              <div className="flex gap-3 mx-2 my-2">
                <label className="p-1 text-sm font-bold w-[200px] text-white">
                  City
                </label>
                <input
                  type="text"
                  onChange={(e) => setCity(e.target.value)}
                  defaultValue={`${hotel.location.city}`}
                  className="flex-1 px-1 py-1 text-sm rounded"
                />
              </div>
              <div className="flex gap-3 mx-2 my-2">
                <label className="p-1 text-sm font-bold w-[200px] text-white">
                  District
                </label>
                <input
                  type="text"
                  onChange={(e) => setDistrict(e.target.value)}
                  defaultValue={`${hotel.location.district}`}
                  className="flex-1 px-1 py-1 text-sm rounded"
                />
              </div>
              <div className="flex gap-3 mx-2 my-2">
                <label className="p-1 text-sm font-bold w-[200px] text-white">
                  Street
                </label>
                <input
                  type="text"
                  onChange={(e) => setStreet(e.target.value)}
                  defaultValue={`${hotel.location.street}`}
                  className="flex-1 px-1 py-1 text-sm rounded"
                />
              </div>
              <div className="flex gap-3 mx-2 my-2">
                <label className="p-1 text-sm font-bold w-[200px] text-white">
                  Sub Address
                </label>
                <input
                  type="text"
                  onChange={(e) => setSubAdd(e.target.value)}
                  defaultValue={`${hotel.location.subAddress}`}
                  className="flex-1 px-1 py-1 text-sm rounded"
                />
              </div>
              <div className="flex gap-3 mx-2 my-2">
                <label className="p-1 text-sm font-bold w-[200px] text-white">
                  Description
                </label>
                <input
                  type="text"
                  onChange={(e) => setDecs(e.target.value)}
                  defaultValue={`${hotel.desc}`}
                  className="flex-1 px-1 py-1 text-sm rounded"
                />
              </div>
              <div className="flex gap-3 mx-2 my-2">
                <label className="p-1 text-sm font-bold w-[200px] text-white">
                  Service Number
                </label>
                <input
                  type="text"
                  onChange={(e) => setNumber(e.target.value)}
                  defaultValue={`${hotel.servicePhoneNumber}`}
                  className="flex-1 px-1 py-1 text-sm rounded"
                />
              </div>
              <div className="text-center my-2">
                <button className="p-2 bg-pink-600 rounded text-center hover:bg-pink-300">
                  Update
                </button>
              </div>
            </form>
            <div className="text-right mr-3">
              <Link href={"/businessManage"}>
                <button className="text-white font-bold  italic underline hover:text-orange-600 ">
                  back
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
    </div>
  );
}
