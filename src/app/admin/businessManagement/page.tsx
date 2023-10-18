"use client";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import AdminLayout from "@/layouts/AdminLayout/AdminLayout";
import {} from "react";
import Destinations from "@/components/Destinations/page";
import Carousel from "@/components/Carousel/carousel";

export interface IBusinessManagementProps {}

export default function BusinessManagement(props: IBusinessManagementProps) {
  return (
    <AdminLayout>
      <div className=" h-full">
        <Tab.Group>
          <Tab.List
            className={`flex justify-center items-center gap-10 py-3 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]`}
          >
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`${
                    selected
                      ? "bg-white text-blue-700 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] outline-none"
                      : "bg-transparent text-black"
                  } px-8 py-2 rounded-md text-center font-bold `}
                >
                  View All Business
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`${
                    selected
                      ? "bg-white text-blue-700 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] outline-none"
                      : "bg-transparent text-black"
                  } px-8 py-2 rounded-md text-center font-bold `}
                >
                  Add New Business
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className={`w-full mt-4 mx-4`}>
              view all business
              <Carousel />
            </Tab.Panel>
            <Tab.Panel className={`w-full mt-4 mx-4`}>
              add new
              <Destinations />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </AdminLayout>
  );
}
