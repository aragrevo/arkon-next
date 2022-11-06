import {Footer, Header, Seo} from './';

export const Layout = ({children}) => {
  return (
    <>
      <Seo />
      <Header />

      <main>{children}</main>
      <Footer />
    </>
  );
};
