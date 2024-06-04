import {FilterSlider, Restaurant} from 'utils/type';

export const restaurants_d: Restaurant[] = [
  {
    id: 1,
    name: "WARUNG K'BUNGA",
    priceRange: '10-13k',
    hours: '09:00 - 21:00',
    image: require('assets/img/resto_template.jpeg'),
    rating: 4.7,
    isOpen: true,
    whatsapp: {
      number: '082228371999',
      group: '', //link
    },
    address: {
      text: 'QFCX+PPQ, Mawang, Kec. Somba Opu, Kabupaten Gowa, Sulawesi Selatan 92171',
      gmap: '', //link
    },
    foods: [
      {
        id: 1,
        name: 'Ayam goreng lalapan',
        desc: 'Nasi + Ayam goreng + Es teh',
        price: '20k',
        image: require('assets/img/resto_template.jpeg'),
        favorit: true,
      },
      {
        id: 99,
        name: 'Nasi goreng',
        desc: 'Nasi di goreng',
        price: '15k',
        image: require('assets/img/resto_template.jpeg'),
        favorit: false,
      },
      {
        id: 2,
        name: 'Ayam goreng lalapan',
        desc: 'Nasi + Ayam goreng + Es teh',
        price: '20k',
        image: require('assets/img/resto_template.jpeg'),
        favorit: true,
      },
      {
        id: 100,
        name: 'Nasi goreng',
        desc: 'Nasi di goreng',
        price: '15k',
        image: require('assets/img/resto_template.jpeg'),
        favorit: false,
      },
    ],
  },
  {
    id: 2,
    name: 'Warung Mandiri',
    priceRange: '5k',
    hours: '08:00 - 22:00',
    image: require('assets/img/resto_template.jpeg'),
    rating: 4.5,
    isOpen: true,
    whatsapp: {
      number: '082228371999',
      group: '', //link
    },
    address: {
      text: 'QFCX+PPQ, Mawang, Kec. Somba Opu, Kabupaten Gowa, Sulawesi Selatan 92171',
      gmap: '', //link
    },
    foods: [
      {
        id: 2,
        name: 'Ayam goreng lalapan',
        price: '20k',
        image: require('assets/img/resto_template.jpeg'),
        favorit: true,
      },
      {
        id: 4,
        name: 'Nasi goreng',
        price: '15k',
        image: require('assets/img/resto_template.jpeg'),
        favorit: false,
      },
    ],
  },
  {
    id: 3,
    name: 'Warung Alhamdulillah',
    priceRange: '10-13k',
    hours: '09:00 - 21:00',
    image: require('assets/img/resto_template.jpeg'),
    rating: 4.6,
    isOpen: true,
    whatsapp: {
      number: '082228371999',
      group: '', //link
    },
    address: {
      text: 'QFCX+PPQ, Mawang, Kec. Somba Opu, Kabupaten Gowa, Sulawesi Selatan 92171',
      gmap: '', //link
    },
    foods: [
      {
        id: 5,
        name: 'Ayam goreng lalapan',
        price: '20k',
        image: require('assets/img/resto_template.jpeg'),
        favorit: true,
      },
      {
        id: 8,
        name: 'Nasi goreng',
        price: '15k',
        image: require('assets/img/resto_template.jpeg'),
        favorit: false,
      },
    ],
  },
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
