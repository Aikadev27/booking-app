import Link from "next/link";
import * as React from "react";

export interface IHotelModalProps {
  id?: string;
  nameHotel?: string;
  location?: string;
  imageUrl?: string;
  desc?: string;
  servicePhoneNumber?: string;
  rateCount?: number;
  averageRating?: number;
}

export default function HotelModal(props: IHotelModalProps) {
  return (
    <div className=" cursor-pointer">
      <img
        src={props.imageUrl}
        alt="Hotel image"
        className="h-[200px] object-cover w-full rounded-t-xl"
      />
      <div className="py-2">
        <div className="text-base break-words">
          <h1 className="break-words font-bold text-base ">
            Name:{" "}
            <span className="font-light italic text-gray-800">
              {props.nameHotel}
            </span>
          </h1>
          <h1 className="break-words font-bold text-base ">
            City:{" "}
            <span className="font-light italic text-gray-800">
              {props.location}
            </span>
          </h1>
          <h1 className="break-words font-bold text-base ">
            Desc:{" "}
            <span className="font-light italic text-gray-800">
              {props.desc}
            </span>
          </h1>
        </div>
        <div>
          <h1 className="break-words font-bold text-base ">
            Total reviews:
            <span className="font-light italic text-gray-800">
              {props.rateCount}
            </span>
          </h1>
          <h1 className="break-words font-bold text-base ">
            rating:
            <span className="font-light italic text-gray-800 mr-4 ml-4">
              {props.averageRating}
            </span>
            ⭐
          </h1>
        </div>
      </div>
      <Link href={`/hotel/detail/${props.id}`}>
        <button className="p-2 bg-green-800 m-2 rounded-xl text-white mx-auto hover:opacity-70 block w-full">
          view detail
        </button>
      </Link>
    </div>
  );
}