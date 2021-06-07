import React from 'react';
import { FETCHCHARACTERS, FETCHNEXTCHARACTERS, SETLOADING, TOGGLEFILTER, RESETFILTER, REGISTERERROR } from './actions';
import filterList from '@/mock/filterData';

// context
const Context = React.createContext();

// 초기값 정의
const initialState = {
  title: '무신사 과제',
  filters: filterList,
  characters: [],
  page: 1,
  limit: 10,
  hasNext: false,
  loading: '',
  error: {},
};

// 리듀서
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCHCHARACTERS:
      return {
        ...state,
        characters: payload.characters,
        page: payload.page,
        hasNext: payload.hasNext,
        loading: payload.loading,
      };
    case FETCHNEXTCHARACTERS:
      return {
        ...state,
        characters: [...state.characters, ...payload.characters],
        page: payload.page,
        hasNext: payload.hasNext,
        loading: payload.loading,
      };
    case SETLOADING:
      return {
        ...state,
        loading: payload.loading,
      };
    case TOGGLEFILTER:
      return {
        ...state,
        filters: state.filters.map((filter) => {
          if (filter.name === payload.name) {
            return { ...filter, isActive: !filter.isActive };
          } else {
            return filter;
          }
        }),
      };
    case RESETFILTER:
      return {
        ...state,
        filters: state.filters.map((filter) => {
          return { ...filter, isActive: false };
        }),
      };
    case REGISTERERROR:
      return {
        ...state,
        error: payload.error,
      };
    default:
      return state;
  }
};

export { Context, initialState, reducer };
