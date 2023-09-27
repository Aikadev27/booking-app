"use client";

export interface IDetailProps {
  params: any;
}

export default function Detail(props: IDetailProps) {
  return <div>{props.params.id}</div>;
}
