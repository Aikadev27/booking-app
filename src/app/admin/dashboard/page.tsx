"use client";
import { useEffect } from "react";
import { Tab } from "@headlessui/react";

import AdminLayout from "@/layouts/AdminLayout/AdminLayout";
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";
import AreaChart from "@/components/AreaChart";

export interface IAdminPageProps {}

export default function AdminPage(props: IAdminPageProps) {
  useEffect(() => {});
  return (
    <AdminLayout>
      <div className="grid grid-cols-2 gap-2">
        <div className="col-span-1">
          <BarChart />
        </div>
        <div className="col-span-1">
          <LineChart />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-6">
        <div className="col-span-1">
          <AreaChart />
        </div>
        <div className="col-span-1">{/* <LineChart /> */}</div>
      </div>
    </AdminLayout>
  );
}
