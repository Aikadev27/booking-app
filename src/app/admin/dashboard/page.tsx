"use client";
import * as React from "react";
import { Tab } from "@headlessui/react";
import AdminLayout from "@/layouts/AdminLayout/AdminLayout";

export interface IAdminPageProps {}

export default function AdminPage(props: IAdminPageProps) {
  return (
    <AdminLayout>
      <div>right default content</div>
    </AdminLayout>
  );
}
