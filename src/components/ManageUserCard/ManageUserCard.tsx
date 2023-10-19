"use client";

import { deleteOneUser } from "@/services/admin.service";
import { updateInfo } from "@/services/user.service";
import { useState } from "react";

export interface IManageUserCardProps {
  userInfo: UserType;
}

export default function ManageUserCard(props: IManageUserCardProps) {
  const user = props.userInfo;
  const [edit, setEdit] = useState(false);
  const [username, setUsername] = useState(user?.username);
  const [email, setEmail] = useState(user?.email);
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber);
  const [address, setAddress] = useState(user?.address);
  const [sex, setSex] = useState(user?.sex || false);
  const [age, setAge] = useState(user?.age || 0);

  const createDate = new Date(user.createdAt);
  const updateAt = new Date(user.updatedAt);

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
    const confirmed = window.confirm(
      "Bạn có chắc chắn muốn cập nhật những thông tin này ?"
    );
    if (confirmed) {
      updateInfo(user._id, formData);
    }
  };
  const handleGenderChange = (e: any) => {
    const selectedValue = e.target.value;
    const isFemale = selectedValue === "Male";
    setSex(isFemale);
  };

  const handleDeleteUser = (userId: string, username: any) => {
    const confirmed = window.confirm(
      `Bạn có chắc chắn muốn xóa người dùng ${username} này ?`
    );
    if (confirmed) {
      deleteOneUser(userId);
    }
  };
  return (
    <div className="w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white max-h-[450px] h-[400px] rounded-md hover:bg-transparent cursor-pointer  transition ease-in-out duration-500">
      <div className="text-white h-[40%] bg-[url('https://wallpapers.com/images/hd/doodle-glowing-artwork-vhu5ts3hs8bxyq5a.jpg')] flex items-center justify-center rounded-t-md opacity-90">
        {user.avatarUrl !== "" ? (
          <img
            src={`${user.avatarUrl}`}
            alt="avatar"
            className="h-full object-cover rounded-[50%]"
          />
        ) : (
          <img
            src={`https://t4.ftcdn.net/jpg/04/08/24/43/360_F_408244382_Ex6k7k8XYzTbiXLNJgIL8gssebpLLBZQ.jpg`}
            alt="avatar"
            className="h-full object-cover rounded-[50%] "
          />
        )}
      </div>
      <div className="h-[50%] mx-2">
        <div className="grid grid-cols-6 my-1 gap-2">
          <div className="col-span-5">
            <input
              type="text"
              defaultValue={user.username}
              disabled={!edit}
              className="w-full py-1 focus:outline-cyan-800 text-sm pl-2 rounded"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="col-span-1 text-sm text-center mx-auto">
            <select
              onChange={handleGenderChange}
              className="text-sm py-1 bg-orange-700 text-white font-bold"
              disabled={!edit}
            >
              <option value="option1">Male</option>
              <option value="option2">Female</option>
            </select>
          </div>
        </div>
        <div className="my-1">
          <input
            type="text"
            defaultValue={user.email}
            disabled={!edit}
            className="w-full py-1 focus:outline-cyan-800 text-sm pl-2 rounded"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="my-1">
          <input
            type="text"
            defaultValue={user.phoneNumber}
            disabled={!edit}
            className="w-full py-1 focus:outline-cyan-800 text-sm pl-2 rounded"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="my-1">
          <input
            type="text"
            defaultValue={user.address}
            disabled={!edit}
            className="w-full py-1 focus:outline-cyan-800 text-sm pl-2 rounded"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="my-1 grid grid-cols-2 mt-3 gap-1">
          <div className="col-span-1 text-sm italic font-bold break-words">
            CreateAt:{" "}
            <span className="font-light">{createDate.toDateString()}</span>
          </div>
          <div className="col-span-1 text-sm italic  font-bold break-words">
            UpdateAt:{" "}
            <span className="font-light">{updateAt.toDateString()}</span>
          </div>
        </div>
      </div>
      <div className="h-[10%] flex justify-center items-center gap-10 py-2">
        <div>
          {!edit ? (
            <button
              onClick={() => setEdit(true)}
              className="uppercase text-sm font-bold px-4 py-2 hover:text-white hover:bg-blue-600 text-blue-600 rounded-md transition-all ease-linear duration-300"
            >
              edit
            </button>
          ) : (
            <div className="flex gap-3">
              <button
                onClick={() => setEdit(false)}
                className="uppercase text-sm font-bold px-4 py-2 text-orange hover:bg-orange-600 hover:text-white  rounded-md transition-all ease-linear duration-300"
              >
                cancel
              </button>

              {/* handle save -> submit form */}
              <button
                onClick={handleSubmit}
                className="uppercase text-sm font-bold px-4 py-2 text-white bg-green-600  rounded-md transition-all ease-linear duration-300"
              >
                save
              </button>
            </div>
          )}
        </div>
        <div>
          <button
            onClick={() => handleDeleteUser(user._id, user.username)}
            className="uppercase text-sm font-bold px-4 py-2 hover:text-white hover:bg-red-600 text-red-600 rounded-md transition-all ease-linear duration-300"
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
}
