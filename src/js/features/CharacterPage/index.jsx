import React from 'react';
import { useSelector, useDispatch } from 'customHook';
import Header from '@components/Header';
import Filter from '@components/Filter';
import List from '@components/List';
import filterList from '@/mock/filterData';
import characterList from '@/mock/listData';

const CharacterPage = () => {
  const { title } = useSelector();
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch({ type: 'CHANGE_TITLE', payload: { title: '무신사 변신' } });
  };
  return (
    <div>
      <button onClick={onClick}>버튼</button>
      <Header title={title} />
      <Filter filterList={filterList} />
      <List characterList={characterList} />
    </div>
  );
};
export default CharacterPage;
