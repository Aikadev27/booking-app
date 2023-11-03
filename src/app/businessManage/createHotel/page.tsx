"use client";

import { createHotel } from "@/services/hotel.service";
import Link from "next/link";
import { useState } from "react";
export interface ICreateHotelProps {}

export default function CreateHotel(props: ICreateHotelProps) {
  const [nameHotel, setNameHotel] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [city, setCity] = useState<string>();
  const [district, setDistrict] = useState<string>();
  const [street, setStreet] = useState<string>();
  const [decs, setDecs] = useState<string>();
  const [number, setNumber] = useState<string>();
  const [img, setImg] = useState<string>();

  const handleCreateHotel = async (e: any) => {
    e.preventDefault();
    const formData = {
      nameHotel: nameHotel,
      emailHotel: email,
      servicePhoneNumber: number,
      desc: decs,
      city: city,
      district: district,
      street: street,
      featuredImageUrl: img,
    };
    createHotel(formData);
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[url('https://wallpapers.com/images/hd/doodle-glowing-artwork-vhu5ts3hs8bxyq5a.jpg')]">
      <h1 className="text-white py-20 uppercase font-bold text-2xl tracking-[0.2rem]">
        Create New Hotel
      </h1>
      <form
        onSubmit={handleCreateHotel}
        className="container bg-blue-gray-200  mx-auto py-8 rounded-sm"
      >
        <div className="text-left ml-3">
          <Link href={"/businessManage"}>
            <button className="text-white font-bold  italic underline hover:text-orange-600 ">
              back
            </button>
          </Link>
        </div>
        <h1 className="uppercase text-base py-2 border-b text-orange-800 border-gray-300 text-center font-bold">
          Information
        </h1>
        <div className="grid grid-cols-3 my-3 mx-2">
          <label className="col-span-1 text-sm uppercase">
            Enter Name Hotel
          </label>
          <input
            onChange={(e) => setNameHotel(e.target.value)}
            className="col-span-2 py-2 mx-1 px-1 text-sm rounded"
            type="text"
            required
          />
        </div>
        <div className="grid grid-cols-3 my-3 mx-2">
          <label className="col-span-1 text-sm uppercase">
            Enter Email Hotel
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="col-span-2 py-2 mx-1 px-1 text-sm rounded"
            type="email"
            required
          />
        </div>
        <div className="grid grid-cols-3 my-3 mx-2">
          <label className="col-span-1 text-sm uppercase">
            Enter Description
          </label>
          <input
            onChange={(e) => setDecs(e.target.value)}
            className="col-span-2 py-2 mx-1 px-1 text-sm rounded"
            type="text"
          />
        </div>
        <div className="grid grid-cols-3 my-3 mx-2">
          <label className="col-span-1 text-sm uppercase">
            Enter Temp Image URL
          </label>
          <input
            onChange={(e) => setImg(e.target.value)}
            className="col-span-2 py-2 mx-1 px-1 text-sm rounded"
            type="text"
            required
          />
        </div>
        <div className="grid grid-cols-3 my-3 mx-2">
          <label className="col-span-1 text-sm uppercase">
            Enter Service Phone Number
          </label>
          <input
            onChange={(e) => setNumber(e.target.value)}
            className="col-span-2 py-2 mx-1 px-1 text-sm rounded"
            type="text"
            required
          />
        </div>
        <h1 className="uppercase text-base py-2 border-b text-light-blue-500 border-gray-300 text-center font-bold">
          Address
        </h1>
        <div className="grid grid-cols-3 my-3 mx-2">
          <label className="col-span-1 text-sm uppercase">Enter City</label>
          <input
            onChange={(e) => setCity(e.target.value)}
            className="col-span-2 py-2 mx-1 px-1 text-sm rounded"
            type="text"
          />
        </div>
        <div className="grid grid-cols-3 my-3 mx-2">
          <label className="col-span-1 text-sm uppercase">Enter District</label>
          <input
            onChange={(e) => setDistrict(e.target.value)}
            className="col-span-2 py-2 mx-1 px-1 text-sm rounded"
            type="text"
          />
        </div>
        <div className="grid grid-cols-3 my-3 mx-2">
          <label className="col-span-1 text-sm uppercase">
            Enter Street Number
          </label>
          <input
            onChange={(e) => setStreet(e.target.value)}
            className="col-span-2 py-2 mx-1 px-1 text-sm rounded"
            type="text"
          />
        </div>
        <div className="text-right mt-6 mr-4">
          <button className="p-2 bg-orange-800 rounded-sm hover:bg-orange-400 text-white font-bold">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
