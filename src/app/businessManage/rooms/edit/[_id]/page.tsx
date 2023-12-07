"use client";
import SimpleLoader from "@/components/SimpleLoader";
import FullLayout from "@/layouts/FullLayout/FullLayout";
import { deleteRoom, fetchRoomById, updateRoom } from "@/services/room.service";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export interface IEditRoomProps {
  params: any;
}

export default function EditRoom(props: IEditRoomProps) {
  const roomId = props.params._id;
  const router = useRouter();

  const [room, setRoom] = useState<RoomType>();

  const [number, setNumber] = useState<string>();
  const [floor, setFloor] = useState<string>();
  const [type, setType] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [desc, setDesc] = useState<string>();
  const [img, setImg] = useState<string>();

  const [status, setStatus] = useState<boolean>();
  const [editImg, setEditImg] = useState<boolean>(false);

  async function getRoom(roomId: string) {
    const res = await fetchRoomById(roomId);
    setRoom(res);
    setImg(res.imageUrl[0]);
  }
  useEffect(() => {
    getRoom(roomId);
  }, []);

  const handleUpdate = (e: any) => {
    e.preventDefault();
    const formData = {
      roomNumber: number,
      roomType: type,
      desc: desc,
      pricePerNight: price,
      floor: floor,
      imageUrl: img,
    };
    updateRoom(roomId, formData);
    // console.log(formData);
  };

  const handleStatus = (e: any) => {
    const st = e.target.value;
    if (st !== status) {
      setStatus(!status);
    }
  };

  const handleSelectImage = async (e: any) => {
    const fileReader = new FileReader();

    // Check if there are files
    if (e.target.files && e.target.files.length > 0) {
      // Read the first file from the array
      const selectedFile = e.target.files[0];

      fileReader.readAsDataURL(selectedFile);

      fileReader.onload = () => {
        setImg(fileReader.result?.toString());
      };
    }
  };

  const handleDeleteRoom = (e: any) => {
    e.preventDefault();
    const confirmed = window.confirm(
      "Bạn có chắc chắn xóa phòng này ra khỏi danh sách phòng của khách sạn ?"
    );
    if (confirmed) {
      deleteRoom(roomId);
      setTimeout(() => {
        router.back();
      }, 1000);
    }
  };
  return (
    <FullLayout>
      <div className="mt-[65px] min-h-screen container mx-auto">
        {room ? (
          <div className="mx-2 md:mx-6 my-3">
            <h1 className="my-4 text-center text-xl md:text-2xl font-bold text-blue-700 ">
              Edit Room Form
            </h1>

            <form className="my-4 md:my-20 mx-2 md:mx-10  border-[1px] border-gray-200 p-2 md:p-4 rounded">
              <div className="relative">
                <img
                  src={img?.toString()}
                  alt="Current Image"
                  className="w-full max-h-[300px] object-cover hover:cursor-pointer rounded-md"
                  onMouseMove={() => setEditImg(true)}
                />
                <div
                  onMouseLeave={() => setEditImg(false)}
                  className={`${
                    editImg
                      ? "absolute top-0 left-0 right-0 bottom-0 z-10 bg-gray-50 bg-opacity-80 flex justify-center items-center"
                      : "hidden"
                  } cursor-pointer`}
                >
                  <div>
                    <label
                      htmlFor="editImg"
                      className="cursor-pointer text-xl md:text-2xl"
                    >
                      Edit
                      <FontAwesomeIcon icon={faPen} className=" ml-1" />
                    </label>
                    <input
                      type="file"
                      name="editImg"
                      id="editImg"
                      accept="image/*"
                      className="hidden"
                      onChange={handleSelectImage}
                    />
                  </div>
                </div>
              </div>
              <div className="p-1 my-1 md:my-2">
                <label
                  htmlFor="number"
                  className="text-[12px] md:text-sm font-bold text-gray-600"
                >
                  Room Number
                </label>
                <br />
                <input
                  type="text"
                  name="number"
                  id="number"
                  defaultValue={room.roomNumber}
                  onChange={(e) => setNumber(e.target.value)}
                  className="w-full p-2 my-2 bg-blue-gray-50 rounded-md text-black focus:bg-blue-gray-100 focus:outline-blue-gray-700 text-xl md:text-2xl"
                />
              </div>
              <div className="p-1 my-1 md:my-2">
                <label
                  htmlFor="floor"
                  className="text-[12px] md:text-sm font-bold text-gray-600"
                >
                  Floor at
                </label>
                <br />
                <input
                  type="text"
                  name="floor"
                  id="floor"
                  defaultValue={room.floor}
                  onChange={(e) => setFloor(e.target.value)}
                  className="w-full p-2 my-2 bg-blue-gray-50 rounded-md text-black focus:bg-blue-gray-100 focus:outline-blue-gray-700 text-xl md:text-2xl"
                />
              </div>
              <div className="p-1 my-1 md:my-2">
                <label
                  htmlFor="price"
                  className="text-[12px] md:text-sm font-bold text-gray-600"
                >
                  Floor at
                </label>
                <br />
                <input
                  type="text"
                  name="price"
                  id="price"
                  defaultValue={room.pricePerNight}
                  onChange={(e) => setPrice(parseInt(e.target.value))}
                  className="w-full p-2 my-2 bg-blue-gray-50 rounded-md text-black focus:bg-blue-gray-100 focus:outline-blue-gray-700 text-xl md:text-2xl"
                />
              </div>
              <div className="p-2 my-2 md:my-3">
                <label
                  htmlFor="Description"
                  className="text-[12px] md:text-sm font-bold text-gray-600"
                >
                  Description
                </label>
                <br />
                <textarea
                  name="Description"
                  id="Description"
                  defaultValue={room.desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className="w-full p-2 my-2 bg-blue-gray-50 rounded-md text-black focus:bg-blue-gray-100 focus:outline-blue-gray-700 text-xl md:text-2xl"
                />
              </div>
              <div className="p-1 my-1 md:my-2">
                <label
                  htmlFor=""
                  className="text-[12px] md:text-sm font-bold text-gray-600"
                >
                  Status
                </label>
                <select
                  onChange={(e) => handleStatus(e)}
                  className="w-full p-2 my-2 bg-blue-gray-50 rounded-md text-black focus:bg-blue-gray-100 focus:outline-blue-gray-700 text-xl md:text-2xl"
                  name=""
                  id=""
                  defaultValue={room.bookingStatus ? "true" : "false"}
                >
                  <option value="true">
                    {room.bookingStatus ? "Unavailable" : "Available"}
                  </option>
                  <option value="false">
                    {room.bookingStatus ? "Available" : "Unavailable"}
                  </option>
                </select>
              </div>
              <div className="p-1 my-1 md:my-2">
                <label
                  htmlFor="type"
                  className="text-[12px] md:text-sm font-bold text-gray-600"
                >
                  Room Type
                </label>
                <select
                  onChange={(e) => setType(e.target.value)}
                  className="w-full p-2 my-2 bg-blue-gray-50 rounded-md text-black focus:bg-blue-gray-100 focus:outline-blue-gray-700 text-xl md:text-2xl"
                  name="type"
                  id="type"
                  defaultValue={room.roomType}
                >
                  <option value={room.roomType}>{room.roomType}</option>
                  <option value="single">Single</option>
                  <option value="couple">Couple</option>
                  <option value="family">Family</option>
                </select>
              </div>
              <div className="md:flex md:justify-between items-center justify-end">
                <button
                  onClick={() => router.back()}
                  className="hidden md:block text-xl p-2 border border-orange-700 hover:bg-orange-500 font-bold hover:text-white rounded-lg bg-orange-900"
                >
                  back
                </button>
                <div className="flex justify-end gap-4 mr-2">
                  <button
                    className="px-1 py-3 text-center text-sm md:text-xl rounded-md hover:bg-opacity-70 bg-blue-700 text-white font-bold"
                    onClick={handleUpdate}
                  >
                    Save
                  </button>
                  <button
                    className="px-1 py-3 text-center text-sm md:text-xl rounded-md hover:bg-opacity-70 bg-red-700 text-white font-bold"
                    onClick={handleDeleteRoom}
                  >
                    Delete This Room
                  </button>
                </div>
              </div>
            </form>
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
