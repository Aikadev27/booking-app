"use client";
import Button from "@/components/Button";
import Footer from "@/components/Footer/Footer";
import FullLayout from "@/layouts/FullLayout/FullLayout";
import Wrap from "@/layouts/Wrap";
import { useAppSelector } from "@/redux/hooks";
import { updateInfo } from "@/services/user.service";
import Link from "next/link";
import { useState } from "react";
export interface IProfileProps {}

export default function Profile(props: IProfileProps) {
  const user = useAppSelector<any>((state) => state.auth.login?.user);
  const [edit, setEdit] = useState(false);
  const [username, setUsername] = useState(user?.username);
  const [email, setEmail] = useState(user?.email);
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber);
  const [address, setAddress] = useState(user?.address);
  const [sex, setSex] = useState(user?.gender || false);
  const [age, setAge] = useState(user?.age || 0);
  console.log(user);
  const handleGenderChange = (e: any) => {
    const selectedValue = e.target.value;
    const isFemale = selectedValue === "Male";
    setSex(isFemale);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = {
      username: username,
      email: email,
      phoneNumber: phoneNumber,
      address: address,
      sex: sex,
      age: age,
    };
    updateInfo(user._id, formData);
  };
  return (
    <Wrap>
      <div>
        <div className="xl:flex sm:mx-auto xl:justify-start xl:h-screen h-fit bg-gray-200 xl:bg-none ">
          <div className="xl:w-[500px] sm:mx-auto   xl:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] ">
            <div className="mx-auto xl:flex items-center">
              <div className="xl:mx-auto xl:pt-[10rem]">
                <img
                  src={
                    user?.avatarUrl
                      ? user.avatarUrl
                      : "https://media.istockphoto.com/id/1131164548/vector/avatar-5.jpg?s=612x612&w=0&k=20&c=CK49ShLJwDxE4kiroCR42kimTuuhvuo2FH5y_6aSgEo="
                  }
                  alt="avatar"
                  className="w-[120px] rounded-[50%] block mx-auto xl:w-[150px] xl:mx-0 mt-10 xl:mt-0 relative"
                />
                <h1 className="text-center font-bold">{user?.username}</h1>
                <p className="text-center font-light">{user?.email}</p>
                <Link href={"/"} className=" text-center py-10 block">
                  <Button content="Back Home" bgColor="bg-[#1877f2]" />
                </Link>
              </div>
            </div>
          </div>
          <div className="xl:w-full bg-transparent  ">
            <h1 className="text-center pt-[100px] xl:pt-[20px] text-2xl xl:text-3xl font-bold  text-black">
              Profile Settings
            </h1>
            <div className="flex justify-center items-center mt-[40px] xl:mt-[60px] xl:ml-10 xl:mr-10 ml-4 mr-4">
              <form
                onSubmit={handleSubmit}
                className="md:grid md:grid-cols-4 md:gap-10 w-full"
              >
                <div className="col-span-2 md:m-0 mt-4 mb-2">
                  <label
                    htmlFor="username"
                    className="xl:block mt-[12px] mb-[12px] text-sm xl:text-gray-800 text-black font-black"
                  >
                    User Name
                  </label>
                  <input
                    type="text"
                    className="outline outline-1 outline-gray-900 block w-full p-4 rounded "
                    defaultValue={user?.username}
                    disabled={!edit}
                    id="username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="col-span-2 md:m-0 mt-4 mb-2">
                  <label
                    htmlFor="email"
                    className="xl:block mt-[12px] mb-[12px] text-sm xl:text-gray-800 text-black font-black"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className="outline outline-1 outline-gray-900 block w-full p-4 rounded "
                    defaultValue={user?.email}
                    disabled={!edit}
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-span-2 md:m-0 mt-4 mb-2">
                  <label
                    htmlFor="phoneNumber"
                    className="xl:block mt-[12px] mb-[12px] text-sm xl:text-gray-800 text-black font-black"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="outline outline-1 outline-gray-900 block w-full p-4 rounded "
                    defaultValue={user?.phoneNumber}
                    disabled={!edit}
                    id="phoneNumber"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="col-span-2 md:m-0 mt-4 mb-2">
                  <label
                    htmlFor="address"
                    className="xl:block mt-[12px] mb-[12px] text-sm xl:text-gray-800 text-black font-black"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="outline outline-1 outline-gray-900 block w-full p-4 rounded "
                    defaultValue={user?.address}
                    disabled={!edit}
                    id="address"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="col-span-2 md:m-0 mt-4 mb-2">
                  <label
                    htmlFor="sex"
                    className="xl:block mt-[12px] mb-[12px] text-sm xl:text-gray-800 text-black font-black"
                  >
                    Gender
                  </label>
                  <input
                    type="text"
                    className="outline outline-1 outline-gray-900 block w-full p-4 rounded "
                    defaultValue={user?.sex ? "Male" : "Female"}
                    disabled={!edit}
                    id="sex"
                    list="genders"
                    onChange={handleGenderChange}
                  />
                  <datalist id="genders">
                    <option value="Male"></option>
                    <option value="Female"></option>
                  </datalist>
                </div>
                <div className="col-span-2 md:m-0 mt-4 mb-2">
                  <label
                    htmlFor="age"
                    className="xl:block mt-[12px] mb-[12px] text-sm xl:text-gray-800 text-black font-black"
                  >
                    Age
                  </label>
                  <input
                    type="text"
                    className="outline outline-1 outline-gray-900 block w-full p-4 rounded "
                    defaultValue={user?.age}
                    disabled={!edit}
                    id="age"
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div className="md:col-span-4  gap-10 col-span-1 flex justify-between items-center">
                  <div className="col-span-2 mx-auto">
                    <button
                      type="reset"
                      className="bg-[#1877f2] md:px-20 py-3 px-12 rounded-xl hover:opacity-50 cursor-pointer"
                      onClick={() => setEdit(true)}
                    >
                      Edit
                    </button>
                  </div>
                  <div className="bg-[#f0284a] md:px-20 py-3 px-12 rounded-xl mx-auto hover:opacity-50 cursor-pointer">
                    <button className="" type="submit">
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Wrap>
  );
}
