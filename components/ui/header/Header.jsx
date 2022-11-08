import {useState, useEffect} from 'react';
import {Link as ScrollLink, animateScroll as scroll} from 'react-scroll';

import {MobileDrawer} from './MobileDrawer';
import {menuItems} from './header.data';
import {Logo} from '..';

export const Header = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = e => {
      const newSticky = window.scrollY > 30;
      if (sticky !== newSticky) {
        setSticky(newSticky);
      }
    };

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [sticky]);
  return (
    <header
      className={`text-base py-6 w-full z-10 fixed top-0 left-0 transition-all duration-500 ${
        sticky
          ? 'transition-all duration-500 shadow-sm bg-white py-4'
          : 'transition-all bg-transparent duration-500 shadow-none'
      }`}>
      <nav className='flex items-center max-w-5xl justify-between px-3 mx-auto'>
        <Logo />
        <ul className='hidden md:flex'>
          {menuItems.map(({path, label}) => (
            <ScrollLink
              className='text-base text_secondary font-normal cursor-pointer leading-tight mr-12 last:mr-0 hover:text-primary transition-colors duration-500'
              activeClass='text-primary'
              to={path}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              key={path}>
              {label}
            </ScrollLink>
          ))}
        </ul>
        <ScrollLink
          className='hidden md:flex text-[15px] font-semibold h-12 rounded-[3px] tracking-widest transition-all duration-300 leading-loose cursor-pointer items-center justify-center px-5 border border-primary hover:bg-primary hover:text-white bg-transparent text-primary'
          activeClass='text-primary'
          to='contact'
          spy={true}
          smooth={true}
          offset={10}
          duration={500}>
          Contáctanos
        </ScrollLink>
        <MobileDrawer />
      </nav>
    </header>
  );
};
