"use client";
import { fetchListUserByRole } from "@/services/admin.service";
import { useEffect, useState } from "react";
import ManageUserCard from "../ManageUserCard/ManageUserCard";
import SimpleLoader from "../SimpleLoader";
export interface IViewAllBusinessProps {}

export default function ViewAllBusiness(props: IViewAllBusinessProps) {
  const [userList, setUserList] = useState<UserType[]>();
  const role = "business";
  useEffect(() => {
    async function fetchUser() {
      const data = await fetchListUserByRole(role);
      const list = data[1].data;
      setUserList(list);
    }
    fetchUser();
  }, []);
  console.log(userList);

  return (
    <div>
      {userList ? (
        <div className="grid md:grid-cols-9 gap-8 mx-3">
          {userList?.map((user, index) => (
            <div className="md:col-span-3" key={index} data-aos="fade-up">
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
