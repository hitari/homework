import React from 'react';
import Item from './Item';
import ItemSkeleton from './ItemSkeleton';
import { arrayToCount } from '@helper/arrayHelper';
import { useInfinteScroll } from 'customHook';

const List = ({ list, loading, fetchList, handleDeleteCharacterClick }) => {
  // 인피니티 스크롤 설정
  const [setTarget] = useInfinteScroll({
    rootMargin: '0px 0px 300px 0px',
    onIntersect: ([{ isIntersecting, target }], observer) => {
      if (isIntersecting) {
        fetchList();
      }
    },
  });

  // 데이터 없음 반환
  if (loading === 'idle' && list.length === 0) return <div className="nodata">데이터가 존재 하지 않습니다.</div>;
  // 초기 로딩시 skeleton 반환
  if (loading === 'pending' && list.length === 0) {
    return new Array(10).fill(1).map((v, i) => {
      return <ItemSkeleton key={i} />;
    });
  }

  return (
    <div className="character_list">
      {list.map((item) => {
        return (
          <Item
            key={item.url}
            id={item.url}
            name={item.name}
            aliases={item.aliases.join(', ')}
            titles={item.titles.join(', ')}
            books={arrayToCount(item.books)}
            tvSeries={arrayToCount(item.tvSeries)}
            onClick={handleDeleteCharacterClick}
          />
        );
      })}
      <div className="last_element" ref={setTarget}></div>
    </div>
  );
};
export default List;
