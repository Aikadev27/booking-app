import * as React from "react";

export interface IBookingDetailProps {
  params: any;
}

export default function BookingDetail(props: IBookingDetailProps) {
  return <div>{props.params._id}</div>;
}
