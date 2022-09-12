export const capitalizeString = (str: string) => {
  return str.charAt(0).toLocaleUpperCase() + str.slice(1);
};

export const joinNames = (name: string, id: string) => {
  const splitName = name.toLowerCase().split(' ').join('-');

  return splitName + `-${id.slice(-5)}`;
};
