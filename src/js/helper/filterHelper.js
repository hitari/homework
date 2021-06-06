import { arrayToCount } from '@helper/arrayHelper';
// store Filter 정의
const storeFilterCollector = {
  noTvSeries: (character) => arrayToCount(character.tvSeries) === 0,
  hasTvSeries: (character) => arrayToCount(character.tvSeries) > 0,
  moreBooks: (character) => arrayToCount(character.books) > 1,
};

export { storeFilterCollector };
