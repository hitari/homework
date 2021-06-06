import React, { useEffect, useState } from 'react';
import Header from '@components/Header';
import Filter from '@components/Filter';
import List from '@components/List';
import { fetchCharactersAsync, fetchNextCharactersAsync, toggleFilter } from '@store/actions';
import { useSelector, useDispatch } from 'customHook';
import { storeFilterCollector } from '@helper/filterHelper';

const CharacterPage = () => {
  const dispatch = useDispatch();
  const { title, filters, characters } = useSelector();
  const [params, setParams] = useState([]);
  const [localFilterData, setLocalFilterData] = useState([]);
  const [exceptionList, setExceptionList] = useState([]);

  useEffect(() => {
    // 최초 로딩시 Characters api 호출
    dispatch(fetchCharactersAsync({}));
  }, []);

  useEffect(() => {
    setLocalFilterData(filters);
  }, [filters]);

  // 다음 페이지 캐릭터들 정보 조회
  const fetchList = () => {
    dispatch(fetchNextCharactersAsync({ params }));
  };

  // filter 클릭 이벤트
  const handleFilterClick = (event, { type, name, requirement, active }) => {
    event.preventDefault();
    dispatch(toggleFilter({ name }));

    if (type === 'api') {
      // param 구성
      const params = filters
        .filter((filter) => {
          if (filter.type !== 'api') false;
          if (filter.name === name) return !filter.active;
          return filter.active;
        })
        .map((filter) => filter.requirement);
      setParams(params);

      dispatch(fetchCharactersAsync({ params }));
    } else if (type === 'store') {
    }
  };

  // Character Item Delete 버튼 클릭 이벤트
  const handleDeleteCharacterClick = (event) => {
    event.preventDefault();
    console.log('event', event);
  };

  const storeFilters = filters.filter((filter) => filter.type === 'store' && filter.active === true);
  const filterCharacters = characters.filter((character) => {
    // exceptionList 등록된 character 제외 로직 추가
    // filter requirement store인 아이들은 localFilter 적용
    return storeFilters.every((storeFilter) => storeFilterCollector[storeFilter.requirement](character));
  });

  return (
    <div>
      <Header title={title} />
      <Filter filters={filters} handleFilterClick={handleFilterClick} />
      <List list={filterCharacters} fetchList={fetchList} handleDeleteCharacterClick={handleDeleteCharacterClick} />
    </div>
  );
};
export default CharacterPage;
