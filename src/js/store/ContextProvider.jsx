import React, { useReducer } from 'react';
import { Context, initialState, reducer } from './store';
import thunk from './middleware/thunk';

// middleware 합성
function compose(...funcs) {
  // middleware 없음
  if (funcs.length === 0) return (arg) => arg;
  // middleware 1개
  if (funcs.length === 1) return funcs[0];
  // middleware 1 < n개
  return funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
}

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
