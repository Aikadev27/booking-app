import clsx from "clsx";
import style from "./register.module.scss";
import * as React from "react";
import Link from "next/link";

export interface IRegisterProps {}

export default function Register(props: IRegisterProps) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex justify-center min-h-screen">
        <div
          className={clsx("hidden bg-cover lg:block lg:w-2/5", style.bgImg)}
        ></div>

        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div className="w-full">
            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
              Get your free account now.
            </h1>

            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Let’s get you all set up so you can verify your personal account
              and begin setting up your profile.
            </p>

            <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
              <div>
                <label
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  htmlFor="username"
                >
                  User name
                </label>
                <input
                  autoComplete="off"
                  name="username"
                  id="username"
                  type="text"
                  placeholder="John"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  City
                </label>
                <input
                  list="cities"
                  type="text"
                  placeholder="Cần Thơ"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <datalist id="cities">
                  <option value="Cần Thơ"></option>
                  <option value="Vũng Tàu"></option>
                  <option value="Hồ Chí Minh"></option>
                  <option value="Đà Lạt"></option>
                  <option value="Đà Nẵng"></option>
                  <option value="Kiên Giang"></option>
                  <option value="Đồng Tháp"></option>
                  <option value="An Giang"></option>
                </datalist>
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Phone number
                </label>
                <input
                  type="text"
                  placeholder="XX-XXX-XXX"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="johnsnow@example.com"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div>
                <label
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  htmlFor="gender"
                >
                  Gender
                </label>
                <input
                  type="text"
                  list="genders"
                  placeholder="Enter your password"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <datalist id="genders">
                  <option value="Male"></option>
                  <option value="Female"></option>
                </datalist>
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Confirm password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <div>
                  <label className=" mb-2 text-sm text-gray-600 dark:text-blue-200 inline-block mr-1 font-bold">
                    Use this account for your business ?
                  </label>
                  <input type="checkbox" className="mt-2" />
                </div>
              </div>

              <button className=" items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                <span>Sign Up </span>
              </button>

              <Link href={"/"} className="max-w-[130px]">
                <button className="flex items-center justify-between  px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-fuchsia-600 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  <span>Back Home </span>
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
