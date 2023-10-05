type HotelDetail = {
  _id: string;
  ownerId: string;
  nameHotel: string;
  emailHotel: string;
  location: LocationType;
  featuredImageUrl: string[];
  desc: string;
  servicePhoneNumber: string;
  rateCount: number;
  averageRating: number;
  rooms: RoomType[];
};
