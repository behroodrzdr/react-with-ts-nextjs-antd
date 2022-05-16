import '../public/fontface.css';
import 'glider-js/glider.min.css';
import '../styles/globals.css';
import 'antd/dist/antd.css';
import React, { ReactElement, ReactNode } from 'react';
import type { NextPage, } from 'next'
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import AppContextProvider from '../store';
import AuthorizationProvider from '../store/authorizationProvider';
import { AxiosInstanceProvider } from '../helpers/AxiosInstanceProvider';

// import CheckAccess from '../components/auth/CheckAccess/CheckAccess';
// import EnterWhenLogin from '../components/auth/CheckAccess/EnterWhenLogin';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  },
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps } : AppPropsWithLayout) {

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

//   const auth = Component.auth
//   ? (page: any) => <CheckAccess>{page}</CheckAccess>
//   : emptyPage;

// const enterWhenLogin = Component.enterWhenLogin
//   ? (page: any) => <EnterWhenLogin>{page}</EnterWhenLogin>
//   : emptyPage;

  return getLayout(
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="Indie Brands’ unique, open-sell environment features an ever-increasing amount of classic 
          and emerging brands across a broad range of product categories including skincare, makeup, 
          fragrance, body and hair care"
        />
        <link
        rel="stylesheet"
        href="https://unpkg.com/glider-js@1.6.0/glider.min.css"
        />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AxiosInstanceProvider 
          config={{ baseURL: "https://indieapi.com/" }}
        >
          <AppContextProvider>
            <AuthorizationProvider accessTokenFromServer={pageProps.accessToken}>
              <Component {...pageProps} />
                {/* {enterWhenLogin(auth(getLayout(<Component {...pageProps} />)))} */}
                {/* <LeSnackbar /> */}
            </AuthorizationProvider>
          </AppContextProvider>
        </AxiosInstanceProvider>
        </ThemeProvider>
    </>
  )
}