import { FC } from 'react';
import combineProviders from '../helpers/combineProviders';
import { UserInfoProvider } from './userInfoProvider';
import { ErrorInfoProvider } from './errorInfoProvider';

const AppContextProvider:FC<any> = combineProviders(
  UserInfoProvider,
  ErrorInfoProvider
);

export default AppContextProvider;
