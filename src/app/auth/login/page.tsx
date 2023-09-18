"use client";
import * as React from "react";
import AuthLayout from "@/layouts/AuthLayout/AuthLayout";
import { clsx } from "clsx";
import style from "./login.module.scss";
import Link from "next/link";
import { loginUser } from "@/services/auth.service";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";

export interface ILoginProps {}

export default function Login(props: ILoginProps) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const dispatch = useAppDispatch();

  const handleLogin = (e: any) => {
    e.preventDefault();
    const loginFormData = { email: email, password: password };
    loginUser(loginFormData, dispatch, router);
  };

  return (
    <AuthLayout>
      <div className="bg-gray-900 ">
        <div className="flex justify-center h-screen">
          <div
            className={clsx("hidden bg-cover lg:block lg:w-2/3", style.bgImg)}
          >
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 className="text-4xl font-bold text-white">
                  Aikadev Booking
                </h2>

                <p className="max-w-xl mt-3 text-gray-300">
                  Cung cấp dịch vụ khách sạn hàng đầu hành tinh
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6 relative">
            <Link href={"/"}>
              <button className="absolute top-0 left-[10px] text-white text-sm mt-[15px] border-b-[1px] hover:text-blue-400 hover:border-blue-400">
                Back Home
              </button>
            </Link>

            <div className="flex-1">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-center text-gray-700 ">
                  Aikadev Booking
                </h2>

                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Sign in to access your account
                </p>
              </div>

              <div className="mt-8">
                <form onSubmit={handleLogin}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Email Address
                    </label>
                    <input
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@example.com"
                      autoComplete="off"
                      className="block w-full px-5 py-3 mt-2 text-gray-300 placeholder-gray-400  border border-gray-200 rounded-md  bg-gray-900  dark:border-gray-700 focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label
                        htmlFor="password"
                        className="text-sm text-gray-600 dark:text-gray-200"
                      >
                        Password
                      </label>
                    </div>

                    <input
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Your Password"
                      className="block w-full px-5 py-3 mt-2 text-gray-300 placeholder-gray-400  border border-gray-200 rounded-md  bg-gray-900  dark:border-gray-700 focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6">
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                      Sign in
                    </button>
                  </div>
                </form>

                <p className="mt-6 text-sm text-center text-gray-400">
                  Don&#x27;t have an account yet?{" "}
                  <Link href={"/auth/register"}>
                    <span className="text-blue-400">Register now</span>
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
