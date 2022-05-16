import React, { useEffect, useState, useRef, useMemo, useContext, createContext  } from 'react';
import axios,{ AxiosRequestConfig, AxiosRequestHeaders }  from 'axios';

const AxiosContext = createContext(null);

export const AxiosInstanceProvider = ({
  config = {},
  requestInterceptors = [],
  responseInterceptors = [],
  children,
}:any) => {
  const instanceRef = useRef(axios.create(config));
  useEffect(() => {
    requestInterceptors.forEach((interceptor:any) => {
      instanceRef.current.interceptors.request.use(
        interceptor
      );
    });
    responseInterceptors.forEach((interceptor:any) => {
      instanceRef.current.interceptors.response.use(
        interceptor
      );
    });
  }, []);
  return (
    // @ts-ignore
    <AxiosContext.Provider value={instanceRef.current}>
      {children}
    </AxiosContext.Provider>
  );
};

export const useAxios = ({ url, method, payload, params, headers}: 
  {
      url: string, 
      method: AxiosRequestConfig['method'], 
      payload: AxiosRequestConfig['data'], 
      params?: AxiosRequestConfig['params'],  
      headers?: AxiosRequestHeaders
  }) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const [loaded, setLoaded] = useState<boolean>(false);
  const contextInstance = useContext(AxiosContext);
  const instance = useMemo(() => {
    return contextInstance || axios;
  }, [contextInstance]);
  const controllerRef = useRef(new AbortController());
  const cancel = () => {
    controllerRef.current.abort();
  };
  useEffect(() => {
    (async () => {
      try {
        const response = await instance.request({
          signal: controllerRef.current.signal,
          data: payload,
          method,
          url,
        });
        setData(response.data);
      } catch (error:any) {
        setError(error.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);
  return { cancel, data, error, loaded };
};