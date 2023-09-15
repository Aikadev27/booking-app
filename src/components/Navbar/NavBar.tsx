"use client";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import * as React from "react";

export interface INavBarProps {}

export default function NavBar(props: INavBarProps) {
  const user = useAppSelector((state) => state.auth.login.currentUser);

  return (
    <div className="flex ">
      <p className="mx-[30px]">Navbar</p>
      <div>
        {user ? (
          <>
            <p>{user.info.username}</p>
            <button>Log Out</button>
          </>
        ) : (
          <div>
            <Link href={"/auth/login"} className="mx-[20px]">
              Login
            </Link>
            <Link href={"/auth/register"}>register</Link>
          </div>
        )}
      </div>
    </div>
  );
}
