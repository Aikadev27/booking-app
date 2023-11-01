"use client";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import AdminLayout from "@/layouts/AdminLayout/AdminLayout";
import {} from "react";

import ViewAllBusiness from "@/components/ViewAllBusiness/ViewAllBusiness";

import AllUser from "@/components/AllUser/AllUser";
import NormalUser from "@/components/NormalUser/NormalUser";
import AdminSideBar from "@/components/AdminSidebar/adminSidebar";

export interface IuserManagementProps {}

export default function userManagement(props: IuserManagementProps) {
  return (
    <AdminLayout sidebar={<AdminSideBar />}>
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
                  All
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
                  Business
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
                  Normal User
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className={`w-full mt-4 mx-4`}>
              <AllUser />
            </Tab.Panel>
            <Tab.Panel className={`w-full mt-4 mx-4`}>
              <ViewAllBusiness />
            </Tab.Panel>
            <Tab.Panel className={`w-full mt-4 mx-4`}>
              <NormalUser />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </AdminLayout>
  );
}
