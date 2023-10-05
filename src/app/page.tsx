"use client";

import FullLayout from "@/layouts/FullLayout/FullLayout";
import * as React from "react";
import Carousel from "@/components/Carousel/carousel";
import Wrap from "@/layouts/Wrap";
import ListHotel from "@/components/ListHotel/page";
import Link from "next/link";
import Button from "@/components/Button";
import Destinations from "@/components/Destinations/page";

export interface IHomePageProps {}

export default function HomePage(props: IHomePageProps) {
  return (
    <FullLayout>
      <Wrap>
        <div>
          <Carousel />
          <div className="container mx-auto">
            {" "}
            <h1 className="text-base xl:text-xl text-black font-bold text-center xl:text-left xl:my-4 my-2">
              Trending Destinations
            </h1>
            <Destinations />
          </div>
          <div className="container mx-auto m-1 xl:py-40 py-5">
            <ListHotel />
          </div>
          <div className="text-center py-4">
            <Link href={"/hotel"}>
              <Button
                content="See All"
                bgColor="bg-green-900"
                padding="py-[12px] px-[24px]"
                textColor="text-white"
              />
            </Link>
          </div>
        </div>
      </Wrap>
    </FullLayout>
  );
}
