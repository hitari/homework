import React, { useReducer } from 'react';
import { Context, initialState, reducer } from './store';

// Context를 Provider로 주입해서 Redux 라이브러리처럼 구현
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Context.Provider value={{ state: state, dispatch: dispatch }}>{children}</Context.Provider>;
};

export default ContextProvider;
