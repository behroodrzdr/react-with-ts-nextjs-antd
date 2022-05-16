// eslint-disable-next-line no-param-reassign
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { useRef } from 'react';
import useAuthInfo from './useAuthInfo';
// import getConfig from 'next/config';
// import createAuthRefreshInterceptor from 'axios-auth-refresh';
// import { useRouter } from 'next/router';
// import serviceErrorHandler from '../utils/httpServices/serviceErrorHandler';
// import useUserInfo from './useUserInfo';
// import { INeshanTokenServiceResponse } from '../services/neshan/neshanServices';
// import useServiceErrorInfo from './useServiceErrorInfo';

/* eslint-disable no-param-reassign */

// const { publicRuntimeConfig } = getConfig();

const useHttpService = (
  config?: AxiosRequestConfig | undefined
): AxiosInstance => {
  // const router = useRouter();
  const { accessToken, resetAccessToken, setAccessToken } = useAuthInfo();
  const accessTokenRef = useRef(accessToken);
  // const { resetUserData } = useUserInfo();
  // const { setError } = useServiceErrorInfo();

  const axiosInstance = axios.create(config);

  axiosInstance.interceptors.request.use((reqConfig:any) => {
    reqConfig.headers.Authorization = `Bearer ${accessTokenRef.current}`;
    return reqConfig;
  });

//   const refreshTokenHandler = async () => {
//     const logout = () => {
//       resetAccessToken();
//       resetUserData();
//       router.push('/');
//     };
//     try {
//       const newAuthData = await axios.get<INeshanTokenServiceResponse>(
//         '/api/refresh-token'
//       );
//       setAccessToken(newAuthData.data.access_token);
//       accessTokenRef.current = newAuthData.data.access_token;
//     } catch (e) {
//       logout();
//     }
//   };

  // createAuthRefreshInterceptor(axiosInstance);

//   axiosInstance.interceptors.response.use(
//     undefined,
//     serviceErrorHandler(setError)
//   );

  return axiosInstance;
};
export default useHttpService;
