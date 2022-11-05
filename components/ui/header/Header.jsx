import {Link as ScrollLink, animateScroll as scroll} from 'react-scroll';

import {MobileDrawer} from './MobileDrawer';
import {menuItems} from './header.data';

export const Header = () => {
  return (
    <header className='text-base py-6 w-full fixed top-0 left-0 bg-transparent transition-all shadow-sm'>
      <nav className='flex items-center max-w-5xl justify-between px-3 mx-auto'>
        <span>Arkon 🏦</span>
        <ul className='hidden md:flex'>
          {menuItems.map(({path, label}) => (
            <ScrollLink
              className='text-base text-[#02073E] font-normal cursor-pointer leading-tight mr-12 last:mr-0 hover:text-primary transition-colors duration-500'
              activeClass='text-primary'
              sx=''
              to={path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={path}>
              {label}
            </ScrollLink>
          ))}
        </ul>
        <MobileDrawer />
      </nav>
    </header>
  );
};
