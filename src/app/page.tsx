"use client";

import FullLayout from "@/layouts/FullLayout/FullLayout";
export interface IHomePageProps {}

export default function HomePage(props: IHomePageProps) {
  return (
    <FullLayout>
      <div className="h-[100vh] bg-indigo-400">homepage</div>
    </FullLayout>
  );
}
