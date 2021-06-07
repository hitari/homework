import React, { useEffect, useState, useCallback, useMemo } from 'react';
import Header from '@components/Header';
import Filter from '@components/Filter';
import List from '@components/List';
import { fetchCharactersAsync, fetchNextCharactersAsync, toggleFilter, resetFilter } from '@store/actions';
import { useSelector, useDispatch } from 'customHook';
import { storeFilterCollector, filterToParam, storeFilters } from '@helper/filterHelper';
import { getUrlParam } from '@helper/urlHelper';

const CharacterPage = () => {
  const dispatch = useDispatch();
  const { title, filters, characters, loading, page } = useSelector();
  const [params, setParams] = useState([]);
  const [exceptionList, setExceptionList] = useState([]);

  useEffect(() => {
    // 최초 로딩시 Characters api 호출
    const page = parseInt(getUrlParam('page') || 1, 10);
    dispatch(fetchCharactersAsync({ page }));
  }, []);

  // 다음 페이지 캐릭터들 정보 조회
  const fetchNextList = () => {
    dispatch(fetchNextCharactersAsync({ params }));
  };

  // filter 클릭 이벤트
  const handleFilterClick = (event, { type, name }) => {
    event.preventDefault();
    switch (type) {
      case 'reset':
        filterReset();
        break;
      case 'api':
        const params = filterToParam({ filters, name });
        setParams(params);
        dispatch(fetchCharactersAsync({ params }));
      default:
        dispatch(toggleFilter({ name }));
    }
  };

  // Character Item Delete 버튼 클릭 이벤트
  const handleDeleteCharacterClick = useCallback(
    (event, id) => {
      event.preventDefault();
      setExceptionList((state) => [...state, id]);
    },
    [exceptionList]
  );

  // filter 초기화
  const filterReset = useCallback(() => {
    setExceptionList([]);
    setParams([]);
    dispatch(resetFilter());
    dispatch(fetchCharactersAsync({}));
  }, []);

  // 삭제 및 필터를 적용하는 Characters
  const filterCharacters = useMemo(() => {
    return characters.filter((character) => {
      // exceptionList 등록된 character 제외 로직
      const hasExceptionList = exceptionList.includes(character.url);
      // filter requirement store인 아이들은 storeFilter 적용
      const hasStoreFilter = storeFilters(filters).every((storeFilter) =>
        storeFilterCollector[storeFilter.requirement](character)
      );
      return !hasExceptionList && hasStoreFilter;
    });
  }, [characters, exceptionList, filters]);

  return (
    <div>
      <Header title={title} />
      <Filter filters={filters} handleFilterClick={handleFilterClick} />
      <List
        list={filterCharacters}
        loading={loading}
        fetchList={fetchNextList}
        handleDeleteCharacterClick={handleDeleteCharacterClick}
      />
    </div>
  );
};
export default CharacterPage;
