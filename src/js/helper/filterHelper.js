import { arrayToCount } from '@helper/arrayHelper';
// store Filter 정의
const storeFilterCollector = {
  noTvSeries: (character) => arrayToCount(character.tvSeries) === 0,
  hasTvSeries: (character) => arrayToCount(character.tvSeries) > 0,
  moreBooks: (character) => arrayToCount(character.books) > 1,
};

// filter를 param으로 구성
const filterToParam = ({ filters, name }) => {
  return filters
    .filter((filter) => {
      if (filter.type !== 'api') return false;
      if (filter.name === name) return !filter.isActive;
      return filter.isActive;
    })
    .map((filter) => filter.requirement);
};

// store에서만 적용되는 filter 분리
const storeFilters = (filters) => filters.filter((filter) => filter.type === 'store' && filter.isActive === true);

export { storeFilterCollector, filterToParam, storeFilters };
