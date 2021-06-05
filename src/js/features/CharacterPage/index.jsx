import React from 'react';
import { useSelector, useDispatch } from 'customHook';
import Header from '@components/Header';
import Filter from '@components/Filter';
import List from '@components/List';

const CharacterPage = () => {
  const { title, filters, characters } = useSelector();
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch({ type: 'CHANGE_TITLE', payload: { title: '무신사 변신' } });
  };
  return (
    <div>
      <button onClick={onClick}>버튼</button>
      <Header title={title} />
      <Filter filterList={filters} />
      <List characterList={characters} />
    </div>
  );
};
export default CharacterPage;
