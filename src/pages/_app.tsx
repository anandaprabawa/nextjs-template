import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import { Fragment } from 'react';
import 'src/styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  // dynamic layout for pages
  const Layout = Component.layout || Fragment;

  return (
    <>
      <Head>
        <title>NextJS Template</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
