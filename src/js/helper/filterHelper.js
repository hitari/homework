import { arrayToCount } from '@helper/arrayHelper';
// store Filter 정의
const storeFilterCollector = {
  noTvSeries: (character) => arrayToCount(character.tvSeries) === 0,
  hasTvSeries: (character) => arrayToCount(character.tvSeries) > 0,
};

export { storeFilterCollector };
