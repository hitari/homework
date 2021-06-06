// 필터 리스트 mock
const filterList = [
  {
    name: '생존인물만',
    type: 'api',
    requirement: { isAlive: true },
    active: false,
  },
  {
    name: '여자',
    type: 'api',
    requirement: { gender: 'Female' },
    active: false,
  },
  {
    name: 'tvSeries 없음',
    type: 'store',
    requirement: 'noTvSeries',
    active: false,
  },
];

export default filterList;
