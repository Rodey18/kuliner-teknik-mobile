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
  birth_date?: Date;
  phone?: string;
  job?: string;
};

export type Food = {
  id: number;
  name: string;
  desc?: string;
  price: string;
  image?: ImageSourcePropType;
  favorit: boolean;
};

export type Address = {
  text: string;
  gmap: string;
};

export type Whatsapp = {
  number: string;
  group: string;
};

export type Restaurant = {
  id: number;
  name: string;
  hours: string;
  priceRange: string;
  image?: ImageSourcePropType;
  foods?: Food[];
  rating: number;
  address: Address;
  isOpen: boolean;
  whatsapp: Whatsapp;
};

export type FilterSlider = {
  text: string;
  image: string | ImageSourcePropType;
};
