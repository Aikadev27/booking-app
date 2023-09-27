type HotelType = {
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
};

type LocationType = {
  _id: string;
  city: string;
  district: string;
  street: string;
  subAddress: string;
};
