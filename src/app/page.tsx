"use client";

import FullLayout from "@/layouts/FullLayout/FullLayout";
import Carousel from "@/components/Carousel/carousel";
import ListHotel from "@/components/ListHotel/page";
import Link from "next/link";
import Button from "@/components/Button";
import Destinations from "@/components/Destinations/page";

export interface IHomePageProps {}

export default function HomePage(props: IHomePageProps) {
  return (
    <FullLayout>
      <div>
        <Carousel />
        <div className="container mx-auto">
          <h1
            data-aos="fade-up"
            className="text-base xl:text-xl text-black font-bold text-center xl:text-left xl:my-4 my-2"
          >
            Trending Destinations
          </h1>
          <Destinations />
        </div>
        <div className="container mx-auto m-1 xl:pt-20 xl:pb-20 py-5">
          <ListHotel />
          <div className="text-center py-4">
            <Link href={"/hotel"}>
              <Button
                content="See All ->"
                bgColor="bg-blue-900"
                padding="py-[12px] px-[24px]"
                textColor="text-white"
              />
            </Link>
          </div>
        </div>
      </div>
    </FullLayout>
  );
}
