"use client";
import SimpleLoader from "@/components/SimpleLoader";
import FullLayout from "@/layouts/FullLayout/FullLayout";
import {
  addFeatureImages,
  fetchHotelInfo,
  updateHotelInfo,
} from "@/services/hotel.service";
import { ChangeEvent, useEffect, useState } from "react";
// font icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCirclePlus,
  faPen,
  faSlash,
} from "@fortawesome/free-solid-svg-icons";
import { convertToBase64 } from "@/services/handleFiles.service";
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

  // List feature Images
  const [featureImg, setFeatureImg] = useState<string[]>([]);
  const [imagesWillSended, setImagesWillSended] = useState<string[]>([]);
  // toggle 2 button
  const [uploadImage, setUploadImage] = useState<boolean>(false);
  useEffect(() => {
    async function fetchOneHotel(hotelId: string) {
      const res = await fetchHotelInfo(hotelId);
      setFeatureImg(res.featuredImageUrl);
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
    console.log(formData);

    updateHotelInfo(formData, id);
  };

  // cancel  choose new image
  const canCelChooseImg = () => {
    setFeatureImg(hotel?.featuredImageUrl || []);
    setImagesWillSended([]);
    setUploadImage(false);
  };

  const handleSelectImagesChange = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files) {
      const newFiles: string[] = [];

      for (const file of files) {
        const base64Image = await convertToBase64(file);
        newFiles.push(base64Image);
      }

      setFeatureImg((prevFiles) =>
        prevFiles ? [...prevFiles, ...newFiles] : newFiles
      );
      setImagesWillSended((prevFiles) =>
        prevFiles ? [...prevFiles, ...newFiles] : newFiles
      );
    }
  };

  const handleUploadImages = () => {
    addFeatureImages(imagesWillSended, id);
  };

  return (
    <FullLayout>
      <div className="container mx-auto min-h-screen mt-[65px] md:mb-10 ">
        {hotel ? (
          <div>
            <div className="mx-2">
              <div className="flex justify-between items-center">
                <p>Photo Category</p>
                <div>
                  <label
                    className="p-2"
                    htmlFor="addImage"
                    onClick={() => setUploadImage(true)}
                  >
                    <FontAwesomeIcon
                      icon={faCirclePlus}
                      className="md:text-2xl text-gray-700 text-xl hover:text-blue-600  cursor-pointer"
                    />
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    multiple={true}
                    className="hidden"
                    id="addImage"
                    onChange={handleSelectImagesChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2 ">
                {featureImg?.map((image, index) => (
                  <img
                    src={`${image}`}
                    alt="Image"
                    key={index}
                    className=" h-[100px]  md:h-[200px] object-cover col-span-1 w-full rounded-md"
                  />
                ))}
              </div>
              <div
                className={`${
                  uploadImage ? "block" : "hidden"
                } flex justify-end gap-4 my-2`}
              >
                <button
                  className="p-1 md:p-2 bg-blue-700 hover:bg-blue-500 rounded-md text-white"
                  onClick={handleUploadImages}
                >
                  upload
                </button>
                <button
                  className="p-1 md:p-2 bg-gray-700 hover:bg-gray-500 rounded-md text-white"
                  onClick={canCelChooseImg}
                >
                  cancel
                </button>
              </div>
            </div>
            <p className="mx-2 mt-5 text-center uppercase font-bold my-2 md:my-4">
              Information{" "}
            </p>

            <div className="mx-5 md:mx-10 mt-4">
              <form className="mt-4 md:mt-6 p-2 border-gray-300 border-[1px]">
                {/* name */}
                <div className="my-3 border-b-[1px] border-gray-200">
                  <label
                    htmlFor="nameHotel"
                    className="text-[12px] hover:font-bold hover:text-blue-600 md:text-sm cursor-pointer"
                  >
                    Name of Hotel
                    <FontAwesomeIcon
                      icon={faPen}
                      className="hover:text-blue-600 ml-1 text-gray-400 float-right"
                    />
                  </label>
                  <br />
                  <input
                    type="text"
                    defaultValue={hotel.nameHotel}
                    id="nameHotel"
                    className="text-sm md:text-xl w-full focus:text-blue-800 focus:font-bold text-blue-700 py-2 px-1 outline-orange-500 md:mx-4"
                    onChange={(e) => setNameHotel(e.target.value)}
                  />
                </div>
                {/* mail */}
                <div className="my-3 border-b-[1px] border-gray-200">
                  <label
                    htmlFor="emailHotel"
                    className="text-[12px] hover:font-bold hover:text-blue-600 md:text-sm cursor-pointer"
                  >
                    Email
                    <FontAwesomeIcon
                      icon={faPen}
                      className="hover:text-blue-600 ml-1 text-gray-400 float-right"
                    />
                  </label>
                  <br />
                  <input
                    type="text"
                    defaultValue={hotel.emailHotel}
                    id="emailHotel"
                    className="text-sm md:text-xl w-full focus:text-blue-800 focus:font-bold text-blue-700 py-2 px-1 outline-orange-500 md:mx-4"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {/* phone */}
                <div className="my-3 border-b-[1px] border-gray-200">
                  <label
                    htmlFor="number"
                    className="text-[12px] hover:font-bold hover:text-blue-600 md:text-sm cursor-pointer"
                  >
                    Phone Number
                    <FontAwesomeIcon
                      icon={faPen}
                      className="hover:text-blue-600 ml-1 text-gray-400 float-right"
                    />
                  </label>
                  <br />
                  <input
                    type="text"
                    defaultValue={hotel.servicePhoneNumber}
                    id="number"
                    className="text-sm md:text-xl w-full focus:text-blue-800 focus:font-bold text-blue-700 py-2 px-1 outline-orange-500 md:mx-4"
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
                {/* desc */}
                <div className="my-3 border-b-[1px] border-gray-200">
                  <label
                    htmlFor="desc"
                    className="text-[12px] hover:font-bold hover:text-blue-600 md:text-sm cursor-pointer"
                  >
                    Descriptions
                    <FontAwesomeIcon
                      icon={faPen}
                      className="hover:text-blue-600 ml-1 text-gray-400 float-right"
                    />
                  </label>
                  <br />
                  <input
                    type="text"
                    defaultValue={hotel.desc}
                    id="desc"
                    className="text-sm md:text-xl w-full focus:text-blue-800 focus:font-bold text-blue-700 py-2 px-1 outline-orange-500 md:mx-4 truncate"
                    onChange={(e) => setDecs(e.target.value)}
                  />
                </div>
                <p className="text-center uppercase font-bold my-2 md:my-4">
                  Location
                </p>
                {/* cities */}
                <div className="my-3 border-b-[1px] border-gray-200">
                  <label
                    htmlFor="city"
                    className="text-[12px] hover:font-bold hover:text-blue-600 md:text-sm cursor-pointer"
                  >
                    City
                    <FontAwesomeIcon
                      icon={faPen}
                      className="hover:text-blue-600 ml-1 text-gray-400 float-right"
                    />
                  </label>
                  <br />
                  <select
                    name="city"
                    id="city"
                    className=" text-sm md:text-xl w-full focus:text-blue-800 focus:font-bold text-blue-700 py-2 px-1 outline-orange-500 md:mx-4 text-start bg-none appearance-none"
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <option value={hotel.location.city}>
                      {hotel.location.city}
                    </option>
                    <option value="Đà Lạt">Đà Lạt</option>
                    <option value="Vũng Tàu">Vũng Tàu</option>
                    <option value="Nha Trang">Nha Trang</option>
                    <option value="Đà Nẵng">Đà Nẵng</option>
                  </select>
                </div>
                {/* district */}
                <div className="my-3 border-b-[1px] border-gray-200">
                  <label
                    htmlFor="district"
                    className="text-[12px] hover:font-bold hover:text-blue-600 md:text-sm cursor-pointer"
                  >
                    District
                    <FontAwesomeIcon
                      icon={faPen}
                      className="hover:text-blue-600 ml-1 text-gray-400 float-right"
                    />
                  </label>
                  <br />
                  <input
                    type="text"
                    defaultValue={hotel.location.district}
                    id="district"
                    className="text-sm md:text-xl w-full focus:text-blue-800 focus:font-bold text-blue-700 py-2 px-1 outline-orange-500 md:mx-4"
                    onChange={(e) => setDistrict(e.target.value)}
                  />
                </div>
                {/* street */}
                <div className="my-3 border-b-[1px] border-gray-200">
                  <label
                    htmlFor="street"
                    className="text-[12px] hover:font-bold hover:text-blue-600 md:text-sm cursor-pointer"
                  >
                    Street
                    <FontAwesomeIcon
                      icon={faPen}
                      className="hover:text-blue-600 ml-1 text-gray-400 float-right"
                    />
                  </label>
                  <br />
                  <input
                    type="text"
                    defaultValue={hotel.location.street}
                    id="street"
                    className="text-sm md:text-xl w-full focus:text-blue-800 focus:font-bold text-blue-700 py-2 px-1 outline-orange-500 md:mx-4"
                    onChange={(e) => setStreet(e.target.value)}
                  />
                </div>
                {/* subadd */}
                <div className="my-3 border-b-[1px] border-gray-200">
                  <label
                    htmlFor="sub"
                    className="text-[12px] hover:font-bold hover:text-blue-600 md:text-sm cursor-pointer"
                  >
                    Sub Address
                    <FontAwesomeIcon
                      icon={faPen}
                      className="hover:text-blue-600 ml-1 text-gray-400 float-right"
                    />
                  </label>
                  <br />
                  <input
                    type="text"
                    defaultValue={
                      hotel.location.subAddress
                        ? hotel.location.subAddress
                        : "Currently not available"
                    }
                    id="sub"
                    className="text-sm md:text-xl w-full focus:text-blue-800 focus:font-bold text-blue-700 py-2 px-1 outline-orange-500 md:mx-4"
                    onChange={(e) => setSubAdd(e.target.value)}
                  />
                </div>
                {/* 2 button  */}
                <div className="flex justify-end ">
                  <button
                    className="px-2 py-1 bg-green-700 hover:bg-green-500 rounded-md text-white font-semibold"
                    onClick={handleUpdateHotel}
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div>
            <SimpleLoader />
          </div>
        )}
      </div>
    </FullLayout>
  );
}
