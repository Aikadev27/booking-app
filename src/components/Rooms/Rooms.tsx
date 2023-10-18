"use client";
import LinkConditional from "../LinkConditional";
import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";

export interface IRoomsListProps {
  rooms: RoomType[];
}

export default function RoomsList(props: IRoomsListProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div>
      <ul>
        {props.rooms.map((room, index) => (
          <li
            data-aos="fade-up"
            key={index}
            className="bg-[#e5e5e5] p-2 my-4 rounded-md"
          >
            <h1 className="text-sm md:text-xl font-bold uppercase mb-[15px]">
              TYPE: {room.roomType}
            </h1>
            <div className="grid grid-cols-8 gap-3">
              <div className="col-span-2">
                <img
                  data-aos="fade-up"
                  src={room.imageUrl[0]}
                  alt=""
                  className="md:h-[200px] h-[100px] w-full object-cover rounded-md"
                />
                <div>
                  <div className="flex gap-2 text-[12px] items-center pt-3">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3 h-3"
                        color="green"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                        />
                      </svg>
                    </span>
                    <p>Free wifi</p>
                  </div>
                  <div className="flex gap-2 text-[12px] items-center pt-3">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </span>
                    <p>River view</p>
                  </div>
                  <div className="flex gap-2 text-[12px] items-center pt-3">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
                        />
                      </svg>
                    </span>
                    <p>Bathroom and bathtub</p>
                  </div>
                  <div className="flex gap-2 text-[12px] items-center pt-3">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
                        />
                      </svg>
                    </span>
                    <p>Balcony and terrace</p>
                  </div>
                </div>
              </div>
              <div className="col-span-6 bg-white rounded-md md:py-8 py-0">
                <div className="border-b border-gray-300 border-solid">
                  <p className="mx-2 my-2 text-sm text-gray-600">{room.desc}</p>
                </div>
                <div>
                  <div className="ml-2 border-b border-gray-300 border-solid">
                    <h3 className="text-sm md:text-base font-semibold text-gray-800 my-2">
                      In-room deals
                    </h3>
                    <div className="flex items-center gap-4 my-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4"
                          color="green"
                        >
                          <path
                            fillRule="evenodd"
                            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <p className="text-[12px] md:text-base text-gray-700">
                        Includes buffet breakfast
                      </p>
                    </div>
                    <div className="flex items-center gap-4 my-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4"
                          color="green"
                        >
                          <path
                            fillRule="evenodd"
                            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <p className="text-[12px] md:text-base text-gray-700">
                        Complimentary tea, coffee, fresh fruit and 355ml mineral
                        water
                      </p>
                    </div>
                    <div className="flex items-center gap-4 my-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4"
                          color="green"
                        >
                          <path
                            fillRule="evenodd"
                            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <p className="text-[12px] md:text-base text-gray-700">
                        Free use of wifi, internet, children's area
                      </p>
                    </div>
                    <p className="my-6 text-[12px] md:text-sm text-gray-800  bg-gray-100 md:w-max rounded-md break-words">
                      Note: Room rates may change on holidays, weekends...
                    </p>
                  </div>
                  <div className="grid grid-cols-8 ml-2 mt-4 md:mt-8">
                    <div className="col-span-3 md:col-span-2">
                      <span className="text-[12px] font-bold md:text-base text-white bg-red-400 py-[1px] md:p-2 break-words rounded-sm md:rounded-md px-[2px]">
                        40% off today
                      </span>
                    </div>
                    <div className="col-span-5 md:col-span-6 md:flex justify-around items-center text-center">
                      <p className="text-[12px] md:text-xl text-yellow-800 font-bold tracking-wide">
                        {room.pricePerNight}$ /
                        <span className="text-[8px] md:text-[12px] text-orange-900">
                          Night
                        </span>{" "}
                      </p>

                      <LinkConditional
                        path={`/booking/${room._id}`}
                        content="Book Now"
                        isAuthenticated={isAuthenticated}
                        style="text-[12px] p-1 bg-yellow-900 rounded-md my-4 md:px-6 md:py-4 text-white hover:bg-deep-orange-400 md:text-base hover:text-black"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-center text-[10px] text-gray-500">
                  The above price includes taxes and fees
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
