export interface iFormAddRoom {
  title: string;
  description: string;
  gym?: boolean;
  internet?: boolean;
  tv?: boolean;
  garage?: boolean;
  animals?: boolean;
  furnished?: boolean;
  zip_code: string;
  street: string;
  district: string;
  city: string;
  state: string;
  number: string;
  room_photo: string;
  contact: string;
}

interface iAboutNewRoom {
  gym?: boolean;
  internet?: boolean;
  tv?: boolean;
  garage?: boolean;
  animals?: boolean;
  furnished?: boolean;
}

interface iLocalizationNewRoom {
  zip_code: string;
  district: string;
  state: string;
  street: string;
  number: number;
}

export interface iNewRoom {
  title: string;
  description: string;
  about: iAboutNewRoom;
  localization: iLocalizationNewRoom;
  room_photo: string;
  contact: number;
}
