import {FilterSlider, Mitra} from 'utils/type';

export const defaultMitra: Mitra = {
  id: '',
  name: '',
  type: 'offline',
  image: '',
  rating: 0,
  is_open: false,
  whatsapp: '',
  address: '',
  schedule: {
    senin: {
      open_time: '',
      close_time: '',
    },
    selasa: {
      open_time: '',
      close_time: '',
    },
    rabu: {
      open_time: '',
      close_time: '',
    },
    kamis: {
      open_time: '',
      close_time: '',
    },
    jumat: {
      open_time: '',
      close_time: '',
    },
    sabtu: {
      open_time: '',
      close_time: '',
    },
    minggu: {
      open_time: '',
      close_time: '',
    },
  },
  products: [
    {
      id: '',
      name: '',
      desc: '',
      price: '',
      image: '',
    },
    {
      id: '',
      name: '',
      desc: '',
      price: '',
      image: '',
    },
  ],
};

export const days = [
  'SENIN',
  'SELASA',
  'RABU',
  'KAMIS',
  'JUMAT',
  'SABTU',
  'MINGGU',
];

export const dropdownBussinessType = [
  {label: 'Offline', value: 'offline'},
  {label: 'Online', value: 'online'},
];

export const filterSliders: FilterSlider[] = [
  {
    text: 'Warung terdekat',
    image: require('assets/img/resto_template.jpeg'),
  },
  {
    text: 'Rating tertinggi',
    image:
      'https://firebasestorage.googleapis.com/v0/b/kuliner-teknik-v1.appspot.com/o/img%2Fresto_template.jpeg?alt=media&token=0f908845-828e-4874-bb15-a468e6117729',
  },
  {
    text: 'Makanan terfavorit',
    image: require('assets/img/resto_template.jpeg'),
  },
];

export const searchHistory = ['nasi ikan', 'sayur bening', 'kol berbahaya'];
export const searchCategory = ['Aneka Nasi', 'Cemilan', 'Sarapan'];
export const filter = ['terdekat', 'rating'];
