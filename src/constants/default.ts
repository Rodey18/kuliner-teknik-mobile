import {Restaurant} from 'utils/type';

export const defaultRestaurant: Restaurant = {
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
