import { createContext, FunctionComponent, useReducer } from 'react';
import { UserInfoActions } from './ActionTypes';
import userInfoReducer from './reducer';
import { UserInfoState } from '../../types';

/* eslint-disable no-unused-vars */

export interface IUserInfoContext {
  state: UserInfoState;
  dispatch: (action: UserInfoActions) => void;
}

export const UserInfoContext = createContext<IUserInfoContext>(
  {} as IUserInfoContext
);

const initialState = {
  userId: '',
  username: '',
  mobile: '',
  avatar: '',
  isValid: false,
  otpId: '',
};

export const UserInfoProvider: FunctionComponent = ({ children }: any) => {
  const [state, dispatch] = useReducer(userInfoReducer, initialState);
  return (
    <UserInfoContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};
