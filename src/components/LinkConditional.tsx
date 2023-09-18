import * as React from "react";
import Link from "next/link";

export interface ILinkConditionalProps {
  path: string;
  style?: string;
  content?: string;
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
