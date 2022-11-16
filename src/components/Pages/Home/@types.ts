interface iRoomAbout {
  gym: boolean;
  internet: boolean;
  tv: boolean;
  garage: boolean;
  animals: boolean;
  furnished: boolean;
}

interface iRoomLocalization {
  zip_code: string;
  street: string;
  district: string;
  city: string;
  state: string;
  number: number;
}

export interface iRoom {
  userId: number;
  title: string;
  description: string;
  about: iRoomAbout;
  localization: iRoomLocalization;
  room_photo: string;
  contact: number;
  id: number;
}
