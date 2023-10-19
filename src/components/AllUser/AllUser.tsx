"use client";
import { fetchAllUser } from "@/services/user.service";
import { useState, useEffect } from "react";
import ManageUserCard from "../ManageUserCard/ManageUserCard";
import Loader from "../Loader";
import SimpleLoader from "../SimpleLoader";

export interface IAllUserProps {}

export default function AllUser(props: IAllUserProps) {
  const [userList, setUserList] = useState<UserType[]>();

  useEffect(() => {
    async function fetchUser() {
      const data = await fetchAllUser();

      setUserList(data);
    }
    fetchUser();
  }, []);

  return (
    <div>
      {userList ? (
        <div className="grid grid-cols-9 gap-8 mx-3">
          {userList?.map((user, index) => (
            <div className="col-span-3" key={index} data-aos="fade-up">
              <ManageUserCard userInfo={user} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <SimpleLoader />
        </div>
      )}
    </div>
  );
}
