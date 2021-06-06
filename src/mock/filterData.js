// 필터 리스트 mock
const filterList = [
  {
    name: '생존인물만',
    type: 'api',
    requirement: { isAlive: true },
    isActive: false,
  },
  {
    name: '여자',
    type: 'api',
    requirement: { gender: 'Female' },
    isActive: false,
  },
  {
    name: 'tvSeries 없음',
    type: 'store',
    requirement: 'noTvSeries',
    isActive: false,
  },
  {
    name: '초기화',
    type: 'reset',
    requirement: 'reset',
    isActive: false,
  },
];

export default filterList;
