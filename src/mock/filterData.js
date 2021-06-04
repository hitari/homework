// 필터 리스트 mock
const filterList = [
  {
    name: '생존인물만',
    type: 'api',
    action: 'isAlive=true',
    active: false,
  },
  {
    name: '여자',
    type: 'api',
    action: 'gender=Female',
    active: false,
  },
  {
    name: 'tvSeries 없음',
    type: 'store',
    action: 'dispatchAction',
    active: false,
  },
];

export default filterList;
