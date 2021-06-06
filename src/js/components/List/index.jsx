import React, { useState } from 'react';
import Item from './Item';
import { arrayToCount } from '@helper/arrayHelper';
import { useInfinteScroll } from 'customHook';

const List = ({ list, fetchList, handleDeleteCharacterClick }) => {
  // 인피니티 스크롤 설정
  const [setTarget] = useInfinteScroll({
    rootMargin: '0px 0px 300px 0px',
    onIntersect: ([{ isIntersecting, target }], observer) => {
      if (isIntersecting) {
        fetchList();
      }
    },
  });

  return (
    <div className="character_list">
      {list.map((item) => {
        return (
          <Item
            key={item.url}
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
