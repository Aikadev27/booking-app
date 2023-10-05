import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Navbar/Navbar";

export interface IFullLayoutProps {
  children: React.ReactNode;
}

export default function FullLayout(props: IFullLayoutProps) {
  return (
    <>
      <NavBar />
      <div className="mt-[65px]">{props.children}</div>
      <Footer />
    </>
  );
}
