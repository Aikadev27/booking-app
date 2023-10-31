import HistoryModel from "../HistoryModel.tsx/historyModel";
import FullLayout from "@/layouts/FullLayout/FullLayout";

export interface IBookingHistoryListProps {
  historyList: BookingHistoryType[];
}

export default function BookingHistoryList(props: IBookingHistoryListProps) {
  const list = props.historyList;
  const length = list.length;
  return (
    <FullLayout>
      <div className="container mx-auto mt-[75px]  h-full md:h-screen ">
        {length === 0 && <div>no data</div>}
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
