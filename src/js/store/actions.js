import { getCharacters } from '@api/charactersAPI';

// 액션 타입
export const FETCHCHARACTERS = 'FETCHCHARACTERS';
export const FETCHNEXTCHARACTERS = 'FETCHNEXTCHARACTERS';
export const SETLOADING = 'SETLOADING';
export const TOGGLEFILTER = 'TOGGLEFILTER';
export const RESETFILTER = 'RESETFILTER';
export const REGISTERERROR = 'REGISTERERROR';

// 액션 생성
export const fetchCharacters = (payload) => ({ type: FETCHCHARACTERS, payload });
export const fetchNextCharacters = (payload) => ({ type: FETCHNEXTCHARACTERS, payload });
export const setLoading = (payload) => ({ type: SETLOADING, payload });
export const toggleFilter = (payload) => ({ type: TOGGLEFILTER, payload });
export const resetFilter = (payload) => ({ type: RESETFILTER, payload });
export const registerError = (payload) => ({ type: REGISTERERROR, payload });

// Characters 호출 액션 실행
export const fetchCharactersAsync =
  ({ page = 1, params = [] }) =>
  async (dispatch, getState) => {
    try {
      const { loading } = getState;
      if (loading === 'pending') return;
      dispatch(setLoading({ loading: 'pending' }));
      const response = await getCharacters({ page, params });
      const isNext = response.length > 0;
      dispatch(fetchCharacters({ characters: response, page, loading: 'idle', hasNext: isNext }));
    } catch (error) {
      dispatch(registerError({ error: { isError: true, description: error } }));
    }
  };

// 다음 page Characters 호출 액션 실행
export const fetchNextCharactersAsync =
  ({ params = [] }) =>
  async (dispatch, getState) => {
    try {
      const { page, loading, hasNext } = getState;
      if (loading === 'pending' || !hasNext) return;
      dispatch(setLoading({ loading: 'pending' }));
      const nextPage = page + 1;
      const response = await getCharacters({ page: nextPage, params });
      const isNext = response.length > 0;
      dispatch(fetchNextCharacters({ characters: response, page: nextPage, loading: 'idle', hasNext: isNext }));
    } catch (error) {
      dispatch(registerError({ error: { isError: true, description: error } }));
    }
  };
