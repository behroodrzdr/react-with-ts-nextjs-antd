import { createContext, FunctionComponent, useState } from 'react';

type AccessToken = string | null;

interface Props {
  accessTokenFromServer: AccessToken;
  children: any,
}

interface IAuthorizationInfoContext {
  accessToken: AccessToken;
  // eslint-disable-next-line no-unused-vars
  setAccessToken: (token: AccessToken) => void;
}

export const AuthorizationInfoContext =
  createContext<IAuthorizationInfoContext>({} as IAuthorizationInfoContext);

const AuthorizationInfoProvider: FunctionComponent<Props> = ({
  accessTokenFromServer,
  children,
}) => {
  const [accessToken, setAccessToken] = useState(accessTokenFromServer);

  return (
    <AuthorizationInfoContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </AuthorizationInfoContext.Provider>
  );
};

export default AuthorizationInfoProvider;
