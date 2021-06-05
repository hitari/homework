import React from 'react';
import filterList from '@/mock/filterData';
import characterList from '@/mock/listData';

// context
const Context = React.createContext();

//
const initialState = {
  title: '무신사 테스트',
  filters: filterList,
  characters: characterList,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'CHANGE_TITLE':
      return {
        ...state,
        title: payload.title,
      };
      return state;
  }
};

export { Context, initialState, reducer };
