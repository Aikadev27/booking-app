"use client";

import FullLayout from "@/layouts/FullLayout/FullLayout";
import { setUserData } from "@/redux/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import * as React from "react";
import { fetchUserData } from "@/services/user.service";
import Carousel from "@/components/Carousel.tsx/carousel";
import Wrap from "@/layouts/Grap";

export interface IHomePageProps {}

export default function HomePage(props: IHomePageProps) {
  return (
    <FullLayout>
      <Wrap>
        <div className="pt-[64px]">
          <Carousel />
          <div className="h-[300vh] ">homepage</div>
        </div>
      </Wrap>
    </FullLayout>
  );
}
