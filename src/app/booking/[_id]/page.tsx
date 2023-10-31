"use client";
import { useEffect, useState } from "react";
import axios from "@/services/axios.service";
import FullLayout from "@/layouts/FullLayout/FullLayout";
// import Wrap from "@/layouts/Wrap";
import { useRouter } from "next/navigation";
import { makeReservationRoom } from "@/services/room.service";
export interface IMakeReservationProps {
  params: any;
}

export default function MakeReservation(props: IMakeReservationProps) {
  const [room, setRoom] = useState<RoomType>();
  const [checkInDate, setCheckInDate] = useState<string>();
  const [checkOutDate, setCheckOutDate] = useState<string>();
  const [quantity, setQuantity] = useState<number>(1);
  const roomId: string = props.params._id;
  const router = useRouter();
  useEffect(() => {
    async function fetchRoomData(roomId: string) {
      const res = await axios.get(`/hotel/room/get-room-by-id/${roomId}`);
      const data = res.data;
      setRoom(data);
    }
    fetchRoomData(roomId);
  }, [roomId]);

  const handleReserve = (e: any) => {
    e.preventDefault();
    const reserveForm = {
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      userQuantity: quantity,
    };

    makeReservationRoom(reserveForm, roomId, router);
  };

  return (
    <FullLayout>
      <div>
        <div className="md:h-screen h-fit mt-[64px]">
          {room ? (
            <div className="md:container mx-auto h-full  md:h-full grid md:grid-cols-9 md:gap-5 md:my-auto">
              <div data-aos="fade-up" className="md:col-span-6 my-auto">
                <div className="mx-3 mt-2 md:hidden">
                  <img
                    src={room.imageUrl[0]}
                    alt="Room image"
                    className="rounded-md"
                  />

                  <div className="w-full mt-2">
                    <p className="text-[15px] md:text-base text-gray-700 break-words font-semibold my-2">
                      Room Number:{" "}
                      <span className="text-deep-purple-500">
                        {room.roomNumber}
                      </span>
                    </p>
                    <p className="text-[15px] md:text-base text-gray-700 break-words font-semibold my-2">
                      Rice per night:{" "}
                      <span className="text-deep-purple-500">
                        {room.pricePerNight}
                      </span>
                    </p>
                    <p className="text-[15px] md:text-base text-gray-700 break-words font-semibold my-2">
                      Type:{" "}
                      <span className="text-deep-purple-500">
                        {room.roomType}
                      </span>
                    </p>
                    <p className="text-[15px] md:text-base text-gray-700 break-words font-semibold my-2">
                      Description:{" "}
                      <span className="text-deep-purple-500">{room.desc}</span>
                    </p>
                  </div>
                  <div className="w-full mt-2">
                    <h1 className="text-center uppercase text-black font-bold text-[14px] md:text-base my-3">
                      Other amenities
                    </h1>
                    <div className="w-full mt-2">
                      <ul>
                        <li className="flex gap-3 justify-between max-w-[150px] mx-auto py-2">
                          <span className="uppercase text-[12px]">
                            free wifi
                          </span>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-4 h-4 md:w-6 md:h-6 font-bold"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                              />
                            </svg>
                          </span>
                        </li>
                        <li className="flex gap-3 justify-between max-w-[150px] mx-auto py-2">
                          <span className="uppercase text-[12px]">pool</span>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-4 h-4 md:w-6 md:h-6 font-bold"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                              />
                            </svg>
                          </span>
                        </li>
                        <li className="flex gap-3 justify-between max-w-[150px] mx-auto py-2">
                          <span className="uppercase text-[12px]">
                            Smoke area
                          </span>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-4 h-4 md:w-6 md:h-6 font-bold"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                              />
                            </svg>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h1 className="hidden md:block text-xl font-bold text-black py-4 uppercase text-center">
                  Please fill in your booking information
                </h1>
                <form
                  onSubmit={handleReserve}
                  className="w-full shadow-none md:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] md:rounded-lg md:py-10"
                >
                  <div className="my-3 mx-3">
                    <label
                      className="col-span-3 text-[10px] my-1 font-medium block "
                      htmlFor="checkInDate"
                    >
                      CheckIn Date
                    </label>
                    <input
                      required={true}
                      className="block w-full text-center py-3 rounded-xl border-solid border-black border px-3 text-gray-400 "
                      type="date"
                      name="checkInDate"
                      id="checkInDate"
                      onChange={(e) => setCheckInDate(e.target.value)}
                    />
                  </div>
                  <div className="my-3 mx-3">
                    <label
                      className="col-span-3 text-[10px] my-1 font-medium block "
                      htmlFor="Quantity"
                    >
                      CheckOut Date
                    </label>
                    <input
                      required={true}
                      className="block w-full text-center py-3 rounded-xl border-solid border-black border px-3 text-gray-400 "
                      type="date"
                      name="checkOutDate"
                      id="checkOutDate"
                      onChange={(e) => setCheckOutDate(e.target.value)}
                    />
                  </div>
                  <div className="my-3 mx-3">
                    <label
                      className="col-span-3 text-[10px] my-1 font-medium block "
                      htmlFor="Quantity"
                    >
                      Number of people
                    </label>
                    <input
                      className="block w-full text-center py-3 rounded-xl border-solid border-black border px-3 text-gray-400 "
                      type="number"
                      name="Quantity"
                      id="Quantity"
                      onChange={(e) =>
                        setQuantity(parseInt(e.target.value, 10))
                      }
                    />
                  </div>
                  <div className="flex justify-center items-center py-3">
                    <button className="bg-light-blue-700 text-white px-3 py-2 rounded-md hover:bg-light-blue-400 ">
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
              <div
                data-aos="fade-up"
                className="md:col-span-3 hidden md:block md:my-auto"
              >
                <div>
                  <img
                    src={room.imageUrl[0]}
                    alt="Room image"
                    className="rounded-md"
                  />

                  <div className="w-full mt-2">
                    <p className="text-[15px] md:text-base text-gray-700 break-words font-semibold my-2">
                      Room Number:{" "}
                      <span className="text-deep-purple-500">
                        {room.roomNumber}
                      </span>
                    </p>
                    <p className="text-[15px] md:text-base text-gray-700 break-words font-semibold my-2">
                      Rice per night:{" "}
                      <span className="text-deep-purple-500">
                        {room.pricePerNight}
                      </span>
                    </p>
                    <p className="text-[15px] md:text-base text-gray-700 break-words font-semibold my-2">
                      Type:{" "}
                      <span className="text-deep-purple-500">
                        {room.roomType}
                      </span>
                    </p>
                    <p className="text-[15px] md:text-base text-gray-700 break-words font-semibold my-2">
                      Description:{" "}
                      <span className="text-deep-purple-500">{room.desc}</span>
                    </p>
                  </div>
                  <div className="w-full mt-2">
                    <h1 className="text-center uppercase text-black font-bold text-[14px] md:text-base my-3">
                      Other amenities
                    </h1>
                    <div className="w-full mt-2">
                      <ul>
                        <li className="flex gap-3 justify-between max-w-[150px]  py-2">
                          <span className="uppercase text-[12px]">
                            free wifi
                          </span>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-4 h-4 md:w-6 md:h-6 font-bold"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                              />
                            </svg>
                          </span>
                        </li>
                        <li className="flex gap-3 justify-between max-w-[150px]  py-2">
                          <span className="uppercase text-[12px]">pool</span>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-4 h-4 md:w-6 md:h-6 font-bold"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                              />
                            </svg>
                          </span>
                        </li>
                        <li className="flex gap-3 justify-between max-w-[150px]  py-2">
                          <span className="uppercase text-[12px]">
                            Smoke area
                          </span>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-4 h-4 md:w-6 md:h-6 font-bold"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                              />
                            </svg>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div> loading ...</div>
          )}
        </div>
      </div>
    </FullLayout>
  );
}
