import {DM_Sans} from '@next/font/google';
import '../styles/globals.css';

const dm_sans = DM_Sans({
  weight: ['400', '500', '700'],
});

function MyApp({Component, pageProps}) {
  return (
    <div className={dm_sans.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
