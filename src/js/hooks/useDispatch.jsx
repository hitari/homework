import React, { useContext } from 'react';
import { Context } from '@store/store';

const useDispatch = () => {
  const { dispatch } = useContext(Context);
  return dispatch;
};
export default useDispatch;
