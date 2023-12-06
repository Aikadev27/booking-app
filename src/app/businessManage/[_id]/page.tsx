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
      <div className="container mx-auto h-screen mt-[65px]">
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
                    className=" h-[100px]  md:h-[200px] object-cover col-span-1 w-full"
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
