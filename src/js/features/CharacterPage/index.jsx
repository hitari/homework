import React from 'react';
import Header from '@components/Header';
import Filter from '@components/Filter';
import List from '@components/List';
import filterList from '@/mock/filterData';
import characterList from '@/mock/listData';

const CharacterPage = () => {
  return (
    <>
      <Header title="무신사 테스트" />
      <Filter filterList={filterList} />
      <List characterList={characterList} />
    </>
  );
};
export default CharacterPage;
