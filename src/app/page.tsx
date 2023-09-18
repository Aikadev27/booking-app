"use client";

import FullLayout from "@/layouts/FullLayout/FullLayout";
import { setUserData } from "@/redux/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import * as React from "react";
import { fetchUserData } from "@/services/user.service";
import Carousel from "@/components/Carousel.tsx/carousel";

export interface IHomePageProps {}

export default function HomePage(props: IHomePageProps) {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const userFromLocal = localStorage.getItem("user");
    const fetchData = async () => {
      if (userFromLocal) {
        const userData = JSON.parse(userFromLocal);
        try {
          const res = await fetchUserData(userData._id);
          dispatch(setUserData(res));
        } catch (error) {
          console.error("Lỗi khi lấy thông tin người dùng:", error);
        }
      }
    };
    fetchData();
  }, []);
  return (
    <FullLayout>
      <div className="pt-[64px]">
        <Carousel />
        <div className="h-[300vh] ">homepage</div>
      </div>
    </FullLayout>
  );
}
