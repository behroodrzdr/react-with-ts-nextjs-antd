import { FC } from 'react';

const combineProviders = (...components: FC[]): FC =>
  components.reduce(
    (CombinedProviders:any, CurrentComponent:any) =>
      // eslint-disable-next-line react/display-name
      ({ children }: any): JSX.Element =>
        (
          <CombinedProviders>
            <CurrentComponent>{children}</CurrentComponent>
          </CombinedProviders>
        ),
    ({ children }) => <>{children}</>
  );

export default combineProviders;
