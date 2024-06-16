import {Mitras} from 'utils/type';

export const defaultMitra: Mitras = {
  id: -1,
  name: 'unknown',
  hours: '',
  priceRange: '',
  rating: 0,
  address: {
    text: '',
    gmap: '',
  },
  isOpen: false,
  whatsapp: {
    number: '',
    group: '',
  },
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
