type BookingHistoryType = {
  _id:string
  customer: Customer;
  room: Room;
  userQuantity: number;
  checkInDate: Date;
  checkOutDate: Date;
};

type Room = {
  roomNumber: string;
  roomType: string;
  pricePerNight: number;
  floor: number;
};

type Customer = {
  username: string;
};
