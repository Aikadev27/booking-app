"use client";
import RoomsList from "@/components/Rooms/Rooms";
import SimpleLoader from "@/components/SimpleLoader";
import FullLayout from "@/layouts/FullLayout/FullLayout";
import axios from "@/services/axios.service";
import Link from "next/link";
import { useEffect, useState } from "react";
export interface IManageRoomsProps {
  params: any;
}

export default function ManageRooms(props: IManageRoomsProps) {
  const [hotel, setHotel] = useState<HotelDetail>();
  const hotelId = props.params._id;
  useEffect(() => {
    async function fetchHotelData(hotelId: string) {
      const res = await axios.get(`/hotel/get-by-id/${hotelId}`);
      const data = res.data;
      setHotel(data);
    }
    fetchHotelData(hotelId);
  }, [hotelId]);

  return (
    <FullLayout>
      <div className="container mx-auto mt-[100px]">
        {hotel ? (
          <div>
            <div className="flex justify-between mx-2">
              <select
                name="status"
                id="filter"
                // onChange={(e) => setSelect(e.target.value)}
              >
                <option value="">Select filter</option>
                <option value="true">Unavailable</option>
                <option value="false">Available</option>
              </select>
              <Link href={`/businessManage/rooms/createRoom/${hotelId}`}>
                <button className="flex items-center text-sm font-bold  uppercase my-4 text-center gap-2 p-2">
                  Add Room
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
            <RoomsList rooms={hotel.rooms} isManage={true} />
          </div>
        ) : (
          <SimpleLoader />
        )}
      </div>
    </FullLayout>
  );
}
