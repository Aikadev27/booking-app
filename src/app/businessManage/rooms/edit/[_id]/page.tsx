"use client";
import SimpleLoader from "@/components/SimpleLoader";
import FullLayout from "@/layouts/FullLayout/FullLayout";
import { deleteRoom, fetchRoomById, updateRoom } from "@/services/room.service";
import Link from "next/link";
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
  const [status, setStatus] = useState<boolean>();
  useEffect(() => {
    async function getRoom(roomId: string) {
      const res = await fetchRoomById(roomId);
      setRoom(res);
    }
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
    };
    updateRoom(roomId, formData);
  };

  const handleStatus = (e: any) => {
    const st = e.target.value;
    if (st !== status) {
      setStatus(!status);
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
      <div>
        {room ? (
          <div className="bg-gray-300 ">
            <div className="container mx-auto h-screen flex justify-center items-center flex-col">
              <form
                action=""
                className="bg-blue-800 w-[70%] py-20 rounded shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
              >
                <div className="text-left ml-2">
                  <Link href={"/businessManage"}>
                    <button className="text-white font-bold  italic underline hover:text-orange-600 ">
                      back
                    </button>
                  </Link>
                </div>
                <div className="grid grid-cols-3  gap-4  mx-4 p-4 ">
                  <label
                    htmlFor=""
                    className="col-span-1 text-white font-bold text-sm flex items-center"
                  >
                    Room Number
                  </label>
                  <input
                    onChange={(e) => setNumber(e.target.value)}
                    className="col-span-2 w-full p-2 rounded-sm"
                    type="text"
                    name=""
                    id=""
                    defaultValue={room.roomNumber}
                  />
                </div>
                <div className="grid grid-cols-3  gap-4  mx-4 p-4 ">
                  <label
                    htmlFor=""
                    className="col-span-1 text-white font-bold text-sm flex items-center"
                  >
                    Room type
                  </label>
                  <select
                    onChange={(e) => setType(e.target.value)}
                    className="col-span-2 w-full p-2 rounded-sm"
                    defaultValue={room.roomType}
                  >
                    <option value="">{room.roomType}</option>
                    <option value="single">Single</option>
                    <option value="couple">Couple</option>
                    <option value="family">Family</option>
                  </select>
                </div>
                <div className="grid grid-cols-3  gap-4  mx-4 p-4 ">
                  <label
                    htmlFor=""
                    className="col-span-1 text-white font-bold text-sm flex items-center"
                  >
                    Price / Night
                  </label>
                  <input
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="col-span-2 w-full p-2 rounded-sm"
                    type="text"
                    name=""
                    id=""
                    defaultValue={room.pricePerNight + " $"}
                  />
                </div>
                <div className="grid grid-cols-3  gap-4  mx-4 p-4 ">
                  <label
                    htmlFor=""
                    className="col-span-1 text-white font-bold text-sm flex items-center"
                  >
                    Descriptions
                  </label>
                  <textarea
                    onChange={(e) => setDesc(e.target.value)}
                    className="col-span-2 w-full p-2 rounded-sm"
                    name=""
                    id=""
                    defaultValue={room.desc}
                  />
                </div>

                <div className="grid grid-cols-3  gap-4  mx-4 p-4 ">
                  <label
                    htmlFor=""
                    className="col-span-1 text-white font-bold text-sm flex items-center"
                  >
                    Floor At
                  </label>
                  <input
                    onChange={(e) => setFloor(e.target.value)}
                    className="col-span-2 w-full p-2 rounded-sm"
                    name=""
                    type="text"
                    id=""
                    defaultValue={room.floor}
                  />
                </div>

                <div className="grid grid-cols-3  gap-4  mx-4 p-4 ">
                  <label
                    htmlFor=""
                    className="col-span-1 text-white font-bold text-sm flex items-center"
                  >
                    Status
                  </label>
                  <select
                    onChange={(e) => handleStatus(e)}
                    className="col-span-2 w-full p-2 rounded-sm"
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
                <div className=" mr-2 col-start-3 gap-4 flex justify-end items-center">
                  <button
                    className="text-sm font-bold text-white bg-orange-600 hover:bg-orange-900 p-2 rounded"
                    onClick={handleUpdate}
                  >
                    Update
                  </button>
                  <button
                    className="text-sm font-bold text-white bg-red-600 hover:bg-red-900 p-2 rounded"
                    onClick={handleDeleteRoom}
                  >
                    Delete
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
