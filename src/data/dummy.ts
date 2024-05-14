interface Restaurant {
  name: string;
  hours: string;
  priceRange: string;
  image: any;
}

export const restaurants: Restaurant[] = [
  {
    name: 'Royal Crispy',
    priceRange: '10-13k',
    hours: '09:00 - 21:00',
    image: require('assets/img/resto_template.jpeg'), // Masukkan path gambar untuk setiap restoran
  },
  {
    name: 'Warung Mandiri',
    priceRange: '5k',
    hours: '08:00 - 22:00',
    image: require('assets/img/resto_template.jpeg'),
  },
  {
    name: 'Warung Alhamdulillah',
    priceRange: '10-13k',
    hours: '09:00 - 21:00',
    image: require('assets/img/resto_template.jpeg'),
  },
];
