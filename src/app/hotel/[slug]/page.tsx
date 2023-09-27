"use client";
import * as React from "react";

export interface IHotelByCityProps {
  params: any;
}

export default function HotelByCity(props: IHotelByCityProps) {
  const location = decodeURIComponent(props.params.slug);

  return <div>{location}</div>;
}
