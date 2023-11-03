"use client";
import FullLayout from "@/layouts/FullLayout/FullLayout";
import { createNewRoom } from "@/services/room.service";
import Link from "next/link";
import { useEffect, useState } from "react";
export interface ICreateRoomProps {
  params: any;
}

export default function CreateRoom(props: ICreateRoomProps) {
  const HotelId = props.params.slug;
  const [number, setNumber] = useState<string>();
  const [type, setType] = useState<string>();
  const [desc, setDesc] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [floor, setFloor] = useState<number>();
  const [img, setImg] = useState<string>();

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    const formData = {
      roomNumber: number,
      roomType: type,
      desc: desc,
      pricePerNight: price,
      floor: floor,
      imageUrl: img,
    };
    createNewRoom(HotelId, formData);
    setTimeout(() => {
      location.reload();
    }, 2000);
  };
  return (
    <FullLayout>
      <div className="bg-gray-200 h-screen">
        <div className="container mx-auto mt-[70px]">
          <h1 className="text-center uppercase tracking-widest text-xl py-10 mb-6 font-extrabold">
            Create new Room
          </h1>

          <form
            action=""
            className="w-[80%] mx-auto py-10 px-4 bg-blue-800"
            onSubmit={handleSubmitForm}
          >
            <div className="text-right ml-2">
              <Link href={"/businessManage"}>
                <button className="text-white font-bold  italic underline hover:text-orange-600 ">
                  back
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-3 my-4 ">
              <label className=" uppercase col-span-1 cursor-pointer py-2 flex items-center text-white font-bold">
                Enter Room Number
              </label>
              <input
                type="text"
                required
                className="col-span-2 py-2 pl-4"
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-3 my-4 ">
              <label
                htmlFor="number"
                className="col-span-1 cursor-pointer py-2 flex items-center text-white font-bold"
              >
                Select Room Type
              </label>
              <select
                name=""
                id=""
                className="col-span-2 py-2 pl-4"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="single" className="col-span-2 py-2 pl-4">
                  Single
                </option>
                <option value="couple" className="col-span-2 py-2 pl-4">
                  Couple
                </option>
                <option value="family" className="col-span-2 py-2 pl-4">
                  Family
                </option>
              </select>
            </div>
            <div className="grid grid-cols-3 my-4 ">
              <label
                htmlFor="number"
                className="col-span-1 cursor-pointer py-2 flex items-center text-white font-bold"
              >
                Write some description about room
              </label>
              <textarea
                required
                className="col-span-2 py-2 pl-4"
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-3 my-4 ">
              <label
                htmlFor="number"
                className="col-span-1 cursor-pointer py-2 flex items-center text-white font-bold"
              >
                Enter price / night
              </label>
              <input
                type="text"
                required
                className="col-span-2 py-2 pl-4"
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            <div className="grid grid-cols-3 my-4 ">
              <label
                htmlFor="number"
                className="col-span-1 cursor-pointer py-2 flex items-center text-white font-bold"
              >
                Floor
              </label>
              <input
                type="text"
                required
                className="col-span-2 py-2 pl-4"
                onChange={(e) => setFloor(Number(e.target.value))}
              />
            </div>
            <div className="grid grid-cols-3 my-4 ">
              <label
                htmlFor="number"
                className="col-span-1 cursor-pointer py-2 flex items-center text-white font-bold"
              >
                past one image URL
              </label>
              <input
                type="text"
                required
                className="col-span-2 py-2 pl-4"
                onChange={(e) => setImg(e.target.value)}
              />
            </div>
            <div className="text-right mr-3">
              <button className="p-2 bg-orange-600 hover:bg-orange-900 text-white rounded">
                Submit
              </button>
            </div>
          </form>
          <div className="flex justify-center items-center my-6 w-[80%] mx-auto">
            <img
              src={img}
              alt=""
              className="w-full h-[300px] object-cover rounded shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] "
            />
          </div>
        </div>
      </div>
    </FullLayout>
  );
}
