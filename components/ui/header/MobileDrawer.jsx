import {useState} from 'react';
import {Link as ScrollLink, animateScroll as scroll} from 'react-scroll';
import {IoMdClose, IoMdMenu} from 'react-icons/io';
import {menuItems} from './header.data';
import {Logo} from '..';

export const MobileDrawer = () => {
  const [show, setShow] = useState(false);

  return (
    <div className='flex items-center justify-center shrink-0 w-6 md:hidden'>
      <button className='flex items-center justify-center' onClick={() => setShow(true)}>
        <IoMdMenu size='22px' />
      </button>
      <aside
        className={`fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out  ${
          show
            ? 'transition-opacity opacity-100 duration-500 translate-x-0'
            : 'transition-all delay-500 duration-300 opacity-0 -translate-x-full'
        }`}>
        <div
          className={`flex flex-col h-full pt-7 pb-10 px-7 bg-white max-w-[320px] relative transition-all ease-in-out translate-x-0  duration-500 ${
            show ? '-translate-x-0' : '-translate-x-full '
          }`}>
          <button className='absolute right-7 flex items-center justify-center' onClick={() => setShow(false)}>
            <IoMdClose size='24px' color='#02073E' />
          </button>
          <Logo />
          <ul className='flex flex-col mt-7'>
            {menuItems.map(({path, label}) => (
              <ScrollLink
                onClick={() => setShow(false)}
                className='text-base text_secondary font-normal cursor-pointer leading-7 py-1.5 hover:text-primary transition-colors duration-500'
                activeClass='text-primary'
                to={path}
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
                key={path}>
                {label}
              </ScrollLink>
            ))}
          </ul>
          <div className='w-full flex flex-col items-center mt-auto'>
            <ScrollLink
              onClick={() => setShow(false)}
              className='text-[15px] font-semibold h-12 rounded-[3px] tracking-widest leading-loose w-full flex items-center justify-center py-0 hover:bg-secondary bg-primary text-white'
              activeClass='text-primary'
              to='contact'
              spy={true}
              smooth={true}
              offset={10}
              duration={500}>
              Contáctanos
            </ScrollLink>
          </div>
        </div>
      </aside>
    </div>
  );
};
