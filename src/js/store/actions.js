import { getCharacters } from '@api/API';

// 액션 타입
export const FETCHCHARACTERS = 'FETCHCHARACTERS';
export const FETCHNEXTCHARACTERS = 'FETCHNEXTCHARACTERS';
export const SETLOADING = 'SETLOADING';
export const TOGGLEFILTER = 'TOGGLEFILTER';

// 액션 생성
export const fetchCharacters = (payload) => ({ type: FETCHCHARACTERS, payload });
export const fetchNextCharacters = (payload) => ({ type: FETCHNEXTCHARACTERS, payload });
export const setLoading = (payload) => ({ type: SETLOADING, payload });
export const toggleFilter = (payload) => ({ type: TOGGLEFILTER, payload });

// 비동기 액션 생성
export const fetchCharactersAsync =
  ({ params = [] }) =>
  async (dispatch, getState) => {
    const { loading } = getState;
    if (loading === 'pending') return;
    dispatch(setLoading({ loading: 'pending' }));
    const response = await getCharacters({ params });
    const isNext = response.length > 0;
    dispatch(fetchCharacters({ characters: response, page: 1, loading: 'idle', hasNext: isNext }));
  };

export const fetchNextCharactersAsync =
  ({ params = [] }) =>
  async (dispatch, getState) => {
    const { page, loading, hasNext } = getState;
    if (loading === 'pending' || !hasNext) return;
    dispatch(setLoading({ loading: 'pending' }));
    const nextPage = page + 1;
    const response = await getCharacters({ page: nextPage, params });
    const isNext = response.length > 0;
    // dispatch(fetchCharacters({ title: res }));
    dispatch(fetchNextCharacters({ characters: response, page: nextPage, loading: 'idle', hasNext: isNext }));
  };
