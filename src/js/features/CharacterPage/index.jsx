import React, { useEffect, useState } from 'react';
import Header from '@components/Header';
import Filter from '@components/Filter';
import List from '@components/List';
import { fetchCharactersAsync, fetchNextCharactersAsync, toggleFilter, resetFilter } from '@store/actions';
import { useSelector, useDispatch } from 'customHook';
import { storeFilterCollector } from '@helper/filterHelper';
import { getUrlParam } from '@helper/urlHelper';

const CharacterPage = () => {
  const dispatch = useDispatch();
  const { title, filters, characters } = useSelector();
  const [params, setParams] = useState([]);
  const [exceptionList, setExceptionList] = useState([]);

  useEffect(() => {
    // 최초 로딩시 Characters api 호출
    const page = parseInt(getUrlParam('page'), 10);
    dispatch(fetchCharactersAsync({ page }));
  }, []);

  // 다음 페이지 캐릭터들 정보 조회
  const fetchNextList = () => {
    dispatch(fetchNextCharactersAsync({ params }));
  };

  // filter 초기화
  const filterReset = () => {
    setExceptionList([]);
    setParams([]);
    dispatch(resetFilter());
    dispatch(fetchCharactersAsync({}));
  };

  // filter를 param으로 구성
  const filterToParam = (name) => {
    const params = filters
      .filter((filter) => {
        if (filter.type !== 'api') false;
        if (filter.name === name) return !filter.isActive;
        return filter.isActive;
      })
      .map((filter) => filter.requirement);
    setParams(params);

    dispatch(fetchCharactersAsync({ params }));
  };

  // filter 클릭 이벤트
  const handleFilterClick = (event, { type, name }) => {
    event.preventDefault();

    if (type === 'reset') return filterReset();
    if (type === 'api') filterToParam(name);

    dispatch(toggleFilter({ name }));
  };

  // Character Item Delete 버튼 클릭 이벤트
  const handleDeleteCharacterClick = (event, id) => {
    event.preventDefault();
    setExceptionList((state) => [...state, id]);
  };

  const storeFilters = filters.filter((filter) => filter.type === 'store' && filter.isActive === true);
  const filterCharacters = characters.filter((character) => {
    // exceptionList 등록된 character 제외 로직
    const hasExceptionList = exceptionList.includes(character.url);
    // filter requirement store인 아이들은 storeFilter 적용
    const hasStoreFilter = storeFilters.every((storeFilter) =>
      storeFilterCollector[storeFilter.requirement](character)
    );
    return !hasExceptionList && hasStoreFilter;
  });

  return (
    <div>
      <Header title={title} />
      <Filter filters={filters} handleFilterClick={handleFilterClick} />
      <List list={filterCharacters} fetchList={fetchNextList} handleDeleteCharacterClick={handleDeleteCharacterClick} />
    </div>
  );
};
export default CharacterPage;
