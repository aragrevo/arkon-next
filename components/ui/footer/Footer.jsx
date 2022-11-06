import {Logo} from '..';

export const Footer = () => {
  return (
    <footer className='bg-white'>
      <div className='pt-7 lg:pt-10 flex items-center justify-center lg:justify-between flex-col lg:flex-row pb-7 lg:pb-10'>
        <div className='flex items-center flex-col lg:flex-row  '>
          <Logo />
        </div>
        <div className=''>
          <p className='text-sm text-black'>&copy; {new Date().getFullYear()} All right reserved </p>
        </div>
      </div>
    </footer>
  );
};
