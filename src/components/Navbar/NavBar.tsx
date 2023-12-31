"use client";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import Button from "../Button";
import { logOut, setUserData } from "@/redux/authSlice";
import { useRouter } from "next/navigation";
import LinkConditional from "../LinkConditional";
import Wrap from "@/layouts/Wrap";
export interface INavBarProps {}

export default function NavBar(props: INavBarProps) {
  const user = useAppSelector<any>((state) => state.auth.login?.user);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  // handle scrolling --> set color for navbar
  const [scrolling, setScrolling] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // handle scrolling
  useEffect(() => {
    const handleScrolling = () => {
      const isTop = window.scrollY < 500;
      if (isTop !== scrolling) {
        setScrolling(isTop);
      }
    };
    document.addEventListener("scroll", handleScrolling);

    return () => {
      document.removeEventListener("scroll", handleScrolling);
    };
  }, [scrolling]);

  const [dropdownFlag, setDropdownFlag] = useState(false);
  const [dropMobile, setDropMobile] = useState(false);
  const dispatch = useAppDispatch();
  // const router = useRouter();

  const handleDropdown = () => {
    setDropdownFlag(!dropdownFlag);
  };
  const handleDropMobile = () => {
    setDropMobile(!dropMobile);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    dispatch(setUserData(null));
    dispatch(logOut());
  };

  return (
    <Wrap>
      <nav
        data-aos="fade-left"
        className={`${
          scrolling ? "bg-blue-gray-100 " : "bg-gray-200 bg-opacity-70 "
        } fixed top-0 right-0 left-0  z-50 transition-all `}
        id="navbar"
      >
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-blue-400 font-bold hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={handleDropMobile}
              >
                <span className="absolute -inset-0.5 "></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className={`${dropMobile ? "hidden" : "block"} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className={`${dropMobile ? "block" : "hidden"} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div
                className={`hidden sm:ml-6 sm:block
              }`}
              >
                <div className={`flex space-x-4`}>
                  <Link
                    href={"/"}
                    className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    Home
                  </Link>

                  <LinkConditional
                    content="Book Now"
                    path="/hotel"
                    isAuthenticated={isAuthenticated}
                    style="text-orange-700  hover:bg-orange-300 hover:text-white rounded-md px-3 py-2 text-sm font-bold"
                  />
                </div>
              </div>
            </div>
            <div className=" sm:hidden flex-auto font-bold">AIKA BOOKING</div>

            {user ? (
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="relative ml-3">
                  <div>
                    <button
                      type="button"
                      className={`relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800`}
                      id="user-menu-button"
                      onClick={handleDropdown}
                    >
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={
                          user.avatarUrl
                            ? user.avatarUrl
                            : "https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg?w=2000"
                        }
                        alt="user avatar"
                      />
                    </button>
                  </div>

                  {user?.role === "admin" ? (
                    <div
                      className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                        dropdownFlag ? "block" : " hidden"
                      } transition ease-out duration-100 `}
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabIndex={-1}
                    >
                      <Link
                        href="/user/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:opacity-70"
                        role="menuitem"
                        tabIndex={-1}
                        id="user-menu-item-0"
                      >
                        Your Profile
                      </Link>
                      <Link
                        href="/admin/userManagement"
                        className="block px-4 py-2 text-sm text-gray-700 hover:opacity-70"
                        role="menuitem"
                        tabIndex={-1}
                        id="user-menu-item-1"
                      >
                        Go Admin Page
                      </Link>
                      <Link
                        href="/booking/history"
                        className="block px-4 py-2 text-sm text-gray-700 hover:opacity-70"
                        role="menuitem"
                        tabIndex={-1}
                        id="user-menu-item-1"
                      >
                        View your booking history
                      </Link>
                      <Link
                        href="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:opacity-70"
                        role="menuitem"
                        tabIndex={-1}
                        id="user-menu-item-2"
                        onClick={handleLogout}
                      >
                        Sign out
                      </Link>
                    </div>
                  ) : user?.role === "business" ? (
                    <div
                      className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                        dropdownFlag ? "block" : " hidden"
                      } transition ease-out duration-100 `}
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabIndex={-1}
                    >
                      <Link
                        href="/user/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:opacity-70"
                        role="menuitem"
                        tabIndex={-1}
                        id="user-menu-item-0"
                      >
                        Your Profile
                      </Link>
                      <Link
                        href="/businessManage"
                        className="block px-4 py-2 text-sm text-gray-700 hover:opacity-70"
                        role="menuitem"
                        tabIndex={-1}
                        id="user-menu-item-1"
                      >
                        Manage your business
                      </Link>
                      <Link
                        href="/booking/history"
                        className="block px-4 py-2 text-sm text-gray-700 hover:opacity-70"
                        role="menuitem"
                        tabIndex={-1}
                        id="user-menu-item-1"
                      >
                        View your booking history
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:opacity-70"
                        role="menuitem"
                        tabIndex={-1}
                        id="user-menu-item-2"
                        onClick={handleLogout}
                      >
                        Sign out
                      </Link>
                    </div>
                  ) : (
                    <div
                      className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                        dropdownFlag ? "block" : " hidden"
                      } transition ease-out duration-100 `}
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabIndex={-1}
                    >
                      <Link
                        href="/user/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:opacity-70"
                        role="menuitem"
                        tabIndex={-1}
                        id="user-menu-item-0"
                      >
                        Your Profile
                      </Link>
                      <Link
                        href="/booking/history"
                        className="block px-4 py-2 text-sm text-gray-700 hover:opacity-70"
                        role="menuitem"
                        tabIndex={-1}
                        id="user-menu-item-1"
                      >
                        View your booking history
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:opacity-70"
                        role="menuitem"
                        tabIndex={-1}
                        id="user-menu-item-2"
                        onClick={handleLogout}
                      >
                        Sign out
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div>
                <Link href={"/auth/login"} className="mr-[4px]">
                  <Button
                    content="Login"
                    bgColor="bg-[#f23e5c]"
                    textColor="text-white"
                    padding="p-[8px]"
                  />
                </Link>
                <Link href={"/auth/register"}>
                  <Button
                    content="Register"
                    bgColor="bg-[#2176ff]"
                    textColor="text-white"
                  />
                </Link>
              </div>
            )}
          </div>
        </div>

        <div
          className={`${dropMobile ? "block" : "hidden"} sm:hidden`}
          id="mobile-menu"
        >
          <Link
            href={"/"}
            className="  bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Home
          </Link>
          <div className="space-y-1 px-2 pb-3 pt-2">
            <LinkConditional
              content="Book Now"
              path="/booking/reservation"
              isAuthenticated={isAuthenticated}
              style="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            />
          </div>
        </div>
      </nav>
    </Wrap>
  );
}
