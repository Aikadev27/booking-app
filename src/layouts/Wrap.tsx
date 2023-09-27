import { setUserData } from "@/redux/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { fetchUserData } from "@/services/user.service";
import * as React from "react";

export interface IWrapProps {
  children: React.ReactNode;
}

export default function Wrap(props: IWrapProps) {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const userFromLocal = localStorage.getItem("user");
    const fetchData = async () => {
      if (userFromLocal) {
        const userData = JSON.parse(userFromLocal);
        try {
          const res = await fetchUserData(userData._id);
          dispatch(setUserData(res));
        } catch (error) {
          console.error("Lỗi khi lấy thông tin người dùng:", error);
        }
      }
    };
    fetchData();
  }, []);
  return <div>{props.children}</div>;
}
