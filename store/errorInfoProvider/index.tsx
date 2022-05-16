// eslint-disable-next-line no-unused-vars
import { createContext, FunctionComponent, useState } from 'react';
import { IErrorInfo } from '../../types';

interface IServiceErrorInfoContext {
  error: IErrorInfo;
  setError: (error: IErrorInfo) => void;
}

export const ServiceErrorInfoContext = createContext<IServiceErrorInfoContext>(
  {} as IServiceErrorInfoContext
);

export const ErrorInfoProvider: FunctionComponent<any> = ({ children }) => {
  const [error, setError] = useState<IErrorInfo>({  title: '', detail: '', errorType: '', });
  return (
    <ServiceErrorInfoContext.Provider value={{ error, setError }}>
      {children}
    </ServiceErrorInfoContext.Provider>
  );
};
