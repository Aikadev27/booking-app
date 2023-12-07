"use client";
import FullLayout from "@/layouts/FullLayout/FullLayout";
import { createNewRoom } from "@/services/room.service";
import {
  faBackwardStep,
  faPenToSquare,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
export interface ICreateRoomProps {
  params: any;
}

export default function CreateRoom(props: ICreateRoomProps) {
  const HotelId = props.params.slug;
  const [number, setNumber] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [desc, setDesc] = useState<string | null>(null);
  const [price, setPrice] = useState<number | null>(null);
  const [floor, setFloor] = useState<number | null>(null);
  const [img, setImg] = useState<string | null>();
  const [showImage, setShowImage] = useState<boolean>(false);

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
    location.reload();

    console.log(formData);
  };

  const handleCancelForm = (e: any) => {
    e.preventDefault();
    setNumber("");
    setType("");
    setDesc("");
    setFloor(null);
    setImg("");
    setPrice(null);
    e.preventDefault();
    location.reload();
  };

  const handleRemoveCurrentImage = () => {
    setShowImage(false);
    setImg(null);
  };

  const handleSelectImage = async (e: any) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = () => {
      setImg(fileReader.result?.toString());
    };

    fileReader.onerror = (error) => {
      console.log("error", error);
    };

    setShowImage(true);
  };

  return (
    <FullLayout>
      <div className="mt-[65px] min-h-screen container mx-auto">
        <h1 className="text-center font-bold text-xl md:text-2xl text-green-700">
          CREATE NEW ROOM FORM
        </h1>
        <div>
          <Link
            href={`/businessManage/rooms/${HotelId}`}
            className="mx-2 md:mx-10 hidden md:block p-3 italic font-bold underline text-orange-700 border border-orange-600 max-w-fit"
          >
            Back
          </Link>

          <form className="my-4 md:my-20 mx-2 md:mx-10  border-[1px] border-gray-200 p-2 md:p-4 rounded">
            {/* room number */}
            <div className="p-1 my-2">
              <label
                htmlFor="roomNumber"
                className="text-sm  md:text-xl text-gray-700 py-1 cursor-pointer"
              >
                Room Number
              </label>
              <br />
              <input
                required={true}
                type="text"
                name="roomNumber"
                id="roomNumber"
                placeholder="example : T2A7"
                onChange={(e) => setNumber(e.target.value)}
                className="text-black py-1 md:py-2 w-full px-2 my-1 md:my-3 focus:outline-green-400"
              />
            </div>

            {/* floor at */}
            <div className="p-1 my-2">
              <label
                htmlFor="floor"
                className="text-sm  md:text-xl text-gray-700 py-1 cursor-pointer"
              >
                Floor
              </label>
              <br />
              <input
                required={true}
                type="text"
                name="floor"
                id="floor"
                placeholder="Enter floor number"
                onChange={(e) => setFloor(parseInt(e.target.value))}
                className="text-black py-1 md:py-2 w-full px-2 my-1 md:my-3 focus:outline-green-400"
              />
            </div>
            {/* price */}
            <div className="p-1 my-2">
              <label
                htmlFor="price"
                className="text-sm  md:text-xl text-gray-700 py-1 cursor-pointer"
              >
                Price
              </label>
              <br />
              <input
                required={true}
                type="text"
                name="price"
                id="price"
                placeholder="Price per night. example: 200"
                onChange={(e) => setPrice(parseInt(e.target.value))}
                className="text-black py-1 md:py-2 w-full px-2 my-1 md:my-3 focus:outline-green-400"
              />
            </div>
            {/* type */}
            <div className="p-1 my-2">
              <label
                htmlFor="type"
                className="text-sm  md:text-xl text-gray-700 py-1 cursor-pointer"
              >
                Type
              </label>
              <br />

              <select
                name="type"
                id="type"
                className="text-black py-1 md:py-2 w-full px-2 my-1 md:my-3 focus:outline-green-400 appearance-none"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">---Select Type For Room---</option>
                <option value="single">For Single</option>
                <option value="couple">For Couple</option>
                <option value="family">For Family</option>
              </select>
            </div>
            {/* desc */}
            <div className="p-1 my-2">
              <label
                htmlFor="desc"
                className="text-sm  md:text-xl text-gray-700 py-1 cursor-pointer"
              >
                Descriptions
              </label>
              <br />
              <textarea
                name="desc"
                id="desc"
                placeholder="Write some desc for this new room"
                onChange={(e) => setDesc(e.target.value)}
                className="text-black py-1 md:py-2 w-full px-2 my-1 md:my-3 focus:outline-green-400"
              />
            </div>
            {/* img */}
            <div className="p-1 my-2">
              <div>
                <label
                  htmlFor="img"
                  className="text-sm   md:text-xl text-white bg-black  cursor-pointer px-2 py-3 border border-blue-600 rounded-lg my-2 hover:bg-opacity-80 hover:text-green-500"
                >
                  Choose an image for this room
                  <FontAwesomeIcon icon={faPenToSquare} className="ml-2" />
                </label>
                <br />
                <input
                  required={true}
                  type="file"
                  name="img"
                  id="img"
                  accept="image/*"
                  defaultValue={img?.toString()}
                  onChange={handleSelectImage}
                  className="text-black py-1 md:py-2  px-2 my-1 md:my-3 focus:outline-green-400 hidden"
                />
              </div>
              <div className="relative my-2">
                <img
                  src={img?.toString()}
                  alt="Image from local"
                  className={`${
                    showImage
                      ? "block w-full object-cover rounded-md max-h-[300px] my-4"
                      : "hidden"
                  } `}
                />
                <span
                  className={`${
                    showImage
                      ? "absolute top-2 right-2 p-2 hover:bg-gray-200 rounded "
                      : "hidden"
                  }`}
                  onClick={handleRemoveCurrentImage}
                >
                  {" "}
                  <FontAwesomeIcon
                    icon={faX}
                    className="text-red-500 text-xl md:text-2xl hover:font-bold cursor-pointer"
                  />
                </span>
              </div>
            </div>
            {/* 2button */}
            <div className="flex justify-center gap-3 mx-2">
              <button
                onClick={handleSubmitForm}
                className="px-2 py-3 bg-blue-700 text-white font-bold hover:bg-orange-700 rounded-md text-center text-sm md:text-xl"
              >
                Create
              </button>
              <button
                onClick={handleCancelForm}
                className="px-2 py-3 bg-gray-700 text-white font-bold hover:bg-black rounded-md text-center text-sm md:text-xl"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </FullLayout>
  );
}
