"use client";

import { getReviewsOfHotel } from "@/services/hotel.service";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faStar,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
export interface IReviewsProps {
  hotelId: string;
}

// Interface
type user = {
  username: string;
  avatarUrl: string;
};
type Review = {
  comment: string;
  rating: number;
  user: user;
  createdAt: Date;
};

export default function Reviews(props: IReviewsProps) {
  // reviews of hotel --> create list review with review type
  const [reviews, setReviews] = useState<Review[]>();
  const hotelId = props.hotelId;
  // get reviews of hotel here
  async function getReviews(hotelId: string) {
    const data = await getReviewsOfHotel(hotelId);
    setReviews(data);
  }
  useEffect(() => {
    getReviews(hotelId);
    // call to get reviews
  }, [hotelId]);

  return (
    <>
      <section>
        <div>
          {reviews?.length ? (
            <div>
              {reviews
                ?.slice(-10)
                .reverse()
                .map((review, index) => (
                  <div
                    key={index}
                    className="mx-5 my-2 border p-2 border-b-black md:mx-14"
                  >
                    <div className="flex justify-between">
                      <div className="flex justify-start gap-2 md:gap-4 items-center">
                        <img
                          src={
                            review.user.avatarUrl
                              ? review.user.avatarUrl
                              : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/800px-User-avatar.svg.png"
                          }
                          alt="userAvatar"
                          className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] object-cover rounded-[50%]"
                        />
                        <p className="text-[12px] text-gray-700 md:text-lg">
                          {review.user.username} :
                        </p>
                        <p className=" text-[12px] text-orange-300 md:text-lg font-semibold">
                          {" "}
                          {review.rating}
                        </p>
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-yellow-700 md:mt-[-1px] md:ml-[-10px] text-[10px] md:text-[14px]"
                        />
                      </div>
                      <div>
                        <p>{review.createdAt.toString()}</p>
                      </div>
                    </div>
                    <p className=" text-black mt-2 ml-2 text-[12px] md:text-sm">
                      {review.comment}
                    </p>
                    <div className="flex justify-end gap-2 items-center">
                      <FontAwesomeIcon
                        icon={faThumbsUp}
                        className="cursor-pointer text-sm hover:text-blue-500"
                      />
                      <FontAwesomeIcon
                        icon={faThumbsDown}
                        className="cursor-pointer text-sm hover:text-blue-500"
                      />
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div> chưa có đánh giá nào</div>
          )}
        </div>
      </section>
    </>
  );
}
