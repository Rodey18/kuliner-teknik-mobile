import {ImageSourcePropType} from 'react-native';

declare module '@env' {
  export const API_URL: string;
  export const FIREBASE_API_KEY: string;
  export const FIREBASE_AUTH_DOMAIN: string;
  export const FIREBASE_PROJECT_ID: string;
  export const FIREBASE_STORAGE_BUCKET: string;
  export const FIREBASE_MESSAGING_SENDER_ID: string;
  export const FIREBASE_APP_ID: string;
  export const FIREBASE_MEASUREMENT_ID: string;
}

export type User = {
  username: string;
  email: string;
  phone?: string;
  favorit: Favorit[];
};

export type Favorit = {
  id: string;
};

export type Product = {
  id: number;
  name: string;
  desc?: string;
  price: string;
  image?: string | ImageSourcePropType;
};

export type Whatsapp = {
  number: string;
  group: string;
};

export type Schedule = {
  [day: string]: {
    open_time: string;
    close_time: string;
  };
};

export type Mitra = {
  id: string;
  name: string;
  schedule: Schedule;
  image?: string | ImageSourcePropType;
  products?: Product[];
  rating: number;
  address: string;
  is_open: boolean;
  whatsapp: string;
};

export type FilterSlider = {
  text: string;
  image: string | ImageSourcePropType;
};
