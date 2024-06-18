import Clipboard from '@react-native-clipboard/clipboard';
import {Alert} from 'react-native';
import {Product, Schedule} from './type';
import {Buffer} from 'buffer';

export const ColorWithOpacity = (color: string, opacity: number): string => {
  return `rgba(${color.slice(4, -1)}, ${opacity})`;
};

export const priceFormatter = (value: number) => {
  if (value >= 1000) {
    return `${Math.round(value / 1000)}k`;
  } else {
    return value;
  }
};

export const handleCopyToClipboard = (value: string) => {
  Clipboard.setString(value);
  Alert.alert(
    'Copied to Clipboard',
    `The ${value} has been copied to your clipboard.`,
  );
};

export const timeConverter = (schedule: Schedule) => {
  const date = new Date();

  let currentHours = date.getHours().toString();
  let currentMinutes = date.getMinutes().toString();

  currentHours = currentHours.padStart(2, '0');
  currentMinutes = currentMinutes.padStart(2, '0');

  const currentTime = currentHours + ':' + currentMinutes;
  const {openTime, closeTime} = getMitraTimeRange(schedule, date);

  return {currentTime, openTime, closeTime};
};

export const getMitraTimeRange = (schedule: Schedule, date: Date) => {
  const formatter = new Intl.DateTimeFormat('id-ID', {
    weekday: 'long',
    timeZone: 'Asia/Makassar',
  });
  const currentDay = formatter.format(date);
  const daySchedule = schedule[currentDay.toLowerCase()];

  if (!daySchedule) {
    return false;
  }

  const openTime = daySchedule.open_time;
  const closeTime = daySchedule.close_time;

  return {openTime, closeTime};
};

export const checkIfOpen = (
  currentTime: string,
  openTime: string,
  closeTime: string,
) => {
  return currentTime >= openTime && currentTime <= closeTime;
};

export const convertPriceToNumeric = (priceStr: string) => {
  const numericStr = priceStr.replace(/\D/g, '');

  return parseFloat(numericStr);
};

export const calculatePriceRange = (products: Product[]) => {
  let minPrice = Infinity;
  let maxPrice = -Infinity;

  products.forEach(product => {
    const price = convertPriceToNumeric(product.price);

    minPrice = Math.min(minPrice, price);
    maxPrice = Math.max(maxPrice, price);
  });

  const priceRange =
    priceFormatter(minPrice) + ' - ' + priceFormatter(maxPrice);

  return priceRange;
};

export const generateProfileImage = async (username: string) => {
  // Extract the first two uppercase letters from the username
  const svgText = username.slice(0, 2).toUpperCase();

  const svgMarkup = `
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0f0f0" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="30" fill="#333">${svgText}</text>
    </svg>
  `;

  const svgBuffer = Buffer.from(svgMarkup, 'utf-8');

  return svgBuffer;
};
