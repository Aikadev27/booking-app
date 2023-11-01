"use client";
import Link from "next/link";
import {} from "react";
export interface IBusinessSideBarProps {}

export default function BusinessSideBar(props: IBusinessSideBarProps) {
  return (
    <div>
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-black text-gray-300 px-3">
        <div>
          <Link href={"/"}>
            <p
              data-aos="fade-right"
              className="text-[10px] italic border-b border-gray-700 w-fit hover:text-cyan-500"
            >
              Back Home
            </p>
          </Link>
          <h1
            data-aos="fade-down"
            className="text-center mt-4 py-4 border-b-[1px] border-gray-700 font-bold text-2xl"
          >
            ADMIN PAGE
          </h1>
        </div>
        <div className="text-center h-full mt-20" data-aos="fade-down">
          <div className="flex gap-2 py-2 px-2 my-4 rounded-lg hover:bg-gray-500 hover:scale-110   transition ease-in-out duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>
            <Link href={"#"}>
              <button className="font-light  text-base">User Management</button>
            </Link>
          </div>
          <div className="flex gap-2 py-2 px-2 my-4 rounded-lg hover:bg-gray-500 hover:scale-110   transition ease-in-out duration-300"></div>
          <div className="flex gap-2 py-2 px-2 my-4 rounded-lg hover:bg-gray-500 hover:scale-110   transition ease-in-out duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"
              />
            </svg>

            <Link href={"#"}>
              <button className="font-light  text-base">
                Dashboard analyst
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
