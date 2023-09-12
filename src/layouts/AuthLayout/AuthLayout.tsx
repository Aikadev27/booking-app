"use client";
// import "@/styles/globals.css";
import * as React from "react";
import { clsx } from "clsx";
import style from "./auth.module.scss";
export interface IAuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout(props: IAuthLayoutProps) {
  return <div>{props.children}</div>;
}
