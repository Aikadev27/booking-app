"use client";

import BookingHistoryList from "@/components/BookingHistoryList/bookingHistoryList";
import SimpleLoader from "@/components/SimpleLoader";
import { fetchBookingHistoryOfUser } from "@/redux/bookingSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
export interface IBookingHistoryProps {}

export default function BookingHistory(props: IBookingHistoryProps) {
  const dispatch = useAppDispatch();
  const bookingHistory: BookingHistoryType[] | any = useAppSelector(
    (state) => state.booking.bookingHistory
  );
  useEffect(() => {
    dispatch(fetchBookingHistoryOfUser());
  }, []);
  return (
    <div>
      {bookingHistory ? (
        // render history list here
        <BookingHistoryList historyList={bookingHistory} />
      ) : (
        <div>
          <SimpleLoader />
        </div>
      )}
    </div>
  );
}
