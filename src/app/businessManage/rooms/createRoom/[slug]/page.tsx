"use client";
import FullLayout from "@/layouts/FullLayout/FullLayout";
import { createNewRoom } from "@/services/room.service";
import Link from "next/link";
import { useEffect, useState } from "react";
export interface ICreateRoomProps {
  params: any;
}

export default function CreateRoom(props: ICreateRoomProps) {
  const HotelId = props.params.slug;
  const [number, setNumber] = useState<string>();
  const [type, setType] = useState<string>();
  const [desc, setDesc] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [floor, setFloor] = useState<number>();
  const [img, setImg] = useState<string>();

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
    setTimeout(() => {
      location.reload();
    }, 2000);
  };
  return (
    <FullLayout>
      <div className="mt-[65px] min-h-screen"></div>
    </FullLayout>
  );
}
