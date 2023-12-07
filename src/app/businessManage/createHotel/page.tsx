"use client";

import FullLayout from "@/layouts/FullLayout/FullLayout";
import { createHotel } from "@/services/hotel.service";
import { faPenToSquare, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
export interface ICreateHotelProps {}

export default function CreateHotel(props: ICreateHotelProps) {
  const [nameHotel, setNameHotel] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [district, setDistrict] = useState<string | null>(null);
  const [street, setStreet] = useState<string | null>(null);
  const [decs, setDecs] = useState<string | null>(null);
  const [number, setNumber] = useState<string | null>(null);
  const [img, setImg] = useState<string | null>();

  const [showImage, setShowImage] = useState<boolean>(false);
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
    console.log(formData);
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

  const handleRemoveCurrentImage = () => {
    setShowImage(false);
    setImg(null);
  };

  const handleCancelForm = (e: any) => {
    e.preventDefault();
    setNameHotel("");
    setEmail("");
    setCity("");
    setDistrict("");
    setStreet("");
    setDecs("");
    setNumber("");
    setImg("");
    setShowImage(false);
    location.reload();
  };

  return (
    <FullLayout>
      <div className="mt-[65px] min-h-screen container mx-auto">
        <h1 className="text-center font-bold text-sm md:text-2xl text-green-800">
          CREATE HOTEL FORM
        </h1>
        <form className="my-4 md:my-20 mx-2 md:mx-10  border-[1px] border-gray-200 p-2 md:p-4 rounded">
          {/* name */}
          <div className="p-1 my-2">
            <label
              htmlFor="nameHotel"
              className="text-sm  md:text-xl text-gray-700 py-1 cursor-pointer"
            >
              Name Hotel
            </label>
            <br />
            <input
              required={true}
              type="text"
              name="nameHotel"
              id="nameHotel"
              placeholder="Enter Name Hotel"
              onChange={(e) => setNameHotel(e.target.value)}
              className="text-black py-1 md:py-2 w-full px-2 my-1 md:my-3 focus:outline-green-400"
            />
          </div>
          {/* email */}
          <div className="p-1 my-2">
            <label
              htmlFor="email"
              className="text-sm  md:text-xl text-gray-700 py-1 cursor-pointer"
            >
              Email
            </label>
            <br />
            <input
              required={true}
              type="email"
              name="email"
              id="email"
              placeholder="hotel1234@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              className="text-black py-1 md:py-2 w-full px-2 my-1 md:my-3 focus:outline-green-400"
            />
          </div>
          {/* city */}
          <div className="p-1 my-2">
            <label
              htmlFor="city"
              className="text-sm  md:text-xl text-gray-700 py-1 cursor-pointer"
            >
              City
            </label>
            <br />
            <select
              name="city"
              id="city"
              onChange={(e) => setCity(e.target.value)}
              className="text-black py-1 md:py-2 w-full px-2 my-1 md:my-3 focus:outline-green-400"
            >
              <option value="">-- Choose A City in List --</option>
              <option value="Cần Thơ">Cần Thơ</option>
              <option value="Đà Lạt">Đà Lạt</option>
              <option value="Vũng Tàu">Vũng Tàu</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
              <option value="Nha Trang">Nha Trang</option>
            </select>
          </div>
          {/* District */}
          <div className="p-1 my-2">
            <label
              htmlFor="district"
              className="text-sm  md:text-xl text-gray-700 py-1 cursor-pointer"
            >
              District
            </label>
            <br />
            <input
              required={true}
              type="text"
              name="district"
              id="district"
              placeholder="example: Ninh Kieu."
              onChange={(e) => setDistrict(e.target.value)}
              className="text-black py-1 md:py-2 w-full px-2 my-1 md:my-3 focus:outline-green-400"
            />
          </div>
          {/* street */}
          <div className="p-1 my-2">
            <label
              htmlFor="street"
              className="text-sm  md:text-xl text-gray-700 py-1 cursor-pointer"
            >
              Street
            </label>
            <br />
            <input
              required={true}
              type="text"
              name="street"
              id="street"
              placeholder="example: Mau Than street"
              onChange={(e) => setStreet(e.target.value)}
              className="text-black py-1 md:py-2 w-full px-2 my-1 md:my-3 focus:outline-green-400"
            />
          </div>
          {/* number */}
          <div className="p-1 my-2">
            <label
              htmlFor="number"
              className="text-sm  md:text-xl text-gray-700 py-1 cursor-pointer"
            >
              Service Phone Number
            </label>
            <br />
            <input
              required={true}
              type="text"
              name="number"
              id="number"
              placeholder="+84 123 456"
              onChange={(e) => setNumber(e.target.value)}
              className="text-black py-1 md:py-2 w-full px-2 my-1 md:my-3 focus:outline-green-400"
            />
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
              placeholder="Write some desc for hotel you want to create (non-required)"
              onChange={(e) => setDecs(e.target.value)}
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
                Choose an image
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
              onClick={handleCreateHotel}
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
    </FullLayout>
  );
}
