const arrayToCount = (array) => {
  if (array.length === 1 && array[0] === '') return 0;
  return array.length;
};

export { arrayToCount };
