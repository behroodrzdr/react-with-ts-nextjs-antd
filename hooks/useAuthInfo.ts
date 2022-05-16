import { useContext } from 'react';
import { AuthorizationInfoContext } from '../store/authorizationProvider';

const useAuthInfo = () => {
  const { accessToken, setAccessToken: setAccessTokenHandler } = useContext(
    AuthorizationInfoContext
  );
  const resetAccessToken = () => {
    setAccessTokenHandler(null);
  };

  const setAccessToken = (token: string) => {
    setAccessTokenHandler(token);
  };

  return {
    accessToken,
    resetAccessToken,
    setAccessToken
  };
};

export default useAuthInfo;
