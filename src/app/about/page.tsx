"use client";
import { error } from "console";
import { useState } from "react";

// test icon

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

export interface IAboutProps {}

export default function About(props: IAboutProps) {
  const [img, setImg] = useState<any>("");

  const ConvertToBase64 = (e: any) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);

    // To base64
    fileReader.onload = () => {
      setImg(fileReader.result);
    };

    // log error
    fileReader.onerror = (error) => {
      console.log("error", error);
    };
  };
  return (
    <>
      <p>choose file</p>
      <input type="file" onChange={ConvertToBase64} />
      <div>
        <img src={img} alt="img" />
      </div>
      <div>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-orange-400 hover:text-blue-400 cursor-pointer"
        />
        <FontAwesomeIcon icon={faPen} />
      </div>
    </>
  );
}
