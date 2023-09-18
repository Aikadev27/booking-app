import * as React from "react";

export interface IButtonProps {
  content: string;
  padding?: string;
  bgColor?: string;
  border?: boolean;
  textColor?: string;
}

export default function Button(props: IButtonProps) {
  const textColorClass = props.textColor ? `${props.textColor}` : "text-black";
  const paddingClass = props.padding ? `${props.padding} ` : "p-[8px]";
  const bgColorClass = props.bgColor ? `${props.bgColor}` : "bg-gray-300";
  return (
    <button
      className={`${paddingClass} cursor-pointer ${bgColorClass} rounded-[8px] ${
        props.border ? "border-2 border-gray-200" : "border-none"
      } hover:opacity-70  text-[14px] font-bold ${textColorClass} content-center ease-in-out duration-200 transition-all`}
    >
      {props.content}
    </button>
  );
}
