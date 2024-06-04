export const ColorWithOpacity = (color: string, opacity: number): string => {
  return `rgba(${color.slice(4, -1)}, ${opacity})`;
};

export const priceConverter = (value: string) => {
  if (value.toLowerCase().endsWith('k')) {
    const numberPart = parseFloat(value.slice(0, -1));
    return (
      numberPart.toLocaleString('en-US', {minimumFractionDigits: 0}) + ',000'
    );
  }
  return value;
};
