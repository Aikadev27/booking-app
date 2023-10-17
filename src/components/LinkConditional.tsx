"use client";
import Link from "next/link";

export interface ILinkConditionalProps {
  // href
  path: string;
  style?: string;
  content?: string;
  //  from localStorage
  isAuthenticated?: boolean;
}

export default function LinkConditional(props: ILinkConditionalProps) {
  return (
    <Link
      href={props.isAuthenticated ? `${props.path}` : "/auth/login"}
      className={`${props.style}`}
    >
      {props.content}
    </Link>
  );
}
