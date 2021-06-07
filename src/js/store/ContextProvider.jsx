import React, { useReducer } from 'react';
import { Context, initialState, reducer } from './store';
import thunk from './middleware/thunk';
import { compose } from '@helper/composeHelper';

// Context를 Provider로 주입해서 Redux 라이브러리처럼 구현
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const middlewares = [thunk];
  const middlewareAPI = {
    getState: state,
    dispatch: (action, ...args) => dispatch(action, ...args),
  };

  const dispatchWithMiddleware = () => {
    const chain = middlewares.map((middleware) => middleware(middlewareAPI));
    return compose(...chain)(dispatch);
  };

  return <Context.Provider value={{ state: state, dispatch: dispatchWithMiddleware() }}>{children}</Context.Provider>;
};

export default ContextProvider;
