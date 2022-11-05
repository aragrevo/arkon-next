import Head from 'next/head';
import {Header} from './';

export const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>Arkon Arquitectura Integral</title>
        <meta name='description' content='Arkon arquitectura integral' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />

      <main className='grid items-center justify-center min-h-screen max-w-5xl mx-auto'>{children}</main>
    </>
  );
};
