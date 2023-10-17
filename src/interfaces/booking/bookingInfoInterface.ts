type BookingInfoType = {
  room: RoomType;
  customer: CustomerResponseType;
  checkInDate: Date;
  checkOutDate: Date;
  userQuantity: number;
};

type CustomerResponseType = {
  username: string;
  email: string;
  address: string;
  phoneNumber: string;
};
