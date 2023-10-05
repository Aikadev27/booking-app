import * as React from "react";

export interface IMakeReservationProps {
  params: any;
}

export default function MakeReservation(props: IMakeReservationProps) {
  return <div>{props.params._id}</div>;
}
