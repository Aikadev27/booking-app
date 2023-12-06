import HistoryModel from "../HistoryModel.tsx/historyModel";
import FullLayout from "@/layouts/FullLayout/FullLayout";
import emptyListImg from "../../public/images/attachment.jpg";
import Image from "next/image";
export interface IBookingHistoryListProps {
  historyList: BookingHistoryType[];
}

export default function BookingHistoryList(props: IBookingHistoryListProps) {
  const list = props.historyList;
  const length = list.length;
  return (
    <FullLayout>
      <div className="container mx-auto mt-[75px]  h-[70vh] md:h-screen ">
        {length === 0 && (
          <div className="h-full">
            <div className="flex justify-center items-center h-full flex-col">
              <Image
                src={emptyListImg}
                alt="Empty List Booking History "
                className="w-[50%] rounded-[50%] block"
              />
              <p className="text-center">Booking History Is Empty</p>
            </div>
          </div>
        )}
        <div>
          <ul>
            {list.map((item, index) => (
              <li key={index} className="my-2" data-aos="fade-up">
                <HistoryModel historyData={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </FullLayout>
  );
}
