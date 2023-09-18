import { useEffect } from "react";
import Link from "next/link";
export interface ILinkToSectionProps {
  moveToId: string;
  content?: string;
  href: string;
  style?: string;
}

export default function LinkToSection(props: ILinkToSectionProps) {
  const scrollToSection = (elementId: string, e: React.MouseEvent): any => {
    e.preventDefault();
    if (typeof document !== "undefined") {
      const section = document.getElementById(`${elementId}`);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <Link
      href={props.href}
      onClick={(e) => scrollToSection(props.moveToId, e)}
      className={`${props.style}`}
    >
      {props.content}
    </Link>
  );
}
