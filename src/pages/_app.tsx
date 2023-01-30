import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';
import GlobalStyle from 'styles/global.styles';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name='theme-color' content='#06092B' />
        <link rel='shortcut icon' href='/img/icon-512.png' />
        <link rel='apple-touch-icon' href='/img/icon-512.png' />
      </Head>
      <NextSeo
        title='Sacoa Cashless System'
        description='Evolve your business with a system designed by operators for operators!'
        canonical='https://lanevo.com.br/'
        openGraph={{
          url: 'https://lanevo.com.br/',
          title: 'Sacoa Cashless System',
          description: 'Evolve your business with a system designed by operators for operators!',
          site_name: 'Sacoa Cashless System',
          locale: 'en_US',
        }}
      />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
